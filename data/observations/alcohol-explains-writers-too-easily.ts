import type { Source, WriterPersona } from "@/lib/types";

export const ALCOHOL_OBS_SLUG = "alcohol-explains-writers-too-easily";
export const ALCOHOL_OBS_ID = "obs-alcohol-explains-writers-too-easily";

export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";
export const KAFU_ID = "writer-kafu";

export const alcoholLead = [
  "酒を飲む作家は、短い言葉で説明しやすい。",
  "破滅型。",
  "無頼派。",
  "アウトロー。",
  "自暴自棄。",
  "酒豪。",
  "その言葉を置くだけで、複雑な人生が一つの物語へまとまって見える。",
  "しかし、酒だけを見ていると、その前後にあったものが消える。",
  "仕事。",
  "原稿。",
  "睡眠。",
  "金銭。",
  "編集者。",
  "恋人。",
  "病気。",
  "孤独。",
  "酒は、一日の一部だった。",
  "けれどメディアと読者は、しばしばそれを人生全体の説明へ変える。",
];

export const alcoholMeta = {
  primaryWriters: "Kenji Nishimura / Charles Bukowski",
  relatedWriter: "Kafū Nagai",
  cities: "Tokyo / Los Angeles",
  themes: "Alcohol / Body / Money / Media / Writer Myth / Labor",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-02",
};

export const alcoholDayStructure = {
  before: ["労働", "原稿", "移動", "疲労", "孤独", "社交"],
  during: ["場所", "相手", "金額", "時間", "量", "感情"],
  after: ["執筆", "睡眠", "体調", "衝突", "記憶", "翌日の予定"],
};

export const writerPersonas: WriterPersona[] = [
  {
    id: "persona-nishimura",
    writerId: NISHIMURA_ID,
    publicLabels: [
      "私小説",
      "酒",
      "怒り",
      "テレビでの危うさ",
      "貧困からの受賞",
    ],
    mediaChannels: ["出版", "文学賞", "新聞", "テレビ", "対談"],
    documentedTraits: ["Alcohol in daily life", "Literary work", "Television presence"],
    amplifiedTraits: ["Marketable exposure / 「露悪」 as brand"],
    omittedContexts: ["Editorial labor", "Publishing schedule", "Illness", "Money"],
    interpretation:
      "Television compressed a writing life into a consumable private-fiction persona.",
    verificationStatus: "partial",
    sourceIds: ["src-alc-media", "src-alc-nishimura"],
  },
  {
    id: "persona-bukowski",
    writerId: BUKOWSKI_ID,
    publicLabels: ["酒場", "女", "競馬", "貧困", "アウトロー"],
    mediaChannels: ["小出版社", "朗読", "写真", "インタビュー", "国際出版"],
    documentedTraits: ["Wage labor", "Bars", "Racing", "Writing"],
    amplifiedTraits: ["Outlaw myth without labor history"],
    omittedContexts: ["Postal work", "Small-press editors", "Aging", "Illness"],
    interpretation:
      "Marketing and reception can leave alcohol while erasing the working day.",
    verificationStatus: "partial",
    sourceIds: ["src-alc-bukowski", "src-alc-publishing"],
  },
];

export const beforeDrinking = {
  nishimura: ["原稿", "編集者", "出版社", "移動", "取材", "書店"],
  bukowski: ["賃金労働", "投稿", "原稿", "移動", "競馬", "生活費"],
};

export const bodyAfterDrinking = [
  "睡眠",
  "疲労",
  "二日酔い",
  "食欲",
  "痛み",
  "老い",
  "病気",
  "移動",
  "翌日の仕事",
];

export const drinkingContexts = [
  {
    id: "ctx-solitary",
    label: "Solitary drinking",
    labelJa: "一人",
    contextType: "solitary" as const,
  },
  {
    id: "ctx-social",
    label: "Social drinking",
    labelJa: "知人、友人、編集者",
    contextType: "social" as const,
  },
  {
    id: "ctx-public",
    label: "Public drinking",
    labelJa: "朗読、テレビ、イベント",
    contextType: "public" as const,
  },
  {
    id: "ctx-ritual",
    label: "Ritual drinking",
    labelJa: "反復する店や時間",
    contextType: "ritual" as const,
  },
  {
    id: "ctx-conflict",
    label: "Conflict",
    labelJa: "衝突",
    contextType: "unknown" as const,
  },
  {
    id: "ctx-withdrawal",
    label: "Withdrawal",
    labelJa: "孤立",
    contextType: "unknown" as const,
  },
];

export const livedRecordedAlcohol = {
  lived: ["実生活上の飲酒"],
  recorded: ["日記", "手紙", "インタビュー"],
  fictionalized: ["私小説", "自伝的フィクション", "詩", "Henry Chinaski (fictional)"],
};

export const indexedEvidence = [
  {
    writer: "Kenji Nishimura",
    sources: [
      "diary-related records",
      "published works",
      "television and media records",
      "biographical references",
    ],
    alcoholEvidence: "Partial / indexing in progress",
  },
  {
    writer: "Charles Bukowski",
    sources: [
      "late diary",
      "letters",
      "poetry",
      "autobiographical fiction",
      "interviews and biographies",
    ],
    alcoholEvidence: "Partial / bibliographic verification needed",
  },
];

export const relatedComingAlcohol = [
  {
    id: "rel-after-success-role",
    title: "成功後も、人は同じ役を求められる",
    status: "coming" as const,
  },
  {
    id: "rel-body-into-morning",
    title: "身体は翌朝まで続く",
    status: "coming" as const,
  },
];

export const alcoholEntityIds = [
  "entity-shinchosha",
  "entity-tokyo-mx",
  "entity-los-angeles",
  "entity-la-post-office",
  "entity-hollywood-park",
];

export const alcoholFictionalEntityIds = ["entity-henry-chinaski"];

export const alcoholSources: Source[] = [
  {
    id: "src-alc-nishimura",
    category: "primary",
    status: "needed",
    label: "西村賢太の公刊日記・日乗類",
    needed: true,
    note: "Alcohol-specific passages: indexing in progress. No long quotation.",
  },
  {
    id: "src-alc-bukowski",
    category: "primary",
    status: "verification-pending",
    label:
      "Charles Bukowski, The Captain Is Out to Lunch and the Sailors Have Taken Over the Ship",
    needed: true,
    note: "Late diary — Edition / rights verification needed.",
  },
  {
    id: "src-alc-letters",
    category: "primary",
    status: "needed",
    label: "Letter collections",
    needed: true,
  },
  {
    id: "src-alc-works",
    category: "primary",
    status: "needed",
    label: "Published literary works — private fiction / poetry / autofiction",
    needed: true,
    note: "Do not invent ISBN. Chinaski remains fictional.",
  },
  {
    id: "src-alc-media",
    category: "verification",
    status: "needed",
    label: "Media records — television, readings, interviews",
    needed: true,
    note: "Do not invent broadcast drinking without sources.",
  },
  {
    id: "src-alc-bio",
    category: "verification",
    status: "needed",
    label: "Biographical sources — publishers, biographies",
    needed: true,
  },
  {
    id: "src-alc-labor",
    category: "verification",
    status: "needed",
    label: "Labor records — postal work / wage labor",
    needed: true,
  },
  {
    id: "src-alc-body",
    category: "editorial",
    status: "needed",
    label: "Medical and body context — general sources only",
    needed: true,
    note: "Never used for personal diagnosis.",
  },
  {
    id: "src-alc-publishing",
    category: "verification",
    status: "verification-pending",
    label: "Publishing and marketing history — prizes, small press, persona",
    needed: true,
  },
];
