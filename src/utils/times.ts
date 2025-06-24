/*!
 * Copyright (c) 2025 ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

const WPM_MEDIAN = 200;

export function calculateReadingTime(text: string): string {
  const words = text.split(" ").length;
  return `${Math.ceil(words / WPM_MEDIAN)} min read`;
}
