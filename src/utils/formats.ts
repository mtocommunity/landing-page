export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    timeZone: "America/Lima",
  };
  const format = new Intl.DateTimeFormat("es-ES", options).format(date);

  return format.charAt(0).toUpperCase() + format.slice(1);
}
