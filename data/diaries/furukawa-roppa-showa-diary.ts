import type {
  AudienceRecord,
  BodyRecord,
  DiaryVolumeScaffold,
  DiaryWork,
  EntertainmentMoneyRecord,
  PerformanceRecord,
  PopularityRecord,
  Source,
  TimelineRecord,
  WaitingRecord,
  WartimeContextRecord,
  WriterResearchQueueItem,
} from "@/lib/types";
import {
  ROPPA_VOLUME_IDS,
  roppaVolumeRecords,
} from "@/data/volumes/furukawa-roppa-showa-diary";

export const ROPPA_DIARY_SLUG = "furukawa-roppa-showa-diary";
export const ROPPA_DIARY_ID = "diary-furukawa-roppa-showa";

export { roppaVolumeRecords, ROPPA_VOLUME_IDS };

/** Kept for Writer-page compatibility with period keys. */
export const roppaDiaryVolumes: DiaryVolumeScaffold[] =
  roppaVolumeRecords.map((v) => ({
    id: v.id,
    key:
      v.volumeType === "late-years"
        ? "late"
        : (v.volumeType as "prewar" | "wartime" | "postwar"),
    label: v.title,
    labelJa: v.titleJa,
    coverageLabel: v.coverageLabel ?? "Bibliographic verification needed",
    coverageLabelJa:
      v.coverageLabelJa ?? "書誌確認が必要です",
    publisher: v.publisher ?? "Bibliographic verification needed",
    bibliographicStatus: "Catalogued edition volume",
    verificationStatus: v.verificationStatus === "indexing" ? "partial" : v.verificationStatus,
    sourceIds: v.sourceIds,
    notes: v.notes,
  }));

export const roppaDiaryLead = [
  "古川ロッパの日記には、舞台に立った日だけが残っているのではない。",
  "稽古した日。",
  "劇場へ向かった日。",
  "観客が入らなかった日。",
  "食べた日。",
  "病気になった日。",
  "休演した日。",
  "空襲を受けた日。",
  "戦後に仕事を再開した日。",
  "人気の変化を感じた日。",
  "日記を長期で読むと、一人の喜劇人の生活だけではなく、昭和の娯楽産業そのものが身体を通して変化していく。",
];

export const roppaDiaryKinds = [
  { label: "Long-term diary", labelJa: "長期日記" },
  { label: "Performance diary", labelJa: "舞台労働の記録" },
  { label: "Food diary", labelJa: "食事の記録" },
  { label: "Body diary", labelJa: "身体の記録" },
  { label: "Urban diary", labelJa: "東京と移動の記録" },
  { label: "Wartime diary", labelJa: "戦争下の生活記録" },
  { label: "Media-transition diary", labelJa: "舞台から放送への変化" },
  { label: "Popularity diary", labelJa: "観客と人気の変化" },
];

export const historicalPressures = [
  {
    id: "prewar",
    label: "Prewar",
    labelJa: "戦前",
    pressures: [
      "theater expansion",
      "company management",
      "urban entertainment",
      "film and radio",
      "audience growth",
      "food and social life",
    ],
  },
  {
    id: "wartime",
    label: "Wartime",
    labelJa: "戦中",
    pressures: [
      "censorship",
      "entertainment control",
      "air raids",
      "food shortages",
      "rationing",
      "transport disruption",
      "institutional performance",
      "bodily fatigue",
    ],
  },
  {
    id: "postwar",
    label: "Postwar",
    labelJa: "戦後",
    pressures: [
      "urban destruction",
      "food scarcity",
      "theater reopening",
      "occupation-period media",
      "income instability",
      "audience reorganization",
      "new performers",
    ],
  },
  {
    id: "late",
    label: "Late years",
    labelJa: "晩年",
    pressures: [
      "illness",
      "hospitalization",
      "aging",
      "reduced mobility",
      "changing popularity",
      "television",
      "memory and past status",
    ],
  },
];

export const performanceDayPeriodDiffs = [
  {
    id: "prewar",
    label: "Prewar",
    labelJa: "戦前",
    diffs: ["fuller theater schedule", "urban mobility", "social dining"],
  },
  {
    id: "wartime",
    label: "Wartime",
    labelJa: "戦中",
    diffs: [
      "rationing",
      "air-raid risk",
      "transport disruption",
      "controlled repertoire",
    ],
  },
  {
    id: "postwar",
    label: "Postwar",
    labelJa: "戦後",
    diffs: ["scarcity", "damaged urban infrastructure", "changing audience"],
  },
  {
    id: "late",
    label: "Late years",
    labelJa: "晩年",
    diffs: ["illness", "recovery time", "reduced performance capacity"],
  },
];

export const foodAcrossPeriods = [
  {
    id: "prewar",
    label: "Prewar",
    labelJa: "戦前",
    categories: [
      "restaurant meals",
      "theater meals",
      "social dining",
      "appetite",
      "urban food culture",
    ],
  },
  {
    id: "wartime",
    label: "Wartime",
    labelJa: "戦中",
    categories: [
      "rationing",
      "shortages",
      "substitute foods",
      "provided meals",
      "disrupted eating",
    ],
  },
  {
    id: "postwar",
    label: "Postwar",
    labelJa: "戦後",
    categories: [
      "scarcity",
      "black-market context",
      "restored restaurants",
      "institutional provision",
      "bodily recovery",
    ],
  },
  {
    id: "late",
    label: "Late years",
    labelJa: "晩年",
    categories: [
      "appetite change",
      "hospital meals",
      "medically constrained food",
      "reduced mobility",
    ],
  },
];

export const foodProvisionTypes = [
  { id: "self", label: "Self", labelJa: "本人" },
  { id: "family", label: "Family", labelJa: "家族" },
  { id: "restaurant", label: "Restaurant", labelJa: "飲食店" },
  { id: "theater", label: "Theater", labelJa: "劇場" },
  { id: "company", label: "Company", labelJa: "劇団・会社" },
  { id: "friend", label: "Friend", labelJa: "知人" },
  { id: "institution", label: "Institution", labelJa: "病院・組織" },
  { id: "ration", label: "Ration system", labelJa: "配給" },
  { id: "gift", label: "Gift", labelJa: "贈与" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const bodyCategories = [
  { id: "weight", label: "Weight", labelJa: "体重" },
  { id: "appetite", label: "Appetite", labelJa: "食欲" },
  { id: "voice", label: "Voice", labelJa: "声" },
  { id: "pain", label: "Pain", labelJa: "痛み" },
  { id: "fatigue", label: "Fatigue", labelJa: "疲労" },
  { id: "sleep", label: "Sleep", labelJa: "睡眠" },
  { id: "illness", label: "Illness", labelJa: "病気" },
  { id: "hospitalization", label: "Hospitalization", labelJa: "入院" },
  { id: "mobility", label: "Mobility", labelJa: "移動能力" },
  {
    id: "performance-capacity",
    label: "Performance capacity",
    labelJa: "出演可能性",
  },
  { id: "recovery", label: "Recovery", labelJa: "回復" },
];

export const bodyPerformanceRelations = [
  { id: "stable", label: "Body stable", labelJa: "出演" },
  { id: "strained", label: "Body strained", labelJa: "出演継続" },
  { id: "impaired", label: "Body impaired", labelJa: "演目・役割調整" },
  { id: "unavailable", label: "Body unavailable", labelJa: "休演" },
  { id: "hospitalized", label: "Hospitalized", labelJa: "公演不能" },
  { id: "recovery", label: "Recovery", labelJa: "復帰" },
  { id: "unknown", label: "Unknown", labelJa: "関係不明" },
];

export const audienceForms = [
  {
    id: "stage",
    label: "Stage audience",
    labelJa: "劇場の観客",
    axes: [
      "physical presence",
      "feedback speed",
      "performer visibility",
      "repeatability",
      "geographic reach",
      "archive form",
      "measurement method",
    ],
    status: "Not indexed",
  },
  {
    id: "film",
    label: "Film audience",
    labelJa: "映画館の観客",
    axes: [
      "physical presence",
      "feedback speed",
      "performer visibility",
      "repeatability",
      "geographic reach",
      "archive form",
      "measurement method",
    ],
    status: "Not indexed",
  },
  {
    id: "radio",
    label: "Radio listener",
    labelJa: "ラジオ聴取者",
    axes: [
      "physical presence",
      "feedback speed",
      "performer visibility",
      "repeatability",
      "geographic reach",
      "archive form",
      "measurement method",
    ],
    status: "Not indexed",
  },
  {
    id: "tv",
    label: "Television viewer",
    labelJa: "テレビ視聴者",
    axes: [
      "physical presence",
      "feedback speed",
      "performer visibility",
      "repeatability",
      "geographic reach",
      "archive form",
      "measurement method",
    ],
    status: "Not indexed",
  },
  {
    id: "press",
    label: "Press reader",
    labelJa: "新聞・雑誌の読者",
    axes: [
      "physical presence",
      "feedback speed",
      "performer visibility",
      "repeatability",
      "geographic reach",
      "archive form",
      "measurement method",
    ],
    status: "Not indexed",
  },
];

export const theaterEntityTypes = [
  { id: "theater", label: "Theater", labelJa: "劇場" },
  { id: "rehearsal", label: "Rehearsal room", labelJa: "稽古場" },
  { id: "film", label: "Film studio", labelJa: "撮影所" },
  { id: "radio", label: "Radio studio", labelJa: "放送局" },
  { id: "tv", label: "Television studio", labelJa: "テレビ局" },
  { id: "restaurant", label: "Restaurant", labelJa: "飲食店" },
  { id: "hospital", label: "Hospital", labelJa: "病院" },
  { id: "home", label: "Home", labelJa: "住居" },
  { id: "station", label: "Station", labelJa: "駅" },
];

export const entityCurrentStatuses = [
  { id: "existing", label: "Existing", labelJa: "現存" },
  { id: "operating", label: "Operating", labelJa: "営業・運用中" },
  { id: "closed", label: "Closed", labelJa: "閉鎖" },
  { id: "demolished", label: "Demolished", labelJa: "解体" },
  { id: "transformed", label: "Transformed", labelJa: "用途変更" },
  { id: "rebuilt", label: "Rebuilt", labelJa: "建て替え" },
  { id: "ended", label: "Ended institution", labelJa: "組織終了" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const wartimeCategories = [
  { id: "censorship", label: "Censorship", labelJa: "検閲" },
  { id: "program", label: "Program restriction", labelJa: "演目制限" },
  { id: "policy", label: "Entertainment policy", labelJa: "娯楽政策" },
  { id: "rationing", label: "Rationing", labelJa: "配給" },
  { id: "air-raids", label: "Air raids", labelJa: "空襲" },
  { id: "blackout", label: "Blackout", labelJa: "灯火管制" },
  { id: "transport", label: "Transport", labelJa: "交通障害" },
  { id: "damage", label: "Theater damage", labelJa: "劇場被害" },
  {
    id: "institutional",
    label: "Institutional performance",
    labelJa: "組織向け公演",
  },
  { id: "audience", label: "Audience change", labelJa: "観客変化" },
  { id: "food", label: "Food shortage", labelJa: "食糧不足" },
  { id: "health", label: "Health impact", labelJa: "身体への影響" },
];

export const postwarTransition = {
  returned: ["stage", "audience", "production", "media work"],
  changed: [
    "city",
    "institutions",
    "food",
    "income",
    "audience preference",
    "body",
    "competition",
  ],
  uncertain: ["popularity", "company stability", "health", "long-term role"],
};

export const popularityIndicators = [
  { id: "billing", label: "Billing", labelJa: "看板・序列" },
  { id: "audience", label: "Audience", labelJa: "観客" },
  { id: "press", label: "Press", labelJa: "新聞・雑誌" },
  { id: "invitations", label: "Invitations", labelJa: "出演依頼" },
  { id: "media", label: "Media presence", labelJa: "映画・放送" },
  { id: "income", label: "Income", labelJa: "収入" },
  { id: "company", label: "Company role", labelJa: "劇団内の役割" },
  {
    id: "self",
    label: "Diary self-observation",
    labelJa: "本人の認識",
  },
];

export const publicPersonaPrivateBody = {
  public: [
    "comedian",
    "stage star",
    "media personality",
    "company leader",
    "familiar public figure",
  ],
  private: [
    "appetite",
    "weight",
    "pain",
    "fatigue",
    "fear",
    "illness",
    "disappointment",
    "aging",
  ],
};

export const entertainmentMoneyCategories = [
  { id: "performance-fee", label: "Performance fee", labelJa: "出演料" },
  { id: "company-revenue", label: "Company revenue", labelJa: "劇団収入" },
  { id: "ticket", label: "Ticket revenue", labelJa: "入場料" },
  { id: "venue", label: "Venue cost", labelJa: "劇場費" },
  { id: "costume", label: "Costume", labelJa: "衣装" },
  { id: "transport", label: "Transport", labelJa: "移動" },
  { id: "food", label: "Food", labelJa: "食事" },
  { id: "publicity", label: "Publicity", labelJa: "宣伝" },
  { id: "medical", label: "Medical cost", labelJa: "医療" },
  {
    id: "company-maintenance",
    label: "Company maintenance",
    labelJa: "劇団維持",
  },
  { id: "broadcast", label: "Broadcast income", labelJa: "放送" },
  { id: "film", label: "Film income", labelJa: "映画" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const companyMaintenanceTargets = [
  { id: "people", label: "People", labelJa: "劇団員" },
  { id: "rehearsal", label: "Rehearsal", labelJa: "稽古" },
  { id: "venue", label: "Venue", labelJa: "会場" },
  { id: "costume", label: "Costume", labelJa: "衣装" },
  { id: "scripts", label: "Scripts", labelJa: "台本" },
  { id: "travel", label: "Travel", labelJa: "移動" },
  { id: "food", label: "Food", labelJa: "食事" },
  { id: "payroll", label: "Payroll", labelJa: "給与" },
  { id: "publicity", label: "Publicity", labelJa: "宣伝" },
  { id: "scheduling", label: "Scheduling", labelJa: "日程" },
  { id: "conflict", label: "Conflict", labelJa: "人間関係" },
  { id: "health", label: "Health", labelJa: "病気・代役" },
];

export const substitutionOutcomes = [
  { id: "understudy", label: "Understudy", labelJa: "代役" },
  { id: "program-change", label: "Program change", labelJa: "演目変更" },
  { id: "cancellation", label: "Cancellation", labelJa: "中止" },
  { id: "reduced-role", label: "Reduced role", labelJa: "役割縮小" },
  {
    id: "recorded",
    label: "Recorded performance",
    labelJa: "録音・映像への代替",
  },
  {
    id: "institutional",
    label: "Institutional support",
    labelJa: "組織対応",
  },
  { id: "income", label: "Income impact", labelJa: "収入への影響" },
  { id: "audience", label: "Audience impact", labelJa: "観客" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const agingAcrossMedia = [
  {
    id: "stage",
    label: "Stage",
    requires: ["physical presence", "voice", "movement", "repetition"],
  },
  {
    id: "film",
    label: "Film",
    requires: ["camera performance", "retakes", "production schedule"],
  },
  {
    id: "radio",
    label: "Radio",
    requires: ["voice", "studio timing", "broadcast format"],
  },
  {
    id: "television",
    label: "Television",
    requires: ["visual framing", "shorter format", "new production culture"],
  },
];

export const densityRows = [
  "Performance",
  "Food",
  "Body",
  "Audience",
  "Money",
  "Media",
  "War",
  "Travel",
  "Hospital",
  "Company",
  "Popularity",
  "Personal relationships",
] as const;

export const densityPeriods = [
  "Prewar",
  "Wartime",
  "Postwar",
  "Late years",
] as const;

/** No invented High/Medium/Low until indexed counts exist. */
export function densityCell(): "Not indexed" {
  return "Not indexed";
}

export const volumeComparisonCategories = [
  { id: "food", label: "Food", labelJa: "食事" },
  { id: "body", label: "Body", labelJa: "身体" },
  { id: "performance", label: "Performance", labelJa: "舞台" },
  { id: "audience", label: "Audience", labelJa: "観客" },
  { id: "media", label: "Media", labelJa: "媒体" },
  { id: "money", label: "Money", labelJa: "金銭" },
  { id: "war", label: "War context", labelJa: "戦争" },
  { id: "travel", label: "Travel", labelJa: "移動" },
  { id: "hospital", label: "Hospital", labelJa: "病院" },
  { id: "popularity", label: "Popularity", labelJa: "人気" },
];

export const firstEntryTarget = {
  status: "Not yet chosen",
  statusJa: "まだ選定していません",
  researchStatus: "Primary-source research required",
  researchWorkspaceUrl: "/research/furukawa-roppa-first-entry",
  bibliographyWorkspaceUrl: "/research/furukawa-roppa-bibliography",
  futureUrl: "/entries/YYYY-MM-DD-furukawa-roppa",
  criteria: [
    "日付が明確",
    "使用篇・版が明確",
    "劇場または放送がある",
    "稽古または本番がある",
    "食事がある",
    "身体状態がある",
    "観客反応または興行状況がある",
    "移動がある",
    "長文転載なしで要約可能",
  ],
  candidateTypes: [
    { label: "A two-performance day", labelJa: "一日二公演" },
    { label: "A wartime performance day", labelJa: "戦時下の公演日" },
    {
      label: "A day of illness and performance",
      labelJa: "病気と出演が交差する日",
    },
    { label: "A stage-and-radio day", labelJa: "舞台と放送を移動する日" },
    {
      label: "A hospitalization or cancellation day",
      labelJa: "入院・休演日",
    },
  ],
};

export const timelineFilterOptions = [
  "Period",
  "Volume",
  "Record type",
  "Venue",
  "Media",
  "Body impact",
  "Verification",
];

export const waitingTypes = [
  { id: "backstage", label: "Backstage", labelJa: "楽屋" },
  { id: "rehearsal", label: "Rehearsal", labelJa: "稽古" },
  { id: "transport", label: "Transport", labelJa: "移動" },
  { id: "broadcast", label: "Broadcast", labelJa: "収録・放送" },
  { id: "medical", label: "Medical", labelJa: "医療" },
  { id: "audience", label: "Audience", labelJa: "入り待ち" },
  { id: "institutional", label: "Institutional", labelJa: "制度的待機" },
  { id: "other", label: "Other", labelJa: "その他" },
  { id: "unknown", label: "Unknown", labelJa: "不明" },
];

export const airRaidObservations = [
  "warning",
  "cancellation",
  "interrupted rehearsal",
  "damaged venue",
  "changed route",
  "lost audience",
  "evacuation",
  "food disruption",
  "diary continuity",
];

/* Indexed records — empty until primary volumes are confirmed. */
export const roppaDiaryPerformanceRecords: PerformanceRecord[] = [];
export const roppaDiaryAudienceRecords: AudienceRecord[] = [];
export const roppaDiaryBodyRecords: BodyRecord[] = [];
export const roppaDiaryFoodRecordIds: string[] = [];
export const roppaDiaryWaitingRecords: WaitingRecord[] = [];
export const roppaDiaryWartimeContextRecords: WartimeContextRecord[] = [];
export const roppaDiaryMoneyRecords: EntertainmentMoneyRecord[] = [];
export const roppaDiaryPopularityRecords: PopularityRecord[] = [];
export const roppaDiaryTimelineRecords: TimelineRecord[] = [];

export const roppaDiaryResearchQueue: WriterResearchQueueItem[] = [
  {
    id: "rq-diary-roppa-1",
    title: "Formal bibliography for each volume",
    titleJa: "各篇の正式書誌（収録期間・出版社・刊行年・編集者・底本・版）",
    type: "bibliography",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
    note: "Do not invent covered ISO dates or editors.",
  },
  {
    id: "rq-diary-roppa-2",
    title: "First dated Entry",
    titleJa: "最初のEntry（日付・公演・劇場・食事・身体・観客・移動）",
    type: "entry",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-diary-roppa-3",
    title: "Prewar theaters",
    titleJa: "戦前篇の主要劇場（名称・所在・現在状態）",
    type: "entity",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-diary-roppa-4",
    title: "Wartime institutional context",
    titleJa: "戦中篇の制度文脈（興行統制・検閲・配給・空襲・交通）",
    type: "wartime",
    priority: 4,
    status: "source-needed",
    sourceNeeded: true,
    note: "Separate institutional context from personal diary Claims.",
  },
  {
    id: "rq-diary-roppa-5",
    title: "Postwar reconstruction axes",
    titleJa: "戦後篇の再建（劇場・食糧・収入・観客・新媒体）",
    type: "postwar",
    priority: 5,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-diary-roppa-6",
    title: "Late-years body archive",
    titleJa: "晩年篇の身体（病気・入院・体重・出演影響・テレビ）",
    type: "body",
    priority: 6,
    status: "queued",
    sourceNeeded: true,
    note: "No medical causality invention.",
  },
  {
    id: "rq-diary-roppa-7",
    title: "Company maintenance",
    titleJa: "劇団運営（人員・契約・経費・公演・代役）",
    type: "company",
    priority: 7,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-diary-roppa-8",
    title: "Food index",
    titleJa: "食事索引（店・品目・提供者・金額・公演前後）",
    type: "food",
    priority: 8,
    status: "queued",
    sourceNeeded: true,
  },
];

export const diaryRelatedComparisons = {
  coming: [
    {
      title: "Roppa and Nishimura",
      subtitle: "劇場からテレビへ",
      href: "/compare/roppa-nishimura",
    },
    {
      title: "Hayashi and Roppa",
      subtitle: "食事、仕事、身体",
      href: "/compare/hayashi-roppa",
    },
    {
      title: "Five Daily Systems",
      subtitle: "五つの一日を決める仕組み",
      href: "/compare/five-daily-systems",
    },
    {
      title: "Theater and Publisher",
      subtitle: "舞台産業と出版産業",
      href: "/compare/theater-and-publisher",
    },
    {
      title: "Long Diaries Across War",
      subtitle: "戦争をまたぐ長期日記",
      href: "/compare/long-diaries-across-war",
    },
  ],
};

export const diaryRelatedObservations = {
  published: [
    {
      title: "楽屋は、歴史に映らない",
      href: "/observations/backstage-is-not-recorded",
    },
    {
      title: "生活維持は、文学の背景ではない",
      href: "/observations/maintenance-is-not-background",
    },
    {
      title: "編集者は消えたのか",
      href: "/observations/where-did-the-editor-go",
    },
    {
      title: "一日の値段",
      href: "/observations/the-price-of-an-ordinary-day",
    },
  ],
  coming: [
    "食事もまた舞台の一部である",
    "笑いは、誰に許可されるのか",
    "観客が変わると、芸も変わる",
    "身体が公的な設備になるとき",
  ],
};

export const roppaDiarySources: Source[] = [
  {
    id: "src-roppa-cinii-ncid",
    category: "verification",
    status: "verification-pending",
    label: "CiNii Books — 古川ロッパ昭和日記 (NCID BN01451714)",
    url: "https://ci.nii.ac.jp/ncid/BN01451714",
    needed: true,
    note: "Volume titles and coverage labels — confirm against physical or NDL holdings.",
  },
  {
    id: "src-roppa-shobunsha",
    category: "verification",
    status: "verification-pending",
    label: "晶文社 — 『古川ロッパ昭和日記』新装復刊案内",
    url: "https://www.shobunsha.co.jp/?p=1886",
    needed: true,
    note: "Publisher announcement for new edition; not a substitute for edition ID on excerpts.",
  },
  {
    id: "src-roppa-primary-volumes",
    category: "primary",
    status: "needed",
    label: "Primary diary editions — each volume in hand",
    needed: true,
    note: "Edition ID and page required before any quotation. No long excerpts.",
  },
  {
    id: "src-roppa-ndl-authority",
    category: "verification",
    status: "needed",
    label: "NDL / authority — 古川緑波（1903–1961）",
    needed: true,
    note: "Prefer 古川緑波 as canonical personal name; display 古川ロッパ separately.",
  },
  {
    id: "src-roppa-theater-archives",
    category: "verification",
    status: "needed",
    label: "Theater archives / performance programs",
    needed: true,
  },
  {
    id: "src-roppa-wartime-policy",
    category: "verification",
    status: "needed",
    label: "Wartime cultural policy — censorship and entertainment control",
    needed: true,
  },
  {
    id: "src-roppa-broadcast",
    category: "verification",
    status: "needed",
    label: "Film / radio / television credit bibliographies",
    needed: true,
  },
  {
    id: "src-roppa-food-body",
    category: "verification",
    status: "needed",
    label: "Food and body records extracted only after volume confirmation",
    needed: true,
  },
];

export const furukawaRoppaShowaDiary: DiaryWork = {
  id: ROPPA_DIARY_ID,
  slug: ROPPA_DIARY_SLUG,
  writerId: "writer-roppa",
  title: "Furukawa Roppa Shōwa Diary",
  titleOriginal: "古川ロッパ昭和日記",
  romanizedTitle: "Furukawa Roppa Shōwa Nikki",
  startYear: 1934,
  endYear: 1960,
  durationLabel:
    "Bibliographic coverage spans multiple Shōwa volumes — verify start/end against edition",
  genre: "diary",
  sourceForm: "diary",
  language: "ja",
  publicationStatus: "published",
  rightsStatus: "Edition-specific verification required",
  description:
    "A performer’s body and profession crossing prewar, war, postwar, and late Shōwa life.",
  descriptionJa:
    "一人の演者の身体と職業が、戦前、戦争、戦後、晩年を通過する長期日記。",
  summary:
    "Treat as long-term diary with edition-sensitive volumes. Do not invent missing wartime notebooks or undated Entry pages.",
  longSummary: roppaDiaryLead,
  tagline:
    "A performing body crossing prewar, war, postwar, and old age.",
  taglineJa: "一つの演じる身体が、戦前、戦争、戦後、老いを通過する。",
  themes: [
    "Performance",
    "Rehearsal",
    "Waiting",
    "Theater",
    "Food",
    "Body",
    "Audience",
    "War",
    "Media",
    "Popularity",
    "Aging",
    "Entertainment Labor",
  ],
  primaryCity: "Tokyo",
  entryIds: [],
  volumeIds: [...ROPPA_VOLUME_IDS],
  performanceRecordIds: [],
  waitingRecordIds: [],
  audienceRecordIds: [],
  bodyRecordIds: [],
  foodRecordIds: [],
  moneyRecordIds: [],
  wartimeContextRecordIds: [],
  entityIds: [],
  researchQueueIds: roppaDiaryResearchQueue.map((q) => q.id),
  sourceIds: roppaDiarySources.map((s) => s.id),
  entryCount: null,
  entryCountVerification: "needs-source",
  indexingStatus: "partial",
  verificationStatus: "partial",
  lastUpdated: "2026-08-05",
  copyrightNote:
    "Do not quote at length without edition ID and rights review. Volume wording varies by printing.",
  sources: roppaDiarySources,
};
