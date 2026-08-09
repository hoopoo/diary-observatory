import type {
  BackstageRecord,
  PerformancePreparationRecord,
  Source,
} from "@/lib/types";

export const BACKSTAGE_OBS_SLUG = "backstage-is-not-recorded";
export const BACKSTAGE_OBS_ID = "obs-backstage-is-not-recorded";

export const backstageLead = [
  "映像に残るのは、舞台へ出た瞬間である。",
  "新聞に残るのは、公演名と出演者である。",
  "ポスターに残るのは、開演時間と劇場名である。",
  "しかし、その前には別の時間がある。",
  "稽古する。",
  "待つ。",
  "食べる。",
  "着替える。",
  "化粧する。",
  "声を確かめる。",
  "人の遅刻に苛立つ。",
  "観客の入りを気にする。",
  "体調が悪くても出番を待つ。",
  "歴史は本番を記録する。",
  "日記は、本番へ至るまでに使われた時間を残す。",
];

export const backstageMeta = {
  primaryWriter: "Roppa Furukawa / 古川ロッパ",
  primaryDiary: "Furukawa Roppa Shōwa Diary / 古川ロッパ昭和日記",
  themes:
    "Backstage · Performance · Waiting · Food · Body · Maintenance · Audience · Collective Labor · Archive · Media",
  articleStatus: "Published",
  verificationStatus: "Partial",
  lastUpdated: "2026-08-05",
};

export const visibleInvisiblePerformance = {
  visible: [
    { id: "performance", label: "Performance", labelJa: "本番" },
    { id: "role", label: "Role", labelJa: "役" },
    { id: "costume", label: "Costume", labelJa: "衣装" },
    { id: "dialogue", label: "Dialogue", labelJa: "台詞" },
    { id: "music", label: "Music", labelJa: "音楽" },
    { id: "reaction", label: "Audience reaction", labelJa: "笑い、拍手" },
    { id: "review", label: "Review", labelJa: "批評" },
    { id: "image", label: "Recorded image", labelJa: "写真・映像" },
  ],
  invisible: [
    { id: "rehearsal", label: "Rehearsal", labelJa: "稽古" },
    { id: "waiting", label: "Waiting", labelJa: "待機" },
    { id: "travel", label: "Travel", labelJa: "移動" },
    { id: "preparation", label: "Preparation", labelJa: "準備" },
    { id: "meal", label: "Meal", labelJa: "食事" },
    { id: "body", label: "Body check", labelJa: "体調確認" },
    { id: "conflict", label: "Conflict", labelJa: "調整・衝突" },
    { id: "recovery", label: "Recovery", labelJa: "回復" },
    {
      id: "admin",
      label: "Administration",
      labelJa: "日程・契約・連絡",
    },
  ],
};

export const preparationStack = [
  { id: "script", label: "Script", labelJa: "台本" },
  { id: "reading", label: "Reading", labelJa: "読み合わせ" },
  { id: "rehearsal", label: "Rehearsal", labelJa: "稽古" },
  { id: "revision", label: "Revision", labelJa: "変更" },
  { id: "scheduling", label: "Scheduling", labelJa: "日程調整" },
  { id: "travel", label: "Travel", labelJa: "移動" },
  { id: "costume", label: "Costume / makeup", labelJa: "衣装・化粧" },
  { id: "body", label: "Body preparation", labelJa: "声、食事、休息" },
  { id: "waiting", label: "Waiting", labelJa: "待機" },
  { id: "performance", label: "Performance", labelJa: "本番" },
];

export const waitingLaborTypes = [
  { id: "backstage", label: "Backstage waiting", labelJa: "楽屋" },
  { id: "rehearsal", label: "Rehearsal waiting", labelJa: "稽古" },
  { id: "broadcast", label: "Broadcast waiting", labelJa: "収録" },
  { id: "transport", label: "Transport waiting", labelJa: "移動" },
  { id: "medical", label: "Medical waiting", labelJa: "医療" },
  { id: "institutional", label: "Institutional waiting", labelJa: "許可・判断" },
  { id: "audience", label: "Audience waiting", labelJa: "開演・客入り" },
  { id: "unknown", label: "Unknown waiting", labelJa: "内容不明" },
];

export const waitingCosts = [
  { id: "time", label: "Time", labelJa: "拘束時間", visibility: "time-bearing" },
  {
    id: "body",
    label: "Body",
    labelJa: "緊張、疲労、空腹",
    visibility: "body-bearing",
  },
  {
    id: "money",
    label: "Money",
    labelJa: "移動、食事、会場、スタッフ",
    visibility: "cost-bearing",
  },
  {
    id: "opportunity",
    label: "Opportunity",
    labelJa: "別の仕事ができない",
    visibility: "unknown",
  },
  {
    id: "emotion",
    label: "Emotion",
    labelJa: "不安、苛立ち、期待（心理診断はしない）",
    visibility: "unknown",
  },
  {
    id: "collective",
    label: "Collective effect",
    labelJa: "他者の待機を生む",
    visibility: "unknown",
  },
];

export const foodTimings = [
  { id: "before-rehearsal", label: "Before rehearsal", labelJa: "稽古前" },
  { id: "after-rehearsal", label: "After rehearsal", labelJa: "稽古後" },
  { id: "before-performance", label: "Before performance", labelJa: "本番前" },
  {
    id: "between",
    label: "Between performances",
    labelJa: "公演間",
  },
  { id: "after", label: "After performance", labelJa: "終演後" },
  { id: "business", label: "Business meal", labelJa: "仕事上の会食" },
  { id: "recovery", label: "Recovery meal", labelJa: "回復" },
  { id: "hospital", label: "Hospital meal", labelJa: "入院" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const foodPerformanceRelations = [
  { id: "fuel", label: "Fuel", labelJa: "補給" },
  { id: "recovery", label: "Recovery", labelJa: "回復" },
  {
    id: "social",
    label: "Social coordination",
    labelJa: "人間関係の調整",
  },
  { id: "business", label: "Business", labelJa: "仕事交渉" },
  {
    id: "institutional",
    label: "Institutional provision",
    labelJa: "組織による提供",
  },
  { id: "rationed", label: "Rationed", labelJa: "配給" },
  {
    id: "medical",
    label: "Medically managed",
    labelJa: "医療管理下",
  },
  { id: "incidental", label: "Incidental", labelJa: "付随" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const supportNetwork = [
  { id: "performer", label: "Performer", labelJa: "演者" },
  { id: "writer", label: "Writer", labelJa: "脚本" },
  { id: "director", label: "Director", labelJa: "演出" },
  { id: "crew", label: "Stage crew", labelJa: "舞台" },
  { id: "costume", label: "Costume / makeup", labelJa: "衣装・化粧" },
  { id: "musicians", label: "Musicians", labelJa: "音楽" },
  { id: "theater", label: "Theater staff", labelJa: "劇場" },
  { id: "company", label: "Company management", labelJa: "劇団運営" },
  { id: "food", label: "Food provider", labelJa: "食事" },
  { id: "medical", label: "Medical support", labelJa: "医療" },
  { id: "transport", label: "Transport", labelJa: "交通" },
  { id: "audience", label: "Audience", labelJa: "観客" },
];

export const individualCollective = {
  publicCredit: ["主演", "看板", "スター", "批評", "人気"],
  collectiveLabor: [
    "稽古",
    "舞台転換",
    "技術",
    "衣装",
    "食事",
    "管理",
    "代役",
    "交通",
  ],
};

export const performanceOutcomes = [
  { id: "completed", label: "Completed", labelJa: "完遂" },
  { id: "modified", label: "Modified", labelJa: "変更" },
  { id: "reduced", label: "Reduced", labelJa: "縮小" },
  { id: "interrupted", label: "Interrupted", labelJa: "中断" },
  { id: "cancelled", label: "Cancelled", labelJa: "中止" },
  { id: "poorly-received", label: "Poorly received", labelJa: "反応不振" },
  { id: "technically-failed", label: "Technically failed", labelJa: "技術的失敗" },
  { id: "not-broadcast", label: "Not broadcast", labelJa: "未放送" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const bodyCollectiveFlow = [
  { label: "Body condition", labelJa: "身体状態" },
  { label: "Performance capacity", labelJa: "出演可能性" },
  { label: "Role adjustment", labelJa: "役割調整" },
  { label: "Company response", labelJa: "劇団の対応" },
  { label: "Audience impact", labelJa: "観客への影響" },
  { label: "Income / schedule impact", labelJa: "収入・日程" },
];

export const careBackstageActors = [
  { id: "self", label: "Self-care", labelJa: "本人" },
  { id: "family", label: "Family", labelJa: "家族" },
  { id: "company", label: "Company member", labelJa: "劇団員" },
  { id: "manager", label: "Manager", labelJa: "管理担当" },
  { id: "doctor", label: "Doctor", labelJa: "医師" },
  { id: "nurse", label: "Nurse", labelJa: "看護" },
  { id: "theater", label: "Theater staff", labelJa: "劇場" },
  { id: "food", label: "Food provider", labelJa: "食事" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const careGaps = [
  "誰が薬を用意したか",
  "誰が病院へ同行したか",
  "誰が代役を調整したか",
  "誰が観客へ説明したか",
];

export const audienceBackstageLoop = [
  { label: "Ticket / attendance", labelJa: "切符・入り" },
  { label: "Audience reaction", labelJa: "観客の反応" },
  { label: "Backstage interpretation", labelJa: "楽屋での解釈" },
  { label: "Performance adjustment", labelJa: "演技の調整" },
  { label: "Company decision", labelJa: "劇団の判断" },
  { label: "Next performance", labelJa: "次の公演" },
];

export const audienceEvidenceLevels = [
  { id: "explicit", label: "Explicit attendance", labelJa: "実数確認" },
  {
    id: "qualitative",
    label: "Qualitative description",
    labelJa: "大入り、低調等",
  },
  { id: "audible", label: "Audible reaction", labelJa: "笑い、拍手、沈黙" },
  { id: "press", label: "Press reception", labelJa: "新聞・批評" },
  {
    id: "performer",
    label: "Performer interpretation",
    labelJa: "本人の感想",
  },
  {
    id: "institutional",
    label: "Institutional data",
    labelJa: "劇場・興行記録",
  },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const wartimeBackstage = [
  { id: "censorship", label: "Censorship", labelJa: "検閲" },
  { id: "program", label: "Program control", labelJa: "演目統制" },
  { id: "food", label: "Food", labelJa: "食糧" },
  { id: "transport", label: "Transport", labelJa: "交通" },
  { id: "blackout", label: "Blackout", labelJa: "灯火" },
  { id: "air-raid", label: "Air raid", labelJa: "空襲" },
  { id: "venue", label: "Venue", labelJa: "劇場" },
  { id: "audience", label: "Audience", labelJa: "観客" },
  { id: "health", label: "Health", labelJa: "身体" },
  {
    id: "institutional",
    label: "Institutional performance",
    labelJa: "組織向け上演",
  },
];

export const mediaBackstage = [
  {
    id: "stage",
    label: "Stage",
    items: [
      "live audience",
      "repeated performance",
      "backstage waiting",
      "immediate reaction",
    ],
  },
  {
    id: "film",
    label: "Film",
    items: ["shooting schedule", "retakes", "editing", "long waiting"],
  },
  {
    id: "radio",
    label: "Radio",
    items: ["microphone", "voice", "studio timing", "no visible audience"],
  },
  {
    id: "television",
    label: "Television",
    items: [
      "camera",
      "rehearsal",
      "short segments",
      "production cue",
      "remote viewers",
    ],
  },
];

export const indexedBackstageStatus = {
  writer: "Roppa Furukawa",
  diary: "Furukawa Roppa Shōwa Diary",
  rows: [
    {
      label: "Edition-verified entries",
      value: "Not indexed yet",
    },
    {
      label: "Performance records",
      value: "Not indexed or partial",
    },
    {
      label: "Waiting records",
      value: "Conceptual model only unless verified",
    },
    {
      label: "Food records",
      value: "Primary-source indexing required",
    },
    {
      label: "Body records",
      value: "Primary-source indexing required",
    },
    {
      label: "Audience records",
      value: "Primary-source indexing required",
    },
  ],
};

export const firstEntryCriteria = {
  required: [
    "日付が確認できる",
    "日記の篇・版・ページが確認できる",
    "稽古または本番がある",
    "楽屋または待機がある",
    "食事がある",
    "身体状態がある",
    "観客または興行への言及がある",
    "移動が追える",
    "長文引用なしで要約できる",
  ],
  priorities: [
    "一日二公演など、舞台労働の反復が見える日",
    "待機時間が明記された日",
    "体調不良と出演が交差する日",
    "食事と本番の時間関係が分かる日",
    "観客の入りが楽屋へ影響した日",
    "戦時条件が公演準備へ入った日",
  ],
};

export const relatedComingBackstage = [
  { id: "rel-food-stage", title: "食事もまた舞台の一部である", status: "coming" as const },
  { id: "rel-waiting-labor", title: "待つことの労働史", status: "coming" as const },
  { id: "rel-public-body", title: "身体が公的な設備になるとき", status: "coming" as const },
  { id: "rel-audience-change", title: "観客が変わると、芸も変わる", status: "coming" as const },
  { id: "rel-unbroadcast", title: "放送されなかった仕事", status: "coming" as const },
  { id: "rel-understudy", title: "代役が支える歴史", status: "coming" as const },
];

/** Empty aggregation — do not invent Fact rows. */
export const backstageRecords: BackstageRecord[] = [];
export const BACKSTAGE_RECORD_IDS: string[] = [];

export const preparationRecords: PerformancePreparationRecord[] = [];
export const PREPARATION_RECORD_IDS: string[] = [];

export const backstageSources: Source[] = [
  {
    id: "src-backstage-primary-diary",
    category: "primary",
    status: "needed",
    label: "Primary diary editions — 『古川ロッパ昭和日記』各篇",
    needed: true,
    note: "Edition, volume, and page required before extracting backstage Facts.",
  },
  {
    id: "src-backstage-cinii",
    category: "verification",
    status: "verification-pending",
    label: "CiNii Books — 古川ロッパ昭和日記 (NCID BN01451714)",
    url: "https://ci.nii.ac.jp/ncid/BN01451714",
    needed: true,
  },
  {
    id: "src-backstage-shobunsha",
    category: "verification",
    status: "verification-pending",
    label: "晶文社 — 『古川ロッパ昭和日記』新装復刊案内",
    url: "https://www.shobunsha.co.jp/?p=1886",
    needed: true,
  },
  {
    id: "src-backstage-theater",
    category: "verification",
    status: "needed",
    label: "Theater archives / performance programs",
    needed: true,
  },
  {
    id: "src-backstage-broadcast",
    category: "verification",
    status: "needed",
    label: "Broadcast / film production records",
    needed: true,
  },
  {
    id: "src-backstage-reviews",
    category: "verification",
    status: "needed",
    label: "Newspapers and reviews",
    needed: true,
  },
  {
    id: "src-backstage-wartime",
    category: "verification",
    status: "needed",
    label: "Wartime cultural policy — censorship and entertainment control",
    needed: true,
  },
  {
    id: "src-backstage-food-body",
    category: "verification",
    status: "needed",
    label: "Food and body references verified against diary pages",
    needed: true,
  },
];
