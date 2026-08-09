import type {
  PlatformRecord,
  SocialAccountRecord,
  SourceMaintenanceTask,
  SourceVersionRecord,
} from "@/lib/types";

/** Research / maintenance queue for mutable and Web sources. */
export const sourceMaintenanceTasks: SourceMaintenanceTask[] = [];

/** Version snapshots — contentHash only when actually compared. */
export const sourceVersionRecords: SourceVersionRecord[] = [];

/** SNS account state — no speculative deletion / suspension. */
export const socialAccountRecords: SocialAccountRecord[] = [];

/** Platform lifecycle — Fact only when registered from verified status. */
export const platformRecords: PlatformRecord[] = [];
