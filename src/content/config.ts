/*!
 * File of ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

import { defineCollection, reference, z } from "astro:content";

const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    username: z.string(),
    name: z.string(),
    bio: z.string(),
    avatar: z.string(),
    links: z
      .array(z.object({ url: z.string(), title: z.string() }))
      .default([]),
  }),
});

const newsletterCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z
      .array(z.enum(["iot", "dev", "net", "os", "sec", "mto"]))
      .optional()
      .default([]),
    thumbnail: z.string().optional(),
    authors: z.array(reference("author")),
  }),
});

export const collections = {
  author: authorsCollection,
  newsletter: newsletterCollection,
};
