import type { EditionRecord } from "@/lib/types";
import { ROPPA_VOLUME_IDS } from "@/data/volumes/furukawa-roppa-showa-diary";

const WORK_ID = "diary-furukawa-roppa-showa";
const WRITER_ID = "writer-roppa";

/**
 * Catalogued multi-volume set only.
 * Per-volume imprint year, editor, ISBN, pagination, and copy-in-hand
 * verification remain source-needed. Do not treat as verified base text.
 */
export const ROPPA_EDITION_SHOUBUNSHA_SET_ID =
  "edition-roppa-shobunsha-showa-diary-set";

export const ROPPA_EDITION_SHOUBUNSHA_SET_SLUG =
  "furukawa-roppa-showa-diary-shobunsha-set";

export const roppaEditions: EditionRecord[] = [
  {
    id: ROPPA_EDITION_SHOUBUNSHA_SET_ID,
    slug: ROPPA_EDITION_SHOUBUNSHA_SET_SLUG,
    workId: WORK_ID,
    writerIds: [WRITER_ID],
    volumeIds: [...ROPPA_VOLUME_IDS],
    title: "Furukawa Roppa Shōwa Diary (multi-volume set)",
    titleJa: "古川ロッパ昭和日記",
    editionLabel: "晶文社刊・複数巻（版次・刷次未確定）",
    editionType: "collected-edition",
    publisher: "晶文社",
    // publicationYear intentionally omitted — timeline notes 1987–1989 as partial only
    physicalFormat: "unknown",
    digitalFormat: "unknown",
    language: "ja",
    printedAuthorName: "古川ロッパ",
    paginationType: "unknown",
    totalPages: null,
    hasIndex: null,
    hasChronology: null,
    hasEditorialNotes: null,
    hasNameIndex: null,
    hasPlaceIndex: null,
    hasPerformanceIndex: null,
    baseTextDescription:
      "Base text / editorial lineage for each volume not yet verified against a colophon.",
    sourceIds: ["src-roppa-cinii-ncid", "src-roppa-shobunsha"],
    bibliographicClaimIds: [
      "claim-title",
      "claim-publisher",
      "claim-author-roppa",
    ],
    conflictIds: ["conflict-late-volume-label"],
    verificationStatus: "partial",
    rightsStatus: "Edition-specific verification required",
    pageReferenceStability: "unknown",
    entrySuitability: "not-reviewed",
    rightsReadiness: "under-review",
    baseEditionStatus: "under-review",
    limitations: [
      "No copy-in-hand verification",
      "Pagination unknown",
      "Per-volume imprint not separated",
      "Rights readiness under review",
      "Late-volume label conflict unresolved",
    ],
    notes:
      "Registered from catalogue architecture (CiNii NCID BN01451714 + publisher announcement). Not copy-verified. ISBN, imprint year, editor, and pagination remain source-needed. New-edition / 新装復刊 variants must not be merged until colophons are compared.",
    lastUpdated: "2026-08-05",
  },
];

/** Known catalogue presence that is not yet a separate EditionRecord. */
export const roppaEditionResearchSlots = [
  {
    id: "slot-roppa-new-edition-reprint",
    label: "新装復刊 / reprint announcement",
    labelJa: "新装復刊案内（版レコード未分離）",
    status: "source-needed" as const,
    note: "Publisher page confirms reprint interest. Do not create a separate EditionRecord until title page and colophon are verified.",
    sourceIds: ["src-roppa-shobunsha"],
  },
];
