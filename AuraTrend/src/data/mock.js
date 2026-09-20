const img = (seed, w = 800, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const posts = [
  {
    id: "p1",
    image: img("auratrend-quiet-luxury"),
    caption: "Quiet luxury in camel and cream — the fall uniform.",
    creator: { name: "Mara Vance", handle: "@maravance" },
    likes: 18420,
    trendScore: 92,
    hashtags: ["#quietluxury", "#camelcoat", "#fallstyle"],
    postedAt: "2h ago",
  },
  {
    id: "p2",
    image: img("auratrend-burgundy-street"),
    caption: "Burgundy is the new black. Street style, Paris week.",
    creator: { name: "Idris Okafor", handle: "@idrisok" },
    likes: 24190,
    trendScore: 97,
    hashtags: ["#burgundy", "#streetstyle", "#parisfw"],
    postedAt: "5h ago",
  },
  {
    id: "p3",
    image: img("auratrend-archival-tailoring"),
    caption: "Archival tailoring, reworked. The blazer is back.",
    creator: { name: "Sora Lindqvist", handle: "@soralin" },
    likes: 12760,
    trendScore: 84,
    hashtags: ["#tailoring", "#archival", "#blazer"],
    postedAt: "8h ago",
  },
  {
    id: "p4",
    image: img("auratrend-mob-wife"),
    caption: "Coats, fur, gold. The mob-wife aesthetic peaks.",
    creator: { name: "Carmen DiLucca", handle: "@carmend" },
    likes: 31250,
    trendScore: 99,
    hashtags: ["#mobwife", "#outerwear", "#goldaccents"],
    postedAt: "11h ago",
  },
  {
    id: "p5",
    image: img("auratrend-minimal-beige"),
    caption: "Beige on beige. Less, but better.",
    creator: { name: "Yuki Hamada", handle: "@yukihama" },
    likes: 9870,
    trendScore: 78,
    hashtags: ["#minimalism", "#beige", "#capsule"],
    postedAt: "1d ago",
  },
  {
    id: "p6",
    image: img("auratrend-leather-trench"),
    caption: "Leather trenches are having a moment.",
    creator: { name: "Noor Abadi", handle: "@noorabadi" },
    likes: 15340,
    trendScore: 88,
    hashtags: ["#leather", "#trenchcoat", "#outerwear"],
    postedAt: "1d ago",
  },
  {
    id: "p7",
    image: img("auratrend-wedding-lace"),
    caption: "White wedding dress with hand-embroidered lace. The bridal moment of the season.",
    creator: { name: "Elara Bride", handle: "@elarabride" },
    likes: 42800,
    trendScore: 95,
    hashtags: ["#weddingdress", "#bridal", "#lace", "#white"],
    postedAt: "3h ago",
  },
  {
    id: "p8",
    image: img("auratrend-wedding-satin"),
    caption: "Minimal satin wedding dress — the quiet-luxury bridal uniform.",
    creator: { name: "Vows & Veils", handle: "@vowsveils" },
    likes: 38120,
    trendScore: 93,
    hashtags: ["#weddingdress", "#satin", "#bridal", "#minimal"],
    postedAt: "6h ago",
  },
  {
    id: "p9",
    image: img("auratrend-wedding-vintage"),
    caption: "Vintage-inspired wedding dress, reworked for the modern bride.",
    creator: { name: "Elara Bride", handle: "@elarabride" },
    likes: 27640,
    trendScore: 89,
    hashtags: ["#weddingdress", "#vintage", "#bridal"],
    postedAt: "9h ago",
  },
  {
    id: "p10",
    image: img("auratrend-wedding-sheer"),
    caption: "Sheer sleeves, silk gown. The white wedding dress evolves.",
    creator: { name: "Vows & Veils", handle: "@vowsveils" },
    likes: 31900,
    trendScore: 91,
    hashtags: ["#bridal", "#silk", "#weddingdress", "#white"],
    postedAt: "12h ago",
  },
];

export const popularStyles = [
  { id: "s1", name: "Quiet Luxury", growth: 34, image: img("style-quiet-luxury", 600, 600) },
  { id: "s2", name: "Mob Wife Aesthetic", growth: 58, image: img("style-mob-wife", 600, 600) },
  { id: "s3", name: "Archival Tailoring", growth: 21, image: img("style-archival", 600, 600) },
  { id: "s4", name: "Coastal Grandma", growth: 12, image: img("style-coastal", 600, 600) },
  { id: "s5", name: "Burgundy Revival", growth: 47, image: img("style-burgundy", 600, 600) },
  { id: "s6", name: "Structured Minimalism", growth: 18, image: img("style-minimal", 600, 600) },
  { id: "s7", name: "Bridal Minimalism", growth: 41, image: img("style-bridal-minimal", 600, 600) },
  { id: "s8", name: "Vintage Wedding", growth: 27, image: img("style-vintage-wedding", 600, 600) },
];

export const creators = [
  { id: "c1", name: "Mara Vance", handle: "@maravance", avatar: img("avatar-mara", 200, 200), followers: 248000, posts: 412, trendScore: 91 },
  { id: "c2", name: "Idris Okafor", handle: "@idrisok", avatar: img("avatar-idris", 200, 200), followers: 412000, posts: 738, trendScore: 96 },
  { id: "c3", name: "Carmen DiLucca", handle: "@carmend", avatar: img("avatar-carmen", 200, 200), followers: 588000, posts: 1024, trendScore: 99 },
  { id: "c4", name: "Sora Lindqvist", handle: "@soralin", avatar: img("avatar-sora", 200, 200), followers: 134000, posts: 286, trendScore: 83 },
  { id: "c5", name: "Yuki Hamada", handle: "@yukihama", avatar: img("avatar-yuki", 200, 200), followers: 96000, posts: 198, trendScore: 76 },
  { id: "c6", name: "Noor Abadi", handle: "@noorabadi", avatar: img("avatar-noor", 200, 200), followers: 221000, posts: 511, trendScore: 88 },
  { id: "c7", name: "Elara Bride", handle: "@elarabride", avatar: img("avatar-elara", 200, 200), followers: 342000, posts: 689, trendScore: 94 },
  { id: "c8", name: "Vows & Veils", handle: "@vowsveils", avatar: img("avatar-vows", 200, 200), followers: 218000, posts: 412, trendScore: 90 },
];

export const hashtags = [
  { id: "h1", tag: "#burgundy", posts: 482000, delta: 47 },
  { id: "h2", tag: "#quietluxury", posts: 1240000, delta: 34 },
  { id: "h3", tag: "#mobwife", posts: 318000, delta: 58 },
  { id: "h4", tag: "#tailoring", posts: 214000, delta: 21 },
  { id: "h5", tag: "#camelcoat", posts: 96000, delta: 15 },
  { id: "h6", tag: "#leather", posts: 742000, delta: 28 },
  { id: "h7", tag: "#archival", posts: 58000, delta: 19 },
  { id: "h8", tag: "#capsule", posts: 411000, delta: 11 },
  { id: "h9", tag: "#weddingdress", posts: 820000, delta: 52 },
  { id: "h10", tag: "#bridal", posts: 1240000, delta: 38 },
  { id: "h11", tag: "#lace", posts: 412000, delta: 14 },
  { id: "h12", tag: "#satin", posts: 318000, delta: 22 },
];

export const formatCount = (n) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
};

export const getPostById = (id) => posts.find((p) => p.id === id);

export const tokenize = (q) =>
  q
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.replace(/^#/, "").trim())
    .filter(Boolean);

export const matchesQuery = (haystack, q) => {
  if (!q) return true;
  const tokens = tokenize(q);
  if (tokens.length === 0) return true;
  const hay = haystack.toLowerCase();
  return tokens.some((t) => hay.includes(t));
};
