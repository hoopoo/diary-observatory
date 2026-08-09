import type { EditorialAction, EditorialSystemProfile } from "@/lib/types";

export const NISHIMURA_ID = "writer-nishimura";
export const BUKOWSKI_ID = "writer-bukowski";
export const KAFU_ID = "writer-kafu";

/**
 * Indexed / provisional editorial actions.
 * Do not invent editor names, rejection letters, or platform internals.
 */
export const editorialActions: EditorialAction[] = [
  {
    id: "ea-kafu-print-context",
    actorType: "publisher",
    writerId: KAFU_ID,
    actionType: "position",
    description: "Print media / publisher placement as editorial context",
    descriptionJa: "紙面・出版社への配置が作品へ文脈を与える",
    outcome: "published",
    explanationAvailable: "sometimes",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-edit-kafu", "src-edit-publishing"],
    agencyNote: "Human organizational selection within print culture.",
  },
  {
    id: "ea-nishimura-publisher-select",
    actorType: "editor",
    writerId: NISHIMURA_ID,
    publishingRecordId: "pub-nishimura-publisher-prize-tv",
    actionType: "select",
    description: "Publisher / editorial selection before prize and media chain",
    descriptionJa: "文学賞・メディア連鎖の前にある出版社・編集の選考",
    outcome: "published",
    explanationAvailable: "sometimes",
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-edit-nishimura", "src-edit-prize"],
  },
  {
    id: "ea-nishimura-media-persona",
    actorType: "producer",
    writerId: NISHIMURA_ID,
    actionType: "promote",
    description: "Television / media amplification of writer persona",
    descriptionJa: "テレビ等による作家像の増幅",
    outcome: "amplified",
    explanationAvailable: false,
    evidenceLevel: "contextual",
    verificationStatus: "partial",
    sourceIds: ["src-edit-media"],
    agencyNote: "Media production decisions; not literary reading alone.",
  },
  {
    id: "ea-bukowski-small-press-select",
    actorType: "editor",
    writerId: BUKOWSKI_ID,
    publishingRecordId: "pub-bukowski-postal-small-press",
    actionType: "select",
    description: "Small-press / magazine selection via postal submission circuit",
    descriptionJa: "郵送投稿回路における小出版・雑誌の選考",
    outcome: "unknown",
    explanationAvailable: "sometimes",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-edit-bukowski", "src-edit-small"],
    notes: "Specific accept/reject events need bibliographic sources.",
  },
  {
    id: "ea-algorithm-conceptual",
    actorType: "algorithm",
    actionType: "recommend",
    description: "Platform recommendation as selection of visibility",
    descriptionJa: "プラットフォーム推薦による可視性の選択",
    outcome: "unknown",
    explanationAvailable: false,
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-edit-platform"],
    agencyNote:
      "Not treated as intentional literary judgment; behavioral optimization.",
    notes: "Conceptual comparison only — no private platform data indexed.",
  },
  {
    id: "ea-ai-conceptual",
    actorType: "ai",
    actionType: "revise",
    description: "AI-assisted revision / titling as distributed editorial labor",
    descriptionJa: "AIによる推敲・題名案など、分散した編集労働",
    outcome: "revised",
    explanationAvailable: "sometimes",
    evidenceLevel: "contextual",
    verificationStatus: "indexing",
    sourceIds: ["src-edit-ai"],
    agencyNote:
      "Generated explanations are not the full system process.",
    notes: "Conceptual capability map — not a specific product claim.",
  },
];

export const editorialSystemProfiles: EditorialSystemProfile[] = [
  {
    id: "esp-kafu",
    writerId: KAFU_ID,
    period: "Print culture",
    primaryActors: ["Editor", "Newspaper / literary magazine", "Publisher"],
    selectionMechanisms: ["Editorial selection", "Serial placement"],
    revisionMechanisms: ["Editorial revision (details source-needed)"],
    distributionMechanisms: ["Print", "Bookstore"],
    feedbackMechanisms: ["Letters", "Reviews", "Reputation"],
    transparency: "Sometimes",
    accountability: "Publisher / editorial office",
    verificationStatus: "partial",
    note: "Provisional model from indexed records.",
  },
  {
    id: "esp-nishimura",
    writerId: NISHIMURA_ID,
    period: "Publishing and television",
    primaryActors: ["Publisher", "Literary prize", "Media producer"],
    selectionMechanisms: ["Publisher", "Prize culture", "Broadcast booking"],
    revisionMechanisms: ["Editorial development", "Media framing"],
    distributionMechanisms: ["Bookstore", "Television", "Press"],
    feedbackMechanisms: ["Sales", "Reviews", "Ratings", "Public reaction"],
    transparency: "Partially through prize statements / limited media explanation",
    accountability: "Publisher / broadcaster / prize institutions",
    verificationStatus: "partial",
  },
  {
    id: "esp-bukowski",
    writerId: BUKOWSKI_ID,
    period: "Postal and small-community publishing",
    primaryActors: ["Small press editor", "Independent publisher"],
    selectionMechanisms: ["Human-scale reading", "Magazine acceptance / rejection"],
    revisionMechanisms: ["Correspondence (details source-needed)"],
    distributionMechanisms: ["Mail", "Small magazine", "Independent books"],
    feedbackMechanisms: ["Letters", "Small readership", "Readings"],
    transparency: "Sometimes via letters; often silence",
    accountability: "Editor / small publisher",
    verificationStatus: "indexing",
  },
];

export const EDITOR_OBS_ACTION_IDS = editorialActions.map((a) => a.id);

export function getEditorialActionsByWriter(writerId: string) {
  return editorialActions.filter((a) => a.writerId === writerId);
}
