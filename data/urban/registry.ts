import type {
  AccessCostRecord,
  AdministrationLocationRecord,
  CityVersion,
  CommerceNodeRecord,
  EncounterRecord,
  EntityStateRecord,
  HealthcareAccessRecord,
  HomeBaseProfile,
  ManuscriptMovementRecord,
  MobilityCapabilityRecord,
  PublishingLocationRecord,
  UrbanEntityRole,
  UrbanFunctionProfile,
  UrbanInterruptionRelation,
  UrbanLifePhase,
  UrbanSupportRelation,
  UrbanSystemDisruptionRecord,
  VenueFunctionProfile,
  WaitingNodeProfile,
  WorkplaceRelation,
} from "@/lib/types";

/** Empty urban layer registries — never invent locations, routes, or costs. */
export const urbanFunctionProfiles: UrbanFunctionProfile[] = [];
export const homeBaseProfiles: HomeBaseProfile[] = [];
export const workplaceRelations: WorkplaceRelation[] = [];
export const mobilityCapabilityRecords: MobilityCapabilityRecord[] = [];
export const commerceNodeRecords: CommerceNodeRecord[] = [];
export const publishingLocationRecords: PublishingLocationRecord[] = [];
export const manuscriptMovementRecords: ManuscriptMovementRecord[] = [];
export const venueFunctionProfiles: VenueFunctionProfile[] = [];
export const administrationLocationRecords: AdministrationLocationRecord[] = [];
export const healthcareAccessRecords: HealthcareAccessRecord[] = [];
export const accessCostRecords: AccessCostRecord[] = [];
export const encounterRecords: EncounterRecord[] = [];
export const waitingNodeProfiles: WaitingNodeProfile[] = [];
export const urbanInterruptionRelations: UrbanInterruptionRelation[] = [];
export const urbanSystemDisruptionRecords: UrbanSystemDisruptionRecord[] = [];
export const urbanLifePhases: UrbanLifePhase[] = [];
export const urbanEntityRoles: UrbanEntityRole[] = [];
export const entityStateRecords: EntityStateRecord[] = [];
export const urbanSupportRelations: UrbanSupportRelation[] = [];
export const cityVersions: CityVersion[] = [];

/** Conceptual OS layers — interpretive frame, not Fact. */
export const cityOsLayers = [
  { en: "Housing", ja: "住居" },
  { en: "Mobility", ja: "移動" },
  { en: "Work", ja: "仕事" },
  { en: "Commerce", ja: "商業" },
  { en: "Publishing", ja: "出版" },
  { en: "Performance", ja: "上演" },
  { en: "Administration", ja: "行政" },
  { en: "Health", ja: "医療" },
  { en: "Food", ja: "食事" },
  { en: "Communication", ja: "通信" },
  { en: "Social network", ja: "社会関係" },
  { en: "Maintenance", ja: "生活維持" },
  { en: "Public event", ja: "公共事件" },
  { en: "Unknown", ja: "不明" },
] as const;
