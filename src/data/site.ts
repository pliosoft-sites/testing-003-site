/**
 * Single source of truth for your business info. Almost every page reads
 * from here. Edit this file to update the site name, contact info, etc.
 *
 * Anything in [brackets] is a placeholder — replace it.
 */

export interface Hours {
  day: string;
  hours: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const SITE = {
  /** The business name as it appears in the masthead, titles, footer. */
  name: "Testing 003",

  /** One-line description used in <meta description> and OpenGraph. */
  tagline: 'A short, plain-English description of what you do.',
  description: 'Longer description for search engines and social previews.',

  /** Contact info — surfaced in the footer and contact page. */
  email: 'hello@example.com',
  phone: '',
  address: '',
  city: '',

  /** Hours of operation. Leave empty for "by appointment" or virtual. */
  hours: [] as Hours[],

  /** Optional: social links shown in the footer. Leave empty array to omit. */
  social: [] as SocialLink[],
} as const;
