/*!
 * File of ManyToOne Community
 * Licensed under the GPL-3.0 or later License: https://github.com/mtocommunity/landing-page/blob/master/LICENSE.md
 */

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

export function formatDate3(date: Date): string {
  // 01 de Nov. De 2021
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Lima",
  };

  const format = new Intl.DateTimeFormat("es-ES", options).format(date);

  const [day, month, year] = format.split(" ");

  return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}. del ${year}`;
}

export const formatTimeOnly = (date: Date) => {
  return new Intl.DateTimeFormat("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Lima",
  }).format(date);
};
