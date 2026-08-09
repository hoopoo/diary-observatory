import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ComingObservations } from "@/components/ComingObservations";
import { ConceptBlock } from "@/components/ConceptBlock";
import { DiaryComparisonCard } from "@/components/DiaryComparisonCard";
import { ObservationEntityCard } from "@/components/ObservationEntityCard";
import { ObservationSummary } from "@/components/ObservationSummary";
import { ObservationWorldStatus } from "@/components/ObservationWorldStatus";
import { Timeline } from "@/components/Timeline";
import { ObservationBreadcrumb } from "@/components/observations/ObservationBreadcrumb";
import AlcoholArticle from "@/content/observations/alcohol-explains-writers-too-easily.mdx";
import PriceArticle from "@/content/observations/the-price-of-an-ordinary-day.mdx";
import PressArticle from "@/content/observations/before-the-platform-small-press.mdx";
import EditorArticle from "@/content/observations/where-did-the-editor-go.mdx";
import MsArticle from "@/content/observations/the-manuscripts-that-were-not-chosen.mdx";
import HouseArticle from "@/content/observations/the-house-that-remained.mdx";
import MaintenanceArticle from "@/content/observations/maintenance-is-not-background.mdx";
import BackstageArticle from "@/content/observations/backstage-is-not-recorded.mdx";
import MoreSourcesArticle from "@/content/observations/more-sources-less-certainty.mdx";
import LinkRotArticle from "@/content/observations/link-rot-is-archive-history.mdx";
import ScreenshotObsArticle from "@/content/observations/screenshot-is-not-provenance.mdx";
import SnsDiaryArticle from "@/content/observations/is-social-media-a-diary.mdx";
import HeiseiDanchoArticle from "@/content/observations/heisei-dancho-tei-nichijo.mdx";
import ThreeCitiesArticle from "@/content/observations/three-cities-three-speeds.mdx";
import {
  buildMay2011WorldStatus,
  HEISEI_ENTITY_IDS,
  HEISEI_SLUG,
  heiseiTimeline,
  observationSummary,
  relatedComingObservations,
} from "@/data/heisei-dancho";
import {
  getEntitiesByIds,
  getObservationBySlug,
  getWriterById,
  observations,
} from "@/data/index";
import { getDiaryBySlug } from "@/data/diaries";
import {
  ALCOHOL_OBS_SLUG,
  alcoholMeta,
  relatedComingAlcohol,
} from "@/data/observations/alcohol-explains-writers-too-easily";
import {
  PRICE_OBS_SLUG,
  priceMeta,
  relatedComingPrice,
} from "@/data/observations/the-price-of-an-ordinary-day";
import {
  PRESS_OBS_SLUG,
  pressMeta,
  relatedComingPress,
} from "@/data/observations/before-the-platform-small-press";
import {
  EDITOR_OBS_SLUG,
  editorMeta,
  relatedComingEditor,
} from "@/data/observations/where-did-the-editor-go";
import {
  MS_OBS_SLUG,
  msMeta,
  relatedComingMs,
} from "@/data/observations/the-manuscripts-that-were-not-chosen";
import {
  HOUSE_OBS_SLUG,
  houseMeta,
  relatedComingHouse,
} from "@/data/observations/the-house-that-remained";
import {
  MAINT_OBS_SLUG,
  maintenanceMeta,
  relatedComingMaintenance,
} from "@/data/observations/maintenance-is-not-background";
import {
  BACKSTAGE_OBS_SLUG,
  backstageMeta,
  relatedComingBackstage,
} from "@/data/observations/backstage-is-not-recorded";
import {
  MORE_SOURCES_OBS_SLUG,
  moreSourcesMeta,
  relatedComingMoreSources,
} from "@/data/observations/more-sources-less-certainty";
import {
  LINK_ROT_OBS_SLUG,
  linkRotMeta,
  relatedComingLinkRot,
} from "@/data/observations/link-rot-is-archive-history";
import {
  SCREENSHOT_OBS_SLUG,
  screenshotObsMeta,
  relatedComingScreenshot,
} from "@/data/observations/screenshot-is-not-provenance";
import {
  SNS_DIARY_OBS_SLUG,
  snsDiaryMeta,
  relatedComingSnsDiary,
} from "@/data/observations/is-social-media-a-diary";
import {
  THREE_CITIES_SLUG,
  relatedComingForEssay,
  threeCitiesMeta,
} from "@/data/observations/three-cities-three-speeds";
import { SITE_URL } from "@/lib/site";
import { articleJsonLd, bookJsonLd, personJsonLd } from "@/lib/schema";
import type { EntityStatus } from "@/lib/types";

type Props = { params: Promise<{ slug: string }> };

const ARTICLE_BODY: Record<string, ComponentType> = {
  [HEISEI_SLUG]: HeiseiDanchoArticle,
  [THREE_CITIES_SLUG]: ThreeCitiesArticle,
  [ALCOHOL_OBS_SLUG]: AlcoholArticle,
  [PRICE_OBS_SLUG]: PriceArticle,
  [PRESS_OBS_SLUG]: PressArticle,
  [EDITOR_OBS_SLUG]: EditorArticle,
  [MS_OBS_SLUG]: MsArticle,
  [HOUSE_OBS_SLUG]: HouseArticle,
  [MAINT_OBS_SLUG]: MaintenanceArticle,
  [BACKSTAGE_OBS_SLUG]: BackstageArticle,
  [MORE_SOURCES_OBS_SLUG]: MoreSourcesArticle,
  [LINK_ROT_OBS_SLUG]: LinkRotArticle,
  [SCREENSHOT_OBS_SLUG]: ScreenshotObsArticle,
  [SNS_DIARY_OBS_SLUG]: SnsDiaryArticle,
};

export function generateStaticParams() {
  return observations.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const observation = getObservationBySlug(slug);
  if (!observation) return { title: "Observation" };

  const title =
    slug === HEISEI_SLUG
      ? "平成の断腸亭日乗｜Diary Observatory"
      : slug === THREE_CITIES_SLUG
        ? "三つの都市、三つの生活速度｜Diary Observatory"
        : slug === ALCOHOL_OBS_SLUG
          ? "酒は、作家を説明しすぎる｜Diary Observatory"
          : slug === PRICE_OBS_SLUG
            ? "一日の値段｜Diary Observatory"
            : slug === PRESS_OBS_SLUG
              ? "プラットフォーム以前の小出版｜Diary Observatory"
              : slug === EDITOR_OBS_SLUG
                ? "編集者は消えたのか｜Diary Observatory"
                : slug === MS_OBS_SLUG
                  ? "選ばれなかった原稿｜Diary Observatory"
                  : slug === HOUSE_OBS_SLUG
                    ? "残った家、消えた部屋｜Diary Observatory"
                    : slug === MAINT_OBS_SLUG
                      ? "生活維持は、文学の背景ではない｜Diary Observatory"
                      : slug === BACKSTAGE_OBS_SLUG
                        ? "楽屋は、歴史に映らない｜Diary Observatory"
                        : slug === MORE_SOURCES_OBS_SLUG
                          ? "資料が多いほど、事実は単純になるのか｜Diary Observatory"
                          : slug === LINK_ROT_OBS_SLUG
                            ? "リンク切れもまた資料史である｜Diary Observatory"
                            : slug === SCREENSHOT_OBS_SLUG
                              ? "スクリーンショットだけが残る｜Diary Observatory"
                              : slug === SNS_DIARY_OBS_SLUG
                                ? "SNSは日記なのか｜Diary Observatory"
                                : observation.title;

  const description = observation.summary;

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/observations/${slug}`,
      publishedTime: observation.publishedAt,
      modifiedTime: observation.updatedAt,
      authors: ["SHIRO & Co."],
    },
  };
}

export default async function ObservationDetailPage({ params }: Props) {
  const { slug } = await params;
  const observation = getObservationBySlug(slug);
  if (!observation) notFound();

  const isHeisei = slug === HEISEI_SLUG;
  const isThreeCities = slug === THREE_CITIES_SLUG;
  const isAlcohol = slug === ALCOHOL_OBS_SLUG;
  const isPrice = slug === PRICE_OBS_SLUG;
  const isPress = slug === PRESS_OBS_SLUG;
  const isEditor = slug === EDITOR_OBS_SLUG;
  const isMs = slug === MS_OBS_SLUG;
  const isHouse = slug === HOUSE_OBS_SLUG;
  const isMaintenance = slug === MAINT_OBS_SLUG;
  const isBackstage = slug === BACKSTAGE_OBS_SLUG;
  const isMoreSources = slug === MORE_SOURCES_OBS_SLUG;
  const isLinkRot = slug === LINK_ROT_OBS_SLUG;
  const isScreenshotObs = slug === SCREENSHOT_OBS_SLUG;
  const isSnsDiary = slug === SNS_DIARY_OBS_SLUG;
  const Body = ARTICLE_BODY[observation.slug];
  const writers = observation.writerIds
    .map((id) => getWriterById(id))
    .filter(Boolean);
  const linkedEntities = getEntitiesByIds(
    isHeisei
      ? [...HEISEI_ENTITY_IDS]
      : [
          ...observation.entityIds,
          ...(observation.fictionalEntityIds ?? []),
        ],
  );

  const statusCounts = linkedEntities.reduce(
    (acc, entity) => {
      acc[entity.status] = (acc[entity.status] ?? 0) + 1;
      return acc;
    },
    {} as Partial<Record<EntityStatus, number>>,
  );
  const worldStatus = buildMay2011WorldStatus(statusCounts);

  const nishimura = getWriterById("writer-nishimura");
  const diary = getDiaryBySlug("isshi-shosetsukaki-no-nichijo");
  const multiWriter =
    isThreeCities ||
    isAlcohol ||
    isPrice ||
    isPress ||
    isEditor ||
    isMs ||
    isHouse ||
    isMaintenance ||
    isMoreSources ||
    isLinkRot ||
    isScreenshotObs ||
    isSnsDiary ||
    isBackstage;
  const jsonLd = [
    articleJsonLd(observation),
    ...(multiWriter
      ? writers.map((w) => (w ? personJsonLd(w) : null))
      : [nishimura ? personJsonLd(nishimura) : null]),
    !multiWriter && diary && nishimura
      ? bookJsonLd(diary, nishimura)
      : null,
    multiWriter
      ? {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: observation.title,
          alternateName: observation.titleEn,
          url: `${SITE_URL}/observations/${observation.slug}`,
          about: writers.map((w) =>
            w
              ? {
                  "@type": "Person",
                  name: w.name,
                  alternateName: w.nameJa,
                  url: `${SITE_URL}/writers/${w.slug}`,
                }
              : null,
          ).filter(Boolean),
        }
      : null,
    multiWriter
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: observation.titleEn ?? observation.title,
          alternateName: observation.title,
          url: `${SITE_URL}/observations/${observation.slug}`,
        }
      : null,
    isHouse
      ? {
          "@context": "https://schema.org",
          "@type": ["Museum", "House", "Place"],
          name: "林芙美子記念館",
          alternateName: "Hayashi Fumiko Memorial Hall",
          url: `${SITE_URL}/entities/hayashi-fumiko-memorial-hall`,
        }
      : null,
  ].filter(Boolean);

  const breadcrumbLabel =
    observation.titleEn ?? observation.title;

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <article className="mx-auto w-full max-w-[42rem] px-5 py-14 md:px-8 md:py-20">
        <ObservationBreadcrumb label={breadcrumbLabel} />

        <header className="mt-6 border-b border-border pb-10">
          <p className="label">
            {isSnsDiary
              ? snsDiaryMeta.axisLabel
              : isScreenshotObs
              ? screenshotObsMeta.axisLabel
              : isLinkRot
              ? linkRotMeta.axisLabel
              : isMoreSources
              ? "Observation Axis — Provenance"
              : isBackstage
              ? "Observation Axis — Backstage"
              : isMaintenance
              ? "Observation Axis — Maintenance"
              : isHouse
              ? "Observation Axis — Housing"
              : isMs
              ? "Observation Axis — Rejection"
              : isEditor
                ? "Observation Axis — Editing"
                : isPress
                  ? "Observation Axis — Publishing"
                  : isPrice
                    ? "Observation Axis — Money"
                    : "Featured Observation"}
          </p>
          <h1 className="jp-heading mt-4 text-3xl md:text-[2.35rem]">
            {observation.title}
          </h1>
          {observation.subtitle && (
            <p className="jp-serif mt-3 text-lg text-text-soft md:text-xl">
              {observation.subtitle}
            </p>
          )}
          {observation.titleEn && (
            <p className="editorial mt-4 text-base text-accent">
              {observation.titleEn}
            </p>
          )}
          {observation.subtitleEn && (
            <p className="mt-2 text-xs tracking-wide text-text-faint">
              {observation.subtitleEn}
            </p>
          )}

          {isBackstage ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary writer</dt>
                <dd className="mt-1 text-text-soft">
                  <Link
                    href="/writers/furukawa-roppa"
                    className="focus-ring underline-offset-4 hover:underline"
                  >
                    {backstageMeta.primaryWriter}
                  </Link>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Primary diary</dt>
                <dd className="mt-1 text-text-soft">
                  <Link
                    href="/diaries/furukawa-roppa-showa-diary"
                    className="focus-ring underline-offset-4 hover:underline"
                  >
                    {backstageMeta.primaryDiary}
                  </Link>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{backstageMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {backstageMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {backstageMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {backstageMeta.lastUpdated}
                </dd>
              </div>
            </dl>
          ) : isMoreSources ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary comparison</dt>
                <dd className="mt-1 text-text-soft">
                  <Link
                    href={moreSourcesMeta.primaryComparisonHref}
                    className="focus-ring underline-offset-4 hover:underline"
                  >
                    {moreSourcesMeta.primaryComparison}
                  </Link>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{moreSourcesMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {moreSourcesMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {moreSourcesMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {moreSourcesMeta.lastUpdated}
                </dd>
              </div>
            </dl>
          ) : isLinkRot ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{linkRotMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {linkRotMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {linkRotMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {linkRotMeta.lastUpdated}
                </dd>
              </div>
            </dl>
          ) : isScreenshotObs ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">
                  {screenshotObsMeta.themes}
                </dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {screenshotObsMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {screenshotObsMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {screenshotObsMeta.lastUpdated}
                </dd>
              </div>
            </dl>
          ) : isSnsDiary ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{snsDiaryMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {snsDiaryMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {snsDiaryMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {snsDiaryMeta.lastUpdated}
                </dd>
              </div>
            </dl>
          ) : isMaintenance ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary writers</dt>
                <dd className="mt-1 text-text-soft">
                  {maintenanceMeta.primaryWriters}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Primary comparison</dt>
                <dd className="mt-1 text-text-soft">
                  <Link
                    href="/compare/four-urban-lives"
                    className="focus-ring underline-offset-4 hover:underline"
                  >
                    {maintenanceMeta.primaryComparison}
                  </Link>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{maintenanceMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {maintenanceMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {maintenanceMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {maintenanceMeta.lastUpdated}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : isHouse ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div>
                <dt className="label">Primary writer</dt>
                <dd className="mt-1 text-text-soft">{houseMeta.primaryWriter}</dd>
              </div>
              <div>
                <dt className="label">Primary entity</dt>
                <dd className="mt-1 text-text-soft">{houseMeta.primaryEntity}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Primary diary-derived work</dt>
                <dd className="mt-1 text-text-soft">{houseMeta.primaryDiaryWork}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{houseMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">{houseMeta.articleStatus}</dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">{houseMeta.verificationStatus}</dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">{houseMeta.lastUpdated}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : isMs ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary themes</dt>
                <dd className="mt-1 text-text-soft">{msMeta.themes}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Related writers</dt>
                <dd className="mt-1 text-text-soft">{msMeta.relatedWriters}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">{msMeta.articleStatus}</dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">{msMeta.verificationStatus}</dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">{msMeta.lastUpdated}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : isEditor ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary themes</dt>
                <dd className="mt-1 text-text-soft">{editorMeta.themes}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Related writers</dt>
                <dd className="mt-1 text-text-soft">{editorMeta.relatedWriters}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">{editorMeta.articleStatus}</dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">{editorMeta.verificationStatus}</dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">{editorMeta.lastUpdated}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : isPress ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary writer</dt>
                <dd className="mt-1 text-text-soft">{pressMeta.primaryWriter}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Related writers</dt>
                <dd className="mt-1 text-text-soft">{pressMeta.relatedWriters}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{pressMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">{pressMeta.articleStatus}</dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">{pressMeta.verificationStatus}</dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">{pressMeta.lastUpdated}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : isPrice ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary writers</dt>
                <dd className="mt-1 text-text-soft">
                  {priceMeta.primaryWriters}
                </dd>
              </div>
              <div>
                <dt className="label">Cities</dt>
                <dd className="mt-1 text-text-soft">{priceMeta.cities}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{priceMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {priceMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {priceMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {priceMeta.lastUpdated}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : isAlcohol ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label">Primary writers</dt>
                <dd className="mt-1 text-text-soft">
                  {alcoholMeta.primaryWriters}
                </dd>
              </div>
              <div>
                <dt className="label">Related writer</dt>
                <dd className="mt-1 text-text-soft">
                  {alcoholMeta.relatedWriter}
                </dd>
              </div>
              <div>
                <dt className="label">Cities</dt>
                <dd className="mt-1 text-text-soft">{alcoholMeta.cities}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{alcoholMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {alcoholMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {alcoholMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {alcoholMeta.lastUpdated}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : isThreeCities ? (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div>
                <dt className="label">Writers</dt>
                <dd className="mt-1 text-text-soft">{threeCitiesMeta.writers}</dd>
              </div>
              <div>
                <dt className="label">Cities</dt>
                <dd className="mt-1 text-text-soft">{threeCitiesMeta.cities}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Primary periods</dt>
                <dd className="mt-1 text-text-soft">{threeCitiesMeta.periods}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">{threeCitiesMeta.themes}</dd>
              </div>
              <div>
                <dt className="label">Article status</dt>
                <dd className="mt-1 text-text-soft">
                  {threeCitiesMeta.articleStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Verification status</dt>
                <dd className="mt-1 text-text-soft">
                  {threeCitiesMeta.verificationStatus}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">
                  {threeCitiesMeta.lastUpdated}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Writers</dt>
                <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-text-soft">
                  {writers.map(
                    (w) =>
                      w && (
                        <Link
                          key={w.id}
                          href={`/writers/${w.slug}`}
                          className="focus-ring underline-offset-4 hover:underline"
                        >
                          {w.name}
                        </Link>
                      ),
                  )}
                </dd>
              </div>
            </dl>
          ) : (
            <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
              <div>
                <dt className="label">Writer</dt>
                <dd className="mt-1 text-text-soft">
                  {writers[0] ? (
                    <Link
                      href={`/writers/${writers[0].slug}`}
                      className="focus-ring underline-offset-4 hover:underline"
                    >
                      {writers[0].name}
                    </Link>
                  ) : (
                    "—"
                  )}
                </dd>
              </div>
              <div>
                <dt className="label">Period observed</dt>
                <dd className="mt-1 text-text-soft">
                  {observation.periodObserved ?? "—"}
                </dd>
              </div>
              <div>
                <dt className="label">Primary city</dt>
                <dd className="mt-1 text-text-soft">
                  {observation.primaryCity ?? "—"}
                </dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="mt-1 text-text-soft">
                  {observation.observationStatus ?? "—"}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label">Themes</dt>
                <dd className="mt-1 text-text-soft">
                  {observation.themes.join(" / ")}
                </dd>
              </div>
              <div>
                <dt className="label">Last updated</dt>
                <dd className="mt-1 text-text-soft">{observation.updatedAt}</dd>
              </div>
            </dl>
          )}

          {observation.lead && (
            <div className="jp-body mt-8 space-y-4 text-[0.98rem]">
              {observation.lead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </header>

        {isHeisei && (
          <ObservationSummary
            observedWorld={observationSummary.observedWorld}
            observedWorldJa={observationSummary.observedWorldJa}
            mainQuestion={observationSummary.mainQuestion}
            mainQuestionEn={observationSummary.mainQuestionEn}
            findings={observationSummary.findings}
            legend={observationSummary.legend}
          />
        )}

        {Body ? (
          <div className="prose-diary mt-4">
            <Body />
          </div>
        ) : (
          <p className="mt-12 text-sm text-text-faint">
            MDX body not found. Add content/observations/
            {observation.contentPath}.mdx
          </p>
        )}

        <section className="my-14" aria-labelledby="entities-heading">
          <h2 id="entities-heading" className="editorial text-2xl text-text">
            Entities in this observation
          </h2>
          <p className="jp-serif mt-2 text-sm text-text-faint">
            日記に登場する世界
          </p>
          <div className="mt-6 grid gap-4">
            {linkedEntities.map((entity) => (
              <ObservationEntityCard
                key={entity.id}
                entity={entity}
                appearsIn={observation.title}
              />
            ))}
          </div>
        </section>

        {isThreeCities && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Published observations
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/observations/heisei-dancho-tei-nichijo"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">平成の断腸亭日乗</p>
                    <p className="jp-serif mt-1 text-sm text-text-soft">
                      西村賢太の日記に残る、消えていく東京
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/alcohol-explains-writers-too-easily"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      酒は、作家を説明しすぎる
                    </p>
                    <p className="jp-serif mt-1 text-sm text-text-soft">
                      西村賢太、ブコウスキー、そして作家像の消費
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/the-price-of-an-ordinary-day"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">一日の値段</p>
                    <p className="jp-serif mt-1 text-sm text-text-soft">
                      日記に残る本、酒、食事、賃金、家賃
                    </p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingForEssay} />
          </>
        )}

        {isPress && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Published observations
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/observations/the-manuscripts-that-were-not-chosen"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">選ばれなかった原稿</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/where-did-the-editor-go"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">編集者は消えたのか</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/the-price-of-an-ordinary-day"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">一日の値段</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/three-cities-three-speeds"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      三つの都市、三つの生活速度
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/heisei-dancho-tei-nichijo"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">平成の断腸亭日乗</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/alcohol-explains-writers-too-easily"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      酒は、作家を説明しすぎる
                    </p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingPress} />
          </>
        )}

        {isEditor && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Published observations
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/observations/the-manuscripts-that-were-not-chosen"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">選ばれなかった原稿</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/before-the-platform-small-press"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">プラットフォーム以前の小出版</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/the-price-of-an-ordinary-day"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">一日の値段</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/three-cities-three-speeds"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      三つの都市、三つの生活速度
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/heisei-dancho-tei-nichijo"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">平成の断腸亭日乗</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/alcohol-explains-writers-too-easily"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      酒は、作家を説明しすぎる
                    </p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingEditor} />
          </>
        )}

        {isMs && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Published observations
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/observations/where-did-the-editor-go"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">編集者は消えたのか</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/before-the-platform-small-press"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">プラットフォーム以前の小出版</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/the-price-of-an-ordinary-day"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">一日の値段</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/three-cities-three-speeds"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      三つの都市、三つの生活速度
                    </p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingMs} />
          </>
        )}

        {isHouse && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Related pages
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/writers/fumiko-hayashi"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Writer</p>
                    <p className="editorial mt-2 text-xl">林芙美子</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diaries/horoki"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Diary Work</p>
                    <p className="editorial mt-2 text-xl">放浪記</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entities/hayashi-fumiko-memorial-hall"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Entity</p>
                    <p className="editorial mt-2 text-xl">林芙美子記念館</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/the-price-of-an-ordinary-day"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">一日の値段</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/maintenance-is-not-background"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      生活維持は、文学の背景ではない
                    </p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingHouse} />
          </>
        )}

        {isMaintenance && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Related pages
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/compare/four-urban-lives"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Comparison</p>
                    <p className="editorial mt-2 text-xl">Four Urban Lives</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/writers/fumiko-hayashi"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Writer</p>
                    <p className="editorial mt-2 text-xl">林芙美子</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/writers/furukawa-roppa"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Writer</p>
                    <p className="editorial mt-2 text-xl">古川ロッパ</p>
                    <p className="mt-1 text-xs text-text-faint">
                      Performance · food · body (adjacent axis)
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/backstage-is-not-recorded"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">楽屋は、歴史に映らない</p>
                    <p className="mt-1 text-xs text-text-faint">
                      Performance axis · invisible labor
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diaries/horoki"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Diary Work</p>
                    <p className="editorial mt-2 text-xl">放浪記</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diaries/dancho-tei-nichijo"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Diary</p>
                    <p className="editorial mt-2 text-xl">断腸亭日乗</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/the-house-that-remained"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">残った家、消えた部屋</p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingMaintenance} />
          </>
        )}

        {isMoreSources && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">Related pages</h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/observations/link-rot-is-archive-history"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      リンク切れもまた資料史である
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compare/two-days-two-provenances"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Comparison</p>
                    <p className="editorial mt-2 text-xl">Two Days, Two Provenances</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/provenance"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Provenance</p>
                    <p className="editorial mt-2 text-xl">Provenance health</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entries/1918-01-01-kafu-nagai"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Entry</p>
                    <p className="editorial mt-2 text-xl">1918-01-01 · Kafū</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entries/2011-05-02-kenji-nishimura"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Entry</p>
                    <p className="editorial mt-2 text-xl">2011-05-02 · Nishimura</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sources"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Sources</p>
                    <p className="editorial mt-2 text-xl">Sources Observatory</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diaries/horoki"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Diary Work</p>
                    <p className="editorial mt-2 text-xl">放浪記</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research/furukawa-roppa-first-entry"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Research</p>
                    <p className="editorial mt-2 text-xl">Roppa first entry</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/maintenance-is-not-background"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">生活維持は、文学の背景ではない</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/three-cities-three-speeds"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">三つの都市、三つの生活速度</p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingMoreSources} />
          </>
        )}

        {isLinkRot && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">Related pages</h2>
              <ul className="mt-6 space-y-3">
                {[
                  [
                    "/observations/screenshot-is-not-provenance",
                    "Published",
                    "スクリーンショットだけが残る",
                  ],
                  [
                    "/observations/more-sources-less-certainty",
                    "Published",
                    "資料が多いほど、事実は単純になるのか",
                  ],
                  ["/sources", "Sources", "Sources Observatory"],
                  ["/sources/link-rot", "Register", "Link Rot Register"],
                  ["/provenance", "Provenance", "Provenance health"],
                  ["/editions", "Editions", "Editions"],
                  [
                    "/observations/where-did-the-editor-go",
                    "Published",
                    "編集者は消えたのか",
                  ],
                  ["/about", "About", "Methodology"],
                ].map(([href, label, title]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                    >
                      <p className="label">{label}</p>
                      <p className="editorial mt-2 text-xl">{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <ComingObservations items={relatedComingLinkRot} />
          </>
        )}

        {isScreenshotObs && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">Related pages</h2>
              <ul className="mt-6 space-y-3">
                {[
                  [
                    "/observations/is-social-media-a-diary",
                    "Published",
                    "SNSは日記なのか",
                  ],
                  [
                    "/observations/link-rot-is-archive-history",
                    "Published",
                    "リンク切れもまた資料史である",
                  ],
                  [
                    "/observations/more-sources-less-certainty",
                    "Published",
                    "資料が多いほど、事実は単純になるのか",
                  ],
                  ["/sources", "Sources", "Sources Observatory"],
                  ["/provenance", "Provenance", "Provenance health"],
                  ["/about", "About", "Methodology"],
                ].map(([href, label, title]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                    >
                      <p className="label">{label}</p>
                      <p className="editorial mt-2 text-xl">{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <ComingObservations items={relatedComingScreenshot} />
          </>
        )}

        {isSnsDiary && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">Related pages</h2>
              <ul className="mt-6 space-y-3">
                {[
                  [
                    "/observations/screenshot-is-not-provenance",
                    "Published",
                    "スクリーンショットだけが残る",
                  ],
                  [
                    "/observations/link-rot-is-archive-history",
                    "Published",
                    "リンク切れもまた資料史である",
                  ],
                  [
                    "/observations/more-sources-less-certainty",
                    "Published",
                    "資料が多いほど、事実は単純になるのか",
                  ],
                  ["/diaries/dancho-tei-nichijo", "Diary", "断腸亭日乗"],
                  ["/diaries/horoki", "Diary", "放浪記"],
                  [
                    "/entries/2011-05-02-kenji-nishimura",
                    "Entry",
                    "2011-05-02 · Nishimura",
                  ],
                  ["/provenance", "Provenance", "Provenance health"],
                  ["/sources", "Sources", "Sources Observatory"],
                  ["/about", "About", "Methodology"],
                ].map(([href, label, title]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                    >
                      <p className="label">{label}</p>
                      <p className="editorial mt-2 text-xl">{title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <ComingObservations items={relatedComingSnsDiary} />
          </>
        )}

        {isBackstage && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Related pages
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/writers/furukawa-roppa"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Writer</p>
                    <p className="editorial mt-2 text-xl">Roppa Furukawa</p>
                    <p className="jp-serif mt-1 text-sm text-accent">古川ロッパ</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diaries/furukawa-roppa-showa-diary"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Diary Work</p>
                    <p className="editorial mt-2 text-xl">
                      Furukawa Roppa Shōwa Diary
                    </p>
                    <p className="jp-serif mt-1 text-sm text-accent">
                      古川ロッパ昭和日記
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/maintenance-is-not-background"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      生活維持は、文学の背景ではない
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/where-did-the-editor-go"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">編集者は消えたのか</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/the-price-of-an-ordinary-day"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">一日の値段</p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingBackstage} />
          </>
        )}


        {isPrice && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Published observations
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/observations/alcohol-explains-writers-too-easily"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      酒は、作家を説明しすぎる
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/three-cities-three-speeds"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      三つの都市、三つの生活速度
                    </p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingPrice} />
          </>
        )}

        {isAlcohol && (
          <>
            <section className="my-14">
              <h2 className="editorial text-2xl text-text">
                Published observations
              </h2>
              <ul className="mt-6 space-y-3">
                <li>
                  <Link
                    href="/observations/three-cities-three-speeds"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">
                      三つの都市、三つの生活速度
                    </p>
                    <p className="jp-serif mt-1 text-sm text-text-soft">
                      荷風・西村賢太・ブコウスキーの日記から
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/observations/heisei-dancho-tei-nichijo"
                    className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
                  >
                    <p className="label">Published</p>
                    <p className="editorial mt-2 text-xl">平成の断腸亭日乗</p>
                    <p className="jp-serif mt-1 text-sm text-text-soft">
                      西村賢太の日記に残る、消えていく東京
                    </p>
                  </Link>
                </li>
              </ul>
            </section>
            <ComingObservations items={relatedComingAlcohol} />
          </>
        )}

        {isHeisei && (
          <>
            <ObservationWorldStatus data={worldStatus} />

            <section className="my-14" aria-labelledby="timeline-heading">
              <h2 id="timeline-heading" className="editorial text-2xl text-text">
                Timeline
              </h2>
              <p className="jp-serif mt-2 text-sm text-text-faint">
                西村賢太と日記を取り巻く時系列
              </p>
              <div className="mt-6">
                <Timeline items={heiseiTimeline} />
              </div>
            </section>

            <DiaryComparisonCard />

            <ConceptBlock
              title="Not generation, but excavation."
              paragraphs={[
                "AIは、自分好みの物語を生成できる。",
                "しかし日記に残るのは、一度しか生きられなかった一日である。",
                "Diary Observatoryは、存在しなかった過去を生成するのではなく、実際に存在した生活を発掘する。",
              ]}
            />

            <ComingObservations items={relatedComingObservations} />

            <section className="my-10 flex flex-wrap gap-3">
              <Link
                href="/observations/three-cities-three-speeds"
                className="focus-ring inline-flex border border-border px-4 py-3 text-sm text-text-soft hover:border-text-faint"
              >
                Related essay: 三つの都市、三つの生活速度 →
              </Link>
              <Link
                href="/observations/alcohol-explains-writers-too-easily"
                className="focus-ring inline-flex border border-border px-4 py-3 text-sm text-text-soft hover:border-text-faint"
              >
                Related essay: 酒は、作家を説明しすぎる →
              </Link>
            </section>
          </>
        )}

        <CategorizedSourceList sources={observation.sources} />
      </article>
    </>
  );
}
