export type EventAgendaItem =
  | string
  | {
    date: Date;
    title: string;
    description: string;
  };

export type EventAgendaDay = {
  date: Date;
  title: string;
  items: EventAgendaItem[];
};

export type EventAgenda = {
  days: EventAgendaDay[];
};

export interface EventDate {
  start: Date;
  end: Date;
}

export interface ExpoEvent {
  date: EventDate;
  name: string;
  description: string;
  imageUrl: string;
  link?: string;
}