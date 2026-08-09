import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { DiaryFragment } from "@/components/DiaryFragment";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { AfterSuccessPersonaBlock } from "@/components/observations/AfterSuccessPersonaBlock";
import { AlcoholBodyPanel } from "@/components/observations/AlcoholBodyPanel";
import { AlcoholComparisonCta } from "@/components/observations/AlcoholComparisonCta";
import { AlcoholDayStructure } from "@/components/observations/AlcoholDayStructure";
import { AlcoholIndexedEvidence } from "@/components/observations/AlcoholIndexedEvidence";
import { BeforeDrinkingPanel } from "@/components/observations/BeforeDrinkingPanel";
import { ComparisonEssayCta } from "@/components/observations/ComparisonEssayCta";
import { ConceptQuote } from "@/components/observations/ConceptQuote";
import { ConceptBlock } from "@/components/ConceptBlock";
import {
  AudienceBackstageFeedbackLoop,
  AudienceEvidencePanel,
  BackstageEntryCriteria,
  BackstageRecordObservatory,
  BackstageRelatedCta,
  BodyCollectiveImpactFlow,
  CareBackstagePanel,
  FoodPerformanceRelationPanel,
  IndexedBackstageRecords,
  IndividualCollectiveLabor,
  MediaBackstageComparison,
  PerformanceFoodTiming,
  PerformanceOutcomePanel,
  PerformancePreparationStack,
  PerformanceSupportNetwork,
  VisibleInvisiblePerformance,
  WaitingCostPanel,
  WaitingIsLaborPanel,
  WartimeBackstagePanel,
} from "@/components/observations/BackstageObservationPanels";
import { ConditionCallout } from "@/components/observations/ConditionCallout";
import { DrinkingContextPanel } from "@/components/observations/DrinkingContextPanel";
import { EntityStatusSummaryInline } from "@/components/observations/EntityStatusSummaryInline";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { IndexedDaysEssay } from "@/components/observations/IndexedDaysEssay";
import { LiterarySystemMiniDiagram } from "@/components/observations/LiterarySystemMiniDiagram";
import { LivedRecordedFictionalizedAlcohol } from "@/components/observations/LivedRecordedFictionalizedAlcohol";
import { MoneyAndAlcoholPanel } from "@/components/observations/MoneyAndAlcoholPanel";
import { MoneyFragmentPanel } from "@/components/observations/MoneyFragmentPanel";
import { RepetitionBreakPanel } from "@/components/observations/RepetitionBreakPanel";
import { ThreeConditionsPanel } from "@/components/observations/ThreeConditionsPanel";
import { ThreeLifeRoutes } from "@/components/observations/ThreeLifeRoutes";
import { ThreeWritingBodiesMini } from "@/components/observations/ThreeWritingBodiesMini";
import { WriterPersonaComparison } from "@/components/observations/WriterPersonaComparison";
import { AlcoholCostPanel } from "@/components/observations/AlcoholCostPanel";
import { BooksEconomyPanel } from "@/components/observations/BooksEconomyPanel";
import { BukowskiAmountNotice } from "@/components/observations/BukowskiAmountNotice";
import { CostVisibilityExamples } from "@/components/observations/CostVisibilityExamples";
import { DailyCostStructure } from "@/components/observations/DailyCostStructure";
import { HistoricalAmountNotice } from "@/components/observations/HistoricalAmountNotice";
import { MoneyIndexTable } from "@/components/observations/MoneyIndexTable";
import { MoneyIndexingStatus } from "@/components/observations/MoneyIndexingStatus";
import { MovementCostPanel } from "@/components/observations/MovementCostPanel";
import { NishimuraMoneyFragments } from "@/components/observations/NishimuraMoneyFragments";
import { PriceRelatedCta } from "@/components/observations/PriceRelatedCta";
import { WriterEconomicConditionPanel } from "@/components/observations/WriterEconomicConditionPanel";
import { AlgorithmEditorComparison } from "@/components/observations/AlgorithmEditorComparison";
import { AudienceScalePanel } from "@/components/observations/AudienceScalePanel";
import { CreatorStackPanel } from "@/components/observations/CreatorStackPanel";
import { DistributedEditorialFunctionPanel } from "@/components/observations/DistributedEditorialFunctionPanel";
import { EditorRelationshipPanel } from "@/components/observations/EditorRelationshipPanel";
import { IndexedPublishingRecords } from "@/components/observations/IndexedPublishingRecords";
import { NishimuraAmplificationFlow } from "@/components/observations/NishimuraAmplificationFlow";
import { PhysicalSubmissionFlow } from "@/components/observations/PhysicalSubmissionFlow";
import { PlatformGainLossPanel } from "@/components/observations/PlatformGainLossPanel";
import { PressRelatedCta } from "@/components/observations/PressRelatedCta";
import { SmallPressFunctionsPanel } from "@/components/observations/SmallPressFunctionsPanel";
import { SubmissionCostPanel } from "@/components/observations/SubmissionCostPanel";
import { ThreeDistributionSystems } from "@/components/observations/ThreeDistributionSystems";
import { EditorialFunctionsPanel } from "@/components/observations/EditorialFunctionsPanel";
import { GatekeepingTensionPanel } from "@/components/observations/GatekeepingTensionPanel";
import { ThreeEditorialSystems } from "@/components/observations/ThreeEditorialSystems";
import { SelfEditingStack } from "@/components/observations/SelfEditingStack";
import { AlgorithmicSelectionPanel } from "@/components/observations/AlgorithmicSelectionPanel";
import { HumanAlgorithmMatrix } from "@/components/observations/HumanAlgorithmMatrix";
import { AIEditorialCapabilityPanel } from "@/components/observations/AIEditorialCapabilityPanel";
import { ReaderEditingPanel } from "@/components/observations/ReaderEditingPanel";
import { DistributedEditorialMap } from "@/components/observations/DistributedEditorialMap";
import { InvisibleRejectionBlock } from "@/components/observations/InvisibleRejectionBlock";
import { NishimuraEditorialChain } from "@/components/observations/NishimuraEditorialChain";
import { IndexedEditorialRecords } from "@/components/observations/IndexedEditorialRecords";
import { EditorialTransparencyPanel } from "@/components/observations/EditorialTransparencyPanel";
import { EditorRelatedCta } from "@/components/observations/EditorRelatedCta";
import { RejectionTypesPanel } from "@/components/observations/RejectionTypesPanel";
import { SubmissionCycle } from "@/components/observations/SubmissionCycle";
import { RejectionCostPanel } from "@/components/observations/RejectionCostPanel";
import { ReturnArtifactPanel } from "@/components/observations/ReturnArtifactPanel";
import { SilenceClassification } from "@/components/observations/SilenceClassification";
import { RevisionTensionPanel } from "@/components/observations/RevisionTensionPanel";
import { SelfRejectionPanel } from "@/components/observations/SelfRejectionPanel";
import { PosthumousEditorialPanel } from "@/components/observations/PosthumousEditorialPanel";
import { ArchiveAbsenceBlock } from "@/components/observations/ArchiveAbsenceBlock";
import { IndexedManuscriptOutcomes } from "@/components/observations/IndexedManuscriptOutcomes";
import { OutcomeMatrix } from "@/components/observations/OutcomeMatrix";
import { MsRelatedCta } from "@/components/observations/MsRelatedCta";
import { ThenNowRejectionBlock } from "@/components/observations/ThenNowRejectionBlock";
import {
  ArchitecturalSurvivalBias,
  DomesticWorkMap,
  EarlierLaterHousingPanel,
  FourWriterHousingMatrix,
  HouseRelatedCta,
  HousingArchiveAbsenceBlock,
  HousingLayersPanel,
  HousingRecordPanel,
  HousingSequence,
  IndexedHousingRecords,
  MuseumEditorialFunctions,
  PreservationAuthenticityPanel,
  PreservationCostPanel,
  PreservationProcess,
  RentRecordPanel,
  RoomConditionPanel,
} from "@/components/observations/HousingObservationPanels";
import {
  BodyMaintenancePanel,
  FoodProvisionPanel,
  FourMaintenanceProfiles,
  IndexedMaintenanceRecords,
  MaintenanceBreakdownPanel,
  MaintenanceFunctionsPanel,
  MaintenanceLayerModel,
  MaintenanceRelatedCta,
  MaintenanceSupportMap,
  PaidUnpaidVisibilityMatrix,
  StudyHouseholdComparison,
  SuccessMaintenanceShiftPanel,
  VisibleInvisibleInfrastructure,
} from "@/components/observations/MaintenanceObservationPanels";
import {
  AbundanceModel,
  AICompressionDiagram,
  AISourceOrInterface,
  ArchiveFragilityPanel,
  ArticleEvidenceBasis,
  EvidenceEcology,
  EvidenceQuantityTraceabilityMatrix,
  FalseAbundanceDiagram,
  HistoricalSourceStack,
  KafuScarcityCase,
  MediaEvidencePanel,
  MutableSourcePanel,
  NishimuraAbundanceCase,
  ProvenanceCaseStudies,
  ProvenanceFailureModes,
  ScarcityModel,
  ScreenshotEvidencePanel,
  SelfRecordMatrix,
  SocialSourceConcept,
  TwoDaysProvenanceCta,
} from "@/components/observations/MoreSourcesPanels";
import {
  AITraceWithoutSource,
  ArchiveCapturePanel,
  AvailabilityIdentityPanel,
  CitationGhostPanel,
  LinkRotCaseStudies,
  LinkRotRegister,
  LinkRotRelatedCta,
  LinkRotRepositoryAudit,
  MutationChain,
  RedirectStatusPanel,
  ScreenshotProvenanceLadder,
  SearchSnippetPanel,
  Soft404Warning,
  SocialAccountStatePanel,
  SourceDependencyCollapse,
  SourceMaintenanceQueue,
  SourceStateImpactPanel,
  SourceStateMachine,
  SourceStateModel,
  SourceStateTimeline,
  SourceVersionComparison,
  SurvivalFragmentPanel,
  SyntheticPersistenceDiagram,
  UniqueSourceRiskPanel,
  UrlHistoryPanel,
} from "@/components/observations/LinkRotPanels";
import {
  AIImageProvenancePanel,
  AccountIdentityEvidencePanel,
  AppearanceStructureComparison,
  ContextCollapsePanel,
  CropEditorialBoundary,
  FrameVsEvent,
  HeadlineArticleSplit,
  OriginalSourcePath,
  OutsideTheFramePanel,
  PreservationVerificationMatrix,
  ScreenshotCascadeDiagram,
  ScreenshotCaseStudy,
  ScreenshotClaimBoundaryPanel,
  ScreenshotContextPanel,
  ScreenshotEvidenceStack,
  ScreenshotModificationPanel,
  ScreenshotPreservationBundlePanel,
  ScreenshotRelatedCta,
  ScreenshotRepositoryAudit,
  ScreenshotTimeEvidencePanel,
  TraceabilityLadder,
  TransactionalScreenshotPanel,
} from "@/components/observations/ScreenshotObsPanels";
import {
  AIAssistedDiarySpectrum,
  AudienceFeedbackLoop,
  AudienceTransformation,
  ChronologyVisibilitySplit,
  CommercialSelfRecordPanel,
  DeletionRecordPanel,
  DiaryDefinitionDimensions,
  DiaryFeedOrderComparison,
  DiaryFormComparisonMatrix,
  DiaryQualificationPanel,
  DiarySpectrum,
  EditedMemoryPanel,
  EphemeralRecordPanel,
  FutureSocialArchivePanel,
  ImpliedAudiencePanel,
  LiveRecordPanel,
  PhotoDiaryPanel,
  RecordActorNetwork,
  RecordAuthorshipProfilePanel,
  SnsDiaryCaseStudies,
  SnsDiaryRepositoryAudit,
  SocialDiaryProvenance,
  UnrecordedDayConcept,
} from "@/components/observations/SnsDiaryPanels";
import {
  ControlKindsPanel,
  CreativeTimeTypes,
  DayWithoutPercentages,
  InstitutionalFootprint,
  MaintenanceTimeVisibility,
  SevenWriterTimeComparison,
  TimeObservatoryFramework,
  TimeOwnershipModel,
  WhoOwnsDayEpistemic,
  WhoOwnsDayRelatedLinks,
} from "@/components/observations/WhoOwnsDayPanels";
import { LiteraryEvidenceWarning } from "@/components/provenance/LiteraryEvidenceWarning";
import type { EpistemicKind } from "@/lib/types";

function Note({
  kind = "observation",
  children,
}: {
  kind?: EpistemicKind;
  children: ReactNode;
}) {
  return (
    <aside className="my-6 border border-border bg-surface/60 px-4 py-3 font-sans">
      <div className="mb-2">
        <EpistemicLabel kind={kind} />
      </div>
      <div className="text-sm leading-relaxed text-text-soft">{children}</div>
    </aside>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Note,
    DiaryFragment,
    ConceptQuote,
    ConceptBlock,
    ConditionCallout,
    ThreeConditionsPanel,
    ThreeLifeRoutes,
    ThreeWritingBodiesMini,
    LiterarySystemMiniDiagram,
    FactObservationInterpretationBlock,
    MoneyFragmentPanel,
    RepetitionBreakPanel,
    EntityStatusSummaryInline,
    IndexedDaysEssay,
    ComparisonEssayCta,
    AlcoholDayStructure,
    WriterPersonaComparison,
    BeforeDrinkingPanel,
    AlcoholBodyPanel,
    MoneyAndAlcoholPanel,
    DrinkingContextPanel,
    LivedRecordedFictionalizedAlcohol,
    AfterSuccessPersonaBlock,
    AlcoholIndexedEvidence,
    AlcoholComparisonCta,
    DailyCostStructure,
    NishimuraMoneyFragments,
    CostVisibilityExamples,
    WriterEconomicConditionPanel,
    BooksEconomyPanel,
    AlcoholCostPanel,
    MovementCostPanel,
    HistoricalAmountNotice,
    MoneyIndexingStatus,
    MoneyIndexTable,
    PriceRelatedCta,
    BukowskiAmountNotice,
    PhysicalSubmissionFlow,
    SmallPressFunctionsPanel,
    SubmissionCostPanel,
    EditorRelationshipPanel,
    AudienceScalePanel,
    NishimuraAmplificationFlow,
    ThreeDistributionSystems,
    PlatformGainLossPanel,
    CreatorStackPanel,
    AlgorithmEditorComparison,
    DistributedEditorialFunctionPanel,
    IndexedPublishingRecords,
    PressRelatedCta,
    EditorialFunctionsPanel,
    GatekeepingTensionPanel,
    ThreeEditorialSystems,
    SelfEditingStack,
    AlgorithmicSelectionPanel,
    HumanAlgorithmMatrix,
    AIEditorialCapabilityPanel,
    ReaderEditingPanel,
    DistributedEditorialMap,
    InvisibleRejectionBlock,
    NishimuraEditorialChain,
    IndexedEditorialRecords,
    EditorialTransparencyPanel,
    EditorRelatedCta,
    RejectionTypesPanel,
    SubmissionCycle,
    RejectionCostPanel,
    ReturnArtifactPanel,
    SilenceClassification,
    RevisionTensionPanel,
    SelfRejectionPanel,
    PosthumousEditorialPanel,
    ArchiveAbsenceBlock,
    IndexedManuscriptOutcomes,
    OutcomeMatrix,
    MsRelatedCta,
    ThenNowRejectionBlock,
    HousingSequence,
    RoomConditionPanel,
    HousingLayersPanel,
    HousingRecordPanel,
    RentRecordPanel,
    EarlierLaterHousingPanel,
    ArchitecturalSurvivalBias,
    DomesticWorkMap,
    PreservationProcess,
    PreservationCostPanel,
    MuseumEditorialFunctions,
    PreservationAuthenticityPanel,
    FourWriterHousingMatrix,
    HousingArchiveAbsenceBlock,
    IndexedHousingRecords,
    HouseRelatedCta,
    MaintenanceFunctionsPanel,
    MaintenanceLayerModel,
    FourMaintenanceProfiles,
    FoodProvisionPanel,
    MaintenanceSupportMap,
    StudyHouseholdComparison,
    PaidUnpaidVisibilityMatrix,
    MaintenanceBreakdownPanel,
    BodyMaintenancePanel,
    SuccessMaintenanceShiftPanel,
    VisibleInvisibleInfrastructure,
    IndexedMaintenanceRecords,
    MaintenanceRelatedCta,
    AudienceBackstageFeedbackLoop,
    AudienceEvidencePanel,
    BackstageEntryCriteria,
    BackstageRecordObservatory,
    BackstageRelatedCta,
    BodyCollectiveImpactFlow,
    CareBackstagePanel,
    FoodPerformanceRelationPanel,
    IndexedBackstageRecords,
    IndividualCollectiveLabor,
    MediaBackstageComparison,
    PerformanceFoodTiming,
    PerformanceOutcomePanel,
    PerformancePreparationStack,
    PerformanceSupportNetwork,
    VisibleInvisiblePerformance,
    WaitingCostPanel,
    WaitingIsLaborPanel,
    WartimeBackstagePanel,
    ScarcityModel,
    AbundanceModel,
    KafuScarcityCase,
    NishimuraAbundanceCase,
    SelfRecordMatrix,
    LiteraryEvidenceWarning,
    MediaEvidencePanel,
    MutableSourcePanel,
    SocialSourceConcept,
    ScreenshotEvidencePanel,
    AISourceOrInterface,
    AICompressionDiagram,
    EvidenceQuantityTraceabilityMatrix,
    FalseAbundanceDiagram,
    EvidenceEcology,
    HistoricalSourceStack,
    ArchiveFragilityPanel,
    ProvenanceFailureModes,
    ProvenanceCaseStudies,
    TwoDaysProvenanceCta,
    ArticleEvidenceBasis,
    SourceStateModel,
    SourceStateTimeline,
    AvailabilityIdentityPanel,
    UrlHistoryPanel,
    SourceVersionComparison,
    RedirectStatusPanel,
    Soft404Warning,
    SurvivalFragmentPanel,
    ArchiveCapturePanel,
    ScreenshotProvenanceLadder,
    SocialAccountStatePanel,
    SearchSnippetPanel,
    CitationGhostPanel,
    AITraceWithoutSource,
    SyntheticPersistenceDiagram,
    MutationChain,
    SourceStateMachine,
    LinkRotRegister,
    SourceMaintenanceQueue,
    SourceStateImpactPanel,
    UniqueSourceRiskPanel,
    SourceDependencyCollapse,
    LinkRotRepositoryAudit,
    LinkRotCaseStudies,
    LinkRotRelatedCta,
    ScreenshotEvidenceStack,
    AppearanceStructureComparison,
    OutsideTheFramePanel,
    ScreenshotContextPanel,
    OriginalSourcePath,
    PreservationVerificationMatrix,
    AccountIdentityEvidencePanel,
    ScreenshotTimeEvidencePanel,
    CropEditorialBoundary,
    ScreenshotModificationPanel,
    FrameVsEvent,
    ScreenshotCascadeDiagram,
    ContextCollapsePanel,
    TransactionalScreenshotPanel,
    HeadlineArticleSplit,
    AIImageProvenancePanel,
    ScreenshotClaimBoundaryPanel,
    TraceabilityLadder,
    ScreenshotPreservationBundlePanel,
    ScreenshotCaseStudy,
    ScreenshotRepositoryAudit,
    ScreenshotRelatedCta,
    DiaryDefinitionDimensions,
    ImpliedAudiencePanel,
    AudienceTransformation,
    AudienceFeedbackLoop,
    ChronologyVisibilitySplit,
    DiaryFeedOrderComparison,
    DeletionRecordPanel,
    EditedMemoryPanel,
    PhotoDiaryPanel,
    EphemeralRecordPanel,
    LiveRecordPanel,
    RecordActorNetwork,
    CommercialSelfRecordPanel,
    AIAssistedDiarySpectrum,
    RecordAuthorshipProfilePanel,
    FutureSocialArchivePanel,
    SocialDiaryProvenance,
    DiaryQualificationPanel,
    DiarySpectrum,
    DiaryFormComparisonMatrix,
    UnrecordedDayConcept,
    SnsDiaryCaseStudies,
    SnsDiaryRepositoryAudit,
    ControlKindsPanel,
    CreativeTimeTypes,
    DayWithoutPercentages,
    InstitutionalFootprint,
    MaintenanceTimeVisibility,
    SevenWriterTimeComparison,
    TimeObservatoryFramework,
    TimeOwnershipModel,
    WhoOwnsDayEpistemic,
    WhoOwnsDayRelatedLinks,
  };
}

