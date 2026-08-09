/**
 * Warning when fiction / autobiographical fiction is in the evidence stack.
 * This entry's public facts are diary-layer, not fiction promotions —
 * the block exists as methodology for Nishimura / Bukowski corpus.
 */
export function LiteraryEvidenceWarning() {
  return (
    <aside className="my-10 border border-dashed border-border px-5 py-5">
      <p className="label">When the source is fiction</p>
      <p className="jp-heading mt-2 text-lg">資料が文学作品であるとき</p>
      <p className="mt-3 text-sm text-text-soft">
        Literary evidence · Not automatically biographical fact.
      </p>
      <p className="jp-serif mt-2 text-sm text-text-faint">
        文学上の根拠。自動的に実生活の事実とは扱わない。
      </p>
      <p className="mt-4 text-xs leading-relaxed text-text-faint">
        この Entry の公開 Fact は primary diary 層に接続されている。随筆・私小説・インタビュー・メディア資料が
        混在する場合は、同一 Source にまとめず、Source layer（日記 / 随筆 / 私小説 / インタビュー /
        映像・番組 / 二次資料）を分離する。私小説からの記述を、外部照合なしに実生活 Fact へ昇格させない。
      </p>
    </aside>
  );
}
