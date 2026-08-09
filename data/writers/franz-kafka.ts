import type {
  ChronologyItem,
  EpistemicKind,
  WriterResearchQueueItem,
} from "@/lib/types";
import { kafkaTimeControlProfile } from "@/data/time/registry";

export const KAFKA_SLUG = "franz-kafka";
export const KAFKA_WRITER_ID = "writer-kafka";

export const kafkaLead = [
  "会社へ行く。",
  "働く。",
  "帰る。",
  "家族と同じ家にいる。",
  "眠る。",
  "そして、その間に書く。",
  "Kafkaの日記や手紙を読むと、創作だけではなく、「書く時間をどこに作るか」という生活上の問題が現れる。",
];

export const whyKafka = {
  title: "Why Kafka?",
  titleJa: "なぜKafkaなのか",
  paragraphs: [
    "Diary Observatoryでは、作家を作品だけで見ない。",
    "Kafkaを追加することで、文学者の生活に salaried work、office schedule、institutional time、commuting、night writing、sleep、fatigue、family household、correspondence という新しい軸が入る。",
    "これまでのWriterでは十分に見えていなかった「時間の所有」を観測できる。",
  ],
  concept: {
    en: "Who owns the day?",
    ja: "一日は、誰のものなのか。",
  },
  caution:
    "「不条理文学の作家」「病弱な作家」「父親との葛藤」だけへ還元しない。昼は会社員／夜は天才というロマンチックな二分法にも落とさない。",
};

export const kafkaPrimaryQuestion = {
  en: "What happens to writing when the day already belongs to work?",
  ja: "一日の大部分が仕事に使われたとき、書く時間はどこに生まれるのか。",
};

export const kafkaThesis = {
  en: "Writing did not replace work. It had to exist beside it.",
  ja: "創作は、仕事の代わりに存在したのではない。仕事の隣に、時間を作らなければならなかった。",
};

export const primaryConditionLabel = {
  id: "time" as const,
  en: "Time",
  ja: "時間",
};

export const timeLayers = [
  { en: "Institutional time", ja: "勤務" },
  { en: "Commute time", ja: "移動" },
  { en: "Family time", ja: "家族" },
  { en: "Writing time", ja: "執筆" },
  { en: "Correspondence", ja: "手紙" },
  { en: "Reading", ja: "読書" },
  { en: "Sleep", ja: "睡眠" },
  { en: "Recovery", ja: "休息" },
  { en: "Social time", ja: "交流" },
  { en: "Unknown time", ja: "不明" },
];

export const timeOwnershipConcept = {
  title: "Time Ownership",
  titleJa: "時間の所有",
  question: {
    en: "How much of a day belongs to the writer?",
    ja: "一日のうち、どれだけが書き手自身の時間なのか。",
  },
  dimensions: [
    { en: "Duration", ja: "長さ" },
    { en: "Control", ja: "支配主体" },
    { en: "Flexibility", ja: "融通" },
    { en: "Interruptibility", ja: "中断可能性" },
    { en: "Compensation", ja: "報酬" },
    { en: "Body cost", ja: "身体負担" },
    { en: "Opportunity cost", ja: "他の活動可能性" },
  ],
  note: "単なる「何時間」だけで扱わない。数量グラフを資料なしに作らない。",
};

export const officeNotOutside = {
  title: "The office is not outside literature",
  titleJa: "会社は、文学の外側にあるわけではない",
  body: [
    "Kafkaの会社員生活を、創作を邪魔しただけの時間として扱わない。",
    "仕事は Income、Schedule、Institution、Colleagues、Documents、Rules、Risk、Accidents、Administration、Urban movement を含む生活環境である。",
  ],
  caution: "文学との直接因果は、資料なしに断定しない。",
};

export const paidWorkVsWriting = {
  title: "Paid Work / Writing",
  titleJa: "有償労働と創作",
  axes: [
    "Time",
    "Location",
    "Compensation",
    "Obligation",
    "Deadline",
    "Audience",
    "Institution",
    "Autonomy",
    "Body impact",
  ],
  avoid: "Writing = freedom / Work = oppression の二分法にしない。",
};

export const nightWriting = {
  title: "When does writing begin?",
  titleJa: "書く時間は、いつ始まるのか",
  note: "時刻が本文にない場合は Night / Late night / After work / Sequence only などの Temporal Precision を使う。推測の exact time は作らない。",
};

export const sleepObservatory = {
  title: "Sleep is part of the writing system",
  titleJa: "睡眠も、創作生活の一部である",
  cycle: [
    "Writing late",
    "Reduced sleep (only when evidenced)",
    "Workday",
    "Fatigue",
    "Writing again",
  ],
  cycleNote:
    "Conceptual model — Kafkaの全生活のFactではない。具体Entryが確認できれば接続する。",
  medicalCaution: "日記表現から医学的な睡眠障害を診断しない。",
};

export const bodyTime = {
  title: "Body and Time",
  titleJa: "身体と時間",
  concept: {
    en: "The body can take time away from both work and writing.",
    ja: "身体は、仕事からも創作からも時間を取り戻すことがある。",
  },
  observableCandidates: [
    "Fatigue",
    "Headache (explicit only)",
    "Illness",
    "Sleepiness",
    "Hunger",
    "Nervous tension (when described)",
    "Recovery",
    "Medical visit",
  ],
  institutionModel: {
    title: "Body Is Another Institution",
    lines: [
      "Employer controls some time.",
      "Body controls some time.",
      "Family controls some time.",
      "Writer controls some time.",
    ],
    note: "Interpretive model — 一日を完全な自由時間として扱わない。",
  },
};

export const commuteBoundary = {
  title: "Between institution and private life",
  titleJa: "制度と私生活のあいだ",
  body: "移動は work → private の単なる空白ではない。疲労、読書、思考、待ち時間、都市接触が起きうる。",
  note: "具体的行為が未確認なら Concept としてのみ表示。経路・交通手段・所要時間は Source なしに補完しない。",
};

export const householdWriting = {
  title: "Family Household",
  titleJa: "家族のいる家",
  observe: [
    "Household",
    "Family members",
    "Shared space",
    "Noise",
    "Privacy",
    "Visitors",
    "Meals",
    "Sleep environment",
    "Writing environment",
  ],
  avoid: "孤独な作家像へ還元しない。家族関係の心理分析を資料なしにしない。",
};

export const roomWriting = {
  title: "Room / Writing",
  titleJa: "部屋と執筆",
  question: "Where could writing happen?",
  placeTypes: [
    "Home",
    "Room",
    "Shared household",
    "Office",
    "Hotel / sanatorium (when sourced)",
    "Travel location",
  ],
};

export const diaryVsLetter = {
  title: "Diary vs Letter",
  titleJa: "日記と手紙",
  diary: [
    { label: "Audience", value: "self / unknown" },
    { label: "Immediate response", value: "none" },
    { label: "Reciprocity", value: "low" },
  ],
  letter: [
    { label: "Audience", value: "specific other" },
    { label: "Response", value: "possible" },
    { label: "Reciprocity", value: "high" },
  ],
  note: "日記の Self Record と Correspondence を別 SourcePurpose として扱う。大量引用しない。",
};

export const writingSystemsConcept = {
  title: "Writing Systems",
  titleJa: "書く制度",
  thesis: {
    en: "Kafka wrote inside more than one writing system.",
    ja: "Kafkaは、一つではない「書く制度」の中にいた。",
  },
  comparison: ["Office documents", "Literary writing", "Diary", "Correspondence"],
  axes: [
    "Audience",
    "Purpose",
    "Style",
    "Authority",
    "Compensation",
    "Archival survival",
  ],
};

export const salaryTimeTrade = {
  title: "Salary / Time Trade",
  titleJa: "給与と時間の取引",
  concept: {
    en: "Salary buys financial stability. Work also occupies time.",
    ja: "給与は生活を支える。同時に、労働は時間を占有する。",
  },
  note: "一般 Observation。Kafka個別の満足・不満は Source からのみ。金額は捏造しない。",
};

export const diaryCorpusStatus = {
  title: "Diary Corpus",
  titleJa: "日記資料",
  status: "Bibliographic research needed",
  statusJa: "書誌研究が必要",
  futureSlugCandidate: "kafka-diaries",
  notes: [
    "正式版・巻構成・出版社・翻訳版・頁は確認済み Source がない限り登録しない。",
    "候補ルート /diaries/kafka-diaries は仮記号。今回は日記ページを生成しない。",
  ],
  meta: [
    { label: "Diary Work", value: "Research needed" },
    { label: "Edition", value: "Not indexed" },
    { label: "Entry", value: "0" },
    { label: "SourceCapture", value: "0" },
  ],
};

export const lettersCorpusStatus = {
  title: "Letters Corpus",
  titleJa: "書簡資料",
  status: "Research corpus",
  statusJa: "研究コーパス（未索引）",
  futureRouteCandidate: "/collections/kafka-letters",
  notes: [
    "DiaryWork とは別に Correspondence Collection として扱う。",
    "今回は専用 route を作成しない。恋愛・親密性は構造観測に限り、ゴシップ化しない。",
  ],
};

export const kafkaTimeline: ChronologyItem[] = [
  {
    year: 1883,
    event: "Birth (commonly cited year)",
    eventJa: "出生（常用年次）",
    kind: "fact",
    verificationStatus: "partial",
  },
  {
    year: 1908,
    yearLabel: "Employment years",
    event:
      "Salaried institutional work commonly associated — employer, title, schedule pending bibliography",
    eventJa: "有給の制度労働との関係（勤務先・役職・時刻表は書誌確認後）",
    kind: "observation",
    verificationStatus: "needs-source",
  },
  {
    year: 1924,
    event: "Death (commonly cited year)",
    eventJa: "没（常用年次）",
    kind: "fact",
    verificationStatus: "partial",
  },
];

export const kafkaOverviewLayers = [
  {
    kind: "fact" as EpistemicKind,
    text: "生年・没年は常用される年次として 1883–1924 を置く。勤務先・役職・給与・具体時刻は未索引。",
  },
  {
    kind: "observation" as EpistemicKind,
    text: "勤務・通勤・家族・夜の執筆・睡眠・手紙が同じ生活時間に並び得る領域として見える——日記条目の索引化以前に数量断定しない。",
  },
  {
    kind: "interpretation" as EpistemicKind,
    text: "Writing did not replace work. It had to exist beside it.",
  },
];

export const unknownRegister = [
  { label: "Exact workday schedule", status: "Not indexed" },
  { label: "Exact writing hours", status: "Not indexed" },
  { label: "Sleep duration", status: "Not indexed" },
  { label: "Commute duration", status: "Not indexed" },
  { label: "Daily salary relation", status: "Not indexed" },
  { label: "Household labor actors", status: "Not indexed" },
  { label: "Food", status: "Not indexed" },
  { label: "Detailed body records", status: "Not indexed" },
  { label: "Edition", status: "Research needed" },
  { label: "Pages", status: "Research needed" },
  { label: "SourceCapture", status: "Research needed" },
];

export const visibleRegister = [
  { label: "Work schedule", status: "Not indexed" },
  { label: "Writing sessions", status: "Not indexed" },
  { label: "Sleep", status: "Not indexed" },
  { label: "Correspondence", status: "Not indexed" },
  { label: "Family household", status: "Not indexed" },
  { label: "Body", status: "Not indexed" },
  { label: "Movement", status: "Not indexed" },
  { label: "Publication", status: "Not indexed" },
  { label: "Money", status: "Not indexed" },
];

export const provenanceStatus = [
  { label: "Writer identity", status: "Partial — commonly cited life years" },
  { label: "Diary corpus", status: "Research needed" },
  { label: "Edition", status: "Not indexed" },
  { label: "Entry", status: "0" },
  { label: "SourceCopy", status: "0" },
  { label: "SourceCapture", status: "0" },
  { label: "Provenance stage", status: "Research stage" },
];

export const kafkaResearchQueue: WriterResearchQueueItem[] = [
  {
    id: "rq-kafka-1",
    title: "Establish diary / journal bibliography and eligible editions",
    titleJa: "日記書誌と引用可能な版の確定",
    type: "bibliography",
    priority: 1,
    status: "source-needed",
    sourceNeeded: true,
    note: "Do not invent volumes, publishers, or page numbers.",
  },
  {
    id: "rq-kafka-2",
    title: "Index employment evidence with source IDs",
    titleJa: "勤務（雇主・職務・時刻）の出典付き索引",
    type: "work",
    priority: 1,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-kafka-3",
    title: "Index night writing sessions with temporal precision",
    titleJa: "夜間執筆セッションの時間精度付き索引",
    type: "writing",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-kafka-4",
    title: "Sleep and fatigue mentions — non-diagnostic capture",
    titleJa: "睡眠・疲労記述の非診断的キャプチャ",
    type: "body",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-kafka-5",
    title: "Correspondence corpus structure (not gossip)",
    titleJa: "書簡コーパス構造化（ゴシップ化しない）",
    type: "correspondence",
    priority: 2,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-kafka-6",
    title: "Housing / room privacy for writing",
    titleJa: "執筆可能な部屋・プライバシー条件",
    type: "housing",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
  {
    id: "rq-kafka-7",
    title: "Future comparisons: Kafka–Bukowski / Kafka–Ichiyō / Kafka–Nishimura",
    titleJa: "将来比較の資料整理",
    type: "comparison",
    priority: 3,
    status: "queued",
    sourceNeeded: true,
  },
];

export const relatedObservations = [
  {
    href: "/observations/who-owns-the-day",
    title: "一日は、誰のものなのか",
    note: "Featured · Time ownership across work, family, body, and writing.",
  },
  {
    href: "/observations/maintenance-is-not-background",
    title: "生活維持は、文学の背景ではない",
    note: "Work and maintenance as systems beside writing.",
  },
  {
    href: "/observations/the-price-of-an-ordinary-day",
    title: "普通の一日の値段",
    note: "Money and ordinary-day cost — without inventing salary figures.",
  },
  {
    href: "/observations/is-social-media-a-diary",
    title: "SNSは日記なのか",
    note: "Self-record form — diary vs other self-documents.",
  },
  {
    href: "/observations/more-sources-less-certainty",
    title: "資料が多いほど、事実は単純になるのか",
    note: "Diary, letters, editions, and provenance layers.",
  },
];

export const comingObservation = {
  title: "一日は、誰のものなのか",
  titleEn: "Who Owns the Day?",
  subtitle: "会社、家族、身体、創作のあいだで分割される24時間",
  status: "Featured Observation",
  href: "/observations/who-owns-the-day",
};

export const futureComparisons = [
  {
    id: "future-kafka-bukowski",
    title: "Kafka / Bukowski",
    titleJa: "有償労働と創作の異なる関係",
    status: "Future comparison",
    note: "Two writers with paid work, but different relations to labor. Alcohol only if sourced.",
  },
  {
    id: "future-kafka-ichiyo",
    title: "Kafka / Ichiyō",
    titleJa: "誰が書き手の時間を支配するのか",
    status: "Future comparison",
    note: "Writing time, household obligation, money, family, publishing, body — 男女二分比較だけにしない。",
  },
  {
    id: "future-kafka-nishimura",
    title: "Kafka / Nishimura",
    titleJa: "雇用・自己記録・制度",
    status: "Future comparison",
    note: "Employment, writing identity, publication, time, institution, self-record, media.",
  },
];

export const kafkaRelatedWriters = [
  {
    id: "writer-bukowski",
    name: "Charles Bukowski",
    nameJa: "チャールズ・ブコウスキー",
    connection: "Paid work · writing · body · time",
    text: "有償労働と創作。労働形態も都市も異なるが、時間が仕事に占有される条件を比較できる。",
    cta: "Open writer",
    href: "/writers/charles-bukowski",
    status: "available" as const,
  },
  {
    id: "writer-ichiyo",
    name: "Ichiyō Higuchi",
    nameJa: "樋口一葉",
    connection: "Who controls the writer's time?",
    text: "家計と家族義務のなかの時間。男女二分法ではなく、時間支配の構造として比較する候補。",
    cta: "Open writer",
    href: "/writers/ichiyo-higuchi",
    status: "available" as const,
  },
  {
    id: "writer-nishimura",
    name: "Kenji Nishimura",
    nameJa: "西村賢太",
    connection: "Employment · publication · self-record",
    text: "雇用・出版・自己記録が一日に入り込む様式の比較候補。",
    cta: "Open writer",
    href: "/writers/kenji-nishimura",
    status: "available" as const,
  },
];

export { kafkaTimeControlProfile };
