/**
 * Pain Competition — content data for the shared observation components.
 *
 * All prose separates assertion from hypothesis. Attributes are never fixed
 * as "weak" or "strong": every item is framed as an overlap of conditions.
 */

import type {
  BurdenDimension,
  ConflictDirection,
  PainCompetitionSignal,
  PainEvidenceLevel,
} from "@/lib/pain";

/* ------------------------------------------------------------------ */
/* PainCompetitionDiagram — dead-end route vs. exit route             */
/* ------------------------------------------------------------------ */

export interface DiagramFlow {
  id: string;
  title: string;
  titleJa: string;
  tone: "dead-end" | "exit";
  steps: { en: string; ja: string }[];
  outcome: { en: string; ja: string };
}

export const painDiagramFlows: DiagramFlow[] = [
  {
    id: "dead-end",
    title: "Dead-end division",
    titleJa: "出口のない分断",
    tone: "dead-end",
    steps: [
      { en: "A load on daily life", ja: "生活上の負荷" },
      { en: "Not recognized by institutions", ja: "制度に認識されない" },
      { en: "A sense that my pain is ignored", ja: "自分の苦痛が無視されている感覚" },
      { en: "Others receiving support become visible", ja: "支援されている他者が可視化される" },
      { en: "A sense of unfairness", ja: "不公平感" },
      { en: "Horizontal hostility", ja: "水平的な敵意" },
    ],
    outcome: {
      en: "Attacks on the weak / exclusion / generational conflict",
      ja: "弱者叩き・排外主義・世代間対立",
    },
  },
  {
    id: "exit",
    title: "Division with an exit",
    titleJa: "出口のある分断",
    tone: "exit",
    steps: [
      { en: "A load on daily life", ja: "生活上の負荷" },
      { en: "Read the load as a condition, not an attribute", ja: "負荷を属性ではなく条件として把握" },
      { en: "Connect it to its institutional cause", ja: "制度上の原因へ接続" },
    ],
    outcome: {
      en: "Universal support / burden relief / redistribution",
      ja: "普遍的支援・負担軽減・再分配",
    },
  },
];

/* ------------------------------------------------------------------ */
/* PainLadder — "I also hurt" → "I hurt more"                         */
/* ------------------------------------------------------------------ */

export interface LadderStep {
  order: number;
  en: string;
  ja: string;
  note: string;
}

export const painLadderSteps: LadderStep[] = [
  {
    order: 1,
    en: "I am also in pain",
    ja: "自分もつらい",
    note: "苦痛の共有。ここでは、他者の苦痛と自分の苦痛は両立している。",
  },
  {
    order: 2,
    en: "I am being overlooked",
    ja: "自分は見落とされている",
    note: "苦痛は認識されなければ存在しないかのように扱われる、という感覚が生まれる。",
  },
  {
    order: 3,
    en: "Only others are helped",
    ja: "他者だけが助けられている",
    note: "支援されている人が可視化され、支援されない自分との差が意識される。",
  },
  {
    order: 4,
    en: "Others are being favored",
    ja: "他者は優遇されている",
    note: "差が「不足」ではなく「不当な優遇」として解釈され始める。",
  },
  {
    order: 5,
    en: "Others do not deserve support",
    ja: "他者は支援に値しない",
    note: "相手の苦痛の正当性そのものが疑われる。比較が資格審査に変わる。",
  },
  {
    order: 6,
    en: "Attacking others is justified",
    ja: "他者への攻撃が正当化される",
    note: "怒りが制度ではなく、隣の受給者へ向かう。ここで競争は敵意になる。",
  },
];

/* ------------------------------------------------------------------ */
/* BurdenMatrix — overlapping loads, not fixed identities             */
/* ------------------------------------------------------------------ */

export const burdenMatrixDimensions: BurdenDimension[] = [
  "income",
  "assets",
  "health",
  "employment",
  "housing",
  "childcare",
  "caregiving",
  "debt",
  "isolation",
  "future-anxiety",
];

export interface BurdenPersona {
  id: string;
  label: string;
  labelJa: string;
  note: string;
  dimensions: BurdenDimension[];
}

/**
 * Illustrative overlaps. Not real individuals, not fixed categories.
 * The point is that burdens stack across "middle" and "recognized" alike.
 */
export const burdenPersonas: BurdenPersona[] = [
  {
    id: "persona-a",
    label: "Case A",
    labelJa: "事例A",
    note: "正社員だが単身で親を遠距離介護。統計上は中間層に見える。",
    dimensions: ["caregiving", "isolation", "future-anxiety", "assets"],
  },
  {
    id: "persona-b",
    label: "Case B",
    labelJa: "事例B",
    note: "共働き・子育て世帯。給付の対象だが、住宅ローンと教育費で可処分は薄い。",
    dimensions: ["childcare", "debt", "housing", "future-anxiety"],
  },
  {
    id: "persona-c",
    label: "Case C",
    labelJa: "事例C",
    note: "健常・現役世代だが、慢性疾患と不安定雇用が重なり孤立している。",
    dimensions: ["health", "employment", "income", "isolation"],
  },
  {
    id: "persona-d",
    label: "Case D",
    labelJa: "事例D",
    note: "持ち家のある高齢者。資産はあるが医療負担と孤立が増している。",
    dimensions: ["health", "isolation", "caregiving"],
  },
];

/* ------------------------------------------------------------------ */
/* AngerDirectionMap                                                  */
/* ------------------------------------------------------------------ */

export interface AngerDirection {
  direction: ConflictDirection;
  examples: { en: string; ja: string }[];
  visibility: "high" | "medium" | "low";
  visibilityNote: string;
}

export const angerDirections: AngerDirection[] = [
  {
    direction: "upward",
    examples: [
      { en: "Wage structure", ja: "賃金構造への要求" },
      { en: "Housing / land costs", ja: "住居・地価" },
      { en: "Capital and taxation", ja: "資本・税制" },
    ],
    visibility: "low",
    visibilityNote:
      "対象が抽象的で、加害者が特定しにくい。物語化されにくく、形成に時間がかかる。",
  },
  {
    direction: "horizontal",
    examples: [
      { en: "Foreign residents", ja: "外国人" },
      { en: "Women", ja: "女性" },
      { en: "Older / younger generations", ja: "高齢者・若年層" },
      { en: "Benefit recipients", ja: "受給者" },
    ],
    visibility: "high",
    visibilityNote:
      "敵が具体的で顔が見える。SNS上で最も可視化・拡散されやすい。",
  },
  {
    direction: "inward",
    examples: [
      { en: "Self-responsibility", ja: "自己責任化" },
      { en: "Self-denial", ja: "自己否定" },
      { en: "Resignation", ja: "諦め" },
    ],
    visibility: "low",
    visibilityNote: "外に出ないため観測されにくいが、静かに広がる。",
  },
  {
    direction: "institutional",
    examples: [
      { en: "Reform demands", ja: "制度改正の要求" },
      { en: "Redistribution", ja: "再分配" },
      { en: "Universal support", ja: "普遍的支援" },
    ],
    visibility: "medium",
    visibilityNote:
      "本来向かうべき方向だが、構造が見えにくく、感情的な牽引力が弱い。",
  },
];

/* ------------------------------------------------------------------ */
/* RecognitionGapPanel — four kinds of pain that do not coincide      */
/* ------------------------------------------------------------------ */

export interface RecognitionLayer {
  id: string;
  label: string;
  labelJa: string;
  description: string;
}

export const recognitionLayers: RecognitionLayer[] = [
  {
    id: "actual",
    label: "Pain actually carried",
    labelJa: "実際に抱えている苦痛",
    description: "本人が生活の中で現に負っている負荷。多くは言語化されない。",
  },
  {
    id: "institutional",
    label: "Pain institutions recognize",
    labelJa: "制度が認識している苦痛",
    description: "分類・要件・所得基準など、制度が拾える形に整えられた苦痛。",
  },
  {
    id: "social",
    label: "Pain society acknowledges",
    labelJa: "社会が認めている苦痛",
    description: "「それは大変だ」と共感されやすい、理解の型に合う苦痛。",
  },
  {
    id: "visible",
    label: "Pain made visible on SNS",
    labelJa: "SNSで可視化される苦痛",
    description: "短く、強く、敵が明確で、拡散されやすい形に切り出された苦痛。",
  },
];

/* ------------------------------------------------------------------ */
/* ExitShift — from person-vs-person to burden-vs-institution         */
/* ------------------------------------------------------------------ */

export interface ExitShiftItem {
  id: string;
  from: string;
  to: string;
  axisFrom: string;
  axisTo: string;
}

export const exitShifts: ExitShiftItem[] = [
  {
    id: "elderly",
    from: "高齢者ばかり優遇されている",
    to: "年齢ではなく、所得・資産・医療負担の実態を見る",
    axisFrom: "世代 対 世代",
    axisTo: "負荷 対 制度",
  },
  {
    id: "foreign",
    from: "外国人ばかり支援されている",
    to: "国籍ではなく、低賃金・住居・雇用・在留制度を見る",
    axisFrom: "国籍 対 国籍",
    axisTo: "負荷 対 制度",
  },
  {
    id: "women",
    from: "女性だけ守られている",
    to: "性別対立ではなく、暴力・ケア・雇用・孤立への対策を見る",
    axisFrom: "性別 対 性別",
    axisTo: "負荷 対 制度",
  },
  {
    id: "childrearing",
    from: "子育て世帯ばかり給付される",
    to: "家族属性ではなく、住宅・教育・生活コスト全体を見る",
    axisFrom: "属性 対 属性",
    axisTo: "負荷 対 制度",
  },
];

/* ------------------------------------------------------------------ */
/* Clean Society — Social Hygiene of Suffering                        */
/* ------------------------------------------------------------------ */

export const acceptedPainConditions: { en: string; ja: string }[] = [
  { en: "Easy to explain", ja: "説明しやすい" },
  { en: "Easy to quantify", ja: "数値化しやすい" },
  { en: "Temporary", ja: "一時的である" },
  { en: "Fits a recovery story", ja: "回復物語を作りやすい" },
  { en: "No perceived fault of the person", ja: "本人に落ち度がないと見なされる" },
  { en: "Expected to end in independence", ja: "支援後に自立することが期待される" },
];

export const disfavoredPainConditions: { en: string; ja: string }[] = [
  { en: "Long-lasting", ja: "長期化している" },
  { en: "Compound and layered", ja: "複合的である" },
  { en: "Ambiguous cause", ja: "原因が曖昧である" },
  { en: "No clear perpetrator", ja: "明確な加害者がいない" },
];

/* Clean Society — Observation (07) list. Same *structure*, not same event. */
export const cleanObservationItems: PainCompetitionSignal[] = [
  {
    id: "obs-welfare-bashing",
    label: "Welfare bashing",
    labelJa: "生活保護バッシング",
    description: "Recipients are suspected of fraud far beyond measured fraud rates.",
    descriptionJa: "受給者への不正疑念が、実際の不正率を大きく超えて語られる。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["income", "employment", "isolation"],
    visibleTarget: "生活保護受給者",
    hiddenCause: "賃金・雇用の劣化と、制度への到達しにくさ",
  },
  {
    id: "obs-nontaxable",
    label: "Non-taxable household backlash",
    labelJa: "非課税世帯バッシング",
    description: "Targeted benefits are read as unfair advantage by those just above the line.",
    descriptionJa: "給付対象の直上にいる層が、給付を「不当な得」と受け取る。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["income", "future-anxiety"],
    visibleTarget: "非課税世帯",
    hiddenCause: "所得の崖と、中間層の負担感の設計不足",
  },
  {
    id: "obs-womens-car",
    label: "Women-only train cars",
    labelJa: "女性専用車両への反発",
    description: "A safety measure is reframed as a privilege withheld from men.",
    descriptionJa: "安全対策が、男性から奪われた特権として語り直される。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["health", "isolation"],
    visibleTarget: "女性",
    hiddenCause: "痴漢被害への対策不足と、対立軸の単純化",
  },
  {
    id: "obs-singles",
    label: "Singles vs. childcare support",
    labelJa: "子育て支援への独身者の不満",
    description: "Support for families reads as exclusion to those without children.",
    descriptionJa: "子育て支援が、子のいない層には自分の排除として映る。",
    evidenceLevel: "inferred",
    conflictDirection: "horizontal",
    burdenDimensions: ["income", "isolation", "future-anxiety"],
    visibleTarget: "子育て世帯",
    hiddenCause: "住宅・生活コスト全体への普遍的支援の不足",
  },
  {
    id: "obs-foreign-support",
    label: "Backlash to foreign-resident support",
    labelJa: "外国人支援への反発",
    description: "Local support is amplified as national-priority grievance.",
    descriptionJa: "地域の支援が「自国民が後回し」という物語へ増幅される。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["residency", "employment", "housing"],
    visibleTarget: "外国人",
    hiddenCause: "低賃金・住居・在留制度の設計問題",
  },
  {
    id: "obs-elderly-medical",
    label: "Generational hostility over elderly care",
    labelJa: "高齢者医療への世代間敵意",
    description: "Cost pressure is framed as a generation taking from another.",
    descriptionJa: "医療費の負担が、世代が世代から奪う構図として語られる。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["health", "future-anxiety", "assets"],
    visibleTarget: "高齢者",
    hiddenCause: "現役世代の賃金停滞と、負担配分の設計",
  },
  {
    id: "obs-disability",
    label: "\"Special treatment\" critique of disability support",
    labelJa: "障害者支援への特別扱い批判",
    description: "Accommodations are read as privileges rather than access.",
    descriptionJa: "合理的配慮が、アクセスではなく特権として受け取られる。",
    evidenceLevel: "inferred",
    conflictDirection: "horizontal",
    burdenDimensions: ["disability", "employment", "income"],
    visibleTarget: "障害者",
    hiddenCause: "アクセシビリティを基盤化しない制度設計",
  },
  {
    id: "obs-disaster",
    label: "Eligibility disputes in disaster relief",
    labelJa: "被災者支援における受給資格争い",
    description: "Scarcity of relief turns survivors into rivals for recognition.",
    descriptionJa: "支援の不足が、被災者同士を資格の競合へ追い込む。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["housing", "assets", "region"],
    visibleTarget: "他の被災者",
    hiddenCause: "支援総量と到達設計の不足",
  },
  {
    id: "obs-sns-comparison",
    label: "\"I have it worse\" on SNS",
    labelJa: "SNS上の「自分のほうがつらい」という語り",
    description: "Comparison of suffering becomes a mode of belonging and attention.",
    descriptionJa: "苦痛の比較が、承認と帰属を得る手段になる。",
    evidenceLevel: "hypothesis",
    conflictDirection: "horizontal",
    burdenDimensions: ["isolation", "future-anxiety"],
    visibleTarget: "他の当事者",
    hiddenCause: "苦痛が可視化されないと認められない仕組み",
  },
];

/* ------------------------------------------------------------------ */
/* Market Signals — Grievance Economy                                */
/* ------------------------------------------------------------------ */

export interface SignalSummaryField {
  label: string;
  value: string;
}

export const grievanceSignalSummary: SignalSummaryField[] = [
  { label: "Signal status", value: "Emerging / Expanding" },
  { label: "Time horizon", value: "Now – 2030" },
  { label: "Confidence", value: "High" },
  { label: "Geographic scope", value: "Japan / Global" },
  {
    label: "Primary drivers",
    value:
      "inflation, stagnant wages, social insecurity, aging, platform incentives",
  },
  {
    label: "Primary outputs",
    value:
      "polarization, welfare chauvinism, anti-DEI, populism, exclusionary politics",
  },
];

export const painToMarketFlow: { en: string; ja: string }[] = [
  { en: "Insecurity in daily life", ja: "生活不安" },
  { en: "A sense of being ignored", ja: "無視されている感覚" },
  { en: "Victim consciousness", ja: "被害者意識" },
  { en: "Identifying an enemy", ja: "敵の特定" },
  { en: "Turned into content", ja: "コンテンツ化" },
  { en: "Spread and monetized", ja: "拡散・収益化" },
  { en: "Political mobilization", ja: "政治動員" },
];

export const monetizedEmotions: { en: string; ja: string }[] = [
  { en: "Anger", ja: "怒り" },
  { en: "Unfairness", ja: "不公平感" },
  { en: "Humiliation", ja: "屈辱" },
  { en: "Loss", ja: "喪失感" },
  { en: "Future anxiety", ja: "将来不安" },
  { en: "Being left behind", ja: "置き去り感" },
  { en: "Not being recognized", ja: "認められなさ" },
  { en: "\"Only I am losing\"", ja: "「自分だけ損をしている」" },
];

export const monetizedFormats: string[] = [
  "動画",
  "切り抜き",
  "炎上投稿",
  "オンラインコミュニティ",
  "政治運動",
  "有料ニュースレター",
  "陰謀論",
  "インフルエンサー",
  "選挙キャンペーン",
  "セルフヘルプ",
  "排外的な物語",
];

export interface MarketActor {
  en: string;
  ja: string;
  role: string;
}

export const marketActors: MarketActor[] = [
  { en: "SNS platforms", ja: "SNSプラットフォーム", role: "エンゲージメント設計" },
  { en: "Video creators", ja: "動画配信者", role: "感情の連続供給" },
  { en: "Influencers", ja: "インフルエンサー", role: "被害物語の人格化" },
  { en: "Parties / politicians", ja: "政党・政治家", role: "票への変換" },
  { en: "News media", ja: "ニュースメディア", role: "見出しと反復" },
  { en: "Advertisers", ja: "広告事業者", role: "注意の購入" },
  { en: "Community operators", ja: "コミュニティ運営者", role: "帰属の提供" },
  { en: "Consultants", ja: "コンサルタント", role: "手法の横展開" },
  { en: "Alternative media", ja: "オルタナティブメディア", role: "不信の受け皿" },
  { en: "AI content generators", ja: "AIコンテンツ生成者", role: "怒りの大量生産" },
];

export const middleClassLosses: { en: string; ja: string }[] = [
  { en: "Predictability of the future", ja: "将来の予測可能性" },
  { en: "Expectation of rising income", ja: "所得上昇への期待" },
  { en: "Ability to buy housing", ja: "住宅取得可能性" },
  { en: "Room to invest in education", ja: "教育投資余力" },
  { en: "Security in old age", ja: "老後の安心" },
  { en: "A sense of belonging to an organization", ja: "組織への所属感" },
  { en: "The sense that effort is rewarded", ja: "報われるという感覚" },
];

export const signalsToWatch: PainCompetitionSignal[] = [
  {
    id: "sig-nationals-first",
    label: "\"Nationals first\" welfare discourse",
    labelJa: "「自国民優先」という福祉言説の増加",
    description: "Welfare framed as a zero-sum contest between citizens and non-citizens.",
    descriptionJa: "福祉が、市民と非市民のゼロサム競争として語られる。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["residency", "income", "employment"],
    visibleTarget: "外国人",
    hiddenCause: "普遍的支援の縮小と負担配分の不透明さ",
  },
  {
    id: "sig-generational",
    label: "Generation-baiting content",
    labelJa: "世代間対立を煽るコンテンツの増加",
    description: "Formats optimized to pit age cohorts against each other.",
    descriptionJa: "年代を対立させる型に最適化されたコンテンツ。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["future-anxiety", "assets", "health"],
    visibleTarget: "他世代",
    hiddenCause: "賃金停滞と社会保障の設計",
  },
  {
    id: "sig-gender-victim",
    label: "Male / female victim comparison",
    labelJa: "男性／女性の被害比較",
    description: "Suffering framed as a competition between genders.",
    descriptionJa: "苦痛が、性別間の競争として提示される。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["isolation", "employment", "health"],
    visibleTarget: "他の性別",
    hiddenCause: "ケア・雇用・孤立への対策不足",
  },
  {
    id: "sig-benefit-rivalry",
    label: "Family vs. single benefit rivalry",
    labelJa: "子育て世帯／独身者の給付対立",
    description: "Targeted benefits read as exclusion by the non-targeted.",
    descriptionJa: "対象を絞った給付が、対象外に排除として映る。",
    evidenceLevel: "inferred",
    conflictDirection: "horizontal",
    burdenDimensions: ["income", "housing", "future-anxiety"],
    visibleTarget: "他の世帯類型",
    hiddenCause: "生活コスト全体への普遍的支援の欠如",
  },
  {
    id: "sig-elderly-cost",
    label: "Hostility over elderly medical cost",
    labelJa: "高齢者医療費をめぐる敵意",
    description: "Cost pressure narrated as one generation draining another.",
    descriptionJa: "負担が、世代が世代を消耗させる物語になる。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["health", "assets", "future-anxiety"],
    visibleTarget: "高齢者",
    hiddenCause: "負担配分と現役世代の所得問題",
  },
  {
    id: "sig-misinfo-foreign",
    label: "Misinformation on foreign-resident aid",
    labelJa: "外国人への行政支援に関する誤情報",
    description: "False or inflated claims about benefits to non-citizens.",
    descriptionJa: "非市民への給付についての誤った・誇張された言説。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["residency", "housing"],
    visibleTarget: "外国人",
    hiddenCause: "行政情報の不透明さと不安の受け皿化",
  },
  {
    id: "sig-fraud-overreport",
    label: "Over-reporting of welfare fraud",
    labelJa: "生活保護不正受給の過剰報道",
    description: "Rare cases amplified into a general suspicion.",
    descriptionJa: "稀な事例が、全体への疑念へ増幅される。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["income", "employment"],
    visibleTarget: "受給者",
    hiddenCause: "制度不信と、注意経済の構造",
  },
  {
    id: "sig-anti-dei",
    label: "Backlash against DEI / diversity",
    labelJa: "DEI・多様性への反発",
    description: "Inclusion framed as loss for the un-named majority.",
    descriptionJa: "包摂が、名指されない多数派の損失として語られる。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["employment", "future-anxiety"],
    visibleTarget: "支援対象層",
    hiddenCause: "説明責任を欠いた属性ベース施策への不信",
  },
  {
    id: "sig-ordinary-loses",
    label: "\"Ordinary people lose the most\"",
    labelJa: "「普通の人が一番損をしている」という言説",
    description: "A middle position reframed as the true victim.",
    descriptionJa: "中間の立場が、真の被害者として語り直される。",
    evidenceLevel: "hypothesis",
    conflictDirection: "horizontal",
    burdenDimensions: ["income", "future-anxiety", "housing"],
    hiddenCause: "地位喪失感の政治的エネルギー化",
  },
  {
    id: "sig-victim-identity",
    label: "Victimhood-based communities",
    labelJa: "被害者アイデンティティを基盤とするコミュニティ",
    description: "Belonging organized around shared grievance.",
    descriptionJa: "共有された被害を軸に帰属が組織される。",
    evidenceLevel: "inferred",
    conflictDirection: "horizontal",
    burdenDimensions: ["isolation", "future-anxiety"],
    hiddenCause: "孤立と、承認の得にくさ",
  },
  {
    id: "sig-ai-rage",
    label: "AI-generated rage content at scale",
    labelJa: "AI生成による怒りコンテンツの大量生産",
    description: "Automated production of outrage-optimized material.",
    descriptionJa: "怒りに最適化された素材の自動生産。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["future-anxiety"],
    hiddenCause: "エンゲージメント報酬と生成コストの低下",
  },
  {
    id: "sig-election-benefit",
    label: "Election-time benefit competition",
    labelJa: "選挙時の給付対象をめぐる競争",
    description: "Who receives is contested as a campaign axis.",
    descriptionJa: "「誰が受け取るか」が選挙の争点として競われる。",
    evidenceLevel: "observed",
    conflictDirection: "horizontal",
    burdenDimensions: ["income", "future-anxiety"],
    hiddenCause: "普遍的設計より対象選別が票になりやすい構造",
  },
];

export const businessImplications: { en: string; ja: string }[] = [
  { en: "Attribute-based campaigns invite backlash", ja: "属性ベースのキャンペーンが反発を生む" },
  { en: "Support for one group needs accountability", ja: "特定層だけを支援するメッセージは説明責任が必要" },
  { en: "DEI cannot rely on moral language alone", ja: "DEI施策は道徳語だけでは伝わらない" },
  { en: "Don't ignore employees' \"not me\" feeling", ja: "従業員の「自分は対象外」という感情を無視しない" },
  { en: "Don't convert customer grievance into an enemy story", ja: "顧客の不満を安易に敵対物語へ変換しない" },
  { en: "Rage engagement erodes long-term trust", ja: "怒りを利用した短期的エンゲージメントは長期的信頼を損なう" },
  { en: "Explain by \"which burden is reduced\", not \"who is favored\"", ja: "「誰を優遇するか」ではなく「どの負荷を減らすか」で説明する" },
];

export const grievanceOpportunities: { en: string; ja: string }[] = [
  { en: "Universal services", ja: "普遍的サービス" },
  { en: "Condition-based support design", ja: "条件ベースの支援設計" },
  { en: "Burden-visualization tools", ja: "負荷可視化ツール" },
  { en: "Fairness-explanation layers", ja: "公平性説明レイヤー" },
  { en: "Personalized benefits", ja: "福利厚生の個別最適化" },
  { en: "Local consultation platforms", ja: "地域相談プラットフォーム" },
  { en: "AI that maps compound hardship", ja: "複合困難を把握するAI" },
  { en: "Transparency of public benefits", ja: "行政給付の透明化" },
  { en: "Trust-building media", ja: "信頼形成型メディア" },
  { en: "Translating conflict into institutional issues", ja: "対立を制度課題へ翻訳するサービス" },
];

export const grievanceRisks: string[] = [
  "grievance marketing",
  "welfare chauvinism",
  "rage engagement",
  "exclusionary personalization",
  "victimhood scoring",
  "political microtargeting",
  "AI-generated resentment loops",
];

/* ------------------------------------------------------------------ */
/* The Competition of Pain                                            */
/* ------------------------------------------------------------------ */

export const painIsNotEnough: { en: string; ja: string }[] = [
  { en: "Being able to put it into words", ja: "言葉にできること" },
  { en: "Being able to prove it", ja: "証明できること" },
  { en: "Fitting an institutional category", ja: "制度の分類に入ること" },
  { en: "Being understood by others", ja: "他者から理解されること" },
  { en: "Being seen as deserving", ja: "支援に値すると見なされること" },
];

export const visiblePain: { en: string; ja: string }[] = [
  { en: "Short", ja: "短い" },
  { en: "Intense", ja: "強い" },
  { en: "Clear enemy", ja: "敵が明確" },
  { en: "Easy to film", ja: "映像化しやすい" },
  { en: "Easy to quantify", ja: "数値化しやすい" },
  { en: "Provokes anger", ja: "怒りを誘う" },
  { en: "Good vs. evil", ja: "勧善懲悪にできる" },
];

export const invisiblePain: { en: string; ja: string }[] = [
  { en: "Chronic fatigue", ja: "慢性的な疲労" },
  { en: "Caregiving", ja: "介護" },
  { en: "Isolation", ja: "孤立" },
  { en: "Moderate poverty", ja: "中程度の貧困" },
  { en: "Tension within a family", ja: "家族内の緊張" },
  { en: "Future anxiety", ja: "将来不安" },
  { en: "Compound ill health", ja: "複合的な健康不調" },
  { en: "Pain with no clear perpetrator", ja: "明確な加害者がいない苦痛" },
];

export const painCompared: { en: string; ja: string }[] = [
  { en: "Who is most unhappy", ja: "誰が最も不幸か" },
  { en: "Who should be prioritized", ja: "誰が優先されるべきか" },
  { en: "Who is taking support", ja: "誰が支援を奪っているか" },
  { en: "Who is the real victim", ja: "誰が本当の被害者か" },
];

export const painShared: { en: string; ja: string }[] = [
  { en: "Which burdens are common", ja: "どの負荷が共通しているか" },
  { en: "Which institutions produce pain", ja: "どの制度が苦痛を生んでいるか" },
  { en: "What can be guaranteed universally", ja: "何を普遍的に保障できるか" },
  { en: "Which conditions can be relieved", ja: "どの条件を軽減できるか" },
];

export const painIdentityNotes: { en: string; ja: string }[] = [
  { en: "Speaking of harm brings companions", ja: "被害を語ることで仲間を得る" },
  { en: "Doubting the pain feels like denying the whole self", ja: "苦痛を疑われると自己全体を否定されたと感じる" },
  { en: "Recovery can mean leaving the community", ja: "回復すると共同体から離れることになる" },
  { en: "Without an enemy, the story cannot hold", ja: "敵がいなくなると物語が維持できない" },
  { en: "Comparison of pain builds cohesion", ja: "苦痛の比較が共同体の結束を作る" },
];

export const exitFromCompetition: { en: string; ja: string }[] = [
  { en: "Do not rank pain", ja: "苦痛をランキング化しない" },
  { en: "Read burden, not attribute", ja: "属性ではなく負荷を把握する" },
  {
    en: "Look at institutions, not visible recipients",
    ja: "可視化された受給者ではなく制度を見る",
  },
  {
    en: "Design support as a foundation, not an exception",
    ja: "支援を例外ではなく基盤として設計する",
  },
];

/* Convenience re-exports for typing in pages. */
export type { BurdenDimension, ConflictDirection, PainEvidenceLevel };
