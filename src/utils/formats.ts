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

export function formatDate2(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Lima",
  };

  const format = new Intl.DateTimeFormat("es-ES", options).format(date);

  const [day, month, year] = format.split(" ");
  return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
}
