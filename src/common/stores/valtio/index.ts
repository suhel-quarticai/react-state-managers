import { proxy, useSnapshot } from "valtio";
import { GlobalState, GlobalStateGetter } from "../types";

export const globalStore = proxy<GlobalStateGetter>({
  chartTab: "desktop",
  counter: 0,
  tableColumnFilters: [],
  timer: 0,
  githubSearch: "",
  sliderValue: 0,
});

export const useGlobalStore = () => useSnapshot(globalStore);

// setters can not be inlined in the component
// septate setters are required
export const setChartTab = (tab: GlobalState["chartTab"]) => {
  globalStore.chartTab = tab;
};

export const setCounter = (count: number) => {
  globalStore.counter = count;
};

export const setGithubSearch = (search: string) => {
  globalStore.githubSearch = search;
};

export const setSliderValue = (value: number) => {
  globalStore.sliderValue = value;
};

export const setTableColumnFilters = (
  filters:
    | GlobalState["tableColumnFilters"]
    | ((
        prev: GlobalState["tableColumnFilters"],
      ) => GlobalState["tableColumnFilters"]),
) => {
  typeof filters === "function"
    ? (globalStore.tableColumnFilters = filters(globalStore.tableColumnFilters))
    : (globalStore.tableColumnFilters = filters);
};

export const setTimer = (time: number | ((prev: number) => number)) => {
  typeof time === "function"
    ? (globalStore.timer = time(globalStore.timer))
    : (globalStore.timer = time);
};
