import { atom, useRecoilState } from "recoil";
import { GlobalState } from "../types";

export const tableColumnFilters = atom<GlobalState["tableColumnFilters"]>({
  key: "tableColumnFilters", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const useTableColumnFilters = () => useRecoilState(tableColumnFilters);

export const chartTab = atom<GlobalState["chartTab"]>({
  key: "chartTab",
  default: "desktop",
});

export const useChartTab = () => useRecoilState(chartTab);

export const counter = atom<GlobalState["counter"]>({
  key: "counter",
  default: 0,
});

export const useCounter = () => useRecoilState(counter);

export const githubSearch = atom<GlobalState["githubSearch"]>({
  key: "githubSearch",
  default: "",
});

export const useGithubSearch = () => useRecoilState(githubSearch);

export const sliderValue = atom<GlobalState["sliderValue"]>({
  key: "sliderValue",
  default: 0,
});

export const useSliderValue = () => useRecoilState(sliderValue);

export const timer = atom<GlobalState["timer"]>({
  key: "timer",
  default: 0,
});

export const useTimer = () => useRecoilState(timer);
