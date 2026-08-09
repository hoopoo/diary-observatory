import type {
  EntrySourceLayer,
  FactClaim,
  InterpretationClaim,
  ObservationClaim,
} from "@/lib/types";
import { ENTRY_ID_2011_05_02 } from "@/data/entries/2011-05-02-kenji-nishimura";

/**
 * Claims mirrored from existing entryLayers — no invented captures / editions / pages.
 * Layers keep diary / institutional / bibliographic sources distinct.
 */
export const nishimura2011FactClaims: FactClaim[] = [
  {
    id: "fact-nishimura-2011-05-02-001",
    entryId: ENTRY_ID_2011_05_02,
    claim: "2011年5月2日の日記項目である",
    claimType: "date",
    sourceCaptureIds: [],
    sourceIds: ["src-entry-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes:
      "Primary diary is copyright-protected and edition-unverified (primary-unavailable).",
  },
  {
    id: "fact-nishimura-2011-05-02-002",
    entryId: ENTRY_ID_2011_05_02,
    claim: "新潮社で仕事をした",
    claimType: "other",
    sourceCaptureIds: [],
    sourceIds: ["src-entry-primary", "src-entry-shinchosha"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes:
      "Diary claim + institutional website as context/cross-check — website does not prove the day action alone.",
  },
  {
    id: "fact-nishimura-2011-05-02-003",
    entryId: ENTRY_ID_2011_05_02,
    claim: "高円寺へ移動した",
    claimType: "movement",
    sourceCaptureIds: [],
    sourceIds: ["src-entry-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
  },
  {
    id: "fact-nishimura-2011-05-02-004",
    entryId: ENTRY_ID_2011_05_02,
    claim: "都丸書店へ立ち寄った",
    claimType: "other",
    sourceCaptureIds: [],
    sourceIds: ["src-entry-primary", "src-entry-tomaru"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
  },
  {
    id: "fact-nishimura-2011-05-02-005",
    entryId: ENTRY_ID_2011_05_02,
    claim: "ShowBoatでライブを見た",
    claimType: "other",
    sourceCaptureIds: [],
    sourceIds: ["src-entry-primary", "src-entry-showboat"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
  },
  {
    id: "fact-nishimura-2011-05-02-006",
    entryId: ENTRY_ID_2011_05_02,
    claim: "古書または関連書籍を購入した",
    claimType: "other",
    sourceCaptureIds: [],
    sourceIds: ["src-entry-primary"],
    evidenceLevel: "explicit",
    verificationStatus: "partial",
    publicDisplay: true,
    notes: "Item titles recorded separately; imprint/price not verified.",
  },
];

export const nishimura2011ObservationClaims: ObservationClaim[] = [
  {
    id: "obs-nishimura-2011-05-02-001",
    entryId: ENTRY_ID_2011_05_02,
    observation: "出版社・古書店・ライブハウスが一日の動線を構成している",
    supportingFactClaimIds: [
      "fact-nishimura-2011-05-02-002",
      "fact-nishimura-2011-05-02-004",
      "fact-nishimura-2011-05-02-005",
    ],
    confidence: "medium",
    publicDisplay: true,
  },
  {
    id: "obs-nishimura-2011-05-02-002",
    entryId: ENTRY_ID_2011_05_02,
    observation: "待ち時間のあいだに古書店へ立ち寄る時間配分がある",
    supportingFactClaimIds: [
      "fact-nishimura-2011-05-02-003",
      "fact-nishimura-2011-05-02-004",
    ],
    confidence: "medium",
    publicDisplay: true,
  },
  {
    id: "obs-nishimura-2011-05-02-003",
    entryId: ENTRY_ID_2011_05_02,
    observation: "仕事と文化消費が連続している",
    supportingFactClaimIds: [
      "fact-nishimura-2011-05-02-002",
      "fact-nishimura-2011-05-02-005",
      "fact-nishimura-2011-05-02-006",
    ],
    confidence: "medium",
    publicDisplay: true,
  },
  {
    id: "obs-nishimura-2011-05-02-004",
    entryId: ENTRY_ID_2011_05_02,
    observation: "店名・書名・行為の細部が一日を保存している",
    supportingFactClaimIds: [
      "fact-nishimura-2011-05-02-004",
      "fact-nishimura-2011-05-02-006",
    ],
    confidence: "low",
    publicDisplay: true,
  },
];

export const nishimura2011InterpretationClaims: InterpretationClaim[] = [
  {
    id: "interp-nishimura-2011-05-02-001",
    entryId: ENTRY_ID_2011_05_02,
    interpretation: "平成後期東京の文化インフラが日記の動線に現れている",
    supportingFactClaimIds: [
      "fact-nishimura-2011-05-02-002",
      "fact-nishimura-2011-05-02-004",
      "fact-nishimura-2011-05-02-005",
    ],
    supportingObservationIds: ["obs-nishimura-2011-05-02-001"],
    confidence: "medium",
    publicDisplay: true,
  },
  {
    id: "interp-nishimura-2011-05-02-002",
    entryId: ENTRY_ID_2011_05_02,
    interpretation: "日記は行動の可能性そのものを保存している",
    supportingFactClaimIds: [
      "fact-nishimura-2011-05-02-003",
      "fact-nishimura-2011-05-02-004",
      "fact-nishimura-2011-05-02-005",
    ],
    supportingObservationIds: ["obs-nishimura-2011-05-02-001"],
    confidence: "low",
    publicDisplay: true,
  },
  {
    id: "interp-nishimura-2011-05-02-003",
    entryId: ENTRY_ID_2011_05_02,
    interpretation: "店が消えても動線は記録に残る",
    supportingFactClaimIds: [
      "fact-nishimura-2011-05-02-004",
      "fact-nishimura-2011-05-02-005",
    ],
    supportingObservationIds: ["obs-nishimura-2011-05-02-004"],
    confidence: "low",
    publicDisplay: true,
  },
];

export const nishimura2011SourceLayers: EntrySourceLayer[] = [
  {
    id: "esl-nishimura-2011-diary",
    entryId: ENTRY_ID_2011_05_02,
    layerType: "primary-diary",
    sourceIds: ["src-entry-primary", "src-entry-biblio"],
    factClaimIds: nishimura2011FactClaims.map((f) => f.id),
    role: "primary-evidence",
    verificationStatus: "partial",
    notes:
      "Primary diary copyright-protected; edition bibliography needed. No SourceCapture.",
  },
  {
    id: "esl-nishimura-2011-institutional",
    entryId: ENTRY_ID_2011_05_02,
    layerType: "institutional",
    sourceIds: ["src-entry-shinchosha"],
    factClaimIds: ["fact-nishimura-2011-05-02-002"],
    role: "cross-check",
    verificationStatus: "verified",
    notes:
      "Shinchosha official site corroborates institution existence, not the diary day's actions.",
  },
  {
    id: "esl-nishimura-2011-entity",
    entryId: ENTRY_ID_2011_05_02,
    layerType: "historical-context",
    sourceIds: [
      "src-entry-tomaru",
      "src-entry-showboat",
      "src-entry-tomikawa",
      "src-entry-editorial",
    ],
    factClaimIds: [
      "fact-nishimura-2011-05-02-004",
      "fact-nishimura-2011-05-02-005",
    ],
    role: "context",
    verificationStatus: "needs-source",
  },
];
