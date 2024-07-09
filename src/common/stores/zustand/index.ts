import { create } from "zustand";
import { GlobalState } from "../types";

export const useZustandStore = create<GlobalState>((set) => ({
  chartTab: "desktop",
  counter: 0,
  githubSearch: "",
  tableColumnFilters: [],
  timer: 0,
  sliderValue: 0,
  setSliderValue: (value) => set({ sliderValue: value }),
  setCounter: (count) => set({ counter: count }),
  setTimer: (time) => {
    typeof time === "function"
      ? set((state) => ({ timer: time(state.timer) }))
      : set({ timer: time });
  },
  setChartTab: (tab) => set({ chartTab: tab }),
  setGithubSearch: (search) => set({ githubSearch: search }),
  setTableColumnFilters: (filters) => {
    typeof filters === "function"
      ? set((state) => ({
          tableColumnFilters: filters(state.tableColumnFilters),
        }))
      : set({ tableColumnFilters: filters });
  },
}));
