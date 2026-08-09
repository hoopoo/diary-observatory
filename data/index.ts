import { comparisons } from "./comparisons";
import { diaries } from "./diaries";
import { entities } from "./entities";
import { entries } from "./entries";
import { HEISEI_ENTITY_IDS } from "./heisei-dancho";
import { observations } from "./observations";
import { writers } from "./writers";
import { buildSearchIndex } from "@/lib/search";
import { summarizeSurvival } from "@/lib/survival";

export * from "./axes";
export * from "./comparisons";
export {
  KAFU_NISHIMURA_COMPARE_ID,
  KAFU_NISHIMURA_COMPARE_SLUG,
  kafuNishimuraComparison,
} from "./comparisons/kafu-nishimura";
export {
  NISHIMURA_BUKOWSKI_COMPARE_ID,
  NISHIMURA_BUKOWSKI_COMPARE_SLUG,
  nishimuraBukowskiComparison,
} from "./comparisons/nishimura-bukowski";
export {
  URBAN_DIARISTS_ID,
  URBAN_DIARISTS_SLUG,
  urbanDiaristsComparison,
} from "./comparisons/urban-diarists";
export {
  FOUR_URBAN_LIVES_ID,
  FOUR_URBAN_LIVES_SLUG,
  fourUrbanLivesComparison,
  writerGroupComparisons,
} from "./comparisons/four-urban-lives";
export {
  ALCOHOL_OBS_ID,
  ALCOHOL_OBS_SLUG,
} from "./observations/alcohol-explains-writers-too-easily";
export {
  HOUSE_OBS_ID,
  HOUSE_OBS_SLUG,
} from "./observations/the-house-that-remained";
export {
  MAINT_OBS_ID,
  MAINT_OBS_SLUG,
} from "./observations/maintenance-is-not-background";
export {
  PRICE_OBS_ID,
  PRICE_OBS_SLUG,
} from "./observations/the-price-of-an-ordinary-day";
export {
  PRESS_OBS_ID,
  PRESS_OBS_SLUG,
} from "./observations/before-the-platform-small-press";
export {
  EDITOR_OBS_ID,
  EDITOR_OBS_SLUG,
} from "./observations/where-did-the-editor-go";
export {
  MS_OBS_ID,
  MS_OBS_SLUG,
} from "./observations/the-manuscripts-that-were-not-chosen";
export { manuscriptRecords } from "./manuscripts";
export { submissionRecords, responseArtifacts } from "./submissions";
export { archiveAbsences } from "./archive-absences";
export {
  editorialActions,
  editorialSystemProfiles,
} from "./editorial-actions";
export {
  editorialFunctionNodes,
  editorialFunctionEdges,
} from "./editorial-functions";
export {
  publishingRecords,
  publishingSystems,
} from "./publishing-records";
export {
  moneyRecords,
  getMoneyRecordsByWriter,
  buildMoneySummary,
} from "./money-records";
export {
  THREE_CITIES_OBS_ID,
  THREE_CITIES_SLUG,
} from "./observations/three-cities-three-speeds";
export * from "./diaries";
export * from "./entities";
export * from "./entities/tomaru-shoten";
export * from "./entries";
export * from "./entries/2011-05-02-kenji-nishimura";
export {
  ENTRY_ID_1918_01_01,
  ENTRY_SLUG_1918_01_01,
  entry19180101Meta,
} from "./entries/1918-01-01-kafu-nagai";
export * from "./heisei-dancho";
export {
  SAME_DAY_ID_2011_05_02,
  SAME_DAY_SLUG_2011_05_02,
  sameDay20110502,
  sameDayEntityIds,
} from "./same-day/2011-05-02";
export {
  SAME_DAY_ID_1918_01_01,
  SAME_DAY_SLUG_1918_01_01,
  sameDay19180101,
} from "./same-day/1918-01-01";
export * from "./navigation";
export * from "./observations";
export * from "./writers";
export * from "./writers/kenji-nishimura";
export {
  KAFU_SLUG,
  KAFU_WRITER_ID,
  KAFU_ENTITY_IDS,
} from "./writers/kafu-nagai";
export {
  BUKOWSKI_SLUG,
  BUKOWSKI_WRITER_ID,
  BUKOWSKI_ENTITY_IDS,
} from "./writers/charles-bukowski";
export {
  HAYASHI_SLUG,
  HAYASHI_WRITER_ID,
} from "./writers/fumiko-hayashi";
export {
  ROPPA_SLUG,
  ROPPA_WRITER_ID,
} from "./writers/furukawa-roppa";
export {
  ICHIYO_SLUG,
  ICHIYO_WRITER_ID,
} from "./writers/ichiyo-higuchi";
export {
  KAFKA_SLUG,
  KAFKA_WRITER_ID,
} from "./writers/franz-kafka";
export {
  WOOLF_SLUG,
  WOOLF_WRITER_ID,
} from "./writers/virginia-woolf";
export {
  PEPYS_SLUG,
  PEPYS_WRITER_ID,
} from "./writers/samuel-pepys";
export {
  WHO_OWNS_DAY_OBS_ID,
  WHO_OWNS_DAY_SLUG,
} from "./observations/who-owns-the-day";
export { retailRecords } from "./retail/registry";
export {
  primaryConditionDefinitions,
  writerConditionAssignments,
} from "./primary-conditions";
export { publishingActivityRecords } from "./publishing-activity-records";
export { literaryNetworkRelations } from "./literary-network-relations";
export { meetingRecords } from "./meeting-records";
export { readingRecords } from "./reading-records";
export { reviewRecords } from "./review-records";
export { administrationRecords } from "./administration-records";
export { publicEventImpactRecords } from "./public-event-impact-records";
export { cityInfrastructureRecords } from "./city-infrastructure-records";
export { entertainmentRecords } from "./entertainment-records";
export {
  publicHealthContextRecords,
  disasterContextRecords,
} from "./public-context-records";
export {
  timeOwnershipRecords,
  writingSessions,
  sleepRecords,
  interruptionRecords,
  correspondenceRecords,
  writingSystemProfiles,
  institutionalTimeRecords,
  familyTimeRecords,
  creativeTimeRecords,
} from "./time/registry";
export {
  CAPTAIN_DIARY_ID,
  CAPTAIN_DIARY_SLUG,
} from "./diaries/captain-is-out-to-lunch";
export {
  DANCHO_DIARY_ID,
  DANCHO_DIARY_SLUG,
  DANCHO_ENTITY_IDS,
  DANCHO_INDEXED_ENTRY_IDS,
} from "./diaries/dancho-tei-nichijo";
export {
  furukawaRoppaShowaDiary,
  ROPPA_DIARY_ID,
  ROPPA_DIARY_SLUG,
  roppaVolumeRecords,
  ROPPA_VOLUME_IDS,
} from "./diaries/furukawa-roppa-showa-diary";
export { horoki, HOROKI_ID, HOROKI_SLUG } from "./diaries/horoki";
export { horokiEditions } from "./editions/horoki";
export { roppaEditions, ROPPA_EDITION_SHOUBUNSHA_SET_ID, ROPPA_EDITION_SHOUBUNSHA_SET_SLUG } from "./editions/furukawa-roppa-showa-diary";
export { allEditions, listEditionSlugs } from "./editions/index";
export {
  registrySources,
  getPublicRegistrySources,
  sourceCollections,
} from "./sources/index";
export {
  MEMORIAL_ENTITY_ID,
  MEMORIAL_SLUG,
  memorialAccess,
  memorialResearchQueue,
} from "./entities/hayashi-fumiko-memorial-hall";
export { TOMARU_SLUG, TOMARU_ENTITY_ID } from "./entities/tomaru-shoten";
export { hayashiHousingRecords } from "./housing/fumiko-hayashi";
export {
  BACKSTAGE_OBS_ID,
  BACKSTAGE_OBS_SLUG,
} from "./observations/backstage-is-not-recorded";
export {
  ROPPA_FIRST_ENTRY_RESEARCH_SLUG,
  RESEARCH_URL,
} from "./research/furukawa-roppa-first-entry";
export {
  ROPPA_BIBLIOGRAPHY_SLUG,
  BIBLIOGRAPHY_URL,
} from "./research/furukawa-roppa-bibliography";

export function getSearchIndex() {
  return buildSearchIndex({ writers, diaries, entities, observations });
}

export function getSampleSurvival() {
  const sample = entities.filter((e) =>
    (HEISEI_ENTITY_IDS as readonly string[]).includes(e.id),
  );
  return summarizeSurvival(sample, {
    label: "A sample indexed world",
    labelJa: "2011年5月2日に記録された世界（サンプル）",
    date: "2011-05-02",
    note: "Not a single Survival Rate. Status breakdown only. Unknown remains unknown.",
    noteJa:
      "単一のSurvival Rateにはしない。状態別の内訳のみ。不明は不明のまま残す。",
  });
}

export const futureWriters = [
  "武田百合子",
  "正岡子規",
  "山田風太郎",
  "清沢洌",
  "高見順",
  "Henry David Thoreau",
  "Sylvia Plath",
  "Anaïs Nin",
  "Cesare Pavese",
  "Susan Sontag",
];
