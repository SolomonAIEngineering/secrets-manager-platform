// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const OidcConfigsSchema = z.object({
  id: z.string().uuid(),
  issuer: z.string(),
  authorizationEndpoint: z.string(),
  jwksUri: z.string(),
  tokenEndpoint: z.string(),
  userinfoEndpoint: z.string(),
  encryptedClientId: z.string(),
  clientIdIV: z.string(),
  clientIdTag: z.string(),
  encryptedClientSecret: z.string(),
  clientSecretIV: z.string(),
  clientSecretTag: z.string(),
  allowedEmailDomains: z.string().nullable().optional(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  orgId: z.string().uuid()
});

export type TOidcConfigs = z.infer<typeof OidcConfigsSchema>;
export type TOidcConfigsInsert = Omit<z.input<typeof OidcConfigsSchema>, TImmutableDBKeys>;
export type TOidcConfigsUpdate = Partial<Omit<z.input<typeof OidcConfigsSchema>, TImmutableDBKeys>>;
