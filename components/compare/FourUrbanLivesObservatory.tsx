import Link from "next/link";
import { CategorizedSourceList } from "@/components/CategorizedSourceList";
import { ConceptBlock } from "@/components/ConceptBlock";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { ComparisonBreadcrumb } from "@/components/compare/ComparisonBreadcrumb";
import { ThreeLifeSpeeds } from "@/components/compare/ThreeLifeSpeeds";
import { ThreeWriterComparisonMatrix } from "@/components/compare/ThreeWriterComparisonMatrix";
import { ThreeWriterHeader } from "@/components/compare/ThreeWriterHeader";
import {
  BUKOWSKI_ID,
  HAYASHI_ID,
  KAFU_ID,
  NISHIMURA_ID,
  cityPreserved,
  conditionAxes,
  entryReadiness,
  foodCompare,
  fourCenters,
  fourLead,
  fourLifeSpeeds,
  fourMatrixRows,
  fourMeta,
  fourSources,
  fourUrbanLivesComparison,
  fourWriterCards,
  housingCompare,
  housingMatrixRows,
  livedLayers,
  matrixColumns,
  moneyCategories,
  paidUnpaidAxes,
  paidUnpaidByWriter,
  preservationProfiles,
  publishingPaths,
  relatedComparisonsFour,
  relatedObservationsFour,
  successCompare,
  supportCategories,
  writingBodies,
} from "@/data/comparisons/four-urban-lives";

const WRITER_NAMES: Record<string, string> = {
  [KAFU_ID]: "Kafū",
  [NISHIMURA_ID]: "Nishimura",
  [BUKOWSKI_ID]: "Bukowski",
  [HAYASHI_ID]: "Hayashi",
};

function Prose({ lines }: { lines: string[] }) {
  return (
    <div className="jp-body mt-6 max-w-2xl space-y-3 text-[0.98rem]">
      {lines.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

export function FourUrbanLivesObservatory() {
  const meta = fourUrbanLivesComparison;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <ComparisonBreadcrumb label={meta.title} />

      {/* 1. Comparison Header */}
      <header className="mt-8 border-b border-border pb-12">
        <p className="label">Comparative Observatory</p>
        <h1 className="editorial mt-4 text-4xl text-text md:text-5xl">
          {meta.title}
        </h1>
        <p className="jp-heading mt-3 text-2xl md:text-3xl">{meta.titleJa}</p>
        <p className="editorial mt-6 whitespace-pre-line text-xl text-accent">
          {meta.subtitle.replace(
            "Weather, media, labor, and the work of maintaining life",
            "Weather, media, labor,\nand the work of maintaining life",
          )}
        </p>
        <p className="jp-serif mt-2 text-base text-text-soft">
          {meta.subtitleJa}
        </p>
        <Prose lines={fourLead} />
        <dl className="mt-8 grid gap-3 text-xs text-text-faint sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="label">Writers</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.writers}</dd>
          </div>
          <div>
            <dt className="label">Countries</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.countries}</dd>
          </div>
          <div>
            <dt className="label">Primary cities</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.primaryCities}</dd>
          </div>
          <div>
            <dt className="label">Primary record forms</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.primaryRecordForms}</dd>
          </div>
          <div>
            <dt className="label">Comparison status</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.comparisonStatus}</dd>
          </div>
          <div>
            <dt className="label">Verification status</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.verificationStatus}</dd>
          </div>
          <div>
            <dt className="label">Last updated</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.lastUpdated}</dd>
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <dt className="label">Themes</dt>
            <dd className="mt-1 text-text-soft">{fourMeta.themes}</dd>
          </div>
        </dl>
      </header>

      {/* 2. Four Writers */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Four writers
        </h2>
        <p className="jp-heading mt-2 text-lg">四人の作家</p>
        <p className="mt-4 max-w-2xl text-sm text-text-faint">
          Observation weights are provisional centers of gravity from currently
          indexed records — not fixed identities.
        </p>
        <div className="mt-8">
          <ThreeWriterHeader
            cards={fourWriterCards}
            gridClassName="sm:grid-cols-2 xl:grid-cols-4"
          />
        </div>
      </section>

      {/* 3. Central Proposition */}
      <ConceptBlock
        title="A day is an arrangement of conditions."
        titleJa="一日は、条件の配置である。"
        paragraphs={[
          "作家の日記を、思考や感情の記録としてだけ読むと、生活を動かしていた条件が見えなくなる。",
          "寒い。",
          "仕事へ行く。",
          "編集者から連絡が来る。",
          "家賃を払う。",
          "食事を作る。",
          "電車へ乗る。",
          "酒を飲む。",
          "原稿を書く。",
          "これらは別々の出来事ではない。",
          "時間、金銭、身体、住居、制度が一つの一日を共同で作っている。",
        ]}
      />

      {/* 4. Four Centers of Gravity */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Four centers of gravity
        </h2>
        <p className="jp-heading mt-2 text-lg">四つの生活の重心</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {fourCenters.map((c) => (
            <article key={c.writerId} className="border border-border px-5 py-6">
              <p className="label">{c.name}</p>
              <p className="editorial mt-3 text-2xl text-accent">{c.condition}</p>
              <p className="jp-serif mt-1 text-sm text-text-soft">
                {c.conditionJa}
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-text-faint">
                {c.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-text-soft">
          These are provisional centers of gravity, not complete definitions.
        </p>
        <p className="jp-serif mt-1 max-w-2xl text-sm text-text-faint">
          これは完全な人物定義ではなく、現在索引化された記録から見える暫定的な重心である。
        </p>
      </section>

      {/* 5. Maintenance meaning */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          The work of maintaining life
        </h2>
        <p className="jp-heading mt-2 text-lg">生活を維持する仕事</p>
        <Prose
          lines={[
            "生活維持とは、家事だけを意味しない。",
            "賃金を得る。",
            "部屋を確保する。",
            "食べる。",
            "水や火を使う。",
            "服を整える。",
            "身体を休ませる。",
            "人間関係を維持する。",
            "仕事場へ移動する。",
            "原稿を書くための時間を残す。",
            "こうした行為が途切れると、執筆も続かない。",
            "林芙美子を加えることで、これまで背景へ退きやすかった「一日を成立させる仕事」が比較の中心へ入る。",
          ]}
        />
      </section>

      {/* 6. Comparison Matrix */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Comparison matrix
        </h2>
        <p className="jp-heading mt-2 text-lg">横断比較表</p>
        <div className="mt-8">
          <ThreeWriterComparisonMatrix
            columns={matrixColumns}
            rows={fourMatrixRows}
          />
        </div>
      </section>

      {/* 7. Four Speeds */}
      <section className="my-14 border-b border-border pb-14">
        <ThreeLifeSpeeds
          title="Four speeds of life"
          titleJa="四つの生活速度"
          patterns={fourLifeSpeeds}
          columnsClassName="sm:grid-cols-2 xl:grid-cols-4"
          noteEn="These are spatial and temporal models, not reconstructed historical schedules."
          noteJa="これは実在した一日の完全な再現ではない。現在の記録から構成した、空間と時間の暫定モデルである。"
          caution="Layer: Interpretation"
        />
      </section>

      {/* 8. Condition interaction */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Environment / Media / Labor / Maintenance
        </h2>
        <p className="jp-heading mt-2 text-lg">四つの条件</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {conditionAxes.map((axis) => (
            <article key={axis.id} className="border border-border px-5 py-6">
              <p className="editorial text-xl text-text">{axis.label}</p>
              <p className="jp-serif mt-1 text-sm text-accent">{axis.labelJa}</p>
              <p className="label mt-4">Acts through</p>
              <ul className="mt-3 space-y-1 text-sm text-text-faint">
                {axis.acts.map((a) => (
                  <li key={a}>· {a}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Prose
          lines={[
            "四つは独立していない。",
            "寒い部屋を暖めるには費用がかかる。",
            "仕事の時間が食事時間を変える。",
            "出版社の締切が睡眠を削る。",
            "家事が執筆時間へ入る。",
            "一日は、複数の条件が重なる場所である。",
          ]}
        />
      </section>

      {/* 9. Paid / unpaid */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Paid work / unpaid work
        </h2>
        <p className="jp-heading mt-2 text-lg">
          賃金のある仕事／賃金のない仕事
        </p>
        <Prose
          lines={[
            "文学者の「仕事」を執筆だけに限定すると、一日の多くが消える。",
            "特に、報酬が発生しない生活維持の仕事は、経歴や文学史へ残りにくい。",
            "女性だけが家事をしたと一般化しない。男性作家側でも、誰が生活維持を担ったかが記録から抜けている可能性を示す。",
          ]}
        />
        <div className="mt-8 hidden overflow-x-auto lg:block">
          <table className="min-w-[48rem] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-3 text-xs text-text-faint">Axis</th>
                {matrixColumns.map((c) => (
                  <th key={c.writerId} className="px-3 py-3 text-xs text-text-soft">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paidUnpaidAxes.map((axis) => (
                <tr key={axis} className="border-b border-border-soft">
                  <th className="px-3 py-3 align-top text-xs text-text-faint">
                    {axis}
                  </th>
                  {matrixColumns.map((c) => (
                    <td
                      key={`${axis}-${c.writerId}`}
                      className="px-3 py-3 align-top text-text-soft"
                    >
                      {paidUnpaidByWriter[c.writerId][axis]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 space-y-3 lg:hidden">
          {matrixColumns.map((c) => (
            <article key={c.writerId} className="border border-border px-4 py-4">
              <p className="editorial text-lg">{c.label}</p>
              <dl className="mt-4 space-y-3">
                {paidUnpaidAxes.map((axis) => (
                  <div key={axis}>
                    <dt className="text-xs text-text-faint">{axis}</dt>
                    <dd className="mt-1 text-sm text-text-soft">
                      {paidUnpaidByWriter[c.writerId][axis]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* 10. Who maintained */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Who maintained the writer’s life?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          誰が、作家の生活を維持したのか
        </p>
        <Prose
          lines={[
            "作家が書いている時間、誰かが別の仕事を担っていた可能性がある。",
            "食事。掃除。家計。介護。編集。発送。宣伝。",
            "生活維持を本人だけの能力として扱わず、支援関係と制度を観測する。",
            "確認済み人物・関係だけを Fact として表示する。現時点では大半が Unknown / Not indexed。",
          ]}
        />
        <ul className="mt-8 grid gap-2 sm:grid-cols-3">
          {supportCategories.map((s) => (
            <li
              key={s.id}
              className="border border-border px-4 py-3 text-sm text-text-soft"
            >
              <span className="editorial">{s.label}</span>
              <span className="jp-serif mt-1 block text-xs text-text-faint">
                {s.labelJa}
              </span>
              <span className="mt-2 block text-xs text-text-faint">
                Status: Unknown / Not indexed
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 11. Housing */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Four housing conditions
        </h2>
        <p className="jp-heading mt-2 text-lg">四人の住居条件</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {housingCompare.map((h) => (
            <article key={h.writerId} className="border border-border px-4 py-5">
              <p className="label">{h.name}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-text-faint">
                {h.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <ThreeWriterComparisonMatrix
            columns={matrixColumns}
            rows={housingMatrixRows}
          />
        </div>
        <ul className="mt-8 space-y-2 text-sm">
          <li>
            <Link
              href="/observations/the-house-that-remained"
              className="focus-ring text-accent underline-offset-4 hover:underline"
            >
              残った家、消えた部屋
            </Link>
          </li>
          <li>
            <Link
              href="/entities/hayashi-fumiko-memorial-hall"
              className="focus-ring text-accent underline-offset-4 hover:underline"
            >
              林芙美子記念館
            </Link>
          </li>
        </ul>
      </section>

      {/* 12. Food */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Food as a condition of writing
        </h2>
        <p className="jp-heading mt-2 text-lg">書くための条件としての食事</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {foodCompare.map((f) => (
            <article key={f.name} className="border border-border px-4 py-5">
              <p className="label">{f.name}</p>
              <p className="mt-3 text-sm text-text-soft">{f.text}</p>
            </article>
          ))}
        </div>
        <Prose
          lines={[
            "食事は、作品の風景ではない。",
            "何を食べられたか。誰が用意したか。どこで食べたか。いくらかかったか。食べる時間があったか。",
            "食事は、身体を次の時間へ運ぶ。",
            "確認済み FoodRecord だけを表示する。現時点で横断 FoodRecord は不足。",
            "林芙美子を「空腹の作家」だけで固定しない。",
          ]}
        />
      </section>

      {/* 13. Money */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Money changes the shape of the day
        </h2>
        <p className="jp-heading mt-2 text-lg">金銭は、一日の形を変える</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {moneyCategories.map((c) => (
            <li
              key={c}
              className="border border-border px-3 py-1.5 text-xs text-text-faint"
            >
              {c}
            </li>
          ))}
        </ul>
        <Prose
          lines={[
            "金銭は、幸福や文学的価値を測らない。しかし、選択肢の範囲を変える。",
            "仕事を辞められるか。電車へ乗れるか。部屋を暖められるか。本を買えるか。原稿を送れるか。家を持てるか。",
            "異なる年代・通貨を単純合計しない。金額セルは Not indexed。",
          ]}
        />
        <p className="mt-6 text-sm">
          <Link
            href="/observations/the-price-of-an-ordinary-day"
            className="focus-ring text-accent underline-offset-4 hover:underline"
          >
            一日の値段
          </Link>
        </p>
      </section>

      {/* 14. Publishing */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Four ways a life entered print
        </h2>
        <p className="jp-heading mt-2 text-lg">生活が出版へ入る四つの経路</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {publishingPaths.map((path) => (
            <article key={path.name} className="border border-border px-4 py-5">
              <p className="label">{path.name}</p>
              <ol className="mt-4 flex flex-col">
                {path.steps.map((step, i) => (
                  <li key={step} className="flex flex-col items-start">
                    <span className="border border-border px-3 py-2 text-sm text-text-soft">
                      {step}
                    </span>
                    {i < path.steps.length - 1 && (
                      <span className="px-3 py-1 text-xs text-accent" aria-hidden>
                        ↓
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
        <Prose
          lines={[
            "四人とも私生活を文章へ変えた。",
            "しかし、文章が選ばれ、編集され、読者へ届いた経路は異なる。",
          ]}
        />
      </section>

      {/* 15. Lived layers */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Lived / Recorded / Published / Fictionalized
        </h2>
        <p className="jp-heading mt-2 text-lg">層の違い</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {livedLayers.map((w) => (
            <article key={w.name} className="border border-border px-5 py-5">
              <p className="label">{w.name}</p>
              <dl className="mt-4 space-y-3">
                {w.layers.map((layer) => (
                  <div key={layer.k}>
                    <dt className="text-xs tracking-wide text-text-faint">
                      {layer.k}
                    </dt>
                    <dd className="jp-serif mt-1 text-sm text-text-soft">
                      {layer.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          四人に同じラベルを無理に当てはめない。Henry Chinaski は架空。『放浪記』は未編集の日記ではない。
        </p>
      </section>

      {/* 16. Writing bodies */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Four writing bodies
        </h2>
        <p className="jp-heading mt-2 text-lg">四つの書く身体</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {writingBodies.map((b) => (
            <article key={b.name} className="border border-border px-4 py-5">
              <p className="label">{b.name}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-text-faint">
                {b.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Prose
          lines={[
            "書く身体は、作品が成功しても消えない。",
            "むしろ成功後、締切、取材、旅行、出演、来客が増え、身体の負荷が別の形へ変わることがある。",
            "医学的因果関係は断定しない。",
          ]}
        />
      </section>

      {/* 17. Gender */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What becomes visible through gender?
        </h2>
        <p className="jp-heading mt-2 text-lg">
          ジェンダーによって、何が見え方を変えるか
        </p>
        <Prose
          lines={[
            "林芙美子を加えることで、女性作家だけの特殊な問題を切り出すのではない。",
            "むしろ、男性作家の記録で見えにくかったものが明らかになる。",
            "誰が食事を用意したか。誰が掃除したか。誰が家計を管理したか。誰が客へ対応したか。誰が書く時間を支えたか。",
            "女性の生活記録を読むことで、生活維持の仕事が文学全体の共通条件だったと分かる。",
            "女性を家事へ固定しない。男性作家に家事がなかったと扱わない。社会的役割と個別記録を分ける。Historical context を Fact と混同しない。",
          ]}
        />
      </section>

      {/* 18. Success */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What success changes—and what it does not
        </h2>
        <p className="jp-heading mt-2 text-lg">成功が変えるもの、変えないもの</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {successCompare.map((s) => (
            <article key={s.name} className="border border-border px-5 py-5">
              <p className="label">{s.name}</p>
              <p className="mt-4 text-xs text-text-faint">Changes</p>
              <ul className="mt-2 space-y-1 text-sm text-text-soft">
                {s.changes.map((c) => (
                  <li key={c}>· {c}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-text-faint">Remains</p>
              <ul className="mt-2 space-y-1 text-sm text-text-soft">
                {s.remains.map((r) => (
                  <li key={r}>· {r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Prose
          lines={[
            "成功は、生活条件の一部を変える。",
            "仕事を辞められる。家を得る。読者が増える。",
            "一方で、身体、人間関係、過去の習慣、作家像から完全には自由になれない。",
          ]}
        />
      </section>

      {/* 19. City preserved */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What did each city preserve?
        </h2>
        <p className="jp-heading mt-2 text-lg">都市は、何を残したか</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cityPreserved.map((c) => (
            <article key={c.name} className="border border-border px-5 py-5">
              <p className="label">{c.name}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-text-faint">
                {c.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-text-faint">
          Status vocabulary: Existing / Closed / Demolished / Transformed /
          Preserved / Museum / Ended / Unknown — auto-counts remain partial
          until entity graph is complete for all four.
        </p>
      </section>

      {/* 20. Preservation inequality */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Not every life leaves the same archive
        </h2>
        <p className="jp-heading mt-2 text-lg">
          すべての生活が、同じ厚さの記録を残すわけではない
        </p>
        <Prose
          lines={[
            "長期日記を残した人。出版社が資料を保存した人。映像が残った人。記念館を持つ人。小さな雑誌に断片だけ残る人。住所も分からない部屋で書いた人。",
            "記録の厚さは、人生の価値を示さない。保存制度と偶然の差を示す。",
          ]}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {preservationProfiles.map((p) => (
            <article key={p.writerId} className="border border-border px-5 py-5">
              <p className="label">{WRITER_NAMES[p.writerId]}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="text-xs text-text-faint">Diary continuity</dt>
                  <dd className="text-text-soft">{p.diaryContinuity}</dd>
                </div>
                <div>
                  <dt className="text-xs text-text-faint">Edition depth</dt>
                  <dd className="text-text-soft">{p.editionDepth}</dd>
                </div>
                <div>
                  <dt className="text-xs text-text-faint">Media archive</dt>
                  <dd className="text-text-soft">{p.mediaArchive}</dd>
                </div>
                <div>
                  <dt className="text-xs text-text-faint">Physical sites</dt>
                  <dd className="text-text-soft">{p.physicalSites}</dd>
                </div>
                <div>
                  <dt className="text-xs text-text-faint">
                    Institutional archives
                  </dt>
                  <dd className="text-text-soft">{p.institutionalArchives}</dd>
                </div>
                <div>
                  <dt className="text-xs text-text-faint">Known absences</dt>
                  <dd className="text-text-soft">{p.knownAbsences}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* 21–22 Indexed days + entry readiness */}
      <section className="my-14 border-b border-border pb-14">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="editorial text-2xl text-text md:text-3xl">
            Indexed days
          </h2>
          <EpistemicLabel kind="fact" />
        </div>
        <p className="jp-heading mt-2 text-lg">索引化された日々</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {entryReadiness.map((e) => (
            <article key={e.name} className="border border-border px-5 py-5">
              <p className="label">{e.name}</p>
              {e.href ? (
                <Link
                  href={e.href}
                  className="focus-ring mt-3 block editorial text-xl text-accent underline-offset-4 hover:underline"
                >
                  {e.date}
                </Link>
              ) : (
                <p className="mt-3 text-sm text-text-soft">{e.date}</p>
              )}
            </article>
          ))}
        </div>

        <h3 className="editorial mt-12 text-xl text-text">Entry readiness</h3>
        <p className="jp-heading mt-2 text-base">Entry実装の準備状況</p>
        <ul className="mt-6 space-y-3">
          {entryReadiness.map((e) => (
            <li key={`ready-${e.name}`} className="border border-border px-4 py-4">
              <p className="text-sm text-text-soft">{e.name}</p>
              <p className="mt-1 text-sm text-text-faint">{e.status}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-text-faint">
          林芙美子は日付だけでは足りない。原記録／雑誌掲載／単行本／改訂版のどの層かを確認する必要がある。架空の Entry は作らない。
        </p>
      </section>

      {/* 23. From three to four */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          What changed when the fourth writer entered?
        </h2>
        <p className="jp-heading mt-2 text-lg">四人目が入ると、何が変わるか</p>
        <Prose
          lines={[
            "三人の比較では、都市を動かす条件として、天候。メディア。労働。が見えていた。",
            "林芙美子が入ることで、その三つを支えていた生活維持の仕事が前景化する。",
            "食べる。部屋を確保する。家事をする。身体を休める。次の仕事へ行く。",
            "生活が維持されなければ、天候を観察することも、編集者へ会うことも、夜にタイプすることもできない。",
          ]}
        />
        <blockquote className="mt-8 border border-border px-6 py-6">
          <p className="editorial text-xl text-accent">
            Maintenance is not the background of a literary life.
          </p>
          <p className="editorial mt-2 text-lg text-accent">
            It is its operating system.
          </p>
          <p className="jp-serif mt-4 text-sm text-text-soft">
            生活維持は、文学生活の背景ではない。それを動かす OS である。
          </p>
        </blockquote>
      </section>

      {/* 24. Related comparisons */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Related comparisons
        </h2>
        <ul className="mt-8 space-y-3">
          {relatedComparisonsFour.published.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
              >
                <p className="editorial text-xl">{c.title}</p>
                <p className="jp-serif mt-1 text-sm text-text-soft">{c.titleJa}</p>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="label mt-8">Coming comparison</h3>
        <ul className="mt-3 space-y-2">
          {relatedComparisonsFour.coming.map((c) => (
            <li
              key={c.title}
              className="border border-dashed border-border px-4 py-3 text-sm text-text-faint"
            >
              <p>{c.title}</p>
              <p className="mt-1 text-xs">{c.subtitle}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 25. Related observations */}
      <section className="my-14 border-b border-border pb-14">
        <h2 className="editorial text-2xl text-text md:text-3xl">
          Related Observations
        </h2>
        <ul className="mt-8 space-y-3">
          {relatedObservationsFour.published.map((o) => (
            <li key={o.href}>
              <Link
                href={o.href}
                className="focus-ring block border border-border px-4 py-4 hover:border-text-faint"
              >
                <p className="label">Published</p>
                <p className="editorial mt-2 text-xl">{o.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <h3 className="label mt-8">Coming</h3>
        <ul className="mt-3 space-y-2">
          {relatedObservationsFour.coming.map((title) => (
            <li
              key={title}
              className="border border-dashed border-border px-4 py-3 text-sm text-text-faint"
            >
              {title}
            </li>
          ))}
        </ul>
      </section>

      <CategorizedSourceList sources={fourSources} />

      <section className="my-14">
        <h2 className="editorial text-2xl text-text">Related pages</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { label: "Kafū Nagai", href: "/writers/kafu-nagai" },
            { label: "Kenji Nishimura", href: "/writers/kenji-nishimura" },
            { label: "Charles Bukowski", href: "/writers/charles-bukowski" },
            { label: "Fumiko Hayashi", href: "/writers/fumiko-hayashi" },
            { label: "Roppa Furukawa", href: "/writers/furukawa-roppa" },
            { label: "Danchōtei Nichijō", href: "/diaries/dancho-tei-nichijo" },
            { label: "Hōrōki", href: "/diaries/horoki" },
            {
              label: "Three Urban Diarists",
              href: "/compare/urban-diarists",
            },
            {
              label: "林芙美子記念館",
              href: "/entities/hayashi-fumiko-memorial-hall",
            },
          ].map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="focus-ring block border border-border px-4 py-3 hover:border-text-faint"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
