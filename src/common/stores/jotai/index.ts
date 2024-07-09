import { atom, useAtom, useAtomValue } from "jotai";
import { GlobalState } from "../types";
import { getGithubUser } from "@/utils/api";

export const tableColumnFilters = atom<GlobalState["tableColumnFilters"]>([]);

export const useTableColumnFilters = () => useAtom(tableColumnFilters);

export const chartTab = atom<GlobalState["chartTab"]>("desktop");

export const useChartTab = () => useAtom(chartTab);

export const counter = atom<GlobalState["counter"]>(0);

export const useCounter = () => useAtom(counter);

export const githubSearch = atom<GlobalState["githubSearch"]>("");

export const useGithubSearch = () => useAtom(githubSearch);

export const sliderValue = atom<GlobalState["sliderValue"]>(0);

export const useSliderValue = () => useAtom(sliderValue);

export const timer = atom<GlobalState["timer"]>(0);

export const useTimer = () => useAtom(timer);

export const allValues = atom((get) => ({
  tableColumnFilters: get(tableColumnFilters),
  counter: get(counter),
  sliderValue: get(sliderValue),
  timer: get(timer),
}));

export const useReadAllValues = () => useAtomValue(allValues);

export const githubUser = atom((get) => getGithubUser(get(githubSearch)));

export const useGithubUser = () => useAtomValue(githubUser);
