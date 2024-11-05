const WPM_MEDIAN = 200;

export function calculateReadingTime(text: string): string {
  const words = text.split(" ").length;
  return `${Math.ceil(words / WPM_MEDIAN)} min read`;
}
