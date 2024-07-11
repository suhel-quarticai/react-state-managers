import { makeObservable, observable, action } from "mobx";
import type { CallbackSetter, GlobalState } from "../types";

export class GlobalStore {
  chartTab: GlobalState["chartTab"] = "desktop";
  counter: GlobalState["counter"] = 0;
  githubSearch: GlobalState["githubSearch"] = "";
  sliderValue: GlobalState["sliderValue"] = 0;
  tableColumnFilters: GlobalState["tableColumnFilters"] = [];
  timer: GlobalState["timer"] = 0;

  constructor() {
    makeObservable(this, {
      chartTab: observable,
      setChartTab: action,
      counter: observable,
      setCounter: action,
      githubSearch: observable,
      setGithubSearch: action,
      sliderValue: observable,
      setSliderValue: action,
      tableColumnFilters: observable,
      setTableColumnFilters: action,
      timer: observable,
      setTimer: action,
    });
  }

  setChartTab = (tab: GlobalState["chartTab"]) => {
    this.chartTab = tab;
  };

  setCounter = (count: GlobalState["counter"]) => {
    this.counter = count;
  };

  setGithubSearch = (search: GlobalState["githubSearch"]) => {
    this.githubSearch = search;
  };

  setSliderValue = (value: GlobalState["sliderValue"]) => {
    this.sliderValue = value;
  };

  setTableColumnFilters = (
    filters: CallbackSetter<GlobalState["tableColumnFilters"]>,
  ) => {
    this.tableColumnFilters =
      typeof filters === "function"
        ? filters(this.tableColumnFilters)
        : filters;
  };

  setTimer = (time: CallbackSetter<GlobalState["timer"]>) => {
    this.timer = typeof time === "function" ? time(this.timer) : time;
  };
}

export const globalStore = new GlobalStore();
