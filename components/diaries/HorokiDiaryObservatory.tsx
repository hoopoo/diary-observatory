import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ChronologyNarrativeOrder } from "@/components/diaries/ChronologyNarrativeOrder";
import { DiaryBreadcrumb } from "@/components/diaries/DiaryBreadcrumb";
import { DiaryResearchQueue } from "@/components/diaries/DiaryResearchQueue";
import {
  EditionComparisonWorkspace,
  HorokiEntryTarget,
} from "@/components/diaries/EditionComparisonWorkspace";
import { EditionObservatory } from "@/components/diaries/EditionObservatory";
import { HorokiObservatoriesBundle } from "@/components/diaries/HorokiObservatoriesBundle";
import { LifeCategoriesPanel } from "@/components/diaries/LifeCategoriesPanel";
import { TextualLayersPanel } from "@/components/diaries/TextualLayersPanel";
import { TransformationPath } from "@/components/diaries/TransformationPath";
import { VersionDifferenceMatrix } from "@/components/diaries/VersionDifferenceMatrix";
import { FactObservationInterpretationBlock } from "@/components/observations/FactObservationInterpretationBlock";
import { HousingTimeline } from "@/components/writers/HousingTimeline";
import { LivedRecordedPublishedRevised } from "@/components/writers/LivedRecordedPublishedRevised";
import {
  HOROKI_SLUG,
  horokiLead,
  horokiMetadata,
  horokiPageSources,
  horokiResearchQueue,
  sourceFormClassification,
  whatKindOfWork,
} from "@/data/diaries/horoki";
import type { DiaryWork, Writer } from "@/lib/types";

export function HorokiDiaryObservatory({
  diary,
  writer,
}: {
  diary: DiaryWork;
  writer?: Writer;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <DiaryBreadcrumb title={diary.title} titleJa={diary.titleOriginal} />

      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Diary-derived work</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {diary.title}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">
          {diary.titleOriginal}
        </p>
        {writer && (
          <p className="mt-4 text-sm text-text-faint">
            Writer:{" "}
            <Link
              href={`/writers/${writer.slug}`}
              className="focus-ring text-text-soft underline-offset-4 hover:underline"
            >
              {writer.name} / {writer.nameJa}
            </Link>
          </p>
        )}
        <p className="mt-2 text-sm text-text-soft">
          Source form: Diary-derived autobiographical work
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          日記的素材から構成された自伝的作品
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {sourceFormClassification.uiBadges.map((badge) => (
            <span
              key={badge.id}
              className={`border px-2.5 py-1 text-xs ${
                badge.active
                  ? "border-text text-text"
                  : "border-border text-text-faint line-through decoration-text-faint/40"
              }`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <p className="mt-2 text-xs text-text-faint">
          『放浪記』に Diary Badge を直接付けない。
        </p>

        <p className="editorial mt-8 text-xl text-accent md:text-2xl">
          {diary.tagline}
        </p>
        <p className="jp-serif mt-2 text-base text-text-soft">
          {diary.taglineJa}
        </p>

        <div className="jp-body mt-8 max-w-2xl space-y-4 text-[0.98rem]">
          {horokiLead.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2">
          {(
            [
              ["Writer", horokiMetadata.writer],
              ["Language", horokiMetadata.language],
              ["Primary period", horokiMetadata.primaryPeriod],
              ["Source form", horokiMetadata.sourceForm],
              ["Textual status", horokiMetadata.textualStatus],
              ["Edition status", horokiMetadata.editionStatus],
              ["Rights status", horokiMetadata.rightsStatus],
              ["Observation status", horokiMetadata.observationStatus],
              ["Verification status", horokiMetadata.verificationStatus],
              ["Last updated", horokiMetadata.lastUpdated],
            ] as const
          ).map(([k, v]) => (
            <div key={k}>
              <dt className="label">{k}</dt>
              <dd className="mt-1 text-text-soft">{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">{whatKindOfWork.title}</h2>
        <p className="jp-serif mt-2 text-sm text-accent">
          {whatKindOfWork.titleJa}
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {whatKindOfWork.badges.map((b) => (
            <li
              key={b.en}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">{b.en}</span>
              {b.ja}
            </li>
          ))}
        </ul>
        <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
          {whatKindOfWork.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside className="mt-8 border border-border px-5 py-6">
          <p className="editorial text-xl text-accent whitespace-pre-line">
            {whatKindOfWork.concept.en}
          </p>
          <p className="jp-serif mt-3 text-sm text-text-soft">
            {whatKindOfWork.concept.ja}
          </p>
        </aside>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Source form</h2>
        <p className="jp-serif mt-2 text-sm text-accent">資料形態</p>
        <p className="mt-4 text-sm text-text-soft">
          Primary: {sourceFormClassification.primary}
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {sourceFormClassification.related.map((r) => (
            <li
              key={r.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {r.label}
              </span>
              {r.labelJa}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <TransformationPath />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <EditionObservatory />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <VersionDifferenceMatrix />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <TextualLayersPanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <ChronologyNarrativeOrder />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <LivedRecordedPublishedRevised />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <LifeCategoriesPanel />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <HousingTimeline />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <HorokiObservatoriesBundle />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <HorokiEntryTarget />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <EditionComparisonWorkspace />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Research queue</h2>
        <p className="jp-serif mt-2 text-sm text-accent">調査対象</p>
        <div className="mt-8">
          <DiaryResearchQueue items={horokiResearchQueue} />
        </div>
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <FactObservationInterpretationBlock
          fact="『放浪記』は日記的素材から構成された自伝的作品として分類する。初期単行本の年次は暫定的な書誌目標であり、出版社等は未確認。"
          observation="生活記録は、選択・掲載・単行本・改訂・復元を経て読者へ届く。版差の具体セルは Not compared。"
          interpretation="固定された一冊ではなく、生活が文学へ変わる過程として読む。"
        />
      </section>

      <section className="mt-16 border-b border-border pb-14">
        <h2 className="editorial text-3xl text-text">Related</h2>
        <ul className="mt-6 space-y-2 text-sm text-text-soft">
          <li>
            <Link
              href="/writers/fumiko-hayashi"
              className="focus-ring underline-offset-4 hover:underline"
            >
              Fumiko Hayashi / 林芙美子
            </Link>
          </li>
          <li>
            <Link
              href="/observations/the-house-that-remained"
              className="focus-ring underline-offset-4 hover:underline"
            >
              残った家、消えた部屋
            </Link>
          </li>
          <li>
            <Link
              href="/entities/hayashi-fumiko-memorial-hall"
              className="focus-ring underline-offset-4 hover:underline"
            >
              Hayashi Fumiko Memorial Hall / 林芙美子記念館
            </Link>
          </li>
          <li>
            <Link
              href="/diaries/dancho-tei-nichijo"
              className="focus-ring underline-offset-4 hover:underline"
            >
              断腸亭日乗
            </Link>
          </li>
          <li>
            <Link
              href="/compare/four-urban-lives"
              className="focus-ring underline-offset-4 hover:underline"
            >
              Four Urban Lives / 四人の都市生活
            </Link>
          </li>
          <li>
            <Link
              href="/observations/maintenance-is-not-background"
              className="focus-ring underline-offset-4 hover:underline"
            >
              生活維持は、文学の背景ではない
            </Link>
          </li>
          <li>
            <Link
              href="/compare/urban-diarists"
              className="focus-ring underline-offset-4 hover:underline"
            >
              Three Urban Diarists / 三人の都市記録者
            </Link>
          </li>
          <li>
            <Link
              href="/observations/where-did-the-editor-go"
              className="focus-ring underline-offset-4 hover:underline"
            >
              編集者は消えたのか
            </Link>
          </li>
          <li>
            <Link
              href="/observations/the-manuscripts-that-were-not-chosen"
              className="focus-ring underline-offset-4 hover:underline"
            >
              選ばれなかった原稿
            </Link>
          </li>
          <li className="text-text-faint">
            Coming: /diaries/{HOROKI_SLUG}/editions
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <p className="max-w-2xl text-xs text-text-faint">
          Wikipediaのみを根拠にしない。架空URLを作らない。書誌と版研究を優先する。
        </p>
        <div className="mt-4">
          <CategorizedSourceList sources={horokiPageSources} />
        </div>
      </section>
    </div>
  );
}
