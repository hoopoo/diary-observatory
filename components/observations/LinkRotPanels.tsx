import Link from "next/link";
import type { ReactNode } from "react";
import {
  accountStatuses,
  availabilityIdentityRows,
  badLinkRotHandling,
  dateKinds,
  derivativeDistanceLevels,
  fragmentTypes,
  getLinkRotRepositoryFacts,
  goodLinkRotHandling,
  linkRotDisplayStates,
  mutationChainSteps,
  mutationRisks,
  screenshotProvenanceLadder,
  soft404Definition,
  sourceStateModel,
  versionDiffDimensions,
  webSourceTimelineSteps,
} from "@/data/observations/link-rot-is-archive-history";

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

export function SourceStateModel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Source State</p>
      <p className="jp-heading mt-2 text-lg">Web資料の状態モデル</p>
      <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
        {sourceStateModel.map((s) => (
          <li key={s.id} className="border border-dashed border-border px-3 py-2">
            <span className="text-text-soft">{s.label}</span>
            <span className="jp-serif ml-2 text-text-faint">{s.labelJa}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        Alive / Dead の二項対立にしない。現在状態と履歴を分ける。
      </p>
    </section>
  );
}

export function SourceStateTimeline() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Timeline of a Web Source</p>
      <p className="jp-heading mt-2 text-lg">Web資料の解釈的タイムライン</p>
      <Flow steps={webSourceTimelineSteps} />
      <p className="mt-4 text-xs text-text-faint">
        Interpretive model。すべてのSourceがこの順序を通るわけではない。
      </p>
    </section>
  );
}

export function AvailabilityIdentityPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Availability · Identity · Version · Provenance</p>
      <p className="jp-heading mt-2 text-lg">到達可能性と同一性は別問題</p>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
        {[
          ["Availability", "開けるか"],
          ["Identity", "以前と同じ資料か"],
          ["Version", "同じ内容か"],
          ["Provenance", "いつ何を確認したか"],
        ].map(([en, ja]) => (
          <div key={en} className="border border-border px-3 py-3">
            <dt className="text-text-soft">{en}</dt>
            <dd className="jp-serif mt-1 text-text-faint">{ja}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-6 space-y-2 text-sm text-text-faint">
        {availabilityIdentityRows.map((row) => (
          <li key={row.left} className="border border-dashed border-border px-3 py-2">
            {row.left} ≠ {row.right}
            <span className="jp-serif ml-2 text-xs">{row.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function UrlHistoryPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">SourceUrlRecord</p>
      <p className="jp-heading mt-2 text-lg">URL履歴</p>
      <p className="mt-3 text-sm text-text-soft">
        Source.url は現行ポインタとして維持する。必要に応じて
        sourceUrlRecordIds / SourceUrlRecord で履歴を追加する。
      </p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {[
          "canonical",
          "former",
          "redirected",
          "alternate",
          "archived",
          "broken",
          "unknown",
        ].map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <EmptyNote>
        URL history records indexed: 0. 架空の旧URLは登録しない。
      </EmptyNote>
    </section>
  );
}

export function SourceVersionComparison() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Version difference (summary only)</p>
      <p className="jp-heading mt-2 text-lg">版差の要約比較</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
        <div className="border border-border px-3 py-3">
          <p className="label">Version A</p>
          <p className="mt-2 text-text-faint">Checked at X</p>
        </div>
        <div className="border border-border px-3 py-3">
          <p className="label">Version B</p>
          <p className="mt-2 text-text-faint">Checked at Y</p>
        </div>
      </div>
      <ul className="mt-6 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {versionDiffDimensions.map((d) => (
          <li key={d} className="border border-dashed border-border px-3 py-2">
            {d}
          </li>
        ))}
      </ul>
      <EmptyNote>
        SourceVersionRecord instances: 0. 長文diffと著作権本文の大量比較は行わない。
      </EmptyNote>
    </section>
  );
}

export function RedirectStatusPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">RedirectRecord · DestinationMatch</p>
      <p className="jp-heading mt-2 text-lg">リダイレクトの意味</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "same-source",
          "likely-same-source",
          "new-version",
          "generic-page",
          "unrelated",
          "unavailable",
          "unknown",
        ].map((m) => (
          <li key={m} className="border border-dashed border-border px-3 py-2">
            {m}
          </li>
        ))}
      </ul>
      <EmptyNote>RedirectRecord instances: 0. 転送先を同一Sourceと自動判定しない。</EmptyNote>
    </section>
  );
}

export function Soft404Warning() {
  return (
    <aside className="my-8 border border-border px-5 py-6">
      <p className="label">Soft 404</p>
      <p className="jp-heading mt-2 text-lg">ソフト404</p>
      <p className="mt-3 text-sm text-text-soft">{soft404Definition.en}</p>
      <p className="jp-serif mt-2 text-sm text-text-faint">{soft404Definition.ja}</p>
      <p className="mt-4 text-xs text-accent">
        SourceLinkCheck.contentAvailability · HTTP 200 ≠ original content
      </p>
    </aside>
  );
}

export function SurvivalFragmentPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">SourceSurvivalFragment</p>
      <p className="jp-heading mt-2 text-lg">残存断片モデル</p>
      <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
        {fragmentTypes.map((f) => (
          <li key={f.id} className="border border-dashed border-border px-3 py-2">
            <span className="text-text-soft">{f.label}</span>
            <span className="jp-serif ml-2 text-text-faint">{f.labelJa}</span>
          </li>
        ))}
      </ul>
      <EmptyNote>Survival fragments indexed: 0.</EmptyNote>
    </section>
  );
}

export function ArchiveCapturePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">ArchiveCaptureRecord</p>
      <p className="jp-heading mt-2 text-lg">アーカイブ保存の完全性</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {["high", "partial", "text-only", "metadata-only", "failed", "unknown"].map(
          (c) => (
            <li key={c} className="border border-border px-2 py-1">
              {c}
            </li>
          ),
        )}
      </ul>
      <div className="mt-6">
        <p className="label">Dates that must stay separate</p>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          {dateKinds.map((d) => (
            <li key={d.id} className="border border-border px-3 py-2">
              <span className="text-text-soft">{d.label}</span>
              <span className="jp-serif ml-2 text-text-faint">{d.labelJa}</span>
            </li>
          ))}
        </ul>
      </div>
      <EmptyNote>
        ArchiveCaptureRecord instances: 0. Archive URLを捏造しない。
      </EmptyNote>
    </section>
  );
}

export function ScreenshotProvenanceLadder() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Screenshot Provenance Ladder</p>
      <p className="jp-heading mt-2 text-lg">スクリーンショット根拠の厚み</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="label">Stronger completeness</p>
          <ul className="mt-3 space-y-2 text-sm text-text-soft">
            {screenshotProvenanceLadder.stronger.map((item) => (
              <li key={item} className="border border-border px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label">Weaker completeness</p>
          <ul className="mt-3 space-y-2 text-sm text-text-faint">
            {screenshotProvenanceLadder.weaker.map((item) => (
              <li key={item} className="border border-dashed border-border px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-accent">
        Strong / Weak は真偽判定ではなく、Provenance completeness として扱う。
      </p>
    </section>
  );
}

export function SocialAccountStatePanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">SocialAccountRecord · PlatformRecord</p>
      <p className="jp-heading mt-2 text-lg">アカウントとプラットフォームの状態</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {accountStatuses.map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <EmptyNote>
        SocialAccountRecord / PlatformRecord instances: 0.
        実在プラットフォーム情報は検証後にのみFact化する。
      </EmptyNote>
    </section>
  );
}

export function SearchSnippetPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">SearchSnippetRecord</p>
      <p className="jp-heading mt-2 text-lg">検索結果にだけ残る文章</p>
      <p className="mt-3 text-sm text-text-soft">
        長いsnippetを保存しない。スニペットを完全本文として扱わない。
      </p>
      <EmptyNote>SearchSnippetRecord instances: 0.</EmptyNote>
    </section>
  );
}

export function CitationGhostPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Citation Ghost</p>
      <p className="jp-heading mt-2 text-lg">引用の幽霊</p>
      <p className="mt-3 text-sm text-text-soft">
        原資料は消えたが、他資料の引用や参照だけが残る状態。
      </p>
      <div className="mt-4 space-y-2 text-sm text-text-faint">
        <p>Paper A → cites Web Page B</p>
        <p>Web Page B → gone</p>
        <p>Paper A only transmits that B once existed</p>
      </div>
      <EmptyNote>CitationGhostRecord instances: 0.</EmptyNote>
    </section>
  );
}

export function AITraceWithoutSource() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">AI Trace Without Source</p>
      <p className="jp-heading mt-2 text-lg">元資料を失ったAI痕跡</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "source-still-available",
          "source-archived",
          "source-removed",
          "source-unidentified",
          "source-never-disclosed",
          "unknown",
        ].map((s) => (
          <li key={s} className="border border-dashed border-border px-3 py-2">
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        AI output = evidence about the AI output. Historical Fact へ直接昇格しない。
      </p>
    </section>
  );
}

export function SyntheticPersistenceDiagram() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Synthetic persistence</p>
      <p className="jp-heading mt-2 text-lg">合成された残存</p>
      <p className="mt-3 text-sm text-text-soft">
        元資料が消えた後も、AI要約・転載・引用・SNS共有・検索スニペットによって、
        内容の一部が二次的に残り続ける状態。
      </p>
      <p className="mt-4 text-xs text-accent">
        残り続ける ≠ 正確に保存される
      </p>
    </section>
  );
}

export function MutationChain() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Mutation Chain</p>
      <p className="jp-heading mt-2 text-lg">変異連鎖</p>
      <Flow steps={mutationChainSteps} />
      <ul className="mt-6 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {mutationRisks.map((r) => (
          <li key={r} className="border border-dashed border-border px-3 py-2">
            {r}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <p className="label">DerivativeDistance</p>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          {derivativeDistanceLevels.map((d) => (
            <li key={String(d.distance)} className="border border-border px-3 py-2">
              <span className="text-text-soft">{d.distance}</span>
              <span className="ml-2 text-text-faint">{d.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-accent">
          距離を信頼スコアにしない。元Sourceまでの段階数の可視化に留める。
        </p>
      </div>
    </section>
  );
}

export function SourceStateMachine() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Source State Machine (generic)</p>
      <p className="jp-heading mt-2 text-lg">状態遷移の例</p>
      <div className="mt-4 space-y-4 text-sm text-text-soft">
        <p>ACTIVE → UPDATED / REDIRECTED → MOVED</p>
        <p>ACTIVE → RESTRICTED → UNAVAILABLE</p>
        <p>ACTIVE → REMOVED → ARCHIVED → FRAGMENT ONLY → UNKNOWN</p>
      </div>
      <div className="mt-6">
        <p className="label">Link rot is not binary</p>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          {linkRotDisplayStates.map((s) => (
            <li key={s.id} className="border border-dashed border-border px-3 py-2">
              <span className="text-text-soft">{s.label}</span>
              <span className="jp-serif ml-2 text-text-faint">{s.labelJa}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="label">Bad handling</p>
          <Flow steps={badLinkRotHandling} />
        </div>
        <div>
          <p className="label">Good handling</p>
          <Flow steps={goodLinkRotHandling} />
        </div>
      </div>
    </section>
  );
}

export function LinkRotRegister() {
  const facts = getLinkRotRepositoryFacts();
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Link Rot Register</p>
      <p className="jp-heading mt-2 text-lg">状態が変化した資料</p>
      <p className="mt-2 text-sm text-text-faint">Sources that changed state</p>
      {facts.changedCount === 0 ? (
        <EmptyNote>
          No sources with registered SourceStateEvent yet. 架空のbroken URLは作らない。
          レジスタ：
          <Link href="/sources/link-rot" className="ml-1 underline-offset-4 hover:underline">
            /sources/link-rot
          </Link>
        </EmptyNote>
      ) : (
        <p className="mt-4 text-sm text-text-soft">
          {facts.changedCount} source(s) with state history.
        </p>
      )}
    </section>
  );
}

export function SourceMaintenanceQueue() {
  const facts = getLinkRotRepositoryFacts();
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Source Maintenance Queue</p>
      <p className="jp-heading mt-2 text-lg">資料保全タスク</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "Recheck URL",
          "Find official new URL",
          "Check redirect",
          "Check web archive",
          "Capture current version",
          "Compare previous version",
          "Find independent citation",
          "Review affected FactClaims",
          "Review rights",
          "Do not automatically remove source",
        ].map((t) => (
          <li key={t} className="border border-dashed border-border px-3 py-2">
            {t}
          </li>
        ))}
      </ul>
      <EmptyNote>
        Open SourceMaintenanceTask instances: {facts.maintenanceCount}.
      </EmptyNote>
    </section>
  );
}

export function SourceStateImpactPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Provenance impact</p>
      <p className="jp-heading mt-2 text-lg">リンク切れが根拠経路へ与える影響</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
        {[
          "none",
          "informational",
          "reduced-access",
          "weakened",
          "broken",
          "disputed",
          "unknown",
        ].map((s) => (
          <li key={s} className="border border-border px-2 py-1">
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-text-soft">
        リンク切れだけでFactをFalseにしない。問題は truth status ではなく
        traceability status である。
      </p>
      <p className="mt-2 text-xs text-accent">Label: Traceability issue</p>
    </section>
  );
}

export function UniqueSourceRiskPanel() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">What if this is the only source?</p>
      <p className="jp-heading mt-2 text-lg">この資料しかない場合</p>
      <ul className="mt-4 grid gap-2 text-sm text-text-faint sm:grid-cols-2">
        {[
          "Unique support",
          "Multiple independent supports",
          "Derivative supports only",
          "Alternative primary source exists",
          "Unknown",
        ].map((r) => (
          <li key={r} className="border border-dashed border-border px-3 py-2">
            {r}
          </li>
        ))}
      </ul>
      <EmptyNote>
        Unique-source graphまだ未実装の箇所は Unknown のまま。推測で unique と書かない。
      </EmptyNote>
    </section>
  );
}

export function SourceDependencyCollapse() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Source Dependency Collapse</p>
      <p className="jp-heading mt-2 text-lg">見かけの複数根拠の崩壊</p>
      <div className="mt-4 space-y-2 text-sm text-text-soft">
        <p>Fact ← Blog A / Article B / News C</p>
        <p>Blog A → Article B · News C → Article B</p>
        <p className="text-text-faint">
          実際には Article B 一つに依存。Bが消えると中心根拠が失われる。
        </p>
      </div>
      <p className="mt-4 text-xs text-accent">
        Archive copy / repost を独立一次Sourceとして単純加算しない。
      </p>
    </section>
  );
}

export function LinkRotRepositoryAudit() {
  const { audit } = getLinkRotRepositoryFacts();
  const rows: [string, number][] = [
    ["Web-like sources", audit.webSources],
    ["Checked links", audit.checkedLinks],
    ["Unchecked links", audit.uncheckedLinks],
    ["Broken links", audit.brokenLinks],
    ["Redirected links", audit.redirectedLinks],
    ["Archived links (flag)", audit.archivedLinks],
    ["Mutable sources", audit.mutableSources],
    ["Current-state sources", audit.currentStateSources],
    ["Unknown source state", audit.unknownStatus],
    ["State events", audit.stateEvents],
    ["URL history records", audit.urlHistoryRecords],
    ["Archive captures", audit.archiveCaptures],
    ["Survival fragments", audit.survivalFragments],
  ];
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Current Diary Observatory audit</p>
      <p className="jp-heading mt-2 text-lg">Repository監査（ネットワーク未確認を含む）</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map(([label, value]) => (
          <li key={label} className="border border-border px-4 py-3">
            <p className="label">{label}</p>
            <p className="editorial mt-2 text-2xl text-text">{value}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-accent">
        本実装ではネットワーク到達確認を行っていない。コード上で200を想定しない。
      </p>
    </section>
  );
}

export function LinkRotCaseStudies() {
  return (
    <section className="my-8 border border-border px-5 py-6">
      <p className="label">Case studies</p>
      <p className="jp-heading mt-2 text-lg">実データがある場合だけケース化する</p>
      <EmptyNote>No link-rot case study indexed yet.</EmptyNote>
    </section>
  );
}

export function LinkRotRelatedCta() {
  return (
    <aside className="my-10 border border-border px-5 py-6">
      <p className="label">Related</p>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          ["/observations/more-sources-less-certainty", "資料が多いほど、事実は単純になるのか"],
          ["/sources", "Sources"],
          ["/sources/link-rot", "Link Rot Register"],
          ["/provenance", "Provenance"],
          ["/editions", "Editions"],
          ["/observations/where-did-the-editor-go", "編集者は消えたのか"],
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
