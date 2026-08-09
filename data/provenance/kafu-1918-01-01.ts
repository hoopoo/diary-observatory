import type {
  EntryQualityProfile,
  EntrySourceLayer,
  FactClaim,
  InterpretationClaim,
  ObservationClaim,
  UnknownClaim,
} from "@/lib/types";
import { ENTRY_ID_1918_01_01 } from "@/data/entries/1918-01-01-kafu-nagai";

/**
 * Claims for 1918-01-01 — mirrored from existing entryLayers only.
 * No invented Edition / Page / SourceCapture / SourceCopy.
 */
export const kafu1918FactClaims: FactClaim[] = [
  {
    id: "fact-kafu-1918-01-01-001",
    entryId: ENTRY_ID_1918_01_01,
    claim: "The diary item is dated January 1, 1918.",
    claimJa: "1918年1月1日の日記項目である",
    claimType: "date",
    factScope: "bibliographic",
    sourceCaptureIds: [],
    sourceIds: ["src-1918-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes:
      "Date identity asserted from the day as indexed. Edition, page, and SourceCapture not registered.",
  },
  {
    id: "fact-kafu-1918-01-01-002",
    entryId: ENTRY_ID_1918_01_01,
    claim: "The calendar day is New Year’s Day.",
    claimJa: "正月である",
    claimType: "date",
    factScope: "textual",
    sourceCaptureIds: [],
    sourceIds: ["src-1918-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes: "Calendar New Year as recorded / indexed — page path incomplete.",
  },
  {
    id: "fact-kafu-1918-01-01-003",
    entryId: ENTRY_ID_1918_01_01,
    claim: "The diary records that nothing special is done.",
    claimJa: "特別なことをしない旨が記されている",
    claimType: "other",
    factScope: "textual",
    sourceCaptureIds: [],
    sourceIds: ["src-1918-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes:
      "Textual Fact — paraphrase of diary content. Not a SourceCapture. Do not treat as ceremony inventory.",
  },
  {
    id: "fact-kafu-1918-01-01-004",
    entryId: ENTRY_ID_1918_01_01,
    claim: "Waiting for the interior to warm is recorded.",
    claimJa: "室内が暖まるのを待った",
    claimType: "waiting",
    factScope: "textual",
    sourceCaptureIds: [],
    sourceIds: ["src-1918-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes:
      "Textual Fact about heating wait. Appliance type and fuel are Unknown — do not invent. Linked maintenance event: me-kafu-1918-01-01-heat (actor unknown).",
  },
  {
    id: "fact-kafu-1918-01-01-005",
    entryId: ENTRY_ID_1918_01_01,
    claim: "Tidying or cleaning of the interior is recorded.",
    claimJa: "片づけまたは掃除をした",
    claimType: "other",
    factScope: "textual",
    sourceCaptureIds: [],
    sourceIds: ["src-1918-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes:
      "Textual Fact. Actor of domestic labor remains Unknown (not asserted as Self by default). Linked: me-kafu-1918-01-01-cleaning.",
  },
];

export const kafu1918ObservationClaims: ObservationClaim[] = [
  {
    id: "obs-kafu-1918-01-01-001",
    entryId: ENTRY_ID_1918_01_01,
    observation:
      "New Year appears as an ordinary living day rather than a ceremonial day.",
    observationJa: "正月が祝祭ではなく生活の一日として記録されている",
    supportingFactClaimIds: [
      "fact-kafu-1918-01-01-002",
      "fact-kafu-1918-01-01-003",
    ],
    confidence: "medium",
    publicDisplay: true,
    notes: "Within the same recorded day — no clock order asserted.",
  },
  {
    id: "obs-kafu-1918-01-01-002",
    entryId: ENTRY_ID_1918_01_01,
    observation: "Environmental conditions enter the structure of the day.",
    observationJa: "環境条件が、一日の構造へ入り込んでいる",
    supportingFactClaimIds: ["fact-kafu-1918-01-01-004"],
    confidence: "medium",
    publicDisplay: true,
    notes:
      "Based on textual heating-wait Fact only. Objective outdoor temperature is not asserted.",
  },
  {
    id: "obs-kafu-1918-01-01-003",
    entryId: ENTRY_ID_1918_01_01,
    observation:
      "Domestic maintenance appears within the same recorded day as the indexed actions.",
    observationJa:
      "生活維持が、同一の記録された一日の中に現れる（時刻順序は未確認）",
    supportingFactClaimIds: [
      "fact-kafu-1918-01-01-004",
      "fact-kafu-1918-01-01-005",
    ],
    confidence: "medium",
    publicDisplay: true,
    notes:
      "Do not assert “before literary work” — writing activity is not indexed as a Fact for this day.",
  },
  {
    id: "obs-kafu-1918-01-01-004",
    entryId: ENTRY_ID_1918_01_01,
    observation:
      "The diary preserves the tempo of living actions, not only discrete events.",
    observationJa: "日記は行動だけでなく、生活の速度を保存している",
    supportingFactClaimIds: [
      "fact-kafu-1918-01-01-003",
      "fact-kafu-1918-01-01-004",
      "fact-kafu-1918-01-01-005",
    ],
    confidence: "low",
    publicDisplay: true,
  },
];

export const kafu1918InterpretationClaims: InterpretationClaim[] = [
  {
    id: "interp-kafu-1918-01-01-001",
    entryId: ENTRY_ID_1918_01_01,
    interpretation:
      "Social calendar time and personal lived time need not coincide.",
    interpretationJa: "社会的な暦と個人の時間は一致しない",
    supportingFactClaimIds: [
      "fact-kafu-1918-01-01-002",
      "fact-kafu-1918-01-01-003",
    ],
    supportingObservationIds: ["obs-kafu-1918-01-01-001"],
    alternativeInterpretations: [
      "This may reflect diary-writing preference rather than the objective importance of each activity.",
      "これは生活上の重要度そのものではなく、荷風の日記記述の選択傾向を反映している可能性もある。",
    ],
    confidence: "medium",
    publicDisplay: true,
    notes:
      "One recorded day — does not by itself establish a lifelong pattern.",
  },
  {
    id: "interp-kafu-1918-01-01-002",
    entryId: ENTRY_ID_1918_01_01,
    interpretation:
      "Obtaining warmth itself can appear as an action that structures modern daily life.",
    interpretationJa: "近代の日常では、暖かさを得ること自体が行動だった",
    supportingFactClaimIds: ["fact-kafu-1918-01-01-004"],
    supportingObservationIds: ["obs-kafu-1918-01-01-002"],
    alternativeInterpretations: [
      "Warmth-wait may be a writing convention of this diary rather than the day’s central labor.",
    ],
    confidence: "medium",
    publicDisplay: true,
    notes: "Interpretation from Observation — not a direct SourceCapture claim.",
  },
  {
    id: "interp-kafu-1918-01-01-003",
    entryId: ENTRY_ID_1918_01_01,
    interpretation:
      "An ordinary day can contain the history of housing, energy, and the body.",
    interpretationJa: "平凡な一日は、住宅、エネルギー、身体の歴史を含んでいる",
    supportingFactClaimIds: [
      "fact-kafu-1918-01-01-004",
      "fact-kafu-1918-01-01-005",
    ],
    supportingObservationIds: [
      "obs-kafu-1918-01-01-002",
      "obs-kafu-1918-01-01-003",
    ],
    alternativeInterpretations: [
      "Housing / energy histories require cross-entry evidence; this day alone is suggestive, not definitive.",
    ],
    confidence: "low",
    publicDisplay: true,
    notes:
      "This entry shows one recorded day. It does not by itself establish a lifelong pattern.",
  },
];

export const kafu1918UnknownClaims: UnknownClaim[] = [
  {
    id: "unk-kafu-1918-01-01-edition",
    entryId: ENTRY_ID_1918_01_01,
    question: "Which edition carries the 1918-01-01 text used for indexing?",
    questionJa: "索引に用いた1918-01-01本文の版はどれか",
    category: "edition",
    reasonUnknown: "No EditionRecord registered for Danchōtei Nichijō.",
    sourceNeeded: true,
    significance: "high",
    researchPriority: "high",
  },
  {
    id: "unk-kafu-1918-01-01-page",
    entryId: ENTRY_ID_1918_01_01,
    question: "What is the page or stable location of this day’s text?",
    questionJa: "この日の本文のページ／安定位置はどこか",
    category: "page",
    reasonUnknown: "Page reference not indexed.",
    sourceNeeded: true,
    significance: "high",
    researchPriority: "high",
  },
  {
    id: "unk-kafu-1918-01-01-capture",
    entryId: ENTRY_ID_1918_01_01,
    question: "Is there a rights-ready SourceCapture for each public Fact?",
    questionJa: "各公開Factに権利確認済みのSourceCaptureがあるか",
    category: "source-capture",
    reasonUnknown: "No SourceCapture registered.",
    sourceNeeded: true,
    significance: "high",
    researchPriority: "high",
  },
  {
    id: "unk-kafu-1918-01-01-copy",
    entryId: ENTRY_ID_1918_01_01,
    question: "Which SourceCopy was examined?",
    questionJa: "確認した資料個体はどれか",
    category: "source-copy",
    reasonUnknown: "Source copy not yet indexed.",
    sourceNeeded: true,
    significance: "high",
    researchPriority: "high",
  },
  {
    id: "unk-kafu-1918-01-01-boundary",
    entryId: ENTRY_ID_1918_01_01,
    question: "Where does the 1918-01-01 daily boundary start and end?",
    questionJa: "1918-01-01の一日境界の開始・終了位置はどこか",
    category: "daily-boundary",
    reasonUnknown: "DailyBoundaryRecord not registered for this published entry.",
    sourceNeeded: true,
    significance: "high",
    researchPriority: "high",
  },
  {
    id: "unk-kafu-1918-01-01-device",
    entryId: ENTRY_ID_1918_01_01,
    question: "What heating device (if any) is named in the diary?",
    questionJa: "暖房器具は日記に名指しされているか",
    category: "heating",
    reasonUnknown: "Appliance type not asserted in indexed facts.",
    sourceNeeded: true,
    significance: "medium",
    researchPriority: "medium",
  },
  {
    id: "unk-kafu-1918-01-01-fuel",
    entryId: ENTRY_ID_1918_01_01,
    question: "What fuel is recorded?",
    questionJa: "燃料は記録されているか",
    category: "heating",
    reasonUnknown: "Fuel not indexed — do not invent from period common sense.",
    sourceNeeded: true,
    significance: "medium",
    researchPriority: "medium",
  },
  {
    id: "unk-kafu-1918-01-01-time",
    entryId: ENTRY_ID_1918_01_01,
    question: "What are the exact times of recorded actions?",
    questionJa: "記録された行為の正確な時刻は何か",
    category: "time",
    reasonUnknown:
      "Timeline uses sequence-only labels (Morning / Later), not clock times.",
    sourceNeeded: true,
    significance: "medium",
    researchPriority: "low",
  },
  {
    id: "unk-kafu-1918-01-01-cleaner",
    entryId: ENTRY_ID_1918_01_01,
    question: "Who performed the tidying / cleaning?",
    questionJa: "片づけ・掃除の行為者は誰か",
    category: "domestic-support",
    reasonUnknown: "Actor status unknown — not Self by default.",
    sourceNeeded: true,
    significance: "high",
    researchPriority: "medium",
  },
  {
    id: "unk-kafu-1918-01-01-weather",
    entryId: ENTRY_ID_1918_01_01,
    question: "What was the objective outdoor temperature / precipitation?",
    questionJa: "当日の実測気温・降水量は何か",
    category: "weather",
    reasonUnknown:
      "External historical weather source not registered. Diary coldness is not converted to °C.",
    sourceNeeded: true,
    significance: "medium",
    researchPriority: "medium",
  },
  {
    id: "unk-kafu-1918-01-01-food",
    entryId: ENTRY_ID_1918_01_01,
    question: "Is a meal recorded with provider / items?",
    questionJa: "食事内容・提供者は記録されているか",
    category: "food",
    reasonUnknown: "No FoodRecord — do not invent meals from New Year convention.",
    sourceNeeded: true,
    significance: "medium",
    researchPriority: "low",
  },
  {
    id: "unk-kafu-1918-01-01-rights",
    entryId: ENTRY_ID_1918_01_01,
    question: "What is the rights-ready quotation policy for the examined copy?",
    questionJa: "確認個体についての権利・引用方針は何か",
    category: "rights",
    reasonUnknown: "copyrightStatus remains public-domain-status-to-verify.",
    sourceNeeded: true,
    significance: "high",
    researchPriority: "high",
  },
];

export const kafu1918QualityProfile: EntryQualityProfile = {
  entryId: ENTRY_ID_1918_01_01,
  sourceQuality: "partial",
  bibliographicCompleteness: "weak",
  dailyBoundaryClarity: "weak",
  factTraceability: "partial",
  crossCheckDepth: "weak",
  interpretiveSeparation: "strong",
  rightsReadiness: "weak",
  unknownVisibility: "strong",
};

export const kafu1918SourceLayers: EntrySourceLayer[] = [
  {
    id: "esl-kafu-1918-primary",
    entryId: ENTRY_ID_1918_01_01,
    layerType: "primary-diary",
    sourceIds: ["src-1918-primary", "src-1918-pd", "src-1918-modern"],
    factClaimIds: kafu1918FactClaims.map((f) => f.id),
    role: "primary-evidence",
    verificationStatus: "partial",
    notes:
      "Primary diary work identified (断腸亭日乗). Specific edition / page / SourceCapture / SourceCopy not registered.",
  },
  {
    id: "esl-kafu-1918-context",
    entryId: ENTRY_ID_1918_01_01,
    layerType: "historical-context",
    sourceIds: ["src-1918-housing", "src-1918-weather", "src-1918-editorial"],
    factClaimIds: [],
    role: "context",
    verificationStatus: "needs-source",
    notes:
      "Context stubs only — not attached as supporting evidence for public Facts.",
  },
];
