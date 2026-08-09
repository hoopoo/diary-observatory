import Link from "next/link";
import type { ReactNode } from "react";
import {
  appearanceItems,
  cascadeSteps,
  contextCollapseTypes,
  cropStatuses,
  evidenceStackLayers,
  evidenceStatuses,
  generationStatuses,
  getScreenshotObsRepositoryFacts,
  goodScreenshotHandling,
  badScreenshotHandling,
  modificationTypes,
  offerStates,
  originalPathStates,
  outsideTheFrame,
  relationTypes,
  structureItems,
  supportedClaimExamples,
  timestampTypes,
  traceabilityLadder,
  unsupportedClaimExamples,
} from "@/data/observations/screenshot-is-not-provenance";

function Flow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="mt-4 flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2 text-sm text-text-soft">
          <span className="border border-border px-3 py-2">{step}</span>
          {i < steps.length - 1 && (
            <span className="hidden text-text-faint md:inline" aria-hidden>
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 border border-dashed border-border px-3 py-3 text-xs text-text-faint">
      {children}
    </p>
  );
}

export function ScreenshotEvidenceStack() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Screenshot Evidence Stack</p>
      <p className="jp-heading mt-2 text-lg">スクリーンショットの証拠層</p>
      <ol className="mt-6 space-y-2">
        {evidenceStackLayers.map((layer) => (
          <li
            key={layer.id}
            className="border border-dashed border-border px-3 py-3 text-sm"
          >
            <span className="text-accent">Layer {layer.id}</span>
            <span className="ml-2 text-text-soft">{layer.label}</span>
            <span className="jp-serif ml-2 text-text-faint">{layer.labelJa}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AppearanceStructureComparison() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Appearance vs Structure</p>
      <p className="jp-heading mt-2 text-lg">表示と構造</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="label">Appearance</p>
          <ul className="mt-3 space-y-2 text-sm text-text-soft">
            {appearanceItems.map((item) => (
              <li key={item} className="border border-border px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Structure</p>
          <ul className="mt-3 space-y-2 text-sm text-text-faint">
            {structureItems.map((item) => (
              <li key={item} className="border border-dashed border-border px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function OutsideTheFramePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">What lies outside the frame?</p>
      <p className="jp-heading mt-2 text-lg">画面の外側に、何があるか</p>
      <ul className="mt-6 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {outsideTheFrame.map((item) => (
          <li key={item} className="border border-dashed border-border px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ScreenshotContextPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">ScreenshotContextProfile</p>
      <p className="jp-heading mt-2 text-lg">文脈の項目別確認</p>
      <ul className="mt-4 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
        {[
          "originalUrlKnown",
          "originalSourceKnown",
          "previousContextAvailable",
          "nextContextAvailable",
          "threadContextAvailable",
          "replyContextAvailable",
          "accountContextAvailable",
          "editHistoryAvailable",
          "captureTimeKnown",
          "captureDeviceKnown",
          "archiveAvailable",
        ].map((k) => (
          <li key={k} className="border border-border px-2 py-1">
            {k}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        high / moderate / partial / minimal / isolated / unknown · 単一スコアに圧縮しない
      </p>
      <EmptyNote>ScreenshotContextProfile instances: 0</EmptyNote>
    </section>
  );
}

export function OriginalSourcePath() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Original source path</p>
      <p className="jp-heading mt-2 text-lg">元資料への経路</p>
      <Flow
        steps={[
          "Screenshot",
          "Original URL",
          "Current Source",
          "Archived version",
          "Source State History",
          "FactClaim",
        ]}
      />
      <ul className="mt-6 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {originalPathStates.map((s) => (
          <li key={s} className="border border-dashed border-border px-3 py-2">
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <p className="label">ScreenshotRelation</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-text-faint">
          {relationTypes.map((r) => (
            <li key={r} className="border border-border px-2 py-1">
              {r}
            </li>
          ))}
        </ul>
      </div>
      <EmptyNote>ScreenshotRelation instances: 0. 関係を推測で埋めない。</EmptyNote>
    </section>
  );
}

export function PreservationVerificationMatrix() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Preservation / Verification Matrix</p>
      <p className="jp-heading mt-2 text-lg">残存価値 × 検証完成度</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
        {[
          ["Low preservation / low verification", "低保存・低検証"],
          ["High preservation / low verification", "高保存・低検証"],
          ["Low preservation / high verification", "低保存・高検証"],
          ["High preservation / high verification", "高保存・高検証"],
        ].map(([en, ja]) => (
          <div key={en} className="border border-border px-3 py-3">
            <p className="text-text-soft">{en}</p>
            <p className="jp-serif mt-1 text-text-faint">{ja}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-accent">
        スクリーンショットは「高保存・低検証」になりうる。具体Sourceを根拠なく配置しない。
      </p>
    </section>
  );
}

export function AccountIdentityEvidencePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">AccountIdentityEvidence</p>
      <p className="jp-heading mt-2 text-lg">表示名と識別子を分ける</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "Display name",
          "Handle",
          "Internal account ID",
          "Profile URL",
          "Historical handle",
        ].map((item) => (
          <li key={item} className="border border-dashed border-border px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
      <EmptyNote>本人確認を推測しない。AccountIdentityEvidence: 0</EmptyNote>
    </section>
  );
}

export function ScreenshotTimeEvidencePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">ScreenshotTimeEvidence</p>
      <p className="jp-heading mt-2 text-lg">時刻の種類</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {timestampTypes.map((t) => (
          <li key={t} className="border border-border px-2 py-1">
            {t}
          </li>
        ))}
      </ul>
      <EmptyNote>
        Relative time only を維持する場合がある。絶対時刻へ自動変換しない。
      </EmptyNote>
    </section>
  );
}

export function CropEditorialBoundary() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">CropRecord</p>
      <p className="jp-heading mt-2 text-lg">切り抜きは編集上の境界</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {cropStatuses.map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <EmptyNote>CropRecord instances: 0. crop ≠ fraud 自動判定しない。</EmptyNote>
    </section>
  );
}

export function ScreenshotModificationPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">ScreenshotModificationRecord</p>
      <p className="jp-heading mt-2 text-lg">編集の種類</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {modificationTypes.map((m) => (
          <li key={m} className="border border-dashed border-border px-3 py-2">
            {m}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        Modification ≠ fraud。開示・主張への影響・元画像の有無を追跡する。
      </p>
      <EmptyNote>ScreenshotModificationRecord instances: 0</EmptyNote>
    </section>
  );
}

export function FrameVsEvent() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">FrameSourceRecord</p>
      <p className="jp-heading mt-2 text-lg">フレームと出来事</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "parentVideoSourceId",
          "timestamp",
          "precedingContext",
          "followingContext",
          "audioAvailable",
          "transcriptAvailable",
          "editingStatus",
        ].map((f) => (
          <li key={f} className="border border-dashed border-border px-3 py-2">
            {f}
          </li>
        ))}
      </ul>
      <EmptyNote>FrameSourceRecord instances: 0</EmptyNote>
    </section>
  );
}

export function ScreenshotCascadeDiagram() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Screenshot Cascade</p>
      <p className="jp-heading mt-2 text-lg">スクリーンショット連鎖</p>
      <Flow steps={cascadeSteps} />
      <EmptyNote>ScreenshotCascade instances: 0. 概念型のみ。</EmptyNote>
    </section>
  );
}

export function ContextCollapsePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Context Collapse</p>
      <p className="jp-heading mt-2 text-lg">画像は残り、会話が消える</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {contextCollapseTypes.map((t) => (
          <li key={t} className="border border-dashed border-border px-3 py-2">
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TransactionalScreenshotPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">TransactionalScreenshotProfile</p>
      <p className="jp-heading mt-2 text-lg">広告・販売ページの証拠項目</p>
      <ul className="mt-4 grid gap-2 text-xs text-text-faint sm:grid-cols-2">
        {[
          "sellerEntityId",
          "productName",
          "displayedPrice",
          "offerConditions",
          "originalUrl",
          "captureTime",
          "termsUrl",
          "paymentEntityId",
        ].map((k) => (
          <li key={k} className="border border-border px-2 py-1">
            {k}
          </li>
        ))}
      </ul>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {offerStates.map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <EmptyNote>TransactionalScreenshotProfile instances: 0</EmptyNote>
    </section>
  );
}

export function HeadlineArticleSplit() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Headline / Article Split</p>
      <p className="jp-heading mt-2 text-lg">見出しと本文を分離する</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
        <div className="border border-border px-3 py-3">
          <p className="label">Strong for</p>
          <p className="mt-2 text-text-soft">this headline was displayed</p>
        </div>
        <div className="border border-dashed border-border px-3 py-3">
          <p className="label">Caution for</p>
          <p className="mt-2 text-text-faint">the entire article claimed X</p>
        </div>
      </div>
      <EmptyNote>HeadlineEvidenceRecord instances: 0</EmptyNote>
    </section>
  );
}

export function AIImageProvenancePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">GenerationProvenance · ai-edit</p>
      <p className="jp-heading mt-2 text-lg">見た目より経路</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {generationStatuses.map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        A hash proves file consistency, not historical truth. · AI判定を見た目だけで推測しない。
      </p>
      <EmptyNote>GenerationProvenance instances: 0</EmptyNote>
    </section>
  );
}

export function ScreenshotClaimBoundaryPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">What can this screenshot support?</p>
      <p className="jp-heading mt-2 text-lg">画像からどこまで言えるか</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="label">Supported (examples)</p>
          <ul className="mt-3 space-y-2 text-sm text-text-soft">
            {supportedClaimExamples.map((c) => (
              <li key={c} className="border border-border px-3 py-2">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Unsupported without more</p>
          <ul className="mt-3 space-y-2 text-sm text-text-faint">
            {unsupportedClaimExamples.map((c) => (
              <li key={c} className="border border-dashed border-border px-3 py-2">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-accent">
        Issue: claim-exceeds-image · Truth Label ではなく Provenance state
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="label">Bad handling</p>
          <Flow steps={badScreenshotHandling} />
        </div>
        <div>
          <p className="label">Good handling</p>
          <Flow steps={goodScreenshotHandling} />
        </div>
      </div>
      <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
        {evidenceStatuses.map((s) => (
          <li key={s.id} className="border border-dashed border-border px-3 py-2">
            <span className="text-text-soft">{s.label}</span>
            <span className="jp-serif ml-2 text-text-faint">{s.labelJa}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TraceabilityLadder() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Traceability ladder</p>
      <p className="jp-heading mt-2 text-lg">辿りやすさの梯子（品質点数ではない）</p>
      <ol className="mt-6 space-y-2">
        {traceabilityLadder.map((r) => (
          <li key={r.level} className="border border-border px-3 py-3 text-sm">
            <span className="text-accent">Level {r.level}</span>
            <span className="ml-2 text-text-soft">{r.label}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ScreenshotPreservationBundlePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Screenshot Preservation Bundle</p>
      <p className="jp-heading mt-2 text-lg">理想的な保存単位</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "Screenshot",
          "Original URL",
          "Capture date",
          "Platform",
          "Account identifier",
          "Visible timestamp",
          "Context note",
          "Source state",
          "Archive URL",
          "File hash (computed only)",
          "Modification history",
          "Related SourceCapture",
          "Related FactClaims",
        ].map((item) => (
          <li key={item} className="border border-dashed border-border px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        ハッシュが証明するのはファイル同一性。歴史的事実そのものではない。
      </p>
      <EmptyNote>ScreenshotPreservationBundle instances: 0</EmptyNote>
    </section>
  );
}

export function ScreenshotCaseStudy() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Case studies</p>
      <p className="jp-heading mt-2 text-lg">実在Screenshotだけをケース化する</p>
      <EmptyNote>
        No screenshot case has been fully indexed yet. ·
        完全に索引化されたスクリーンショット事例は、まだありません。
      </EmptyNote>
    </section>
  );
}

export function ScreenshotRepositoryAudit() {
  const audit = getScreenshotObsRepositoryFacts();
  const rows: [string, number][] = [
    ["Screenshot records", audit.screenshotRecords],
    ["Context profiles", audit.contextProfiles],
    ["Relations", audit.relations],
    ["Modifications", audit.modifications],
    ["Cascades", audit.cascades],
    ["Claim boundaries", audit.claimBoundaries],
    ["Preservation bundles", audit.preservationBundles],
    ["Indexed cases", audit.indexedCases],
  ];
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Repository audit</p>
      <p className="jp-heading mt-2 text-lg">スクリーンショット索引の現状</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map(([label, value]) => (
          <li key={label} className="border border-border px-4 py-3">
            <p className="label">{label}</p>
            <p className="editorial mt-2 text-2xl text-text">{value}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ScreenshotRelatedCta() {
  return (
    <aside className="my-10 border border-border px-5 py-6">
      <p className="label">Related</p>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          [
            "/observations/link-rot-is-archive-history",
            "リンク切れもまた資料史である",
          ],
          [
            "/observations/more-sources-less-certainty",
            "資料が多いほど、事実は単純になるのか",
          ],
          ["/sources", "Sources"],
          ["/provenance", "Provenance"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="underline-offset-4 hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
