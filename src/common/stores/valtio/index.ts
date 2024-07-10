import { proxy, useSnapshot } from "valtio";
import { GlobalState } from "../types";
import { getGithubUser } from "@/utils/api";

export const chartTabStore = proxy({
  chartTab: "desktop" as GlobalState["chartTab"],
});

// setters can not be inlined in the component
// septate setters are required
export const setChartTab = (tab: GlobalState["chartTab"]) => {
  chartTabStore.chartTab = tab;
};

export const useChartTabStore = () => useSnapshot(chartTabStore);

export const counterStore = proxy({
  counter: 0 as GlobalState["counter"],
});

export const setCounter = (count: number) => {
  counterStore.counter = count;
};

export const useCounterStore = () => useSnapshot(counterStore);

export const githubSearchStore = proxy({
  githubSearch: "" as GlobalState["githubSearch"],
  get githubUser() {
    return getGithubUser(this.githubSearch); // not working, page breaks
  },
});

export const setGithubSearch = (search: string) => {
  githubSearchStore.githubSearch = search;
};

export const useGithubSearchStore = () => useSnapshot(githubSearchStore);

export const tableColumnFiltersStore = proxy({
  tableColumnFilters: [] as GlobalState["tableColumnFilters"],
});

export const setTableColumnFilters = (
  filters:
    | GlobalState["tableColumnFilters"]
    | ((
        prev: GlobalState["tableColumnFilters"],
      ) => GlobalState["tableColumnFilters"]),
) => {
  typeof filters === "function"
    ? (tableColumnFiltersStore.tableColumnFilters = filters(
        tableColumnFiltersStore.tableColumnFilters,
      ))
    : (tableColumnFiltersStore.tableColumnFilters = filters);
};

export const useTableColumnFiltersStore = () =>
  useSnapshot(tableColumnFiltersStore);

export const timerStore = proxy({
  timer: 0 as GlobalState["timer"],
});

export const setTimer = (time: number | ((prev: number) => number)) => {
  typeof time === "function"
    ? (timerStore.timer = time(timerStore.timer))
    : (timerStore.timer = time);
};

export const useTimerStore = () => useSnapshot(timerStore);

export const sliderValueStore = proxy({
  sliderValue: 0 as GlobalState["sliderValue"],
});

export const setSliderValue = (value: number) => {
  sliderValueStore.sliderValue = value;
};

export const useSliderValueStore = () => useSnapshot(sliderValueStore);

export const allValuesStore = proxy({
  counterStore,
  tableColumnFiltersStore,
  timerStore,
  sliderValueStore,
  chartTabStore,
  get values() {
    return {
      counter: this.counterStore.counter,
      tableColumnFilters: this.tableColumnFiltersStore.tableColumnFilters,
      timer: this.timerStore.timer,
      sliderValue: this.sliderValueStore.sliderValue,
      chartTab: this.chartTabStore.chartTab,
    };
  },
});

export const useReadAllValues = () => useSnapshot(allValuesStore);
