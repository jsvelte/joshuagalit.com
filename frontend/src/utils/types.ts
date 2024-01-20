import { z } from 'zod'

export type Blog = {
  slug: string
  frontMatter: FrontMatter
}

export type FrontMatter = {
  title: string
  publishedAt: string
  summary: string
  socialImage: string
  tags: string[]
  content: string
}

export type TLink = {
  text: string
  href: string
  offset: number
}

// Define a schema using Zod
export const reputationChangeSchema = z.object({
  on_date: z.number(),
  reputation_change: z.number(),
  vote_type: z.string(),
  post_type: z.string(),
  post_id: z.number(),
  user_id: z.number()
})

export const responseDataSchema = z.object({
  items: z.array(reputationChangeSchema),
  has_more: z.boolean(),
  quota_max: z.number(),
  quota_remaining: z.number()
})

export type ResponseData = z.infer<typeof responseDataSchema>
