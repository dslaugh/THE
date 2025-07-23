export type TODO = any;

export type ScheduleItem = {
  round: number;
  smallBlind: number;
  bigBlind: number;
  duration: number;
};

export type Schedule = {
  name: string;
  schedule: ScheduleItem[];
};
