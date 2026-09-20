# AuraTrend API

Base URL: `/api`

All endpoints return JSON. Search queries (`q`) use **token-OR matching**: "white wedding dress" matches any item containing _white_, _wedding_, or _dress_.

---

## Posts

### `GET /api/posts`

List posts, optionally filtered by search query.

**Query params**

| param   | type   | default | notes                                          |
| ------- | ------ | ------- | ---------------------------------------------- |
| `q`     | string | —       | token-OR search across caption, creator, hashtags |
| `limit` | int    | 20      | max items returned                             |
| `offset`| int    | 0       | pagination offset                              |

**Response**

```json
{
  "posts": [
    {
      "id": "p7",
      "image": "https://...",
      "caption": "White wedding dress with hand-embroidered lace…",
      "creator": {
        "name": "Elara Bride",
        "handle": "@elarabride",
        "avatar": "https://..."
      },
      "likes": 42800,
      "trendScore": 95,
      "hashtags": ["#weddingdress", "#bridal", "#lace", "#white"],
      "postedAt": "3h ago"
    }
  ],
  "total": 10,
  "hasMore": false
}
```

### `GET /api/posts/{id}`

Single post with related items (for the DetailPage).

**Response**

```json
{
  "post": {
    "id": "p7",
    "image": "https://...",
    "caption": "White wedding dress with hand-embroidered lace…",
    "creator": { "name": "Elara Bride", "handle": "@elarabride", "avatar": "https://..." },
    "likes": 42800,
    "trendScore": 95,
    "hashtags": ["#weddingdress", "#bridal", "#lace", "#white"],
    "postedAt": "3h ago"
  },
  "related": [
    { /* 4 posts, same shape as post, excluding current */ }
  ]
}
```

**Errors**

- `404` — post not found

---

## Popular Styles

### `GET /api/styles`

List popular styles, optionally filtered by search query.

**Query params**

| param | type   | default | notes                       |
| ----- | ------ | ------- | --------------------------- |
| `q`   | string | —       | token-OR search across name |

**Response**

```json
{
  "styles": [
    {
      "id": "s1",
      "name": "Quiet Luxury",
      "growth": 34,
      "image": "https://..."
    }
  ]
}
```

---

## Creators

### `GET /api/creators`

List creators, optionally filtered by search query.

**Query params**

| param    | type   | default | notes                                  |
| -------- | ------ | ------- | -------------------------------------- |
| `q`      | string | —       | token-OR search across name and handle |
| `limit`  | int    | 20      | max items returned                     |
| `offset` | int    | 0       | pagination offset                      |

**Response**

```json
{
  "creators": [
    {
      "id": "c1",
      "name": "Mara Vance",
      "handle": "@maravance",
      "avatar": "https://...",
      "followers": 248000,
      "posts": 412,
      "trendScore": 91
    }
  ],
  "total": 8
}
```

---

## Hashtags

### `GET /api/hashtags`

List hashtags, optionally filtered by search query.

**Query params**

| param | type   | default | notes                  |
| ----- | ------ | ------- | ---------------------- |
| `q`   | string | —       | token-OR search on tag |

**Response**

```json
{
  "hashtags": [
    {
      "id": "h9",
      "tag": "#weddingdress",
      "posts": 820000,
      "delta": 52
    }
  ]
}
```

---

## Trending

### `GET /api/trending`

Top 6 hashtags by `delta` — used for the trending chips on the HomePage.

**Response**

```json
{
  "hashtags": [
    { "id": "h9", "tag": "#weddingdress", "posts": 820000, "delta": 52 }
  ]
}
```

---

## Field reference

| field        | type    | source              | notes                                              |
| ------------ | ------- | ------------------- | -------------------------------------------------- |
| `id`         | string  | backend             | unique per entity, prefixed by type (`p`, `s`, `c`, `h`) |
| `image`      | string  | Apify / backend     | full URL                                           |
| `avatar`     | string  | Apify / backend     | full URL, 200×200 ideal                            |
| `caption`    | string  | Apify               | post caption                                       |
| `likes`      | int     | Apify               | engagement count                                   |
| `hashtags`   | string[]| Apify               | array of `#tag` strings                            |
| `postedAt`   | string  | backend             | relative string ("3h ago") or ISO 8601 timestamp   |
| `followers`  | int     | Apify               | creator follower count                             |
| `posts`      | int     | Apify               | creator total post count (overloaded with `posts[]` array at top level — context disambiguates) |
| `trendScore` | int 0–100 | backend (computed) | derived from engagement velocity                  |
| `growth`     | int %   | backend (computed)  | style growth rate                                  |
| `delta`      | int %   | backend (computed)  | hashtag growth rate                                |

**Computed fields** — if the Apify actor does not supply `trendScore`, `growth`, or `delta`, the backend must derive them from engagement velocity (e.g. recent vs. baseline likes/mentions).

---

## Pagination

For `posts` and `creators`:

- `limit` (default 20) + `offset` (default 0)
- Response includes `total` and `hasMore` (for posts)
- Styles and hashtags are small enough to return in full (no pagination)

---

## Errors

All errors use a consistent shape:

```json
{
  "error": {
    "type": "not-found",
    "message": "Post not found"
  }
}
```

| status | type         | when                       |
| ------ | ------------ | -------------------------- |
| 400    | `bad-request`| malformed query params     |
| 404    | `not-found`  | entity doesn't exist       |
| 500    | `server`     | internal error             |
