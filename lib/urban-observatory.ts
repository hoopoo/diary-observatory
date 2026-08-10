import { administrationRecords } from "@/data/administration-records";
import { cityInfrastructureRecords } from "@/data/city-infrastructure-records";
import { getEntitiesByWriter } from "@/data/entities";
import { hayashiHousingRecords } from "@/data/housing/fumiko-hayashi";
import { getMaintenanceEventsByWriter } from "@/data/maintenance-events";
import { getMoneyRecordsByWriter } from "@/data/money-records";
import { getPublishingRecordsByWriter } from "@/data/publishing-records";
import { getRetailRecordsByWriter } from "@/data/retail/registry";
import {
  accessCostRecords,
  administrationLocationRecords,
  commerceNodeRecords,
  encounterRecords,
  entityStateRecords,
  healthcareAccessRecords,
  homeBaseProfiles,
  manuscriptMovementRecords,
  mobilityCapabilityRecords,
  publishingLocationRecords,
  urbanEntityRoles,
  urbanFunctionProfiles,
  urbanLifePhases,
  urbanSystemDisruptionRecords,
  venueFunctionProfiles,
  waitingNodeProfiles,
  workplaceRelations,
} from "@/data/urban/registry";
import { getWorkRecordsByWriter } from "@/data/work/registry";
import { getWriterById, writers } from "@/data/writers";
import type {
  Entity,
  HomeBaseProfile,
  HousingRecord,
  UrbanFunctionProfile,
} from "@/lib/types";

function allHousingRecords(): HousingRecord[] {
  return [...hayashiHousingRecords];
}

export function getHousingRecordsByWriter(writerId: string) {
  return allHousingRecords().filter((h) => h.writerId === writerId);
}

export function getUrbanEntitiesByWriter(writerId: string): Entity[] {
  return getEntitiesByWriter(writerId);
}

export function getUrbanFunctionsByEntity(entityId: string) {
  return urbanFunctionProfiles.filter((p) => p.entityId === entityId);
}

export function getHomeBaseProfile(writerId: string): HomeBaseProfile {
  const registered = homeBaseProfiles.find((p) => p.writerId === writerId);
  if (registered) return registered;
  const housing = getHousingRecordsByWriter(writerId);
  return {
    writerId,
    housingRecordId: housing[0]?.id,
    entityId: housing[0]?.placeId,
    relatedWorkplaceIds: [],
    relatedPublisherIds: [],
    relatedPerformanceVenueIds: [],
    relatedShopIds: [],
    relatedHealthcareIds: [],
    movementRecordIds: [],
    accessStatus: housing.length > 0 ? "housing-partial" : "not-indexed",
    verificationStatus: housing.length > 0 ? "indexing" : "unverified",
    notes:
      "Distances, commute durations, and routes are not inferred from housing labels.",
  };
}

export function getWorkplaceNetwork(writerId: string) {
  return workplaceRelations.filter((r) => r.writerId === writerId);
}

export function getMovementCapabilities(writerId: string) {
  return mobilityCapabilityRecords.filter((r) => r.writerId === writerId);
}

export function getCommerceNodes(writerId: string) {
  return commerceNodeRecords.filter((r) => r.writerId === writerId);
}

export function getPublishingGeography(writerId: string) {
  return publishingLocationRecords.filter((r) =>
    r.relatedWriterIds?.includes(writerId),
  );
}

export function getPerformanceVenueNetwork(writerId: string) {
  return venueFunctionProfiles.filter((p) =>
    p.performanceIds?.some((id) => id.includes(writerId)),
  );
}

export function getAdministrativeGeography(writerId: string) {
  return administrationLocationRecords.filter((r) => {
    if (!r.administrationRecordId) return false;
    return administrationRecords.some(
      (a) => a.id === r.administrationRecordId && a.writerId === writerId,
    );
  });
}

export function getHealthcareAccess(writerId: string) {
  return healthcareAccessRecords.filter((r) => r.writerId === writerId);
}

export function getAccessCosts(writerId: string) {
  return accessCostRecords.filter((r) => r.writerId === writerId);
}

export function getEncounters(writerId: string) {
  return encounterRecords.filter((r) => r.writerId === writerId);
}

export function getWaitingNodes(_writerId?: string) {
  return waitingNodeProfiles;
}

export function getUrbanLifePhases(writerId: string) {
  return urbanLifePhases.filter((p) => p.writerId === writerId);
}

export function getEntityHistoricalState(entityId: string, _date?: string) {
  return entityStateRecords.filter((s) => s.entityId === entityId);
}

export function getUrbanDayGraph(entryId: string) {
  return {
    entryId,
    nodes: [] as string[],
    edges: [] as string[],
    note: "No edges without Movement / Encounter / Activity evidence.",
  };
}

export type WriterUrbanComparisonCard = {
  writerId: string;
  slug: string;
  name: string;
  nameJa: string;
  primaryConditionShort: string;
  primaryCity: string;
  urbanQuestion: string;
  entityCount: number;
  housingRecordCount: number;
  movementCapabilityCount: number;
  workRecordCount: number;
  publishingRecordCount: number;
  publishingLocationCount: number;
  commerceNodeCount: number;
  retailRecordCount: number;
  maintenanceEventCount: number;
  administrationRecordCount: number;
  moneyRecordCount: number;
  cityInfrastructureCount: number;
  mainUnknown: string;
  dataStatus: string;
};

const URBAN_QUESTIONS: Record<string, string> = {
  "writer-kafu": "How does environment enter the day?",
  "writer-nishimura":
    "How do publishing and media reshape urban movement?",
  "writer-bukowski":
    "How does labor structure movement through the city?",
  "writer-hayashi":
    "How does maintenance depend on urban access?",
  "writer-roppa":
    "How does performance create a network of venues and waiting?",
  "writer-ichiyo":
    "How do household economy and commerce connect home to city?",
  "writer-kafka": "How do home, office, and writing time connect?",
  "writer-woolf":
    "How does publishing create a geography of literary work?",
  "writer-pepys":
    "How does administration turn the city into a working network?",
};

const MAIN_UNKNOWNS: Record<string, string> = {
  "writer-kafu": "Day-level MovementRecords; historical Entity states",
  "writer-nishimura":
    "Movement between media/publishing nodes with SourceCapture",
  "writer-bukowski": "Labor routes and workplace Entity linkage",
  "writer-hayashi": "Actor-resolved housing; access cost evidence",
  "writer-roppa": "Venue function layers beyond performance labels",
  "writer-ichiyo": "Verified commerce / household access nodes",
  "writer-kafka": "Home–office–route with durations (not invented)",
  "writer-woolf": "Publishing geography Actors with sources",
  "writer-pepys": "Administrative locations linked to Entry evidence",
};

const CONDITION_SHORT: Record<string, string> = {
  environment: "Environment",
  media: "Media",
  labor: "Labor",
  maintenance: "Maintenance",
  performance: "Performance",
  "household-economy": "Household Economy",
  time: "Time",
  "publishing-network": "Publishing",
  "administration-public-life": "Administration",
};

export function compareWriterUrbanProfiles(
  writerIds?: string[],
): WriterUrbanComparisonCard[] {
  const ids = writerIds ?? writers.map((w) => w.id);
  return ids.map((writerId) => {
    const writer = getWriterById(writerId);
    if (!writer) throw new Error(`Unknown writerId: ${writerId}`);
    const entities = getUrbanEntitiesByWriter(writerId);
    const housing = getHousingRecordsByWriter(writerId);
    const mobility = getMovementCapabilities(writerId);
    const work = getWorkRecordsByWriter(writerId);
    const publishing = getPublishingRecordsByWriter(writerId);
    const pubLoc = getPublishingGeography(writerId);
    const commerce = getCommerceNodes(writerId);
    const retail = getRetailRecordsByWriter(writerId);
    const maint = getMaintenanceEventsByWriter(writerId);
    const admin = administrationRecords.filter((r) => r.writerId === writerId);
    const money = getMoneyRecordsByWriter(writerId);
    const infra = cityInfrastructureRecords.filter(
      (r) => r.writerId === writerId,
    );
    const hasAny =
      entities.length +
        housing.length +
        publishing.length +
        money.length +
        maint.length >
      0;

    return {
      writerId,
      slug: writer.slug,
      name: writer.name,
      nameJa: writer.nameJa,
      primaryConditionShort:
        CONDITION_SHORT[writer.primaryCondition ?? ""] ??
        writer.primaryCondition ??
        "Unknown",
      primaryCity: writer.primaryCity ?? writer.city,
      urbanQuestion:
        URBAN_QUESTIONS[writerId] ??
        "What urban systems make an ordinary day possible?",
      entityCount: entities.length,
      housingRecordCount: housing.length,
      movementCapabilityCount: mobility.length,
      workRecordCount: work.length,
      publishingRecordCount: publishing.length,
      publishingLocationCount: pubLoc.length,
      commerceNodeCount: commerce.length,
      retailRecordCount: retail.length,
      maintenanceEventCount: maint.length,
      administrationRecordCount: admin.length,
      moneyRecordCount: money.length,
      cityInfrastructureCount: infra.length,
      mainUnknown: MAIN_UNKNOWNS[writerId] ?? "Bibliographic + Entry indexing",
      dataStatus: hasAny
        ? "Partial repository traces · functional network incomplete"
        : "No indexed urban day-network records",
    };
  });
}

export function getUrbanEntityRolesByWriter(writerId: string) {
  return urbanEntityRoles.filter((r) => r.writerId === writerId);
}

export function getUrbanSystemDisruptions() {
  return urbanSystemDisruptionRecords;
}

export function deriveCityLayersFromEntity(entity: Entity): string[] {
  const layers: string[] = [];
  const t = entity.type?.toLowerCase() ?? "";
  if (t.includes("shop") || t.includes("bookstore") || t.includes("store"))
    layers.push("commerce");
  if (t.includes("publisher") || t.includes("press")) layers.push("publishing");
  if (t.includes("theater") || t.includes("venue")) layers.push("performance");
  if (t.includes("hospital") || t.includes("clinic")) layers.push("healthcare");
  if (t.includes("home") || t.includes("housing")) layers.push("housing");
  if (layers.length === 0) layers.push("unknown");
  return layers;
}

/** Explicit registry accessor for future UI — currently empty. */
export function listUrbanFunctionProfiles(): UrbanFunctionProfile[] {
  return urbanFunctionProfiles;
}
