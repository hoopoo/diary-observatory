import type { Source } from "@/lib/types";
import { getDiaryFormAuditSummary } from "@/lib/diary-form";
import { getEntryExcavationStatus } from "@/lib/provenance";
import { getDiaryBySlug } from "@/data/diaries";

export const SNS_DIARY_OBS_SLUG = "is-social-media-a-diary";
export const SNS_DIARY_OBS_ID = "obs-is-social-media-a-diary";

export const snsDiaryLead = [
  "朝起きた。",
  "電車に乗った。",
  "昼を食べた。",
  "仕事をした。",
  "誰かに会った。",
  "夜、考えたことを書いた。",
  "これだけを見れば、",
  "SNS投稿は日記によく似ている。",
  "日付がある。",
  "本人が書く。",
  "生活が残る。",
  "写真がある。",
  "場所がある。",
  "しかし、",
  "SNSには日記にはなかった仕組みがある。",
  "「いいね」。",
  "返信。",
  "共有。",
  "フォロワー。",
  "アルゴリズム。",
  "削除。",
  "編集。",
  "おすすめ。",
  "広告。",
  "通知。",
  "SNSでは、",
  "記録した瞬間から",
  "他者の反応が次の記録を変える。",
];

export const snsDiaryMeta = {
  themes:
    "Diary / Social Media / Self Record / Audience / Performance / Platform / Archive / Provenance / Memory / Identity",
  articleStatus: "Published",
  verificationStatus: "Interpretive / evidence-backed",
  lastUpdated: "2026-08-10",
  axisLabel: "Observation Axis — Diary Form",
};

export const diaryWorkingDefinition = {
  en: "A diary is a temporally organized self-record in which lived experience is selected into recurring entries.",
  ja: "日記をひとまず、「経験した生活の一部を選び、時間に沿って反復的に残す自己記録」として扱う。",
  notRequired: [
    "privateである必要はない",
    "handwrittenである必要はない",
    "dailyである必要もない",
    "textだけである必要もない",
  ],
  caution: "単発SNS投稿を自動的にDiaryとは呼ばない。",
};

export const diaryDimensions = [
  { id: "temporality", label: "Temporality", labelJa: "時間性" },
  { id: "first-personness", label: "First-personness", labelJa: "一人称性" },
  { id: "continuity", label: "Continuity", labelJa: "継続性" },
  { id: "routine", label: "Routine", labelJa: "反復性" },
  { id: "publicness", label: "Private / public", labelJa: "公開性" },
  {
    id: "audience-awareness",
    label: "Audience awareness",
    labelJa: "読者意識",
  },
  { id: "editing", label: "Editing", labelJa: "編集" },
  { id: "feedback", label: "Feedback", labelJa: "反応" },
  {
    id: "platform-mediation",
    label: "Platform mediation",
    labelJa: "プラットフォーム介在",
  },
  { id: "commercial", label: "Commercial intent", labelJa: "商業性" },
  { id: "retrospection", label: "Retrospection", labelJa: "回想性" },
  {
    id: "archival-stability",
    label: "Archival stability",
    labelJa: "保存安定性",
  },
  { id: "self-performance", label: "Self-performance", labelJa: "自己演出" },
] as const;

export const diarySpectrum = [
  "Private diary",
  "Published diary",
  "Diary-derived literature",
  "Blog diary",
  "Social diary-like archive",
  "Individual social post",
  "Live self-record",
  "Automated life log",
  "AI-generated diary",
] as const;

export const qualificationStatuses = [
  "diary",
  "diary-derived",
  "diary-like",
  "self-record",
  "episodic-record",
  "platform-record",
  "not-diary",
  "disputed",
  "unknown",
] as const;

export const audienceTypes = [
  "self",
  "future-self",
  "intimate-other",
  "family",
  "editor",
  "publication-reader",
  "general-public",
  "followers",
  "customers",
  "institutional",
  "unknown",
] as const;

export const audienceTransformationSteps = [
  "Writer",
  "Private record",
  "Archive / estate",
  "Editor",
  "Publisher",
  "Reader",
  "Researcher",
] as const;

export const diaryFeedbackSteps = ["Write", "Later reread"] as const;

export const snsFeedbackSteps = [
  "Post",
  "Reaction",
  "Reply",
  "Repost",
  "New post",
  "Further reaction",
] as const;

export const diaryOrder = ["Day 1", "Day 2", "Day 3", "Day 4"] as const;

export const feedOrder = [
  "Day 3",
  "Day 1",
  "Sponsored",
  "Day 4",
  "Recommended old post",
  "Day 2",
] as const;

export const deletionPath = [
  "Post",
  "Edit",
  "Delete",
  "Screenshot survives",
  "Quote survives",
  "Archive may survive",
  "AI summary may survive",
] as const;

export const recordActors = [
  "Author",
  "Platform",
  "Audience",
  "Moderator",
  "Advertiser",
  "Reposter",
  "Journalist",
  "Archivist",
  "Researcher",
  "AI system",
] as const;

export const actorRoles = [
  "Creates",
  "Distributes",
  "Edits",
  "Deletes",
  "Ranks",
  "Captures",
  "Quotes",
  "Archives",
  "Interprets",
  "Summarizes",
] as const;

export const authorshipSpectrum = [
  "Human handwritten",
  "Human typed",
  "AI spellcheck",
  "AI editing",
  "AI rewriting",
  "AI drafting from notes",
  "AI summary from sensors / messages",
  "Automated diary generation",
] as const;

export const authorshipQuestions = [
  "Who experienced?",
  "Who selected?",
  "Who phrased?",
  "Who approved?",
  "Who published?",
] as const;

export const futureArchiveGaps = [
  "Content preservation",
  "Account preservation",
  "Thread preservation",
  "Platform preservation",
  "Algorithm documentation",
  "Advertisement context",
  "Edit history",
  "Deletion history",
  "Link preservation",
  "Image / video preservation",
  "AI derivative preservation",
] as const;

export const socialDiaryProvenancePath = [
  "Person",
  "Social Account",
  "Post",
  "Post Version",
  "Media",
  "Thread Context",
  "Platform Context",
  "Source Capture",
  "Fact",
  "Observation",
  "Interpretation",
] as const;

export const matrixRows = [
  "Date organization",
  "First-person",
  "Continuity",
  "Publication",
  "Audience",
  "Feedback",
  "Editing",
  "Platform mediation",
  "Commerciality",
  "Deletion",
  "Versioning",
  "Archive stability",
  "Source traceability",
  "Self-performance",
  "Unknown",
] as const;

export function getSnsDiaryCaseStudies() {
  const kafu = getEntryExcavationStatus("entry-1918-01-01");
  const nishimura = getEntryExcavationStatus("entry-2011-05-02");
  const dancho = getDiaryBySlug("dancho-tei-nichijo");
  const horoki = getDiaryBySlug("horoki");
  const nishimuraDiary = getDiaryBySlug("isshi-shosetsukaki-no-nichijo");

  return {
    kafu: {
      label: "Kafū Nagai",
      labelJa: "永井荷風",
      form: "Diary",
      work: dancho?.titleOriginal ?? "断腸亭日乗",
      href: "/entries/1918-01-01-kafu-nagai",
      diaryHref: "/diaries/dancho-tei-nichijo",
      provenance: kafu.completeness,
      provenanceLabel: kafu.label,
      dataBasis: "repository" as const,
    },
    horoki: {
      label: "Fumiko Hayashi",
      labelJa: "林芙美子",
      form: "Diary-derived published work",
      work: horoki?.titleOriginal ?? "放浪記",
      href: "/diaries/horoki",
      diaryHref: "/diaries/horoki",
      provenance: "unknown" as const,
      provenanceLabel:
        horoki?.sourceForm === "diary-derived-work"
          ? "diary-derived-work (indexed)"
          : "Indexed as diary-derived",
      dataBasis: "repository" as const,
    },
    nishimura: {
      label: "Kenji Nishimura",
      labelJa: "西村賢太",
      form: "Published diary day (indexed entry)",
      work: nishimuraDiary?.titleOriginal ?? "一私小説書きの日乗",
      href: "/entries/2011-05-02-kenji-nishimura",
      diaryHref: "/diaries/isshi-shosetsukaki-no-nichijo",
      provenance: nishimura.completeness,
      provenanceLabel: nishimura.label,
      dataBasis: "repository" as const,
    },
    social: {
      label: "Social media",
      labelJa: "SNS",
      form: "Conceptual case only",
      work: "No indexed social-diary collection yet",
      href: undefined,
      diaryHref: undefined,
      provenance: "unknown" as const,
      provenanceLabel: "Conceptual case only",
      dataBasis: "conceptual" as const,
    },
  };
}

/** Conceptual matrix — mark social column as conceptual, others as observed/indexed. */
export const diaryFormMatrixConceptual = {
  columns: [
    { id: "kafu", label: "Kafū diary", basis: "repository" },
    { id: "horoki", label: "Hōrōki", basis: "repository" },
    { id: "nishimura", label: "Nishimura record", basis: "repository" },
    { id: "social", label: "Social media", basis: "conceptual" },
  ],
  cells: {
    "Date organization": {
      kafu: "high",
      horoki: "mixed",
      nishimura: "high",
      social: "mixed*",
    },
    "First-person": {
      kafu: "high",
      horoki: "high",
      nishimura: "high",
      social: "mixed*",
    },
    Continuity: {
      kafu: "high",
      horoki: "medium",
      nishimura: "high*",
      social: "unknown*",
    },
    Publication: {
      kafu: "published",
      horoki: "published",
      nishimura: "published",
      social: "platform-public*",
    },
    Audience: {
      kafu: "unknown→public",
      horoki: "public",
      nishimura: "public",
      social: "followers*",
    },
    Feedback: {
      kafu: "low",
      horoki: "editorial",
      nishimura: "medium*",
      social: "high*",
    },
    Editing: {
      kafu: "edition/unknown",
      horoki: "high",
      nishimura: "unknown",
      social: "possible*",
    },
    "Platform mediation": {
      kafu: "print",
      horoki: "print/serial",
      nishimura: "print/media",
      social: "high*",
    },
    Commerciality: {
      kafu: "unknown",
      horoki: "publication",
      nishimura: "unknown",
      social: "unknown*",
    },
    Deletion: {
      kafu: "physical loss",
      horoki: "revision",
      nishimura: "unknown",
      social: "systemic*",
    },
    Versioning: {
      kafu: "edition",
      horoki: "revised editions",
      nishimura: "unknown",
      social: "edit history*",
    },
    "Archive stability": {
      kafu: "institutional*",
      horoki: "published",
      nishimura: "published",
      social: "fragile*",
    },
    "Source traceability": {
      kafu: "partial",
      horoki: "partial*",
      nishimura: "partial*",
      social: "unknown*",
    },
    "Self-performance": {
      kafu: "possible",
      horoki: "literary",
      nishimura: "possible",
      social: "possible*",
    },
    Unknown: {
      kafu: "yes",
      horoki: "yes",
      nishimura: "yes",
      social: "yes*",
    },
  } as Record<string, Record<string, string>>,
  note: "* = conceptual / incomplete / not platform-specific Fact. Values are not quality scores.",
};

export const relatedComingSnsDiary = [
  {
    id: "coming-deleted-post",
    title: "削除された投稿の人生",
    status: "coming" as const,
  },
  {
    id: "coming-no-post-day",
    title: "何も投稿しなかった一日",
    status: "coming" as const,
  },
  {
    id: "coming-algo-edit",
    title: "アルゴリズムが編集する日記",
    status: "coming" as const,
  },
  {
    id: "coming-ai-nightly",
    title: "AIが毎晩、今日を要約する",
    status: "coming" as const,
  },
  {
    id: "coming-location-diary",
    title: "位置情報は日記なのか",
    status: "coming" as const,
  },
  {
    id: "coming-photo-only",
    title: "写真だけの日記",
    status: "coming" as const,
  },
  {
    id: "coming-others-phone",
    title: "他人のスマホに残った自分",
    status: "coming" as const,
  },
  {
    id: "coming-after-death",
    title: "死後も投稿が残るとき",
    status: "coming" as const,
  },
];

export function getSnsDiaryRepositoryFacts() {
  return getDiaryFormAuditSummary();
}

export const snsDiarySources: Source[] = [
  {
    id: "src-snsd-kafu",
    label: "Entry — 1918-01-01 Kafū",
    category: "editorial",
    status: "verification-pending",
    url: "/entries/1918-01-01-kafu-nagai",
    note: "Fact basis: repository Provenance excavation status.",
  },
  {
    id: "src-snsd-horoki",
    label: "Diary Work — Hōrōki",
    category: "editorial",
    status: "verification-pending",
    url: "/diaries/horoki",
    note: "Indexed as diary-derived published work.",
  },
  {
    id: "src-snsd-nishimura",
    label: "Entry — 2011-05-02 Nishimura",
    category: "editorial",
    status: "verification-pending",
    url: "/entries/2011-05-02-kenji-nishimura",
    note: "Fact basis: repository Provenance excavation status.",
  },
  {
    id: "src-snsd-screenshot",
    label: "Observation — screenshot-is-not-provenance",
    category: "editorial",
    status: "verification-pending",
    url: "/observations/screenshot-is-not-provenance",
  },
  {
    id: "src-snsd-link-rot",
    label: "Observation — link-rot-is-archive-history",
    category: "editorial",
    status: "verification-pending",
    url: "/observations/link-rot-is-archive-history",
  },
];
