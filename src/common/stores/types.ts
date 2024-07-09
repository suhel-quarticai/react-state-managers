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
  setTimer: (time: number | ((prev: number) => number)) => void;
  setChartTab: (tab: ChartTab) => void;
  setGithubSearch: (search: string) => void;
  setTableColumnFilters: (
    filters:
      | ColumnFiltersState
      | ((prev: ColumnFiltersState) => ColumnFiltersState),
  ) => void;
};

export type GlobalState = GlobalStateGetter & GlobalStateSetter;
