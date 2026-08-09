import type {
  EditionVerificationCard,
  EntryCandidate,
  EntryReadinessItem,
  ResearchNote,
  Source,
  WriterResearchQueueItem,
} from "@/lib/types";
import { roppaVolumeRecords } from "@/data/volumes/furukawa-roppa-showa-diary";

export const ROPPA_FIRST_ENTRY_RESEARCH_SLUG = "furukawa-roppa-first-entry";
export const ROPPA_FIRST_ENTRY_RESEARCH_ID = "research-roppa-first-entry";

export const RESEARCH_URL = `/research/${ROPPA_FIRST_ENTRY_RESEARCH_SLUG}`;

export const roppaFirstEntryLead = [
  "日付が書かれているだけでは、Entryにはできない。",
  "どの篇に収録されているか。",
  "どの版を使ったか。",
  "何ページにあるか。",
  "日付は本文に明記されているか。",
  "舞台や食事や身体の記録を、同じ一日の出来事として確認できるか。",
  "別資料と矛盾していないか。",
  "長文を転載せず、生活構造を要約できるか。",
  "Diary Observatoryでは、一日を選ぶ前に、その一日がどの資料から作られたかを確認する。",
];

export const hardRequirements = [
  { id: "date", label: "Date confirmed", labelJa: "日付が確認できる" },
  { id: "volume", label: "Volume confirmed", labelJa: "収録篇が確認できる" },
  { id: "edition", label: "Edition confirmed", labelJa: "使用版が確認できる" },
  { id: "page", label: "Page confirmed", labelJa: "ページが確認できる" },
  {
    id: "source",
    label: "Source accessible",
    labelJa: "資料を再確認できる",
  },
  {
    id: "rights",
    label: "Copyright handling confirmed",
    labelJa: "引用方針を確認できる",
  },
  {
    id: "boundary",
    label: "Daily boundary clear",
    labelJa: "一日の範囲が明確",
  },
  {
    id: "summary",
    label: "Summary possible",
    labelJa: "長文転載なしで要約できる",
  },
];

export const researchValueCriteria = [
  { id: "performance", label: "Performance", labelJa: "公演または稽古" },
  { id: "waiting", label: "Waiting", labelJa: "待機または楽屋" },
  { id: "food", label: "Food", labelJa: "食事" },
  { id: "body", label: "Body", labelJa: "身体状態" },
  { id: "audience", label: "Audience", labelJa: "観客または興行反応" },
  { id: "movement", label: "Movement", labelJa: "移動" },
  { id: "entity", label: "Entity", labelJa: "劇場、店、病院等" },
  {
    id: "historical",
    label: "Historical context",
    labelJa: "戦争・制度・メディア環境",
  },
  {
    id: "comparison",
    label: "Comparison value",
    labelJa: "他作家の Entry と比較できる",
  },
];

export const hardRequirementKeys = [
  "date",
  "volume",
  "edition",
  "page",
  "source",
  "rights",
  "verification",
] as const;

export const researchValueKeys = [
  "performance",
  "waiting",
  "food",
  "body",
  "audience",
  "movement",
  "money",
  "media",
  "war",
  "collective",
] as const;

/** No invented candidate dates. Empty until edition-verified registration. */
export const roppaEntryCandidates: EntryCandidate[] = [];

export const selectedCandidateId: string | null = null;

export const editionVerificationCards: EditionVerificationCard[] = [
  {
    id: "ed-verify-roppa-set",
    bookTitle: "古川ロッパ昭和日記",
    volumeTitle: "Multiple volumes (戦前篇 / 戦中篇 / 戦後篇 / 晩年篇)",
    publisher: "晶文社",
    publicationDate: undefined,
    editionStatement: "Bibliographic verification needed per volume / printing",
    editor: undefined,
    isbn: undefined,
    libraryRecord: "CiNii Books NCID BN01451714",
    accessMethod: "Catalog + publisher announcement — copy-in-hand still needed",
    pagination: undefined,
    textBasis: undefined,
    rightsStatus: "Edition-specific verification required",
    status: "partial",
    sourceIds: ["src-research-cinii", "src-research-shobunsha"],
    notes:
      "Publisher and volume architecture are catalogued. Exact imprint year, editor, ISBN, and pagination per volume remain source-needed.",
  },
];

export const volumeVerificationRows = roppaVolumeRecords.map((vol) => ({
  id: vol.id,
  title: vol.title,
  titleJa: vol.titleJa,
  volumeType: vol.volumeType,
  coveredPeriod: vol.coverageLabelJa ?? "Bibliographic verification needed",
  publicationInfo: vol.publisher
    ? `${vol.publisher} · imprint details source-needed`
    : "Bibliographic verification needed",
  candidateCount: 0,
  verificationStatus: vol.verificationStatus,
  notes: vol.notes,
}));

export const emptyStateSteps = [
  "使用する『古川ロッパ昭和日記』の版を確定する",
  "篇と収録期間を確認する",
  "本文を通読または索引検索する",
  "候補日のページを記録する",
  "EntryCandidateとして登録する",
  "別資料と照合する",
  "選定会議またはレビューを行う",
];

export const textHandlingPrinciples = [
  "長文転載をしない",
  "Entry本文として日記を再掲載しない",
  "必要最小限の短い引用だけを使う",
  "版とページを必ず示す",
  "要約と引用を分ける",
  "引用符のない文章を原文のように見せない",
  "複数ページの本文を再構成しない",
  "翻訳を原文として扱わない",
  "著作権状態を版単位で確認する",
  "研究用メモを公開本文へ自動転載しない",
];

export const excerptPolicyDefault: string = "paraphrase-only / unknown until edition rights review";

export const performanceVerificationChecklist = [
  "日記本文",
  "公演パンフレット",
  "新聞広告",
  "劇場記録",
  "年譜",
  "興行資料",
  "放送記録",
  "映画記録",
];

export const waitingVerificationTypes = [
  "楽屋",
  "出番待ち",
  "稽古待ち",
  "収録待ち",
  "移動待ち",
  "医療待ち",
  "観客の入り待ち",
  "他者の到着待ち",
];

export const foodVerificationItems = [
  "Meal time",
  "Food item",
  "Place",
  "Provider",
  "Cost",
  "People",
  "Performance timing",
  "Body relation",
];

export const bodyVerificationItems = [
  "体重",
  "食欲",
  "声",
  "疲労",
  "睡眠",
  "痛み",
  "病気",
  "入院",
  "薬",
  "移動能力",
  "出演可能性",
];

export const audienceVerificationItems = [
  "Attendance number",
  "Qualitative attendance",
  "Laughter",
  "Applause",
  "Silence",
  "Reviews",
  "Ticket sales",
  "Performer impression",
];

export const entityVerificationTypes = [
  { id: "theater", label: "Theater", labelJa: "劇場" },
  { id: "restaurant", label: "Restaurant", labelJa: "飲食店" },
  { id: "studio", label: "Studio", labelJa: "放送・撮影" },
  { id: "hospital", label: "Hospital", labelJa: "病院" },
  { id: "home", label: "Home", labelJa: "住居" },
  { id: "station", label: "Station", labelJa: "駅" },
  { id: "shop", label: "Shop", labelJa: "店" },
  { id: "office", label: "Office", labelJa: "事務所" },
];

export const crossSourceChecklist = [
  "日記本文",
  "年譜",
  "公演資料",
  "新聞広告",
  "新聞評",
  "劇場記録",
  "映画データ",
  "放送記録",
  "伝記",
  "戦時制度資料",
];

export const rejectionReasonsCatalog = [
  "date-not-confirmed",
  "edition-not-confirmed",
  "page-not-confirmed",
  "daily-boundary-unclear",
  "source-inaccessible",
  "insufficient-daily-detail",
  "mostly-retrospective",
  "copyright-risk",
  "conflicting-sources",
  "no-verifiable-records",
  "duplicated-by-better-candidate",
  "deferred-for-research",
  "other",
];

export const selectionRequirements = {
  required: [
    "date exact",
    "volume verified",
    "edition verified",
    "pages verified",
    "source accessible",
    "daily boundary strong or exact",
    "rights policy set",
    "at least 3 observation categories confirmed",
    "no unresolved critical conflict",
    "summary possible without extensive quotation",
  ],
  recommended: [
    "performance confirmed",
    "food or body confirmed",
    "waiting or backstage confirmed",
    "audience or historical context confirmed",
  ],
};

export const entryReadinessChecklist: EntryReadinessItem[] = [
  { id: "date", label: "Date", labelJa: "日付", kind: "hard", state: "blocked", note: "No candidate registered" },
  { id: "volume", label: "Volume", labelJa: "篇", kind: "hard", state: "partial", note: "Volume architecture catalogued; day not attached" },
  { id: "edition", label: "Edition", labelJa: "版", kind: "hard", state: "partial", note: "Publisher known; imprint details source-needed" },
  { id: "pages", label: "Pages", labelJa: "ページ", kind: "hard", state: "blocked", note: "No page range registered" },
  { id: "source", label: "Source", labelJa: "資料", kind: "hard", state: "partial", note: "Catalog sources exist; copy-in-hand needed" },
  { id: "rights", label: "Rights", labelJa: "権利", kind: "hard", state: "not-checked" },
  { id: "boundary", label: "Daily boundary", labelJa: "一日の境界", kind: "hard", state: "blocked" },
  { id: "performance", label: "Performance", labelJa: "公演", kind: "value", state: "not-checked" },
  { id: "food", label: "Food", labelJa: "食事", kind: "value", state: "not-checked" },
  { id: "body", label: "Body", labelJa: "身体", kind: "value", state: "not-checked" },
  { id: "audience", label: "Audience", labelJa: "観客", kind: "value", state: "not-checked" },
  { id: "waiting", label: "Waiting", labelJa: "待機", kind: "value", state: "not-checked" },
  { id: "entities", label: "Entities", labelJa: "場所・組織", kind: "value", state: "not-checked" },
  { id: "crosscheck", label: "Cross-check", labelJa: "照合", kind: "value", state: "not-checked" },
  { id: "conflicts", label: "Conflicts", labelJa: "矛盾", kind: "value", state: "not-checked" },
  { id: "summary", label: "Summary", labelJa: "要約", kind: "hard", state: "blocked" },
];

export const relatedResearchTracks: WriterResearchQueueItem[] = [
  {
    id: "rr-bibliography",
    title: "Diary bibliography",
    titleJa: "日記各篇の書誌",
    type: "bibliography",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
    note: "Open /research/furukawa-roppa-bibliography. Imprint year, editor, ISBN, pagination per volume.",
  },
  {
    id: "rr-theater",
    title: "Theater entity research",
    titleJa: "劇場Entity",
    type: "entity",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rr-wartime",
    title: "Wartime entertainment research",
    titleJa: "戦時興行",
    type: "wartime",
    priority: 3,
    status: "source-needed",
    sourceNeeded: true,
  },
  {
    id: "rr-food",
    title: "Food index",
    titleJa: "食事索引",
    type: "food",
    priority: 4,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rr-body",
    title: "Body index",
    titleJa: "身体索引",
    type: "body",
    priority: 5,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rr-audience",
    title: "Audience index",
    titleJa: "観客索引",
    type: "audience",
    priority: 6,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rr-media",
    title: "Media transition",
    titleJa: "舞台・映画・ラジオ・テレビ",
    type: "media",
    priority: 7,
    status: "queued",
    sourceNeeded: true,
  },
];

export const publicResearchNotes: ResearchNote[] = [
  {
    id: "note-public-1",
    note: "候補日は版・篇・ページ確認後にのみ登録する。カタログ上の巻構造だけでは一日を適格にしない。",
    noteType: "task",
    visibility: "public",
    createdAt: "2026-08-05",
    updatedAt: "2026-08-05",
  },
];

export const researchSources: Source[] = [
  {
    id: "src-research-cinii",
    category: "verification",
    status: "verification-pending",
    label: "CiNii Books — 古川ロッパ昭和日記 (NCID BN01451714)",
    url: "https://ci.nii.ac.jp/ncid/BN01451714",
    needed: true,
    note: "Volume titles and bibliographic coverage — confirm against holdings.",
  },
  {
    id: "src-research-shobunsha",
    category: "verification",
    status: "verification-pending",
    label: "晶文社 — 『古川ロッパ昭和日記』新装復刊案内",
    url: "https://www.shobunsha.co.jp/?p=1886",
    needed: true,
  },
  {
    id: "src-research-primary",
    category: "primary",
    status: "needed",
    label: "Primary diary volumes — copy in hand",
    needed: true,
    note: "Edition ID, volume, and page required before any candidate registration.",
  },
  {
    id: "src-research-authority",
    category: "verification",
    status: "needed",
    label: "NDL / authority — 古川緑波（1903–1961）",
    needed: true,
  },
];

export function computeResearchStatus(candidates: EntryCandidate[]) {
  const qualified = candidates.filter((c) => c.qualificationStatus === "qualified").length;
  const selected = candidates.filter((c) => c.selectionStatus === "selected").length;
  const editionVerified = editionVerificationCards.filter((e) => e.status === "verified").length;
  const volumesVerified = volumeVerificationRows.filter(
    (v) => v.verificationStatus === "verified",
  ).length;
  const sourcesAcquired = researchSources.filter(
    (s) => s.status === "verified" || (s.url && s.status === "verification-pending"),
  ).length;

  return {
    sourcesAcquired,
    sourcesLabel: "Registered / catalogued sources (not all copy-in-hand)",
    editionsVerified: editionVerified,
    editionsTotal: editionVerificationCards.length,
    volumesVerified,
    volumesTotal: volumeVerificationRows.length,
    candidatesRegistered: candidates.length,
    qualifiedCandidates: qualified,
    selectedCandidates: selected,
    criticalConflicts: 0,
    selectedCandidateId,
    researchStatus: "Active" as const,
    verificationStatus: "Partial" as const,
    lastUpdated: "2026-08-05",
  };
}

export const entryResearchPackageShape = [
  "candidateId",
  "writerId",
  "diaryWorkId",
  "date",
  "volumeId",
  "editionId",
  "pageRange",
  "sourceCaptureIds",
  "summary",
  "timelineItems",
  "personIds",
  "unresolvedMentionIds",
  "entityIds",
  "performanceRecordIds",
  "waitingRecordIds",
  "foodRecordIds",
  "bodyRecordIds",
  "audienceRecordIds",
  "factClaimIds",
  "observationClaimIds",
  "interpretationClaimIds",
  "unknowns",
  "rightsPolicy",
  "verificationStatus",
];

export const relatedPages = [
  {
    group: "Sources",
    title: "Source Observatory",
    href: "/sources",
  },
  {
    group: "Research",
    title: "Bibliographic base",
    href: "/research/furukawa-roppa-bibliography",
  },
  {
    group: "Writer",
    title: "Roppa Furukawa",
    href: "/writers/furukawa-roppa",
  },
  {
    group: "Diary",
    title: "Furukawa Roppa Shōwa Diary",
    href: "/diaries/furukawa-roppa-showa-diary",
  },
  {
    group: "Observation",
    title: "Backstage Is Not Recorded",
    href: "/observations/backstage-is-not-recorded",
  },
  {
    group: "Observation",
    title: "Maintenance Is Not the Background of Literature",
    href: "/observations/maintenance-is-not-background",
  },
];
