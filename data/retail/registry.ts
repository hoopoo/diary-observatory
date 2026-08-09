import type { RetailRecord } from "@/lib/types";
import { ICHIYO_WRITER_ID } from "@/data/writers/ichiyo-higuchi";

/** Empty until primary-source commerce evidence is indexed. */
export const retailRecords: RetailRecord[] = [];

export function getRetailRecordsByWriter(writerId: string) {
  return retailRecords.filter((r) => r.writerId === writerId);
}

export function getIchiyoRetailRecords() {
  return getRetailRecordsByWriter(ICHIYO_WRITER_ID);
}
