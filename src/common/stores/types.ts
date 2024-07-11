import { ColumnFiltersState } from "@tanstack/react-table";

type ChartTab = "mobile" | "desktop" | "views";

export type GlobalStateGetter = {
  sliderValue: number;
  counter: number;
  timer: number;
  chartTab: ChartTab;
  githubSearch: string;
  tableColumnFilters: ColumnFiltersState;
};

export type GlobalStateSetter = {
  setSliderValue: (value: number) => void;
  setCounter: (count: number) => void;
  setTimer: (time: CallbackSetter<number>) => void;
  setChartTab: (tab: ChartTab) => void;
  setGithubSearch: (search: string) => void;
  setTableColumnFilters: (filters: CallbackSetter<ColumnFiltersState>) => void;
};

export type GlobalState = GlobalStateGetter & GlobalStateSetter;

export type CallbackSetter<T> = T | ((prev: T) => T);
