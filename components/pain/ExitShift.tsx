import { exitShifts, type ExitShiftItem } from "@/data/pain";

export function ExitShift({
  items = exitShifts,
}: {
  items?: ExitShiftItem[];
}) {
  return (
    <figure className="not-prose my-10">
      <figcaption className="sr-only">
        出口のない分断から、出口のある分断への変換例。対立の軸を「人対人」から「負荷対制度」へ移す。
      </figcaption>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]"
          >
            <div className="border border-border-soft px-4 py-4">
              <p className="label">人 対 人</p>
              <p className="jp-serif mt-2 text-sm text-text-soft">
                「{item.from}」
              </p>
              <p className="mt-2 text-[0.7rem] text-text-faint">
                対立軸：{item.axisFrom}
              </p>
            </div>
            <div
              className="flex items-center justify-center text-text-faint md:px-1"
              aria-hidden="true"
            >
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </div>
            <div className="border border-accent/40 bg-accent-soft px-4 py-4">
              <p className="label">負荷 対 制度</p>
              <p className="jp-serif mt-2 text-sm text-text">{item.to}</p>
              <p className="mt-2 text-[0.7rem] text-accent">
                対立軸：{item.axisTo}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-text-soft">
        This is not a set of correct answers. It moves the axis of conflict from
        person-versus-person to burden-versus-institution.
      </p>
      <p className="jp-serif mt-1 text-sm text-text-faint">
        これは正解の提示ではない。対立の軸を「人対人」から「負荷対制度」へ移すための書き換えである。
      </p>
    </figure>
  );
}
