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
