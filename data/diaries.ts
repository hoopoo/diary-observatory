import type { DiaryWork } from "@/lib/types";
import { captainIsOutToLunch } from "@/data/diaries/captain-is-out-to-lunch";
import { furukawaRoppaShowaDiary } from "@/data/diaries/furukawa-roppa-showa-diary";
import { horoki } from "@/data/diaries/horoki";
import { danchoTeiNichijo } from "@/data/diaries/dancho-tei-nichijo";

export const diaries: DiaryWork[] = [
  {
    id: "diary-nishimura-nichijo",
    slug: "isshi-shosetsukaki-no-nichijo",
    writerId: "writer-nishimura",
    title: "Kenji Nishimura’s diaries",
    titleOriginal: "西村賢太の日記",
    startYear: 2011,
    endYear: undefined,
    genre: "diary",
    sourceForm: "diary",
    language: "ja",
    publicationStatus: "partial",
    description:
      "Manuscripts, editors, publishers, used bookstores, television, alcohol, meals, the body and relationships are recorded in detail. Exact edition bibliography is pending verification.",
    descriptionJa:
      "原稿、編集者、出版社、古書店、テレビ番組、酒、食事、身体、人間関係が細かく記録されている。正式な書名・巻数・刊行年は書誌情報確認中。",
    sources: [
      {
        id: "src-nishimura-published-diaries",
        label: "西村賢太の公刊日記・日乗類",
        needed: true,
        status: "needed",
        note: "Edition details needed — do not invent volume or imprint data.",
      },
    ],
  },
  danchoTeiNichijo,
  captainIsOutToLunch,
  horoki,
  furukawaRoppaShowaDiary,
];

export function getDiaryBySlug(slug: string) {
  return diaries.find((d) => d.slug === slug);
}

export function getDiaryById(id: string) {
  return diaries.find((d) => d.id === id);
}

export function getDiariesByWriter(writerId: string) {
  return diaries.filter((d) => d.writerId === writerId);
}
