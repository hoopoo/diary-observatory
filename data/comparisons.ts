import type { Comparison } from "@/lib/types";

export const comparisons: Comparison[] = [
  {
    id: "compare-two-days-two-provenances",
    date: "1918-01-01",
    title: "Two Days, Two Provenances",
    titleJa: "二つの一日、二つの根拠",
    entryIds: ["entry-1918-01-01", "entry-2011-05-02"],
    cities: ["Tokyo"],
    countries: ["Japan"],
    themes: [
      "Provenance",
      "Evidence",
      "Archive",
      "Media",
      "Verification",
    ],
    summary:
      "Kafū 1918 and Nishimura 2011 compared by provenance shape — scarcity gaps vs branching source layers — not by source count.",
    summaryJa:
      "荷風1918と西村2011を、資料数ではなく根拠経路の形（空白と複線）から比較する。",
    status: "available",
    href: "/compare/two-days-two-provenances",
    indexedLives: 2,
    comparisonStatus: "open",
  },
  {
    id: "compare-1918-01-01",
    date: "1918-01-01",
    title: "January 1, 1918 — Tokyo",
    titleJa: "1918年1月1日 — 東京",
    entryIds: ["entry-1918-01-01"],
    cities: ["Tokyo"],
    countries: ["Japan"],
    themes: [
      "New Year",
      "Domestic Life",
      "Heating",
      "Cleaning",
      "Routine",
      "Body",
    ],
    summary:
      "One indexed life for now: Kafū Nagai in Tokyo. Open comparison awaiting other lives on New Year’s Day.",
    summaryJa:
      "いま記録されているのは一人の一日だけ。永井荷風・東京。同じ元日の別の人生を待つ開いた比較。",
    status: "available",
    href: "/same-day/1918-01-01",
    indexedLives: 1,
    comparisonStatus: "open",
  },
  {
    id: "compare-2011-05-02",
    date: "2011-05-02",
    title: "May 2, 2011 — Tokyo",
    titleJa: "2011年5月2日 — 東京",
    entryIds: ["entry-2011-05-02"],
    cities: ["Tokyo"],
    countries: ["Japan"],
    themes: [
      "Publishing",
      "Used Bookstores",
      "Live Music",
      "Movement",
      "Books",
    ],
    summary:
      "One indexed life for now: Kenji Nishimura in Tokyo. Open comparison awaiting other cities.",
    summaryJa:
      "いま記録されているのは一人の一日だけ。西村賢太・東京。別都市の日記を待つ開いた比較。",
    status: "available",
    href: "/same-day/2011-05-02",
    indexedLives: 1,
    comparisonStatus: "open",
  },
  {
    id: "compare-1945-03-10",
    date: "1945-03-10",
    title: "March 10, 1945 — Tokyo",
    titleJa: "1945年3月10日 — 東京",
    entryIds: ["entry-1945-03-10"],
    cities: ["Tokyo"],
    countries: ["Japan"],
    themes: ["War", "Urban Change"],
    summary:
      "A first scaffold for reading the Great Tokyo Air Raid night through diary time. Additional diaries will be linked when sourced.",
    summaryJa:
      "東京大空襲の夜を日記時間から読むための最初の足場。追加の日記は出典確認後に接続する。",
    status: "coming",
  },
  {
    id: "compare-1945-08-15",
    date: "1945-08-15",
    title: "August 15, 1945 — Tokyo / London / New York",
    titleJa: "1945年8月15日 — 東京 / ロンドン / ニューヨーク",
    entryIds: ["entry-1945-08-15"],
    cities: ["Tokyo", "London", "New York"],
    countries: ["Japan", "United Kingdom", "United States"],
    themes: ["War", "Media"],
    summary:
      "Coming observation: the same calendar day across cities at the end of the war.",
    summaryJa: "Coming observation: 終戦日を複数都市の日記で横断する。",
    status: "coming",
  },
  {
    id: "compare-2001-09-11",
    date: "2001-09-11",
    title: "September 11, 2001 — New York / Tokyo / London",
    titleJa: "2001年9月11日 — ニューヨーク / 東京 / ロンドン",
    entryIds: [],
    cities: ["New York", "Tokyo", "London"],
    countries: ["United States", "Japan", "United Kingdom"],
    themes: ["War & Disaster", "Media"],
    summary:
      "Coming observation: how ordinary diary days absorb a globally televised disaster.",
    summaryJa:
      "Coming observation: 世界中継される災害を、日常の日記がどう吸収したか。",
    status: "coming",
  },
  {
    id: "compare-2020-03",
    date: "2020-03-01",
    title: "March 2020 — Tokyo / New York / Milan / Wuhan",
    titleJa: "2020年3月 — 東京 / ニューヨーク / ミラノ / 武漢",
    entryIds: [],
    cities: ["Tokyo", "New York", "Milan", "Wuhan"],
    countries: ["Japan", "United States", "Italy", "China"],
    themes: ["War & Disaster", "Body", "Work"],
    summary:
      "Coming observation: early pandemic months as synchronized and desynchronized diary time.",
    summaryJa:
      "Coming observation: パンデミック初期を、同期とずれの日記時間として読む。",
    status: "coming",
  },
];
