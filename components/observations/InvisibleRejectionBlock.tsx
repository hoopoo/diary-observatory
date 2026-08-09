import { ConceptQuote } from "@/components/observations/ConceptQuote";

export function InvisibleRejectionBlock() {
  return (
    <aside className="not-prose my-10">
      <ConceptQuote
        en={"Rejection used to arrive as a letter.\nNow it may arrive as invisibility."}
        ja="拒絶は、かつて手紙で届いた。いまは、見えないこととして届く。"
      />
      <p className="mt-4 text-sm text-text-faint">
        昔の編集部が丁寧に理由を伝えたと一般化しない。返事がなかった投稿も存在する。
      </p>
    </aside>
  );
}
