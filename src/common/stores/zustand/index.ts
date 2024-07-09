import { create } from "zustand";
import { GlobalState } from "../types";

export const useChartTabStore = create<{
  chartTab: GlobalState["chartTab"];
  setChartTab: (tab: GlobalState["chartTab"]) => void;
}>((set) => ({
  chartTab: "desktop",
  setChartTab: (chartTab) => set({ chartTab }),
}));

export const useCounterStore = create<{
  counter: GlobalState["counter"];
  setCounter: (count: GlobalState["counter"]) => void;
}>((set) => ({
  counter: 0,
  setCounter: (counter) => set({ counter }),
}));

export const useGithubSearchStore = create<{
  githubSearch: GlobalState["githubSearch"];
  setGithubSearch: (search: GlobalState["githubSearch"]) => void;
}>((set) => ({
  githubSearch: "",
  setGithubSearch: (githubSearch) => set({ githubSearch }),
}));

export const useTableColumnFiltersStore = create<{
  tableColumnFilters: GlobalState["tableColumnFilters"];
  setTableColumnFilters: (
    filters:
      | GlobalState["tableColumnFilters"]
      | ((
          filters: GlobalState["tableColumnFilters"],
        ) => GlobalState["tableColumnFilters"]),
  ) => void;
}>((set) => ({
  tableColumnFilters: [],
  setTableColumnFilters: (filters) =>
    typeof filters === "function"
      ? set((state) => ({
          tableColumnFilters: filters(state.tableColumnFilters),
        }))
      : set({ tableColumnFilters: filters }),
}));

export const useTimerStore = create<{
  timer: GlobalState["timer"];
  setTimer: (
    time:
      | GlobalState["timer"]
      | ((time: GlobalState["timer"]) => GlobalState["timer"]),
  ) => void;
}>((set) => ({
  timer: 0,
  setTimer: (timer) =>
    typeof timer === "function"
      ? set((state) => ({ timer: timer(state.timer) }))
      : set({ timer }),
}));

export const useSliderValueStore = create<{
  sliderValue: GlobalState["sliderValue"];
  setSliderValue: (value: GlobalState["sliderValue"]) => void;
}>((set) => ({
  sliderValue: 0,
  setSliderValue: (sliderValue) => set({ sliderValue }),
}));

export const useReadAllValues = () => {
  const chartTab = useChartTabStore((state) => state.chartTab);
  const counter = useCounterStore((state) => state.counter);
  const githubSearch = useGithubSearchStore((state) => state.githubSearch);
  const tableColumnFilters = useTableColumnFiltersStore(
    (state) => state.tableColumnFilters,
  );
  const timer = useTimerStore((state) => state.timer);
  const sliderValue = useSliderValueStore((state) => state.sliderValue);

  return {
    chartTab,
    counter,
    githubSearch,
    tableColumnFilters,
    timer,
    sliderValue,
  };
};
