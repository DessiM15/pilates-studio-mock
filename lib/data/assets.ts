/**
 * Single source of truth for all imagery + video.
 * These are the ONLY URLs to swap when connecting real brand assets or a CMS.
 * All URLs verified free stock — Unsplash (images) + Mixkit/Pexels (video).
 */

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const assets = {
  // Hero — warm arched reformer studio still, cinematic video over it
  hero: U("photo-1747238415033-b74eec07eb59"),
  heroPoster: U("photo-1747238415033-b74eec07eb59"),
  heroVideo: "https://assets.mixkit.co/videos/43736/43736-1080.mp4",
  heroVideoAlt:
    "https://videos.pexels.com/video-files/6111070/6111070-uhd_2560_1440_25fps.mp4",

  // Editorial / method
  method1: U("photo-1552196527-bffef41ef674"),
  method2: U("photo-1747239069226-55382c570116"),

  // Class cards
  classReformer: U("photo-1747239685045-fcbcf98985db"),
  classSculpt: U("photo-1667400104789-f50a4cb393cf"),
  classFoundations: U("photo-1717500250573-a76fce75ffb3"),
  classRestore: U("photo-1600881333290-31fdbdfbe493"),
  classPrenatal: U("photo-1626975223500-c60e7d31e125"),
  classPower: U("photo-1591258370814-01609b341790"),

  // Instructor portraits
  instructorAmara: U("photo-1611310424006-42cf1e064288", 1000),
  instructorJuno: U("photo-1581182800629-7d90925ad072", 1000),
  instructorMateo: U("photo-1595868228899-abc8fabb3447", 1000),
  instructorElise: U("photo-1524504388940-b1c1722653e1", 1000),

  // Locations / interiors
  locationWeho: U("photo-1717500252297-b09508db7ceb"),
  locationVenice: U("photo-1717500252709-05a73fc4f1da"),
  locationPasadena: U("photo-1717500252573-d31d4bf5ddf1"),

  // Gallery / lifestyle
  gallery1: U("photo-1763403921315-f2ef8697199f"),
  gallery2: U("photo-1611094607507-8c8173e5cf33"),
  gallery3: U("photo-1593810451137-5dc55105dace"),
  gallery4: U("photo-1572705824045-3dd0c9a47945"),
} as const;

export type AssetKey = keyof typeof assets;
