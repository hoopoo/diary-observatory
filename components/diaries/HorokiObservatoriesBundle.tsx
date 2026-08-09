import {
  laborLayers,
  moneyCategories,
  omissionPrompts,
  peopleCategories,
  personaLayers,
  publicationAdds,
  successLayers,
} from "@/data/diaries/horoki";
import { EpistemicLabel } from "@/components/EpistemicLabel";
import { movementReasons } from "@/data/writers/fumiko-hayashi";

export function HorokiObservatoriesBundle() {
  return (
    <div className="not-prose space-y-14">
      <section>
        <h3 className="editorial text-2xl text-text">Work before authorship</h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          作家になる前の仕事
        </p>
        <p className="mt-4 max-w-2xl text-sm text-text-soft">
          具体的職種は、Writerデータで Verified になったものだけ表示する。現時点：Not
          indexed。
        </p>
        <p className="mt-3 text-sm text-text-faint">
          仕事は背景ではない。働いた時間が書ける時間を決め、賃金が食事と家賃を決める。
        </p>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">Rooms inside Hōrōki</h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          『放浪記』の中の部屋
        </p>
        <p className="mt-4 text-sm text-text-soft">
          Housing timeline は Writer ページと共有。正確住所は不要なら district-only。
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-text-faint">
          {[
            "Verified location",
            "Approximate location",
            "District only",
            "Unknown location",
            "Private detail withheld",
          ].map((s) => (
            <li key={s} className="border border-border px-2 py-1">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">Food is evidence</h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">食事は証拠である</p>
        <p className="mt-4 text-sm text-text-soft">
          No verified food or cost records indexed yet.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          FoodRecord（生活）と TextAppearance（どの版に現れるか）を分ける。
        </p>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">The cost of wandering</h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          移動する生活の費用
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {moneyCategories.map((c) => (
            <li
              key={c}
              className="border border-border px-2.5 py-1 text-xs text-text-faint"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          同一取引を版ごとに二重計上しない。現代換算は実装しない。Not indexed。
        </p>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">A work made of departures</h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          出発の積み重ねでできた作品
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {movementReasons.map((r) => (
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
        <p className="mt-4 text-sm text-text-faint">
          「放浪」を自由な旅として一括しない。移動理由別の MovementRecord は未索引。
        </p>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">
          Paid work and domestic time
        </h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          賃金労働と、生活を維持する時間
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {laborLayers.map((l) => (
            <li
              key={l.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {l.label}
              </span>
              {l.labelJa}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          女性だから家事をした、と補完しない。Explicit / Implied / Historical
          context を分ける。
        </p>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">
          People recorded, renamed, or transformed
        </h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          記録され、名を変えられ、作品へ入った人々
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {peopleCategories.map((p) => (
            <li
              key={p.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {p.label}
              </span>
              {p.labelJa}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          PersonEntity と FictionalEntity を分ける。実在断定はしない。
        </p>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">
          What did later versions leave out?
        </h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          後の版は、何を残さなかったか
        </p>
        <p className="mt-4 text-sm text-text-soft">
          No verified omissions indexed yet.
        </p>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          確認済みの削除箇所は、まだ索引化されていません。
        </p>
        <p className="mt-6 label">Research prompts</p>
        <ul className="mt-3 space-y-1 text-sm text-text-faint">
          {omissionPrompts.map((q) => (
            <li key={q}>· {q}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">
          What did publication add?
        </h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          刊行は、何を加えたか
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {publicationAdds.map((item) => (
            <li
              key={item}
              className="border border-border px-2.5 py-1 text-xs text-text-soft"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-faint">
          『放浪記』で確認できる追加は、版比較後のみ登録する。
        </p>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">The woman who wandered</h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          「放浪する女性」という作家像
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {personaLayers.map((layer) => (
            <li
              key={layer.id}
              className="border border-border px-3 py-2 text-sm text-text-soft"
            >
              <span className="block text-[0.65rem] text-text-faint">
                {layer.label}
              </span>
              {layer.labelJa}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="editorial text-2xl text-text">
          What happens when the poor writer becomes successful?
        </h3>
        <p className="jp-serif mt-1 text-sm text-text-faint">
          貧しかった書き手が成功すると、過去の文章はどう変わるか
        </p>
        <ul className="mt-4 space-y-3">
          {successLayers.map((layer) => (
            <li key={layer.title} className="border border-border px-4 py-3">
              <EpistemicLabel kind={layer.kind} />
              <p className="mt-2 text-sm text-text-soft">
                <span className="label mr-2">{layer.title}</span>
                {layer.text}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
