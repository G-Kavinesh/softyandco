export type DayRange = {
  days: string;
  open: string;
  close: string;
};

export const hoursDisplay: DayRange[] = [
  { days: "Mon – Thu", open: "12pm", close: "12am" },
  { days: "Fri – Sun", open: "12pm", close: "1am" },
];

// Days that close at 1am (0=Sun, 5=Fri, 6=Sat)
export const lateNightDays = [0, 5, 6];
