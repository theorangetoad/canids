export declare class CalendarViewModel {
  getCurrentYear(): number; 
  getCurrentDates(): Date[][];

  getWeekDays(): number[];
  getDayName (dayIndex: number): string;

  getCurrentMonth(): number;
  setCurrentMonth(month: number): void;

  getCurrentMonthName(): string;
  getMonths(): {index: number; name: string}[][];
  setMonthMode(isMonthMode: boolean): void;
  isMonthMode(): boolean;
  dateIsSelected(date: Date): boolean;
  
  dateActivated(date: Date): void;
  monthActivated(month: number): void;
  dayOfWeekActivated(dayOfWeek: number): void;

  next(): void;
  prev(): void;
  goToDate(date: Date): void;

  setOnCheckIfDateIsSelected(event: (date: Date) => boolean): void;
  setOnDateActivated(event: (date: Date) => void): void;
  setOnDayOfWeekActivated(event: (dayOfWeek: number) => void): void;
}