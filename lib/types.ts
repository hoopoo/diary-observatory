/** Diary Observatory — core types. Designed for later Supabase migration. */

export type EntityType =
  | "person"
  | "bookstore"
  | "publisher"
  | "publishingImprint"
  | "restaurant"
  | "bar"
  | "theater"
  | "liveHouse"
  | "televisionProgram"
  | "broadcaster"
  | "magazine"
  | "newspaper"
  | "hospital"
  | "station"
  | "company"
  | "building"
  | "street"
  | "object"
  | "book"
  | "food"
  | "neighborhood"
  | "district"
  | "museum"
  | "residence"
  | "literary-archive"
  | "other";

export type EntityStatus =
  | "existing"
  | "closed"
  | "demolished"
  | "destroyed"
  | "rebuilt"
  | "deceased"
  | "ended"
  | "renamed"
  | "relocated"
  | "transformed"
  | "unknown";

export type VerificationStatus = "verified" | "needs-source" | "unverified";

export type EpistemicKind = "fact" | "observation" | "interpretation";

export type DiaryGenre =
  | "diary"
  | "letter"
  | "illness-record"
  | "daybook"
  | "autofiction-adjacent"
  | "journal";

/** Distinguishes diary from letters, poems, autofiction, etc. */
export type SourceForm =
  | "diary"
  | "journal"
  | "letter"
  | "poem"
  | "essay"
  | "autobiographical-fiction"
  | "interview"
  | "diary-derived-work"
  | "autobiographical-work"
  | "serialized-writing"
  | "revised-literary-work";

export type EntityNature =
  | "real"
  | "fictional"
  | "composite"
  | "disputed"
  | "unknown";

export type LifeTextRelationType =
  | "documented"
  | "textually-attested"
  | "probable"
  | "transformed"
  | "revised"
  | "interpreted"
  | "disputed"
  | "unknown";

export type LifeTextRelation = {
  id: string;
  writerId: string;
  livedContext: string;
  livedEventId?: string;
  sourceRecordIds: string[];
  fictionalWorkIds: string[];
  fictionalEntityIds?: string[];
  relationType: LifeTextRelationType;
  summary: string;
  verificationStatus: VerificationStatus | "partial";
  sourceIds: string[];
};

export type PublicationStatus =
  | "published"
  | "partial"
  | "unpublished"
  | "lost"
  | "unknown";

/** Legacy page-section grouping for CategorizedSourceList. */
export type SourceCategory = "primary" | "verification" | "editorial";

export type SourceStatus =
  | "verified"
  | "needed"
  | "primary-unavailable"
  | "verification-pending";

/**
 * Observatory taxonomy (independent of SourceCategory page sections).
 */
export type SourceKind =
  | "primary-text"
  | "bibliography"
  | "archive"
  | "performance"
  | "contemporary-media"
  | "institution"
  | "scholarly"
  | "biography"
  | "commercial"
  | "digital-platform"
  | "other";

export type SourceLevel = "primary" | "secondary" | "tertiary" | "mixed" | "unknown";

export type SourceFormat =
  | "book"
  | "diary"
  | "manuscript"
  | "letter"
  | "notebook"
  | "newspaper"
  | "magazine"
  | "journal-article"
  | "catalogue"
  | "database"
  | "webpage"
  | "pdf"
  | "image"
  | "audio"
  | "video"
  | "broadcast"
  | "program"
  | "poster"
  | "physical-object"
  | "other";

export type SourcePurpose =
  | "private-record"
  | "publication"
  | "advertisement"
  | "official-registration"
  | "institutional-report"
  | "scholarship"
  | "commemoration"
  | "commercial-sale"
  | "entertainment"
  | "legal-record"
  | "archival-description"
  | "unknown";

export type SourceVisibility = "public" | "metadata-only" | "internal" | "restricted";

export type FreshnessPolicy =
  | "static"
  | "occasionally-updated"
  | "frequently-updated"
  | "current-state"
  | "unknown";

/** Observational state of a Web (or mutable) source — not truth status. */
export type SourceState =
  | "active"
  | "redirected"
  | "moved"
  | "updated"
  | "replaced"
  | "restricted"
  | "login-required"
  | "paywalled"
  | "geo-restricted"
  | "removed"
  | "not-found"
  | "gone"
  | "domain-expired"
  | "platform-closed"
  | "account-deleted"
  | "archived"
  | "screenshot-only"
  | "citation-only"
  | "search-index-only"
  | "ai-trace-only"
  | "unknown";

export type PreservationPriority =
  | "critical"
  | "high"
  | "medium"
  | "low"
  | "archival-only";

export type SourceAccessStatus =
  | "accessible"
  | "limited"
  | "application-required"
  | "onsite-only"
  | "purchase-required"
  | "unavailable"
  | "not-checked"
  | "unknown";

/**
 * Embedded lite Source remains valid (id + label).
 * Observatory pages require slug + visibility public|metadata-only.
 */
export type Source = {
  id: string;
  label: string;
  /** Stable URL segment for /sources/[slug]. Required for Observatory registry. */
  slug?: string;
  title?: string;
  titleJa?: string;
  alternateTitles?: string[];
  url?: string;
  archiveUrl?: string;
  note?: string;
  notes?: string;
  needed?: boolean;
  /** Legacy CategorizedSourceList grouping */
  category?: SourceCategory;
  status?: SourceStatus;
  /** Observatory taxonomy */
  kind?: SourceKind;
  sourceLevel?: SourceLevel;
  format?: SourceFormat;
  purpose?: SourcePurpose;
  visibility?: SourceVisibility;
  reliability?: SourceReliability;
  accessStatus?: SourceAccessStatus;
  rightsStatus?: string;
  rightsReadiness?: RightsReadiness;
  language?: string;
  publisher?: string;
  institution?: string;
  authorLabel?: string;
  editorLabel?: string;
  publicationDate?: string;
  creationDate?: string;
  datePrecision?: string;
  editionId?: string;
  volumeId?: string;
  issue?: string;
  pageRange?: string;
  identifiers?: string[];
  accessedAt?: string;
  lastCheckedAt?: string;
  lastUpdated?: string;
  nextReviewRecommendedAt?: string;
  freshnessPolicy?: FreshnessPolicy;
  sourceCopyIds?: string[];
  sourceCaptureIds?: string[];
  /** Optional URL history records; does not replace Source.url. */
  sourceUrlRecordIds?: string[];
  bibliographicClaimIds?: string[];
  factClaimIds?: string[];
  observationClaimIds?: string[];
  interpretationClaimIds?: string[];
  conflictIds?: string[];
  relatedWriterIds?: string[];
  relatedDiaryWorkIds?: string[];
  relatedEntryIds?: string[];
  relatedEntityIds?: string[];
  relatedObservationIds?: string[];
  relatedComparisonIds?: string[];
  researchWorkspaceIds?: string[];
  legacyIds?: string[];
  limitations?: string[];
  preservationPriority?: PreservationPriority;
  /** Explicit current SourceState when registered; otherwise derived cautiously. */
  currentSourceState?: SourceState;
};

export type Writer = {
  id: string;
  slug: string;
  name: string;
  nameJa: string;
  /** Preferred authority form when distinct from display nameJa (e.g. 古川緑波). */
  canonicalNameJa?: string;
  alternateNames?: string[];
  birthYear: number;
  deathYear?: number;
  country: string;
  city: string;
  primaryCity?: string;
  areas?: string[];
  occupations?: string[];
  portrait?: string;
  summary: string;
  summaryJa: string;
  longSummary?: string[];
  lead?: string[];
  themes: string[];
  works: string[];
  featuredQuote?: string;
  featuredQuoteNote?: string;
  tagline: string;
  taglineJa: string;
  /** Differentiating observation axis for this writer — not a character trait. */
  primaryCondition?: PrimaryCondition;
  chronology: ChronologyItem[];
  diaryWorkIds?: string[];
  letterCollectionIds?: string[];
  literaryWorkIds?: string[];
  observationIds?: string[];
  entityIds?: string[];
  selectedEntryIds?: string[];
  relatedWriterIds?: string[];
  sourceIds?: string[];
  lifeTextRelationIds?: string[];
  housingRecordIds?: string[];
  researchQueueIds?: string[];
  performanceRecordIds?: string[];
  bodyRecordIds?: string[];
  foodRecordIds?: string[];
  moneyRecordIds?: string[];
  retailRecordIds?: string[];
  observationStatus?: string;
  lastUpdated?: string;
  verificationStatus?: VerificationStatus;
};

export type ChronologyItem = {
  year: number;
  /** Optional decade/range label when a single year is not asserted */
  yearLabel?: string;
  event: string;
  eventJa: string;
  kind?: EpistemicKind;
  verificationStatus?: VerificationStatus | "partial";
};

export type DiaryWork = {
  id: string;
  slug: string;
  writerId: string;
  title: string;
  titleOriginal: string;
  romanizedTitle?: string;
  startYear: number;
  endYear?: number;
  durationLabel?: string;
  genre: DiaryGenre;
  sourceForm?: SourceForm;
  language: string;
  publicationStatus: PublicationStatus;
  rightsStatus?: string;
  description: string;
  descriptionJa: string;
  summary?: string;
  longSummary?: string[];
  tagline?: string;
  taglineJa?: string;
  primaryCity?: string;
  themes?: string[];
  entryIds?: string[];
  entityIds?: string[];
  observationIds?: string[];
  comparisonIds?: string[];
  sourceIds?: string[];
  indexedYears?: number[];
  researchQueueIds?: string[];
  entryCount?: number | null;
  entryCountVerification?: VerificationStatus | "partial";
  sourceAvailability?: string;
  copyrightNote?: string;
  editionIds?: string[];
  volumeIds?: string[];
  performanceRecordIds?: string[];
  rehearsalRecordIds?: string[];
  waitingRecordIds?: string[];
  audienceRecordIds?: string[];
  bodyRecordIds?: string[];
  foodRecordIds?: string[];
  moneyRecordIds?: string[];
  wartimeContextRecordIds?: string[];
  mediaTransitionRecordIds?: string[];
  indexingStatus?: "in-progress" | "partial" | "complete";
  verificationStatus?: VerificationStatus | "partial";
  lastUpdated?: string;
  sources: Source[];
};

export type DiaryYear = {
  id: string;
  diaryId: string;
  year: number;
  entryIds: string[];
  indexedCount: number;
  researchStatus: "indexed" | "partial" | "not-indexed" | "research-queued";
  themes?: string[];
  summary?: string;
  verificationStatus?: VerificationStatus | "partial";
};

export type DiaryThemeIndex = {
  id: string;
  diaryId: string;
  theme: string;
  label: string;
  labelJa: string;
  entryIds: string[];
  indexedCount: number;
  firstIndexedDate?: string | null;
  lastIndexedDate?: string | null;
  status: "indexed" | "in-progress";
};

export type ResearchQueueItem = {
  id: string;
  diaryId: string;
  date?: string;
  title: string;
  titleJa?: string;
  reason: string;
  priority: "high" | "medium" | "low";
  status: "research-needed" | "source-needed" | "queued" | "in-progress" | "verified";
  sourceNeeded: boolean;
  notes?: string;
};

export type ReferenceEntryStatus =
  | "provenance"
  | "structure"
  | "source-quality"
  | "comparison"
  | "none";

export type DiaryEntry = {
  id: string;
  workId: string;
  date: string; // YYYY-MM-DD
  /** Optional human-readable slug, e.g. 2011-05-02-kenji-nishimura */
  slug?: string;
  writerId?: string;
  dayOfWeek?: string;
  title?: string;
  titleJa?: string;
  summary?: string;
  lead?: string[];
  excerpt?: string;
  source: string;
  sourceType?: string;
  copyrightStatus?: string;
  locationIds: string[];
  primaryLocationIds?: string[];
  personIds: string[];
  entityIds: string[];
  objectIds?: string[];
  purchasedItemIds?: string[];
  timelineEventIds?: string[];
  observationIds?: string[];
  sourceIds?: string[];
  themes: string[];
  bodyCondition?: string;
  weather?: string;
  subjectiveWeather?: string | null;
  measuredWeather?: string | null;
  indoorCondition?: string | null;
  householdActions?: string[];
  notes?: string;
  epistemicKind?: EpistemicKind;
  knownSpending?: { amount: number; currency: string } | null;
  unverifiedSpendingCount?: number;
  verificationStatus?: VerificationStatus | "partial";
  observationStatus?: string;
  lastUpdated?: string;
  /** Only true when Strong/Complete provenance is reached. */
  isReferenceEntry?: boolean;
  referenceReason?: string;
  referenceStatus?: ReferenceEntryStatus;
};

export type EntryTimelineEvent = {
  id: string;
  entryId: string;
  order: number;
  approximateTime: string;
  locationId?: string | null;
  placeLabel: string;
  placeLabelJa?: string;
  title: string;
  titleJa?: string;
  description: string;
  actionType?: string;
  entityIds: string[];
  layer?: EpistemicKind;
  verificationStatus: VerificationStatus;
  sourceNote?: string;
};

export type EvidenceLevel =
  | "explicit"
  | "implied"
  | "contextual"
  | "unknown";

export type EntryObject = {
  id: string;
  entryId: string;
  name: string;
  nameJa?: string;
  type: string;
  evidenceLevel: EvidenceLevel;
  entityId?: string | null;
  description: string;
  verificationStatus: VerificationStatus;
  sourceId?: string;
};

export type RecordSurvivalType =
  | "text-survives"
  | "practice-survives"
  | "object-unknown"
  | "place-unknown"
  | "context-research-needed";

export type RecordSurvival = {
  id: string;
  entryId: string;
  label: string;
  labelJa?: string;
  type: RecordSurvivalType;
  description: string;
  verificationStatus: VerificationStatus | "partial";
};

export type RoutePoint = {
  id: string;
  entryId: string;
  order: number;
  entityId?: string | null;
  label: string;
  labelJa?: string;
  href?: string | null;
  transportMode?: string | null;
  latitude: number | null;
  longitude: number | null;
  verificationStatus: VerificationStatus;
};

export type EntryLayer = {
  type: EpistemicKind;
  text: string;
  sourceId?: string;
  /** Stable claim id for provenance anchors (#fact-...). */
  claimId?: string;
  verificationStatus?: VerificationStatus;
};

export type Entity = {
  id: string;
  slug: string;
  type: EntityType;
  name: string;
  nameOriginal?: string;
  nameJa?: string;
  description: string;
  descriptionJa?: string;
  longDescription?: string[];
  /** Real vs fictional — separate from EntityStatus (existing/closed/…). */
  nature?: EntityNature;
  fictionalRelation?: string;
  address?: string;
  city?: string;
  area?: string;
  country?: string;
  latitude?: number | null;
  longitude?: number | null;
  status: EntityStatus;
  statusAsOf?: string;
  openedYear?: number;
  closedYear?: number;
  relocatedYear?: number;
  transformedYear?: number;
  demolishedYear?: number;
  url?: string;
  notes?: string;
  writerIds: string[];
  entryIds: string[];
  relatedObservationIds?: string[];
  relatedEntityIds?: string[];
  relatedDiaryWorkIds?: string[];
  housingRecordIds?: string[];
  roomRecordIds?: string[];
  objectRecordIds?: string[];
  currentAccessInfoId?: string;
  researchQueueIds?: string[];
  historicalFunctions?: string[];
  currentFunctions?: string[];
  historicalStatus?: EntityStatus | string;
  transformationStatus?: string;
  sourceIds?: string[];
  tagline?: string;
  taglineJa?: string;
  themes?: string[];
  lastUpdated?: string;
  observationStatus?: string;
  lastVerified?: string;
  sourceNeeded: boolean;
  verificationStatus: VerificationStatus;
  sources: Source[];
};

export type EntityStatusEvent = {
  id: string;
  entityId: string;
  date?: string;
  year?: number | "unknown";
  status?: EntityStatus | string;
  label: string;
  labelJa?: string;
  description?: string;
  sourceId?: string;
  verificationStatus: VerificationStatus;
};

export type EntityAppearance = {
  id: string;
  entityId: string;
  entryId: string;
  writerId: string;
  date: string;
  context: string;
  summary: string;
  sourceId?: string;
  verificationStatus: VerificationStatus;
};

export type MoneyAmount = {
  amount: number;
  currency: string;
  taxIncluded?: boolean | null;
  verificationStatus: VerificationStatus;
};

export type PurchasedItem = {
  id: string;
  entryId: string;
  entityId: string;
  type: "book" | "other";
  title: string | null;
  creator: string | null;
  publisher: string | null;
  edition: string | null;
  /** Legacy numeric price; prefer `money` when available. */
  price: number | null;
  currency: string | null;
  money?: MoneyAmount | null;
  purchasedAtLabel?: string | null;
  purchasedAtLabelJa?: string | null;
  verificationStatus: VerificationStatus;
  sourceNote?: string;
};

export type Observation = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  titleEn?: string;
  subtitleEn?: string;
  summary: string;
  summaryJa?: string;
  lead?: string[];
  /** MDX content path relative to content/observations/ */
  contentPath: string;
  writerIds: string[];
  diaryEntryIds: string[];
  entityIds: string[];
  themes: string[];
  periodObserved?: string;
  primaryCity?: string;
  observationStatus?: string;
  publishedAt: string;
  updatedAt: string;
  language: string;
  featuredImage?: string;
  featured?: boolean;
  sources: Source[];
  comparisonIds?: string[];
  relatedObservationIds?: string[];
  fictionalEntityIds?: string[];
  moneyRecordIds?: string[];
  publishingRecordIds?: string[];
  editorialActionIds?: string[];
  editorialFunctionNodeIds?: string[];
  manuscriptIds?: string[];
  submissionIds?: string[];
  archiveAbsenceIds?: string[];
  diaryWorkIds?: string[];
  housingRecordIds?: string[];
  housingObservationIds?: string[];
  roomRecordIds?: string[];
  foodRecordIds?: string[];
  workRecordIds?: string[];
  maintenanceEventIds?: string[];
  maintenanceGapIds?: string[];
  maintenanceProfileIds?: string[];
  performanceRecordIds?: string[];
  backstageRecordIds?: string[];
  preparationRecordIds?: string[];
  rehearsalRecordIds?: string[];
  waitingRecordIds?: string[];
  audienceRecordIds?: string[];
  bodyRecordIds?: string[];
  wartimeContextRecordIds?: string[];
  verificationStatus?: VerificationStatus | "partial";
};

export type DrinkingContextType =
  | "solitary"
  | "social"
  | "public"
  | "ritual"
  | "fictionalized"
  | "unknown";

export type WriterPersona = {
  id: string;
  writerId: string;
  publicLabels: string[];
  mediaChannels: string[];
  documentedTraits: string[];
  amplifiedTraits: string[];
  omittedContexts: string[];
  interpretation: string;
  verificationStatus: VerificationStatus | "partial";
  sourceIds: string[];
};


export type MoneyCategory =
  | "housing"
  | "energy"
  | "food"
  | "alcohol"
  | "movement"
  | "books"
  | "communication"
  | "work"
  | "leisure"
  | "health"
  | "income"
  | "debt"
  | "other";

export type IncomeOrExpense =
  | "income"
  | "expense"
  | "transfer"
  | "debt"
  | "unknown";

export type CostVisibility =
  | "priced"
  | "cost-bearing"
  | "unpaid-labor"
  | "gifted"
  | "institutionally-supported"
  | "unknown";

export type MoneyRecord = {
  id: string;
  writerId: string;
  entryId?: string;
  diaryWorkId?: string;
  date?: string;
  category: MoneyCategory;
  subcategory?: string;
  /** Null when amount is not verified — never treat as 0. */
  amount: number | null;
  currency?: string | null;
  originalTextValue?: string | null;
  context: string;
  contextJa?: string;
  relatedEntityIds?: string[];
  relatedItemIds?: string[];
  incomeOrExpense: IncomeOrExpense;
  costVisibility: CostVisibility;
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
  /** Prevent double-counting when same spend appears on entry/entity. */
  deduplicationKey?: string;
  sourceRecordId?: string;
  placeLabel?: string;
  placeHref?: string;
  objectLabel?: string;
};

export type MoneySummary = {
  writerId: string;
  knownIncomeByCurrency: Record<string, number>;
  knownExpensesByCurrency: Record<string, number>;
  unknownRecordCount: number;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};


export type SubmissionMethod =
  | "hand-delivered"
  | "postal"
  | "editorial-request"
  | "agent"
  | "digital"
  | "platform"
  | "self-published"
  | "unknown";

export type SubmissionOutcome =
  | "accepted"
  | "rejected"
  | "revised"
  | "published"
  | "returned"
  | "unanswered"
  | "unknown";

export type AudienceScale =
  | "personal"
  | "small-community"
  | "niche"
  | "regional"
  | "national"
  | "international"
  | "unknown";

export type PaymentStatus =
  | "paid"
  | "unpaid"
  | "copies-only"
  | "supported"
  | "unknown";

export type PublishingRecord = {
  id: string;
  writerId: string;
  date?: string;
  sourceForm?: SourceForm;
  manuscriptType?: string;
  submissionMethod: SubmissionMethod;
  publicationId?: string;
  editorIds?: string[];
  publisherId?: string;
  costRecordIds?: string[];
  outcome: SubmissionOutcome;
  audienceScale: AudienceScale;
  paymentStatus: PaymentStatus;
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
  label?: string;
  labelJa?: string;
};

export type PublishingSystem = {
  id: string;
  writerId: string;
  period: string;
  nodes: string[];
  submissionMethods: SubmissionMethod[];
  selectionMechanisms: string[];
  distributionMethods: string[];
  audienceScale: AudienceScale;
  paymentModels: string[];
  sourceIds: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  note?: string;
};


export type ActorType =
  | "editor"
  | "publisher"
  | "author"
  | "producer"
  | "bookseller"
  | "reader"
  | "algorithm"
  | "ai"
  | "platform"
  | "community"
  | "curator"
  | "museum"
  | "archive-institution"
  | "unknown";

export type EditorialActionType =
  | "discover"
  | "select"
  | "reject"
  | "revise"
  | "title"
  | "structure"
  | "position"
  | "schedule"
  | "distribute"
  | "promote"
  | "recommend"
  | "suppress"
  | "archive"
  | "monetize"
  | "arrange"
  | "explain"
  | "reconstruct"
  | "protect"
  | "contextualize"
  | "omit"
  | "update"
  | "unknown";

export type EditorialOutcome =
  | "accepted"
  | "rejected"
  | "revised"
  | "published"
  | "amplified"
  | "suppressed"
  | "delayed"
  | "unknown";

export type EditorialAction = {
  id: string;
  actorType: ActorType;
  actorId?: string;
  writerId?: string;
  workId?: string;
  publishingRecordId?: string;
  date?: string;
  actionType: EditorialActionType;
  description: string;
  descriptionJa?: string;
  outcome: EditorialOutcome;
  explanationAvailable: boolean | "sometimes" | "unknown";
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
  agencyNote?: string;
};

export type EditorialFunctionNode = {
  id: string;
  function: string;
  label: string;
  labelJa: string;
  historicalActorTypes: ActorType[];
  currentActorTypes: ActorType[];
  relatedRecordIds?: string[];
  risks: string[];
  benefits: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type EditorialFunctionEdge = {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  relation: string;
  period?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type EditorialSystemProfile = {
  id: string;
  writerId: string;
  period: string;
  primaryActors: string[];
  selectionMechanisms: string[];
  revisionMechanisms: string[];
  distributionMechanisms: string[];
  feedbackMechanisms: string[];
  transparency: string;
  accountability: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  note?: string;
};


export type ManuscriptOutcome =
  | "accepted"
  | "rejected"
  | "returned"
  | "unanswered"
  | "revision-requested"
  | "deferred"
  | "cancelled"
  | "withdrawn"
  | "abandoned"
  | "destroyed"
  | "lost"
  | "posthumously-published"
  | "unknown";

export type ArchiveStatus =
  | "survives"
  | "partial"
  | "returned"
  | "destroyed"
  | "lost"
  | "private"
  | "institution-held"
  | "family-held"
  | "unknown";

export type PosthumousStatus =
  | "not-applicable"
  | "unpublished"
  | "published-posthumously"
  | "withheld"
  | "disputed"
  | "unknown";

export type RecipientType =
  | "editor"
  | "magazine"
  | "newspaper"
  | "publisher"
  | "prize"
  | "agent"
  | "platform"
  | "individual"
  | "unknown";

export type ResponseArtifactType =
  | "rejection-letter"
  | "returned-manuscript"
  | "editorial-note"
  | "email"
  | "platform-status"
  | "no-response"
  | "unknown";

export type ManuscriptRecord = {
  id: string;
  writerId: string;
  title?: string;
  workingTitle?: string;
  dateStarted?: string;
  dateCompleted?: string;
  sourceForm?: SourceForm;
  outcome: ManuscriptOutcome;
  submissionIds?: string[];
  editorialActionIds?: string[];
  archiveStatus: ArchiveStatus;
  publicationId?: string;
  posthumousStatus: PosthumousStatus;
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
  description?: string;
  descriptionJa?: string;
};

export type SubmissionRecord = {
  id: string;
  manuscriptId?: string;
  writerId: string;
  date?: string;
  recipientType: RecipientType;
  recipientId?: string;
  method: string;
  outcome: ManuscriptOutcome;
  responseDate?: string;
  responseArtifactIds?: string[];
  costRecordIds?: string[];
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
  description?: string;
  descriptionJa?: string;
};

export type ResponseArtifact = {
  id: string;
  submissionId?: string;
  type: ResponseArtifactType;
  archiveLocation?: string;
  description: string;
  descriptionJa?: string;
  rightsStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type AbsenceType =
  | "missing-manuscript"
  | "destroyed-draft"
  | "lost-letter"
  | "unpublished-work"
  | "unnamed-person"
  | "redacted-passage"
  | "unknown-period"
  | "unknown-outcome"
  | "missing-address"
  | "demolished-residence"
  | "undocumented-room"
  | "missing-floor-plan"
  | "missing-rent-record"
  | "missing-interior-image"
  | "unknown-residence-period"
  | "other";

export type ArchiveAbsence = {
  id: string;
  writerId: string;
  relatedWorkId?: string;
  absenceType: AbsenceType;
  description: string;
  descriptionJa?: string;
  evidence: string;
  likelyCause?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};


export type EditionType =
  | "serialization"
  | "first-edition"
  | "revised-edition"
  | "reconstructed-edition"
  | "collected-edition"
  | "modern-edition"
  | "reprint"
  | "new-edition"
  | "paperback"
  | "digital-edition"
  | "facsimile"
  | "excerpt-edition"
  | "unknown";

export type PhysicalFormat =
  | "hardcover"
  | "paperback"
  | "bunko"
  | "library-binding"
  | "facsimile"
  | "unknown";

export type DigitalFormat =
  | "none"
  | "fixed-layout"
  | "reflowable"
  | "scanned-pdf"
  | "database-viewer"
  | "unknown";

export type PaginationType =
  | "printed-page"
  | "image-page"
  | "location-number"
  | "chapter-only"
  | "mixed"
  | "unknown";

export type EditionBaseStatus =
  | "selected"
  | "provisional"
  | "alternative"
  | "comparison"
  | "rejected"
  | "under-review"
  | "not-evaluated";

export type ResearchLogAction =
  | "catalogue-located"
  | "colophon-verified"
  | "title-page-verified"
  | "pagination-verified"
  | "copy-accessed"
  | "rights-reviewed"
  | "base-edition-selected"
  | "conflict-opened"
  | "conflict-resolved"
  | "other";

export type ResearchLogEntry = {
  id: string;
  editionId: string;
  date: string;
  action: ResearchLogAction;
  target?: string;
  result?: string;
  changedFields?: string[];
  sourceIds?: string[];
  status?: VerificationStatus | "partial" | "indexing";
  note?: string;
};

export type EditionReadinessState =
  | "ready"
  | "partial"
  | "blocked"
  | "not-started"
  | "not-applicable";

export type EditionReadinessItem = {
  id: string;
  label: string;
  labelJa?: string;
  state: EditionReadinessState;
  note?: string;
};

export type EditionRecord = {
  id: string;
  /** Stable URL segment for /editions/[slug]. Required for Observatory pages. */
  slug: string;
  workId: string;
  writerIds?: string[];
  volumeIds?: string[];
  title: string;
  titleJa?: string;
  editionLabel?: string;
  editionType: EditionType;
  publisher?: string;
  publicationYear?: number;
  publicationDate?: string;
  editorIds?: string[];
  compilerIds?: string[];
  isbn?: string;
  physicalFormat?: PhysicalFormat;
  digitalFormat?: DigitalFormat;
  language?: string;
  scriptStyle?: string;
  paginationType?: PaginationType;
  totalPages?: number | null;
  hasIndex?: boolean | null;
  hasChronology?: boolean | null;
  hasEditorialNotes?: boolean | null;
  hasNameIndex?: boolean | null;
  hasPlaceIndex?: boolean | null;
  hasPerformanceIndex?: boolean | null;
  baseTextDescription?: string;
  sourceEditionIds?: string[];
  baseEditionId?: string;
  baseText?: string;
  sourceTextBasis?: string;
  additions?: string;
  omissions?: string;
  structuralChanges?: string;
  knownAdditions?: string;
  knownOmissions?: string;
  knownReordering?: string;
  editorialResponsibility?: string;
  printedAuthorName?: string;
  notes?: string;
  limitations?: string[];
  sourceIds: string[];
  sourceCopyIds?: string[];
  bibliographicClaimIds?: string[];
  conflictIds?: string[];
  researchLogIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  rightsStatus?: string;
  pageReferenceStability?: PageReferenceStability;
  entrySuitability?: EntrySuitability;
  rightsReadiness?: RightsReadiness;
  baseEditionStatus?: EditionBaseStatus;
  lastUpdated?: string;
};

export type HousingType =
  | "boarding"
  | "rental"
  | "shared"
  | "owned"
  | "temporary"
  | "unknown";

export type AddressLevel =
  | "exact-public"
  | "approximate"
  | "district-only"
  | "private"
  | "unknown";

export type HousingRecord = {
  id: string;
  writerId: string;
  placeId?: string;
  label: string;
  labelJa?: string;
  startDate?: string;
  endDate?: string;
  housingType: HousingType;
  addressLevel: AddressLevel;
  rentRecordIds?: string[];
  coResidentIds?: string[];
  domesticFeatures?: string[];
  writingUse?: string;
  sourceIds: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type MovementReason =
  | "family"
  | "economic"
  | "housing"
  | "education"
  | "literary"
  | "relationship"
  | "institutional"
  | "wartime"
  | "personal"
  | "unknown";

/** Writer-level research queue (not diary-date queue). */
export type WriterResearchQueueItem = {
  id: string;
  title: string;
  titleJa?: string;
  type: string;
  priority: number;
  status: "queued" | "researching" | "source-needed" | "disputed" | "verified";
  sourceNeeded: boolean;
  note?: string;
};


export type AppearanceStatus =
  | "present"
  | "absent"
  | "modified"
  | "expanded"
  | "reduced"
  | "reordered"
  | "unknown";

export type TextAppearance = {
  id: string;
  recordType: string;
  recordId: string;
  editionId: string;
  textFragmentId?: string;
  appearanceStatus: AppearanceStatus;
  position?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type WorkRecord = {
  id: string;
  writerId: string;
  workId?: string;
  date?: string;
  jobType: string;
  jobTypeJa?: string;
  employerEntityId?: string;
  locationId?: string;
  wageMoneyRecordId?: string;
  shift?: string;
  bodyContext?: string;
  relatedTextFragmentIds?: string[];
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type MovementRecord = {
  id: string;
  writerId: string;
  workId?: string;
  date?: string;
  originPlaceId?: string;
  destinationPlaceId?: string;
  transportMode?: string;
  reason: MovementReason;
  costRecordIds?: string[];
  companionIds?: string[];
  relatedHousingRecordIds?: string[];
  relatedWorkRecordIds?: string[];
  textAppearanceIds?: string[];
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type MoneyFragmentData = {
  id: string;
  amount: string;
  currency: string;
  context: string;
  writer: string;
  date?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type Comparison = {
  id: string;
  date: string;
  title: string;
  titleJa?: string;
  entryIds: string[];
  cities: string[];
  countries: string[];
  themes: string[];
  summary: string;
  summaryJa?: string;
  status: "available" | "coming";
  /** When set, list cards link here instead of /compare#id */
  href?: string;
  indexedLives?: number;
  comparisonStatus?: SameDayComparisonStatus;
};

/** Writer-to-writer comparative observatory (distinct from Same Day). */
export type WriterComparison = {
  id: string;
  slug: string;
  title: string;
  titleJa: string;
  subtitle: string;
  subtitleJa: string;
  writerIds: string[];
  diaryWorkIds: string[];
  entryIds: string[];
  entityIds: string[];
  fictionalEntityIds?: string[];
  observationIds: string[];
  /** Related pairwise / thematic comparison page ids */
  comparisonIds?: string[];
  themes: string[];
  lifeTextRelationIds?: string[];
  housingRecordIds?: string[];
  foodRecordIds?: string[];
  moneyRecordIds?: string[];
  workRecordIds?: string[];
  movementRecordIds?: string[];
  literarySystemIds?: string[];
  writingBodyProfileIds?: string[];
  sourceIds?: string[];
  comparisonStatus: "active" | "partial" | "coming";
  verificationStatus: VerificationStatus | "partial";
  lastUpdated: string;
};

export type UrbanDiaryProfile = {
  writerId: string;
  cityId: string;
  period: string;
  primaryConditions: string[];
  movementPattern: string;
  literarySystemId: string;
  writingBodyProfileId: string;
  recurringActions: string[];
  urbanNodeIds: string[];
  disappearanceTypes: string[];
  verificationStatus: VerificationStatus | "partial";
};

export type LifeSpeedPattern = {
  id: string;
  writerId: string;
  steps: Array<{ label: string; labelJa?: string }>;
  label: string;
  labelJa: string;
  layer: EpistemicKind;
  verificationStatus: VerificationStatus | "partial";
  sourceIds: string[];
};

export type LiterarySystem = {
  id: string;
  writerId: string;
  nodes: string[];
  period: string;
  summary: string;
  verificationStatus: VerificationStatus | "partial";
  sourceIds: string[];
};

export type WritingBodyProfile = {
  writerId: string;
  labor: string[];
  sleep: string[];
  alcohol: string[];
  movement: string[];
  pain: string[];
  aging: string[];
  writingRoutine: string[];
  verificationStatus: VerificationStatus | "partial";
};

export type PrimaryCondition =
  | "environment"
  | "media"
  | "labor"
  | "maintenance"
  | "performance"
  | "household-economy"
  | "mixed"
  | "unknown";

export type RetailRecord = {
  id: string;
  writerId: string;
  date?: string;
  businessType?: string;
  entityId?: string;
  itemCategory?: string;
  /** Null when amount is not verified — never treat as 0. */
  income?: number | null;
  expenditure?: number | null;
  currency?: string | null;
  customerContext?: string;
  householdRelation?: string;
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type UrbanLifeProfile = {
  writerId: string;
  primaryCondition: PrimaryCondition;
  secondaryConditions: PrimaryCondition[];
  movementPattern: string;
  housingCondition: string;
  paidWorkVisibility: "documented" | "implied" | "historical-context" | "not-indexed";
  unpaidWorkVisibility: "documented" | "implied" | "historical-context" | "not-indexed";
  foodVisibility: "documented" | "implied" | "historical-context" | "not-indexed";
  publishingSystemId?: string;
  bodyProfileId?: string;
  preservationProfileId?: string;
  verificationStatus: VerificationStatus | "partial";
};

export type MaintenanceProfile = {
  writerId: string;
  paidWork: string;
  domesticWork: string;
  foodWork: string;
  housingWork: string;
  relationshipWork: string;
  selfMaintenance: string;
  supportPersonIds?: string[];
  supportInstitutionIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type MaintenanceCategory =
  | "food"
  | "housing"
  | "heating"
  | "cleaning"
  | "laundry"
  | "clothing"
  | "sleep"
  | "health"
  | "money"
  | "money-management"
  | "movement"
  | "correspondence"
  | "relationship"
  | "care"
  | "family-care"
  | "shopping"
  | "household-management"
  | "retail-work"
  | "publishing"
  | "writing-support"
  | "administration"
  | "other";

export type PaidStatus =
  | "paid"
  | "unpaid"
  | "self-maintenance"
  | "institutionally-supported"
  | "gifted"
  | "unknown";

export type MaintenanceActorStatus = "known" | "unknown" | "not-indexed";

export type MaintenanceEvent = {
  id: string;
  writerId: string;
  entryId?: string;
  date?: string;
  category: MaintenanceCategory;
  action: string;
  actionJa?: string;
  actorIds: string[];
  actorStatus: MaintenanceActorStatus;
  beneficiaryIds?: string[];
  placeId?: string;
  relatedFoodRecordIds?: string[];
  relatedHousingRecordIds?: string[];
  relatedMoneyRecordIds?: string[];
  relatedWorkRecordIds?: string[];
  paidStatus: PaidStatus;
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type MaintenanceGap = {
  id: string;
  writerId: string;
  relatedEntryId?: string;
  category: MaintenanceCategory;
  question: string;
  questionJa: string;
  knownContext: string;
  missingInformation: string;
  significance: string;
  verificationStatus: "unknown" | "not-indexed" | "partial";
  sourceIds: string[];
};

export type PerformanceType =
  | "stage"
  | "rehearsal"
  | "film"
  | "radio"
  | "television"
  | "reading"
  | "event"
  | "unknown";

export type PerformanceOutcome =
  | "completed"
  | "modified"
  | "reduced"
  | "interrupted"
  | "cancelled"
  | "poorly-received"
  | "not-broadcast"
  | "technically-failed"
  | "unknown";

export type PerformanceOutcomeReason =
  | "body"
  | "technical"
  | "institutional"
  | "transport"
  | "weather"
  | "war"
  | "audience"
  | "staffing"
  | "unknown";

export type PerformanceRecord = {
  id: string;
  writerId: string;
  date?: string;
  performanceType: PerformanceType;
  productionTitle?: string;
  venueEntityId?: string;
  showCount?: number | null;
  role?: string;
  collaborators?: string[];
  audienceRecordIds?: string[];
  bodyRecordIds?: string[];
  foodRecordIds?: string[];
  moneyRecordIds?: string[];
  outcome?: PerformanceOutcome;
  outcomeReason?: PerformanceOutcomeReason;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type AudienceRecord = {
  id: string;
  performanceId?: string;
  date?: string;
  venueId?: string;
  attendance?: string;
  occupancyStatus?: OccupancyStatus;
  reaction?: string;
  sales?: string;
  review?: string;
  ticketContext?: string;
  institutionalContext?: string;
  historicalPeriod?: string;
  reviewSourceIds?: string[];
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds?: string[];
  notes?: string;
};

export type BodyRecordCategory =
  | "weight"
  | "appetite"
  | "voice"
  | "fatigue"
  | "sleep"
  | "pain"
  | "illness"
  | "hospitalization"
  | "medication"
  | "mobility"
  | "performance-capacity"
  | "other";

export type BodyRecord = {
  id: string;
  writerId: string;
  date?: string;
  category: BodyRecordCategory;
  value?: string;
  unit?: string;
  description: string;
  workImpact?: string;
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type PopularityIndicatorType =
  | "attendance"
  | "billing"
  | "press"
  | "invitation"
  | "income"
  | "audience-reaction"
  | "media-appearance"
  | "anecdotal"
  | "unknown";

export type PopularityRecord = {
  id: string;
  writerId: string;
  date?: string;
  indicatorType: PopularityIndicatorType;
  value?: string;
  source?: string;
  performanceId?: string;
  mediaId?: string;
  interpretation?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing" | "unknown";
};

export type EntertainmentLaborProfile = {
  writerId: string;
  rehearsal: string;
  performance: string;
  travel: string;
  waiting: string;
  publicity: string;
  writing: string;
  meetings: string;
  recovery: string;
  administration: string;
  management: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type DiaryVolumeScaffold = {
  id: string;
  key: "prewar" | "wartime" | "postwar" | "late";
  label: string;
  labelJa: string;
  coverageLabel: string;
  coverageLabelJa: string;
  publisher: string;
  bibliographicStatus: string;
  verificationStatus: VerificationStatus | "partial";
  sourceIds: string[];
  notes?: string;
};

export type PreservationProfile = {
  writerId: string;
  diaryContinuity: string;
  editionDepth: string;
  mediaArchive: string;
  physicalSites: string;
  institutionalArchives: string;
  knownAbsences: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type WriterMyth = {
  writerId: string;
  publicImage: string;
  mediaChannels: string[];
  documentedTraits: string[];
  exaggeratedTraits: string[];
  interpretation: string;
  sourceIds: string[];
  verificationStatus: VerificationStatus | "partial";
};

export type WriterComparisonMatrixRow = {
  id: string;
  key: string;
  label: string;
  labelJa: string;
  valueByWriterId: Record<string, string>;
  noteByWriterId?: Record<string, string>;
  verificationStatusByWriterId: Record<
    string,
    VerificationStatus | "partial" | "unknown" | "not-indexed"
  >;
};

/** Alias for three-writer (or N-writer) matrix rows. */
export type ThreeWriterMatrixRow = WriterComparisonMatrixRow;

export type SameDayComparisonStatus =
  | "open"
  | "partial"
  | "multi-entry"
  | "verified"
  | "archived";

export type SameDaySlotStatus =
  | "indexed"
  | "open"
  | "not-applicable"
  | "research-needed";

export type SameDay = {
  id: string;
  slug: string;
  date: string;
  title: string;
  titleJa: string;
  subtitle: string;
  subtitleJa: string;
  summary: string;
  lead: string[];
  entryIds: string[];
  writerIds: string[];
  cityIds: string[];
  countries: string[];
  languages: string[];
  themes: string[];
  publicContextIds: string[];
  sourceIds: string[];
  comparisonStatus: SameDayComparisonStatus;
  verificationStatus?: VerificationStatus | "partial";
  researchQueueIds?: string[];
  lastUpdated: string;
};

export type SameDayEvidenceSummary = {
  sameDayId: string;
  explicitItems: string[];
  impliedItems: string[];
  contextualItems: string[];
  unknownItems: string[];
};

export type SameDateAcrossYears = {
  month: number;
  day: number;
  indexedEntryIds: string[];
  researchQueueIds: string[];
};

export type SameDaySlot = {
  id: string;
  sameDayId: string;
  city: string;
  cityJa?: string;
  country?: string;
  entryId?: string | null;
  status: SameDaySlotStatus;
  note: string;
  noteJa?: string;
  researchStatus?: string;
};

export type SameDayMatrixRow = {
  id: string;
  key: string;
  label: string;
  labelJa: string;
  valueByEntryId: Record<string, string>;
  verificationStatusByEntryId: Record<string, VerificationStatus | "unknown">;
};

export type ObservationAxis = {
  id: string;
  label: string;
  labelJa: string;
  question: string;
  questionJa: string;
  href?: string;
};

export type SurvivalBucket = {
  status: EntityStatus;
  count: number;
};

export type SurvivalSummaryData = {
  label: string;
  labelJa: string;
  date?: string;
  buckets: SurvivalBucket[];
  note?: string;
  noteJa?: string;
};

export type EntityFunctionStatus =
  | "original-function"
  | "adapted-function"
  | "preserved-function"
  | "museum-function"
  | "commercial-function"
  | "inactive"
  | "unknown";

export type ObjectAuthenticity =
  | "original"
  | "associated"
  | "replica"
  | "reconstructed"
  | "curatorial-arrangement"
  | "unknown";

export type PreservationLayer =
  | "original"
  | "repaired"
  | "restored"
  | "reconstructed"
  | "replaced"
  | "relocated"
  | "interpreted"
  | "unknown";

export type RoomRecord = {
  id: string;
  entityId: string;
  name: string;
  nameJa?: string;
  historicalFunction?: string;
  currentDisplayFunction?: string;
  floor?: string;
  dimensions?: string;
  relatedPersonIds?: string[];
  relatedActivityIds?: string[];
  relatedObjectIds?: string[];
  publicAccessStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type ObjectRecord = {
  id: string;
  entityId: string;
  name: string;
  nameJa?: string;
  type: string;
  historicalUse?: string;
  relationToWriter?: string;
  currentDisplayStatus?: string;
  ownershipStatus?: string;
  authenticity?: ObjectAuthenticity;
  rightsStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type CurrentAccessInfo = {
  id: string;
  entityId: string;
  status?: string;
  operator?: string;
  openingHours?: string;
  closureDays?: string;
  admission?: string;
  transport?: string;
  accessibility?: string;
  photographyPolicy?: string;
  officialUrl?: string;
  checkedAt?: string;
  sourceIds: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type EntityResearchQueueItem = {
  id: string;
  entityId: string;
  title: string;
  titleJa?: string;
  priority: number;
  status: "queued" | "researching" | "source-needed" | "disputed" | "verified";
  sourceNeeded: boolean;
  note?: string;
};

export type EntityTimelineItem = {
  id: string;
  entityId: string;
  date?: string;
  period?: string;
  event: string;
  eventJa?: string;
  description?: string;
  layer: "historical" | "preservation" | "museum" | "present" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type HousingObservationType =
  | "stability"
  | "affordability"
  | "privacy"
  | "writing-support"
  | "domestic-work"
  | "movement-impact"
  | "preservation"
  | "disappearance"
  | "ownership"
  | "unknown";

export type HousingSurvivalStatus =
  | "existing"
  | "preserved"
  | "transformed"
  | "demolished"
  | "replaced"
  | "address-unknown"
  | "private"
  | "undocumented"
  | "unknown";

export type PreservationConditionKind =
  | "ownership"
  | "cultural-recognition"
  | "institutional-support"
  | "estate-support"
  | "architectural-value"
  | "public-access"
  | "funding"
  | "unknown";

export type HousingObservation = {
  id: string;
  writerId: string;
  housingRecordId?: string;
  observationType: HousingObservationType;
  summary: string;
  summaryJa?: string;
  layer: EpistemicKind | "unknown";
  evidenceLevel?: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type VolumeType =
  | "prewar"
  | "wartime"
  | "postwar"
  | "late-years"
  | "supplemental"
  | "collected"
  | "unknown";

export type CoveredDatePrecision =
  | "exact"
  | "year-only"
  | "approximate"
  | "conflicting"
  | "unknown";

export type VolumeRecord = {
  id: string;
  diaryWorkId: string;
  title: string;
  titleJa: string;
  volumeNumber?: string | number;
  volumeType: VolumeType;
  coveredStartDate?: string;
  coveredEndDate?: string;
  coveredDatePrecision?: CoveredDatePrecision;
  coverageLabel?: string;
  coverageLabelJa?: string;
  missingPeriods?: string[];
  coverageEvidence?: string;
  publicationDate?: string;
  publisher?: string;
  editor?: string;
  baseText?: string;
  editionIds?: string[];
  entryIds?: string[];
  sourceIds: string[];
  rightsStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type TimelineRecordType =
  | "performance"
  | "rehearsal"
  | "waiting"
  | "food"
  | "body"
  | "audience"
  | "money"
  | "media"
  | "war"
  | "travel"
  | "other";

export type TimelineRecord = {
  id: string;
  date?: string;
  period?: "prewar" | "wartime" | "postwar" | "late";
  volumeId?: string;
  recordType: TimelineRecordType;
  title: string;
  summary?: string;
  relatedRecordIds?: string[];
  historicalContextIds?: string[];
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type WaitingType =
  | "backstage"
  | "rehearsal"
  | "transport"
  | "broadcast"
  | "medical"
  | "audience"
  | "institutional"
  | "other"
  | "unknown";

export type WaitingRecord = {
  id: string;
  writerId: string;
  entryId?: string;
  date?: string;
  waitingType: WaitingType;
  duration?: string;
  placeId?: string;
  relatedPerformanceId?: string;
  bodyContext?: string;
  paidStatus?: "paid" | "unpaid" | "unknown";
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type PerformanceImpact =
  | "none-recorded"
  | "minor"
  | "reduced-capacity"
  | "delayed"
  | "role-adjusted"
  | "cancelled"
  | "hospitalized"
  | "recovery"
  | "unknown";

export type OccupancyStatus =
  | "full"
  | "strong"
  | "moderate"
  | "weak"
  | "empty"
  | "unknown";

export type WartimeContextType =
  | "censorship"
  | "program-restriction"
  | "entertainment-policy"
  | "rationing"
  | "air-raids"
  | "blackout"
  | "transport"
  | "theater-damage"
  | "institutional-performance"
  | "audience-change"
  | "food-shortage"
  | "health-impact"
  | "other";

export type WartimeContextRecord = {
  id: string;
  date?: string;
  contextType: WartimeContextType;
  description: string;
  affectedPerformanceIds?: string[];
  affectedEntityIds?: string[];
  affectedFoodRecordIds?: string[];
  affectedMovementRecordIds?: string[];
  sourceIds: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type EntertainmentMoneyCategory =
  | "performance-fee"
  | "company-revenue"
  | "ticket-revenue"
  | "venue-cost"
  | "costume"
  | "transport"
  | "food"
  | "publicity"
  | "medical"
  | "company-maintenance"
  | "broadcast-income"
  | "film-income"
  | "unknown";

export type EntertainmentMoneyRecord = {
  id: string;
  date?: string;
  category: EntertainmentMoneyCategory;
  amount?: string;
  currency?: string;
  payerEntityId?: string;
  recipientEntityId?: string;
  relatedPerformanceId?: string;
  relatedMediaId?: string;
  costVisibility?: "explicit" | "implied" | "unknown";
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type PerformanceTiming =
  | "before-performance"
  | "between-shows"
  | "after-performance"
  | "rehearsal-day"
  | "rest-day"
  | "hospitalization"
  | "unknown";


export type BackstageCategory =
  | "rehearsal"
  | "waiting"
  | "dressing"
  | "makeup"
  | "food"
  | "body-check"
  | "conflict"
  | "administration"
  | "audience-monitoring"
  | "recovery"
  | "medical"
  | "travel"
  | "cancellation"
  | "substitution"
  | "other";

/** Aggregation view over existing rehearsal/waiting/food/body/audience/performance records. */
export type BackstageRecord = {
  id: string;
  writerId: string;
  diaryWorkId?: string;
  volumeId?: string;
  entryId?: string;
  date?: string;
  category: BackstageCategory;
  summary: string;
  placeId?: string;
  relatedPerformanceIds?: string[];
  relatedPersonIds?: string[];
  relatedOrganizationIds?: string[];
  relatedWaitingRecordIds?: string[];
  relatedFoodRecordIds?: string[];
  relatedBodyRecordIds?: string[];
  relatedAudienceRecordIds?: string[];
  relatedMaintenanceEventIds?: string[];
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type PreparationType =
  | "script"
  | "rehearsal"
  | "costume"
  | "makeup"
  | "travel"
  | "scheduling"
  | "technical"
  | "body"
  | "meal"
  | "waiting"
  | "other";

export type PerformancePreparationRecord = {
  id: string;
  performanceId?: string;
  date?: string;
  preparationType: PreparationType;
  startTime?: string;
  endTime?: string;
  duration?: string;
  participantIds?: string[];
  placeId?: string;
  bodyContext?: string;
  costRecordIds?: string[];
  evidenceLevel: "explicit" | "implied" | "contextual" | "unknown";
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type FoodPerformanceRelation =
  | "fuel"
  | "recovery"
  | "social-coordination"
  | "business"
  | "institutional-provision"
  | "rationed"
  | "medically-managed"
  | "incidental"
  | "unknown";

export type WaitingCostVisibility =
  | "priced"
  | "cost-bearing"
  | "time-bearing"
  | "body-bearing"
  | "unknown";


/** —— Entry selection research workspace —— */

export type DatePrecision =
  | "exact"
  | "probable"
  | "inferred"
  | "disputed"
  | "unknown";

export type CandidateType =
  | "performance-day"
  | "rehearsal-day"
  | "double-performance-day"
  | "wartime-performance-day"
  | "broadcast-day"
  | "illness-performance-day"
  | "cancellation-day"
  | "hospitalization-day"
  | "audience-shift-day"
  | "food-rich-day"
  | "travel-performance-day"
  | "other";

export type QualificationStatus =
  | "unreviewed"
  | "incomplete"
  | "source-needed"
  | "edition-confirmed"
  | "qualified"
  | "disqualified"
  | "disputed";

export type SelectionStatus =
  | "candidate"
  | "shortlisted"
  | "selected"
  | "rejected"
  | "deferred"
  | "superseded";

export type PresenceStatus =
  | "confirmed"
  | "partial"
  | "mentioned"
  | "absent"
  | "not-checked"
  | "unknown";

export type CandidatePresenceKey =
  | "performance"
  | "rehearsal"
  | "waiting"
  | "backstage"
  | "food"
  | "body"
  | "audience"
  | "movement"
  | "money"
  | "media"
  | "housing"
  | "medical"
  | "wartime"
  | "maintenance"
  | "people"
  | "entities";

export type CandidatePresenceItem = {
  status: PresenceStatus;
  relatedRecordIds?: string[];
  evidenceLevel?: EvidenceLevel;
  verificationStatus?: VerificationStatus | "partial" | "indexing";
  note?: string;
};

export type CandidateRecordPresence = Partial<
  Record<CandidatePresenceKey, CandidatePresenceItem>
>;

export type AxisRating = "high" | "medium" | "low" | "not-checked" | "unknown";

export type CandidateScoreAxes = {
  sourceCompleteness: AxisRating;
  dailyDensity: AxisRating;
  crossLinkPotential: AxisRating;
  backstageVisibility: AxisRating;
  bodyVisibility: AxisRating;
  foodVisibility: AxisRating;
  audienceVisibility: AxisRating;
  historicalSignificance: AxisRating;
  rightsSafety: AxisRating;
  comparisonPotential: AxisRating;
};

export type ExcerptPolicy =
  | "no-quotation"
  | "minimal-quotation"
  | "paraphrase-only"
  | "public-domain-text"
  | "permission-required"
  | "unknown";

export type RejectionReason =
  | "date-not-confirmed"
  | "edition-not-confirmed"
  | "page-not-confirmed"
  | "daily-boundary-unclear"
  | "source-inaccessible"
  | "insufficient-daily-detail"
  | "mostly-retrospective"
  | "copyright-risk"
  | "conflicting-sources"
  | "no-verifiable-records"
  | "duplicated-by-better-candidate"
  | "deferred-for-research"
  | "other";

export type EntryCandidate = {
  id: string;
  writerId: string;
  diaryWorkId: string;
  date?: string;
  datePrecision: DatePrecision;
  volumeId?: string;
  editionId?: string;
  startPage?: number | null;
  endPage?: number | null;
  sourceIds: string[];
  shortDescription?: string;
  candidateType: CandidateType;
  qualificationStatus: QualificationStatus;
  selectionStatus: SelectionStatus;
  rejectionReasons?: RejectionReason[];
  recordPresence: CandidateRecordPresence;
  scoreAxes?: CandidateScoreAxes;
  historicalContextIds?: string[];
  rightsStatus?: string;
  excerptPolicy?: ExcerptPolicy;
  researcherNotes?: string;
  createdAt: string;
  updatedAt: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type BoundaryConfidence =
  | "exact"
  | "strong"
  | "partial"
  | "uncertain"
  | "disputed";

export type DailyBoundaryRecord = {
  candidateId: string;
  dateHeading?: string;
  startPage?: number | null;
  startPosition?: string;
  endPage?: number | null;
  endPosition?: string;
  crossesPages?: boolean;
  boundaryConfidence: BoundaryConfidence;
  notes?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
};

export type SupportedClaimType =
  | "date"
  | "performance"
  | "rehearsal"
  | "waiting"
  | "food"
  | "body"
  | "audience"
  | "movement"
  | "entity"
  | "person"
  | "money"
  | "historical-context"
  | "other";

export type SourceCapture = {
  id: string;
  candidateId: string;
  sourceId: string;
  page?: string;
  locationNote?: string;
  supportedClaimTypes: SupportedClaimType[];
  shortExcerpt?: string;
  paraphrase?: string;
  rightsStatus?: string;
  excerptWordCount?: number;
  capturedAt: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type MentionType =
  | "person"
  | "place"
  | "organization"
  | "production"
  | "food"
  | "medical"
  | "media"
  | "other";

export type ResolutionStatus =
  | "unresolved"
  | "candidates-found"
  | "partially-resolved"
  | "resolved"
  | "disputed"
  | "unresolvable";

export type UnresolvedMention = {
  id: string;
  candidateId: string;
  mentionText: string;
  mentionType: MentionType;
  likelyEntityType?: string;
  possibleMatches?: string[];
  resolutionStatus: ResolutionStatus;
  notes?: string;
  sourceIds: string[];
};

export type AgreementStatus =
  | "confirmed"
  | "consistent"
  | "partial"
  | "conflicting"
  | "not-found"
  | "not-checked";

export type CrossSourceCheck = {
  id: string;
  candidateId: string;
  claimType: SupportedClaimType | string;
  diarySourceId?: string;
  comparisonSourceIds: string[];
  agreementStatus: AgreementStatus;
  explanation?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type ConflictTopic =
  | "date"
  | "venue"
  | "production"
  | "person"
  | "performance-count"
  | "sequence"
  | "food"
  | "body"
  | "audience"
  | "publication"
  | "publisher"
  | "publication-date"
  | "edition-label"
  | "isbn"
  | "volume-structure"
  | "covered-period"
  | "pagination"
  | "editor"
  | "author-name"
  | "rights"
  | "access"
  | "other";

export type ResearchConflict = {
  id: string;
  candidateId?: string;
  editionId?: string;
  volumeId?: string;
  topic: ConflictTopic;
  sourcePositions: string[];
  significance?: string;
  resolutionStatus: ResolutionStatus;
  preferredPosition?: string;
  preferenceReason?: string;
  sourceIds: string[];
  notes?: string;
};

export type SelectionDecisionKind =
  | "selected"
  | "rejected"
  | "deferred"
  | "more-research-needed";

export type SelectionDecision = {
  candidateId: string;
  decision: SelectionDecisionKind;
  decidedAt?: string;
  decisionReason?: string;
  unresolvedRisks?: string[];
  reviewer?: string;
  nextAction?: string;
};

/** Distinguishes diary-text assertions from externally corroborated history. */
export type FactScope =
  | "textual"
  | "biographical"
  | "historical"
  | "environmental"
  | "institutional"
  | "bibliographic";

export type FactClaim = {
  id: string;
  /** Research candidate id when from EntryCandidate pipeline. */
  candidateId?: string;
  /** Published entry id when claim is attached to an Entry. */
  entryId?: string;
  claim: string;
  claimJa?: string;
  claimType: SupportedClaimType;
  /** Textual diary claim vs historical / institutional fact. */
  factScope?: FactScope;
  sourceCaptureIds: string[];
  /** Direct source links when SourceCapture is not yet registered. */
  sourceIds?: string[];
  evidenceLevel: EvidenceLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  publicDisplay: boolean;
  notes?: string;
};

export type ObservationClaim = {
  id: string;
  candidateId?: string;
  entryId?: string;
  observation: string;
  observationJa?: string;
  supportingFactClaimIds: string[];
  confidence?: "high" | "medium" | "low" | "unknown";
  publicDisplay: boolean;
  notes?: string;
};

export type InterpretationClaim = {
  id: string;
  candidateId?: string;
  entryId?: string;
  interpretation: string;
  interpretationJa?: string;
  supportingFactClaimIds: string[];
  supportingObservationIds?: string[];
  alternativeInterpretations?: string[];
  confidence?: "high" | "medium" | "low" | "unknown";
  publicDisplay: boolean;
  notes?: string;
};

export type UnknownClaim = {
  id: string;
  entryId: string;
  question: string;
  questionJa?: string;
  category: string;
  reasonUnknown: string;
  sourceNeeded: boolean;
  significance?: "high" | "medium" | "low";
  researchPriority?: "high" | "medium" | "low";
};

export type EntryQualityLevel = "strong" | "partial" | "weak" | "not-reviewed";

export type EntryQualityProfile = {
  entryId: string;
  sourceQuality: EntryQualityLevel;
  bibliographicCompleteness: EntryQualityLevel;
  dailyBoundaryClarity: EntryQualityLevel;
  factTraceability: EntryQualityLevel;
  crossCheckDepth: EntryQualityLevel;
  interpretiveSeparation: EntryQualityLevel;
  rightsReadiness: EntryQualityLevel;
  unknownVisibility: EntryQualityLevel;
};

export type ResearchNoteType =
  | "transcription"
  | "bibliographic"
  | "entity-resolution"
  | "conflict"
  | "interpretation"
  | "rights"
  | "task"
  | "other";

export type ResearchNoteVisibility = "public" | "internal" | "private-source-note";

export type ResearchNote = {
  id: string;
  candidateId?: string;
  note: string;
  noteType: ResearchNoteType;
  visibility: ResearchNoteVisibility;
  createdAt: string;
  updatedAt: string;
};

export type EntryResearchPackage = {
  candidateId: string;
  writerId: string;
  diaryWorkId: string;
  date?: string;
  volumeId?: string;
  editionId?: string;
  pageRange?: string;
  sourceCaptureIds: string[];
  summary?: string;
  timelineItems?: string[];
  personIds?: string[];
  unresolvedMentionIds?: string[];
  entityIds?: string[];
  performanceRecordIds?: string[];
  rehearsalRecordIds?: string[];
  waitingRecordIds?: string[];
  backstageRecordIds?: string[];
  foodRecordIds?: string[];
  bodyRecordIds?: string[];
  audienceRecordIds?: string[];
  movementRecordIds?: string[];
  moneyRecordIds?: string[];
  wartimeContextRecordIds?: string[];
  maintenanceEventIds?: string[];
  maintenanceGapIds?: string[];
  factClaimIds?: string[];
  observationClaimIds?: string[];
  interpretationClaimIds?: string[];
  unknowns?: string[];
  rightsPolicy?: ExcerptPolicy;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type EditionVerificationStatus =
  | "verified"
  | "partial"
  | "source-needed"
  | "conflicting"
  | "unknown";

export type EditionVerificationCard = {
  id: string;
  bookTitle: string;
  volumeTitle?: string;
  publisher?: string;
  publicationDate?: string;
  editionStatement?: string;
  editor?: string;
  isbn?: string;
  libraryRecord?: string;
  accessMethod?: string;
  pagination?: string;
  textBasis?: string;
  rightsStatus?: string;
  status: EditionVerificationStatus;
  sourceIds: string[];
  notes?: string;
};

export type ReadinessState =
  | "ready"
  | "partial"
  | "blocked"
  | "not-checked"
  | "not-applicable";

export type EntryReadinessItem = {
  id: string;
  label: string;
  labelJa?: string;
  kind: "hard" | "value";
  state: ReadinessState;
  note?: string;
};


/* ── Bibliographic research workspace ── */

export type SourceReliability =
  | "primary-copy"
  | "authoritative-catalogue"
  | "official-publisher"
  | "institutional-catalogue"
  | "scholarly-secondary"
  | "commercial-listing"
  | "user-provided"
  | "unknown";

export type BibliographicClaimType =
  | "title"
  | "volume-title"
  | "author-name"
  | "canonical-name"
  | "editor"
  | "publisher"
  | "publication-date"
  | "edition-label"
  | "isbn"
  | "covered-start-date"
  | "covered-end-date"
  | "total-pages"
  | "pagination"
  | "base-text"
  | "index"
  | "rights"
  | "other";

export type BibliographicClaim = {
  id: string;
  editionId?: string;
  volumeId?: string;
  claimType: BibliographicClaimType;
  claimValue: string;
  normalizedValue?: string;
  sourceIds: string[];
  sourceLocation?: string;
  reliability: SourceReliability;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  conflictIds?: string[];
  notes?: string;
};

export type CopyType =
  | "owned-copy"
  | "library-copy"
  | "archive-copy"
  | "digital-library"
  | "commercial-ebook"
  | "preview"
  | "scanned-copy"
  | "user-provided-copy"
  | "unknown";

export type AccessMethod =
  | "owned"
  | "borrow"
  | "onsite-reading"
  | "remote-digital"
  | "purchase"
  | "interlibrary-loan"
  | "unavailable"
  | "unknown";

export type AccessStatus =
  | "accessible"
  | "limited"
  | "application-required"
  | "onsite-only"
  | "purchase-required"
  | "unavailable"
  | "not-checked"
  | "unknown";

export type SourceCopy = {
  id: string;
  editionId: string;
  copyType: CopyType;
  holdingInstitution?: string;
  libraryCallNumber?: string;
  accessMethod: AccessMethod;
  accessStatus: AccessStatus;
  accessUrl?: string;
  physicalLocation?: string;
  borrowingAllowed?: boolean | null;
  copyingAllowed?: boolean | null;
  photographyAllowed?: boolean | null;
  digitalViewingAllowed?: boolean | null;
  pageReferenceStable?: boolean | null;
  checkedAt?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  sourceIds: string[];
  notes?: string;
};

export type PageReferenceStability =
  | "stable-printed-page"
  | "stable-image-page"
  | "stable-digital-location"
  | "unstable-reflow"
  | "preview-only"
  | "no-pagination"
  | "unknown";

export type TOCRecord = {
  id: string;
  editionId: string;
  volumeId?: string;
  heading: string;
  startPage?: number | null;
  endPage?: number | null;
  coveredStartDate?: string;
  coveredEndDate?: string;
  sourceCaptureId?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type VolumeBoundaryVerification = {
  volumeId: string;
  editionId?: string;
  firstDiaryDate?: string;
  firstDiaryPage?: string;
  lastDiaryDate?: string;
  lastDiaryPage?: string;
  boundaryConfidence: BoundaryConfidence;
  sourceCaptureIds: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type EditionComparisonType =
  | "volume-division"
  | "covered-dates"
  | "omissions"
  | "editorial-notes"
  | "orthography"
  | "pagination"
  | "indexes"
  | "photographs"
  | "chronology"
  | "appendices"
  | "correction-notes"
  | "other";

export type ComparisonResult =
  | "same"
  | "substantially-same"
  | "modified"
  | "expanded"
  | "reduced"
  | "reordered"
  | "pagination-only-change"
  | "unknown";

export type EditionComparisonRecord = {
  id: string;
  editionAId: string;
  editionBId: string;
  comparisonType: EditionComparisonType;
  result: ComparisonResult;
  sourceIds: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type BaseEditionDecisionStatus =
  | "not-selected"
  | "provisional"
  | "selected"
  | "under-review"
  | "superseded";

export type BaseEditionReason =
  | "complete-volume-coverage"
  | "stable-pagination"
  | "accessible-copy"
  | "authoritative-edition"
  | "sufficient-editorial-notes"
  | "bibliographically-verifiable"
  | "rights-manageable"
  | "comparison-compatible"
  | "other";

export type BaseEditionDecision = {
  id: string;
  diaryWorkId: string;
  volumeId?: string;
  selectedEditionId?: string | null;
  selectedCopyId?: string | null;
  decisionStatus: BaseEditionDecisionStatus;
  decisionDate?: string;
  reasons?: BaseEditionReason[];
  limitations?: string[];
  alternativeEditionIds?: string[];
  unresolvedIssues?: string[];
  sourceIds: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type EntrySuitability =
  | "ideal"
  | "usable"
  | "limited"
  | "unsuitable"
  | "not-reviewed"
  | "unknown";

export type EntrySuitabilityAssessment = {
  editionId: string;
  suitability: EntrySuitability;
  axes: {
    dateHeadings: EntrySuitability | "unknown";
    pageStability: EntrySuitability | "unknown";
    volumeClarity: EntrySuitability | "unknown";
    textCompleteness: EntrySuitability | "unknown";
    accessibility: EntrySuitability | "unknown";
    citationReproducibility: EntrySuitability | "unknown";
    rightsHandling: EntrySuitability | "unknown";
    crossSourceAvailability: EntrySuitability | "unknown";
  };
  reasons: string[];
};

export type RightsReadiness =
  | "quotation-ready"
  | "paraphrase-only"
  | "permission-required"
  | "restricted"
  | "public-domain"
  | "under-review"
  | "unknown";

export type AcquisitionTaskType =
  | "locate-catalogue"
  | "verify-colophon"
  | "verify-title-page"
  | "access-physical-copy"
  | "access-digital-copy"
  | "purchase-copy"
  | "library-request"
  | "capture-toc"
  | "verify-pagination"
  | "verify-volume-boundary"
  | "verify-rights"
  | "compare-editions"
  | "other";

export type AcquisitionTaskStatus =
  | "queued"
  | "researching"
  | "requested"
  | "acquired"
  | "verified"
  | "blocked"
  | "unavailable"
  | "deferred";

export type AcquisitionTask = {
  id: string;
  editionId?: string;
  volumeId?: string;
  taskType: AcquisitionTaskType;
  targetInstitution?: string;
  targetSource?: string;
  priority: number;
  status: AcquisitionTaskStatus;
  expectedResult?: string;
  blockingResearchIds?: string[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type PersonNameType =
  | "canonical"
  | "stage-name"
  | "pen-name"
  | "legal-name"
  | "authority-heading"
  | "romanized"
  | "alternate"
  | "unknown";

export type PersonNameRecord = {
  personId: string;
  name: string;
  language?: string;
  script?: string;
  nameType: PersonNameType;
  usagePeriod?: string;
  authoritySourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ResearchDependencyStageStatus =
  | "ready"
  | "partial"
  | "blocked"
  | "not-started";

export type ResearchDependencyStage = {
  id: string;
  label: string;
  labelJa: string;
  status: ResearchDependencyStageStatus;
  note?: string;
};


/* ── Source Observatory ── */

export type ClaimReliability =
  | "direct"
  | "strong"
  | "supporting"
  | "contextual"
  | "weak"
  | "conflicting"
  | "unsuitable"
  | "unknown";

export type SourceClaimReliabilityType =
  | "bibliographic"
  | "date"
  | "action"
  | "person"
  | "place"
  | "performance"
  | "publication"
  | "food"
  | "money"
  | "body"
  | "medical"
  | "audience"
  | "historical-context"
  | "rights"
  | "access"
  | "other";

export type SourceClaimReliability = {
  id: string;
  sourceId: string;
  claimType: SourceClaimReliabilityType;
  reliability: ClaimReliability;
  scope?: string;
  limitations?: string[];
  crossCheckRequired: boolean;
  preferredAlternativeSourceTypes?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type CopyResearchStatus =
  | "located"
  | "access-confirmed"
  | "accessed"
  | "relevant-section-examined"
  | "source-captured"
  | "publicly-cited"
  | "cross-checked"
  | "unavailable"
  | "not-checked";

export type CaptureLocationType =
  | "printed-page"
  | "image-page"
  | "digital-location"
  | "paragraph"
  | "section"
  | "table"
  | "figure"
  | "timestamp"
  | "archival-box"
  | "archival-folder"
  | "item-number"
  | "object-label"
  | "url-fragment"
  | "unknown";

export type SourceAgreementStatus =
  | "confirmed"
  | "consistent"
  | "partial"
  | "conflicting"
  | "incomparable"
  | "not-checked";

export type SourceAgreement = {
  id: string;
  sourceIds: string[];
  claimType: SourceClaimReliabilityType | string;
  topic: string;
  agreementStatus: SourceAgreementStatus;
  sharedValue?: string;
  differingValues?: string[];
  preferredValue?: string;
  preferenceReason?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type SourceLinkStatusKind =
  | "reachable"
  | "redirected"
  | "moved"
  | "login-required"
  | "restricted"
  | "unavailable"
  | "archived-available"
  | "not-checked";

export type ContentAvailability =
  | "original-content"
  | "modified-content"
  | "generic-page"
  | "error-page"
  | "unavailable"
  | "unknown";

export type SourceLinkCheck = {
  id: string;
  sourceId: string;
  url: string;
  status: SourceLinkStatusKind;
  httpStatus?: number;
  redirectedUrl?: string;
  checkedAt?: string;
  archiveAvailable?: boolean;
  /** Soft 404 / content substitution; not inferred from HTTP alone. */
  contentAvailability?: ContentAvailability;
  note?: string;
};

export type SourceCollectionType =
  | "writer-research"
  | "diary-work"
  | "edition-research"
  | "entry-research"
  | "entity-research"
  | "observation-research"
  | "bibliography"
  | "archive"
  | "other";

export type SourceCollection = {
  id: string;
  slug: string;
  title: string;
  titleJa?: string;
  description?: string;
  sourceIds: string[];
  writerIds?: string[];
  diaryWorkIds?: string[];
  researchWorkspaceIds?: string[];
  collectionType: SourceCollectionType;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type SourceReadinessState =
  | "ready"
  | "partial"
  | "blocked"
  | "not-checked"
  | "not-applicable";

export type SourceReadinessItem = {
  id: string;
  label: string;
  labelJa?: string;
  state: SourceReadinessState;
  note?: string;
};

export type SourceUsage = {
  writers: { id: string; slug: string; name: string }[];
  diaryWorks: { id: string; slug: string; title: string }[];
  editions: { id: string; slug: string; title: string }[];
  entries: { id: string; slug?: string; label: string }[];
  entities: { id: string; slug: string; name: string }[];
  observations: { id: string; slug: string; title: string }[];
  comparisons: { id: string; slug: string; title: string }[];
  researchWorkspaces: { id: string; href: string; title: string }[];
  factClaimCount: number;
  observationClaimCount: number;
  interpretationClaimCount: number;
};


/* ── Provenance Trail ── */

export type ProvenanceNodeType =
  | "writer"
  | "diary-work"
  | "volume"
  | "edition"
  | "source"
  | "source-copy"
  | "source-capture"
  | "fact-claim"
  | "observation-claim"
  | "interpretation-claim"
  | "entry"
  | "entity"
  | "performance-record"
  | "food-record"
  | "body-record"
  | "money-record"
  | "movement-record"
  | "housing-record"
  | "audience-record"
  | "maintenance-event"
  | "comparison"
  | "observation-article"
  | "research-workspace"
  | "unknown";

export type ProvenanceRelationType =
  | "authored-by"
  | "contained-in"
  | "edition-of"
  | "copy-of"
  | "captured-from"
  | "supports"
  | "extracted-as"
  | "observed-from"
  | "interpreted-from"
  | "summarized-in"
  | "used-by"
  | "compared-in"
  | "references"
  | "contradicts"
  | "corroborates"
  | "derived-from"
  | "unresolved"
  | "other";

export type ProvenanceNode = {
  id: string;
  nodeType: ProvenanceNodeType;
  entityId: string;
  label: string;
  labelJa?: string;
  description?: string;
  verificationStatus?: VerificationStatus | "partial" | "indexing";
  evidenceLevel?: EvidenceLevel;
  visibility?: "public" | "metadata-only" | "internal" | "restricted";
  url?: string;
  metadata?: Record<string, string | number | boolean | null | undefined>;
  isUnknown?: boolean;
};

export type ProvenanceEdge = {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  relationType: ProvenanceRelationType;
  evidenceLevel?: EvidenceLevel;
  verificationStatus?: VerificationStatus | "partial" | "indexing";
  sourceIds?: string[];
  notes?: string;
};

export type ProvenanceCompleteness =
  | "complete"
  | "strong"
  | "partial"
  | "minimal"
  | "broken"
  | "unknown";

export type ProvenanceTrail = {
  id: string;
  rootNodeId: string;
  ancestryNodeIds: string[];
  ancestryEdgeIds: string[];
  descendantNodeIds: string[];
  descendantEdgeIds: string[];
  nodes: ProvenanceNode[];
  edges: ProvenanceEdge[];
  completeness: ProvenanceCompleteness;
  completenessReasons: string[];
  blockers: ProvenanceIssue[];
  conflicts: string[];
  lastVerifiedAt?: string;
};

export type ProvenanceIssueType =
  | "missing-source"
  | "missing-source-capture"
  | "missing-edition"
  | "missing-page"
  | "missing-fact-support"
  | "interpretation-without-observation"
  | "observation-without-facts"
  | "broken-source-link"
  | "conflicting-sources"
  | "unverified-source"
  | "rights-unreviewed"
  | "inaccessible-source"
  | "circular-dependency"
  | "orphan-node"
  | "missing-original-url"
  | "missing-original-source"
  | "missing-capture-time"
  | "missing-context"
  | "missing-account-identity"
  | "unknown-modification"
  | "original-source-removed"
  | "archive-not-found"
  | "screenshot-authenticity-unreviewed"
  | "claim-exceeds-image"
  | "other";

export type ProvenanceIssueSeverity = "info" | "warning" | "critical";

export type ProvenanceIssue = {
  id: string;
  nodeId: string;
  issueType: ProvenanceIssueType;
  severity: ProvenanceIssueSeverity;
  message: string;
  messageJa?: string;
  blocking: boolean;
  recommendedAction?: string;
  relatedNodeIds?: string[];
};

export type EntrySourceLayerType =
  | "primary-diary"
  | "diary-derived-work"
  | "published-essay"
  | "fiction"
  | "letter"
  | "interview"
  | "media"
  | "bibliography"
  | "biography"
  | "institutional"
  | "historical-context"
  | "other";

export type EntrySourceRole =
  | "primary-evidence"
  | "cross-check"
  | "context"
  | "interpretation"
  | "bibliographic"
  | "disputed";

export type EntrySourceLayer = {
  id: string;
  entryId: string;
  layerType: EntrySourceLayerType;
  sourceIds: string[];
  factClaimIds: string[];
  role: EntrySourceRole;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type LiteraryEvidenceStatus =
  | "literary-only"
  | "biographically-corroborated"
  | "partially-corroborated"
  | "disputed"
  | "unknown";

export type LiteraryEvidenceRelation = {
  id: string;
  sourceId: string;
  literaryClaim: string;
  possibleBiographicalRelation?: string;
  status: LiteraryEvidenceStatus;
  supportingExternalSourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

/** Distance / shape of a provenance path — descriptive, not a score. */
export type ProvenanceShape =
  | "linear"
  | "sparse"
  | "branching"
  | "collapsed"
  | "conflicting"
  | "unknown";

export type SourcePathComplexity =
  | "simple"
  | "layered"
  | "branched"
  | "derivative-heavy"
  | "opaque"
  | "unknown";

export type EvidenceDistance =
  | "direct"
  | "near"
  | "mediated"
  | "remote"
  | "unknown";

export type TemporalDistance =
  | "contemporary"
  | "near-contemporary"
  | "retrospective"
  | "posthumous"
  | "unknown";

export type EditingDistance =
  | "unedited"
  | "lightly-edited"
  | "heavily-edited"
  | "reconstructed"
  | "unknown";

export type MediaType =
  | "television"
  | "radio"
  | "film"
  | "web-video"
  | "livestream"
  | "podcast"
  | "other";

export type MediaEditingStatus =
  | "live"
  | "edited"
  | "excerpted"
  | "rebroadcast"
  | "unknown";

export type MediaSourceRecord = {
  id: string;
  sourceId: string;
  mediaType: MediaType;
  recordingDate?: string;
  broadcastDate?: string;
  publicationDate?: string;
  liveOrRecorded?: "live" | "recorded" | "unknown";
  editingStatus: MediaEditingStatus;
  excerptStatus?: string;
  archiveStatus?: string;
  transcriptStatus?: string;
  sourcePurpose?: SourcePurpose;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type SourceVersionChangeType =
  | "none-detected"
  | "metadata-only"
  | "minor-text"
  | "corrected"
  | "expanded"
  | "reduced"
  | "materially-revised"
  | "replaced"
  | "unknown";

export type SourceVersionRecord = {
  id: string;
  sourceId: string;
  /** Prefer checkedAt; capturedAt is an alias for newer records. */
  checkedAt: string;
  capturedAt?: string;
  publishedAtShown?: string;
  contentHash?: string;
  structureHash?: string;
  title?: string;
  authorLine?: string;
  updatedAtShown?: string;
  url?: string;
  archiveUrl?: string;
  visibleWordCount?: number;
  changeType?: SourceVersionChangeType;
  status:
    | "available"
    | "redirected"
    | "removed"
    | "changed"
    | "archived-only"
    | "unknown";
  changeSummary?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type SocialSourceRecord = {
  id: string;
  sourceId: string;
  platform: string;
  accountType?: string;
  postedAt?: string;
  editedAt?: string;
  deletedStatus?: "active" | "deleted" | "protected" | "unknown";
  replyContext?: string;
  repostContext?: string;
  mediaAttachments?: string[];
  audienceContext?: string;
  archiveStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type ScreenshotAuthenticityStatus =
  | "original-verified"
  | "corroborated"
  | "likely"
  | "unverified"
  | "disputed"
  | "manipulated"
  | "unknown";

export type ScreenshotSourceRecord = {
  id: string;
  sourceId: string;
  originalPlatform?: string;
  originalUrl?: string;
  capturedAt?: string;
  capturedBy?: string;
  visibleTimestamp?: string;
  visibleAccount?: string;
  contextAvailable: boolean;
  originalStillAvailable?: boolean;
  archiveAvailable?: boolean;
  authenticityStatus: ScreenshotAuthenticityStatus;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type AIProvenanceTraceability =
  | "claim-level"
  | "source-level"
  | "partial"
  | "opaque"
  | "unknown";

export type AISourceSurvival =
  | "source-still-available"
  | "source-archived"
  | "source-removed"
  | "source-unidentified"
  | "source-never-disclosed"
  | "unknown";

export type AIProvenanceRecord = {
  id: string;
  modelLabel?: string;
  generatedAt?: string;
  promptContext?: string;
  sourceIds?: string[];
  citationAvailable: boolean;
  sourceTraceability: AIProvenanceTraceability;
  sourceSurvival?: AISourceSurvival;
  outputPurpose?: string;
  factClaimIds?: string[];
  interpretationClaimIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ProvenanceCompressionType =
  | "summary"
  | "synthesis"
  | "translation"
  | "rewriting"
  | "extraction"
  | "classification"
  | "generative-reconstruction"
  | "other";

export type ProvenanceCompression = {
  id: string;
  outputId: string;
  inputSourceIds: string[];
  inputFactClaimIds?: string[];
  preservedConflictIds?: string[];
  omittedConflictIds?: string[];
  preservedUnknownIds?: string[];
  omittedUnknownIds?: string[];
  citationGranularity?: string;
  compressionType: ProvenanceCompressionType;
  verificationStatus: VerificationStatus | "partial" | "indexing";
};

export type SourceIndependence =
  | "independent"
  | "partially-dependent"
  | "derivative"
  | "syndicated"
  | "quoted-from-same-source"
  | "unknown";

export type SourceDependencyType =
  | "quotes"
  | "republishes"
  | "syndicates"
  | "summarizes"
  | "translates"
  | "embeds"
  | "derives-data-from"
  | "unknown";

export type SourceDependency = {
  id: string;
  sourceId: string;
  dependsOnSourceIds: string[];
  dependencyType: SourceDependencyType;
  independence?: SourceIndependence;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ProvenanceFailureMode =
  | "bibliographic-gap"
  | "source-loss"
  | "source-layer-collapse"
  | "retrospective-distortion"
  | "literary-transformation"
  | "editorial-compression"
  | "context-loss"
  | "derivative-duplication"
  | "link-rot"
  | "screenshot-isolation"
  | "ai-compression"
  | "conflict-suppression"
  | "unknown-suppression"
  | "other";

/* ── Link rot / Source state history ── */

export type SourceStateEvent = {
  id: string;
  sourceId: string;
  observedAt: string;
  state: SourceState;
  url?: string;
  previousUrl?: string;
  redirectedUrl?: string;
  httpStatus?: number;
  archiveUrl?: string;
  evidence?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type UrlStatus =
  | "canonical"
  | "former"
  | "redirected"
  | "alternate"
  | "archived"
  | "broken"
  | "unknown";

export type SourceUrlRecord = {
  id: string;
  sourceId: string;
  url: string;
  validFrom?: string;
  validUntil?: string;
  status: UrlStatus;
  redirectTarget?: string;
  firstCheckedAt?: string;
  lastCheckedAt?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type DestinationMatch =
  | "same-source"
  | "likely-same-source"
  | "new-version"
  | "generic-page"
  | "unrelated"
  | "unavailable"
  | "unknown";

export type RedirectRecord = {
  id: string;
  sourceId: string;
  fromUrl: string;
  toUrl: string;
  redirectType?: string;
  destinationMatch: DestinationMatch;
  checkedAt: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type SurvivalFragmentType =
  | "web-archive"
  | "screenshot"
  | "quotation"
  | "repost"
  | "rss"
  | "search-snippet"
  | "cached-copy"
  | "email-copy"
  | "pdf-copy"
  | "ai-summary"
  | "citation"
  | "other";

export type FragmentFidelity =
  | "full"
  | "substantial"
  | "partial"
  | "fragmentary"
  | "metadata-only"
  | "unknown";

export type SourceSurvivalFragment = {
  id: string;
  originalSourceId: string;
  fragmentType: SurvivalFragmentType;
  survivingSourceId?: string;
  location?: string;
  capturedAt?: string;
  fidelity: FragmentFidelity;
  contextCompleteness?: FragmentFidelity;
  authenticityStatus?: ScreenshotAuthenticityStatus | string;
  rightsStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ArchiveCompleteness =
  | "high"
  | "partial"
  | "text-only"
  | "metadata-only"
  | "failed"
  | "unknown";

export type ArchiveCaptureRecord = {
  id: string;
  sourceId: string;
  archiveProvider: string;
  archiveUrl: string;
  capturedAt?: string;
  pageRendered?: boolean;
  imagesAvailable?: boolean;
  embeddedMediaAvailable?: boolean;
  externalAssetsAvailable?: boolean;
  interactionAvailable?: boolean;
  completeness: ArchiveCompleteness;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type SocialAccountStatus =
  | "active"
  | "renamed"
  | "private"
  | "suspended"
  | "deleted"
  | "migrated"
  | "platform-ended"
  | "unknown";

export type SocialAccountRecord = {
  id: string;
  platform: string;
  accountIdentifier: string;
  displayName?: string;
  accountStatus: SocialAccountStatus;
  firstObservedAt?: string;
  lastObservedAt?: string;
  profileUrl?: string;
  successorAccountIds?: string[];
  sourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type PlatformStatus =
  | "active"
  | "legacy"
  | "closing"
  | "closed"
  | "merged"
  | "rebranded"
  | "unknown";

export type PlatformRecord = {
  id: string;
  name: string;
  platformType?: string;
  launchedAt?: string;
  endedAt?: string;
  currentStatus: PlatformStatus;
  ownershipHistory?: string[];
  urlPatterns?: string[];
  archivalAvailability?: string;
  sourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type SearchSnippetRecord = {
  id: string;
  sourceId: string;
  searchProvider: string;
  observedAt: string;
  titleShown?: string;
  /** Short fragment only — never full article text. */
  snippet?: string;
  targetUrl?: string;
  targetStatus?: SourceState;
  cacheStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type CitationGhostRecord = {
  id: string;
  originalSourceId: string;
  survivingCitationSourceIds: string[];
  knownTitle?: string;
  knownAuthor?: string;
  knownDate?: string;
  knownUrl?: string;
  recoveredContentExtent?: FragmentFidelity;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type DerivativeDistance =
  | 0
  | 1
  | 2
  | 3
  | 4
  | "unknown";

export type ProvenanceImpact =
  | "none"
  | "informational"
  | "reduced-access"
  | "weakened"
  | "broken"
  | "disputed"
  | "unknown";

export type SourceMaintenanceTaskType =
  | "recheck-url"
  | "find-official-new-url"
  | "check-redirect"
  | "check-web-archive"
  | "capture-current-version"
  | "compare-previous-version"
  | "find-independent-citation"
  | "review-affected-fact-claims"
  | "review-rights"
  | "do-not-remove-source"
  | "other";

export type SourceMaintenanceTask = {
  id: string;
  sourceId: string;
  taskType: SourceMaintenanceTaskType;
  priority?: PreservationPriority | "urgent" | "normal" | "low";
  status: "open" | "in-progress" | "done" | "deferred" | "cancelled";
  reason?: string;
  affectedClaimIds?: string[];
  createdAt: string;
  updatedAt?: string;
  notes?: string;
};

export type SourceStateImpact = {
  sourceId: string;
  affectedFactClaimIds: string[];
  affectedEntryIds: string[];
  affectedObservationIds: string[];
  severity: "none" | "low" | "medium" | "high" | "unknown";
  provenanceImpact: ProvenanceImpact;
  recommendedResearchActions: string[];
  /** Truth status is never auto-falsified by link rot alone. */
  truthStatusUnchanged: true;
};

export type UniqueSourceRisk =
  | "unique-support"
  | "multiple-independent-supports"
  | "derivative-supports-only"
  | "alternative-primary-exists"
  | "unknown";

export type LinkRotDisplayState =
  | "live-original"
  | "live-modified"
  | "redirected-original"
  | "archived-original"
  | "fragment-only"
  | "metadata-only"
  | "citation-only"
  | "ai-trace-only"
  | "completely-unlocated"
  | "unknown";

/* ── Screenshot evidence / provenance ── */

export type ScreenshotContextCompleteness =
  | "high"
  | "moderate"
  | "partial"
  | "minimal"
  | "isolated"
  | "unknown";

export type ScreenshotContextProfile = {
  id: string;
  screenshotSourceId: string;
  originalUrlKnown: boolean;
  originalSourceKnown: boolean;
  previousContextAvailable: boolean;
  nextContextAvailable: boolean;
  threadContextAvailable: boolean;
  replyContextAvailable: boolean;
  accountContextAvailable: boolean;
  editHistoryAvailable: boolean;
  captureTimeKnown: boolean;
  captureDeviceKnown: boolean;
  archiveAvailable: boolean;
  completeness?: ScreenshotContextCompleteness;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ScreenshotRelationType =
  | "direct-capture"
  | "repost-capture"
  | "archive-capture"
  | "cropped-capture"
  | "annotated-capture"
  | "forwarded-capture"
  | "unknown-origin";

export type ScreenshotRelationConfidence =
  | "verified"
  | "strong"
  | "partial"
  | "weak"
  | "disputed"
  | "unknown";

export type ScreenshotRelation = {
  id: string;
  screenshotSourceId: string;
  originalSourceId?: string;
  relationType: ScreenshotRelationType;
  originalUrl?: string;
  relationConfidence: ScreenshotRelationConfidence;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ScreenshotTimestampType =
  | "absolute-post-time"
  | "relative-post-time"
  | "device-clock"
  | "message-time"
  | "publication-time"
  | "unknown";

export type ScreenshotTimeEvidence = {
  id: string;
  screenshotSourceId: string;
  visibleTimestamp?: string;
  timestampType: ScreenshotTimestampType;
  timezoneKnown: boolean;
  captureTimestamp?: string;
  fileMetadataTimestamp?: string;
  archiveTimestamp?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type CropStatus =
  | "uncropped-confirmed"
  | "cropped"
  | "likely-cropped"
  | "unknown";

export type CropRecord = {
  id: string;
  screenshotSourceId: string;
  cropStatus: CropStatus;
  originalDimensionsKnown: boolean;
  croppedEdges?: string[];
  omittedContextKnown: boolean;
  comparisonSourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ScreenshotModificationType =
  | "crop"
  | "redact"
  | "blur"
  | "highlight"
  | "annotate"
  | "stitch"
  | "resize"
  | "color-adjust"
  | "composite"
  | "ai-edit"
  | "unknown";

export type ScreenshotModificationRecord = {
  id: string;
  screenshotSourceId: string;
  modificationType: ScreenshotModificationType;
  modificationPurpose?: string;
  originalAvailable?: boolean;
  disclosed?: boolean;
  affectsClaim?: boolean;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type FrameSourceRecord = {
  id: string;
  sourceId: string;
  parentVideoSourceId?: string;
  timestamp?: string;
  parentDuration?: string;
  precedingContext?: boolean;
  followingContext?: boolean;
  audioAvailable?: boolean;
  transcriptAvailable?: boolean;
  editingStatus?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ContextCollapseType =
  | "parent-missing"
  | "reply-chain-missing"
  | "quote-origin-missing"
  | "comment-context-missing"
  | "platform-context-missing"
  | "temporal-context-missing"
  | "identity-context-missing"
  | "unknown";

export type ScreenshotCascade = {
  id: string;
  originSourceId?: string;
  screenshotSourceIds: string[];
  repostSourceIds?: string[];
  mediaSourceIds?: string[];
  derivedSourceIds?: string[];
  knownOrder?: string[];
  attributionChanges?: string[];
  contextLossEvents?: ContextCollapseType[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type OfferState =
  | "active-at-capture"
  | "expired"
  | "removed"
  | "changed"
  | "unknown";

export type TransactionalScreenshotProfile = {
  id: string;
  screenshotSourceId: string;
  sellerEntityId?: string;
  advertiserEntityId?: string;
  productName?: string;
  displayedPrice?: string;
  currency?: string;
  offerConditions?: string;
  displayedDate?: string;
  originalUrl?: string;
  captureTime?: string;
  termsUrl?: string;
  paymentEntityId?: string;
  offerState?: OfferState;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type HeadlineEvidenceRecord = {
  id: string;
  screenshotSourceId: string;
  headline?: string;
  visiblePublisher?: string;
  visibleDate?: string;
  articleUrl?: string;
  fullArticleAvailable: boolean;
  articleVersionId?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type GenerationStatus =
  | "captured"
  | "edited"
  | "generated"
  | "composite"
  | "disputed"
  | "unknown";

export type GenerationProvenance = {
  id: string;
  sourceId: string;
  generationStatus: GenerationStatus;
  generationToolKnown: boolean;
  editingToolKnown: boolean;
  originalSourceId?: string;
  contentCredentialsAvailable?: boolean;
  metadataAvailable?: boolean;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ScreenshotClaimBoundary = {
  id: string;
  screenshotSourceId: string;
  directlySupportedClaimTypes: string[];
  conditionallySupportedClaimTypes: string[];
  unsupportedClaimTypes: string[];
  requiredAdditionalSourceTypes: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ScreenshotPreservationBundle = {
  id: string;
  screenshotSourceId: string;
  originalSourceId?: string;
  originalUrl?: string;
  capturedAt?: string;
  platformId?: string;
  accountRecordId?: string;
  sourceStateEventIds?: string[];
  archiveCaptureIds?: string[];
  modificationRecordIds?: string[];
  contextProfileId?: string;
  relatedFactClaimIds?: string[];
  /** Set only when a repo file exists and hash was actually computed. */
  fileHash?: string;
  hashAlgorithm?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ScreenshotTraceabilityLevel =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "unknown";

export type ScreenshotEvidenceStatus =
  | "traceable"
  | "partially-traceable"
  | "isolated"
  | "disputed"
  | "modified"
  | "original-recovered"
  | "original-unavailable"
  | "unknown-origin";

export type AccountIdentityEvidence = {
  id: string;
  screenshotSourceId: string;
  visibleDisplayName?: string;
  visibleHandle?: string;
  platform?: string;
  profileUrl?: string;
  stableAccountId?: string;
  historicalHandle?: string;
  accountVerifiedAtCapture?: boolean;
  externalAuthorityMatch?: boolean;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

/* ── Diary Form / Social self-record ── */

export type DiaryDimensionLevel =
  | "low"
  | "medium"
  | "high"
  | "mixed"
  | "unknown";

export type DiaryFormProfile = {
  id: string;
  recordType: string;
  temporality: DiaryDimensionLevel;
  firstPersonness: DiaryDimensionLevel;
  continuity: DiaryDimensionLevel;
  routineLevel: DiaryDimensionLevel;
  publicness: DiaryDimensionLevel;
  audienceAwareness: DiaryDimensionLevel;
  editingLevel: DiaryDimensionLevel;
  feedbackLevel: DiaryDimensionLevel;
  platformMediation: DiaryDimensionLevel;
  commercialIntent: DiaryDimensionLevel;
  retrospectiveDistance: DiaryDimensionLevel;
  archivalStability: DiaryDimensionLevel;
  selfPerformance: DiaryDimensionLevel;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type ImpliedAudienceType =
  | "self"
  | "future-self"
  | "intimate-other"
  | "family"
  | "editor"
  | "publication-reader"
  | "general-public"
  | "followers"
  | "customers"
  | "institutional"
  | "unknown";

export type ImpliedAudienceProfile = {
  id: string;
  recordId: string;
  audienceType: ImpliedAudienceType;
  evidenceBasis?: string;
  confidence?: "strong" | "partial" | "weak" | "unknown";
  sourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type AudienceTransformationRecord = {
  id: string;
  recordId: string;
  stage: string;
  audienceType: ImpliedAudienceType;
  date?: string;
  transformationReason?: string;
  sourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type CausalRelationStatus =
  | "explicit"
  | "strongly-supported"
  | "possible"
  | "unknown";

export type FeedbackLoopRecord = {
  id: string;
  recordId: string;
  responseType?: string;
  responseCount?: number;
  responseSourceIds?: string[];
  subsequentRecordIds?: string[];
  causalRelationStatus: CausalRelationStatus;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type VisibilityType =
  | "chronological"
  | "recommended"
  | "resurfaced"
  | "trending"
  | "reposted"
  | "search-discovered"
  | "algorithmic-unknown"
  | "unknown";

export type RecordVisibilityEvent = {
  id: string;
  recordId: string;
  observedAt: string;
  visibilityType: VisibilityType;
  trigger?: string;
  platformContext?: string;
  sourceIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type SocialDeletionStatus =
  | "active"
  | "deleted"
  | "account-deleted"
  | "platform-removed"
  | "private"
  | "unavailable"
  | "unknown";

export type SocialDeletionRecord = {
  id: string;
  socialRecordId: string;
  deletionStatus: SocialDeletionStatus;
  firstObservedAvailableAt?: string;
  lastObservedAvailableAt?: string;
  firstObservedMissingAt?: string;
  /** Only when author/platform explicitly discloses a reason. */
  deletionReason?: string;
  survivingFragmentIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type PhotoDiaryRecord = {
  id: string;
  sourceId: string;
  socialRecordId?: string;
  capturedAt?: string;
  postedAt?: string;
  locationId?: string;
  visibleEntities?: string[];
  captionAvailable: boolean;
  sequencePosition?: number;
  metadataAvailable: boolean;
  contextAvailable: boolean;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type EphemeralRecordProfile = {
  id: string;
  recordId: string;
  platform?: string;
  /** Only when platform specification is verified. */
  intendedLifetime?: string;
  publishedAt?: string;
  expirationAt?: string;
  expiredStatus?: "expired" | "active" | "unknown";
  archivedByPlatform?: boolean;
  screenshotFragmentIds?: string[];
  repostIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type LiveStatus =
  | "live"
  | "archived-live"
  | "edited-replay"
  | "excerpt-only"
  | "unavailable"
  | "unknown";

export type LiveRecordProfile = {
  id: string;
  sourceId: string;
  startedAt?: string;
  endedAt?: string;
  liveStatus: LiveStatus;
  archiveAvailable?: boolean;
  chatAvailable?: boolean;
  viewerFeedbackAvailable?: boolean;
  editedReplay?: boolean;
  transcriptAvailable?: boolean;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type RecordInfrastructureActor = {
  id: string;
  entityId: string;
  role: string;
  affectedRecordIds?: string[];
  evidenceBasis?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type CommercialStatus =
  | "non-commercial-confirmed"
  | "sponsored"
  | "affiliate"
  | "self-promotion"
  | "business-account-content"
  | "mixed"
  | "unknown";

export type CommercialSelfRecord = {
  id: string;
  recordId: string;
  commercialStatus: CommercialStatus;
  sponsorEntityIds?: string[];
  disclosureVisible?: boolean;
  compensationType?: string;
  affiliateLink?: boolean;
  relatedProductIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type AIDiaryRole =
  | "transcription"
  | "cleanup"
  | "summarization"
  | "rewriting"
  | "translation"
  | "prompt-assisted-writing"
  | "generative-drafting"
  | "autonomous-generation"
  | "unknown";

export type AIAssistedRecord = {
  id: string;
  recordId: string;
  humanAuthorIds?: string[];
  aiRole: AIDiaryRole;
  sourceInputTypes?: string[];
  modelLabel?: string;
  editingAfterGeneration?: boolean;
  humanApproval?: boolean;
  sourceTraceability?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type RecordAuthorshipProfile = {
  id: string;
  recordId: string;
  experienceActorIds?: string[];
  expressionActorIds?: string[];
  publicationActorIds?: string[];
  editingActorIds?: string[];
  automationActorIds?: string[];
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type DiaryQualificationStatus =
  | "diary"
  | "diary-derived"
  | "diary-like"
  | "self-record"
  | "episodic-record"
  | "platform-record"
  | "not-diary"
  | "disputed"
  | "unknown";

export type DiaryQualification = {
  id: string;
  recordOrCollectionId: string;
  temporalOrganization?: DiaryDimensionLevel;
  selfRecord?: DiaryDimensionLevel;
  recurringStructure?: DiaryDimensionLevel;
  livedExperienceRelation?: DiaryDimensionLevel;
  continuity?: DiaryDimensionLevel;
  editorialTransformation?: DiaryDimensionLevel;
  platformMediation?: DiaryDimensionLevel;
  qualificationStatus: DiaryQualificationStatus;
  qualificationReason?: string;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

export type SocialRecordCollection = {
  id: string;
  accountId: string;
  startDate?: string;
  endDate?: string;
  recordIds: string[];
  continuity?: DiaryDimensionLevel;
  gaps?: string[];
  platform?: string;
  qualificationStatus: DiaryQualificationStatus;
  verificationStatus: VerificationStatus | "partial" | "indexing";
  notes?: string;
};

