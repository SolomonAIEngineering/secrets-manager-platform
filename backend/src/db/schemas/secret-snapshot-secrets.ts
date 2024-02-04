// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretSnapshotSecretsSchema = z.object({
  id: z.string().uuid(),
  envId: z.string().uuid(),
  secretVersionId: z.string().uuid(),
  snapshotId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TSecretSnapshotSecrets = z.infer<typeof SecretSnapshotSecretsSchema>;
export type TSecretSnapshotSecretsInsert = Omit<TSecretSnapshotSecrets, TImmutableDBKeys>;
export type TSecretSnapshotSecretsUpdate = Partial<Omit<TSecretSnapshotSecrets, TImmutableDBKeys>>;
