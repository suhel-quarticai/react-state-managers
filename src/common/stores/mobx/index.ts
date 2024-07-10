import { makeObservable, observable, action } from "mobx";
import { GlobalState } from "../types";

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
    filters:
      | GlobalState["tableColumnFilters"]
      | ((
          filters: GlobalState["tableColumnFilters"],
        ) => GlobalState["tableColumnFilters"]),
  ) => {
    this.tableColumnFilters =
      typeof filters === "function"
        ? filters(this.tableColumnFilters)
        : filters;
  };

  setTimer = (
    time:
      | GlobalState["timer"]
      | ((time: GlobalState["timer"]) => GlobalState["timer"]),
  ) => {
    this.timer = typeof time === "function" ? time(this.timer) : time;
  };
}

export const globalStore = new GlobalStore();

// export const chartTabStore = new ChartTabStore();

// export class CounterStore {
//   counter: GlobalState["counter"] = 0;

//   constructor() {
//     makeObservable(this, {
//       counter: observable,
//       setCounter: action,
//     });
//   }

//   setCounter = (count: GlobalState["counter"]) => {
//     this.counter = count;
//   };
// }

// export const counterStore = new CounterStore();

// export class GithubSearchStore {
//   githubSearch: GlobalState["githubSearch"] = "";

//   constructor() {
//     makeObservable(this, {
//       githubSearch: observable,
//       setGithubSearch: action,
//     });
//   }

//   setGithubSearch = (search: GlobalState["githubSearch"]) => {
//     this.githubSearch = search;
//   };
// }

// export const githubSearchStore = new GithubSearchStore();

// export class TableColumnFiltersStore {
//   tableColumnFilters: GlobalState["tableColumnFilters"] = [];

//   constructor() {
//     makeObservable(this, {
//       tableColumnFilters: observable,
//       setTableColumnFilters: action,
//     });
//   }

//   setTableColumnFilters = (
//     filters:
//       | GlobalState["tableColumnFilters"]
//       | ((
//           filters: GlobalState["tableColumnFilters"],
//         ) => GlobalState["tableColumnFilters"]),
//   ) => {
//     this.tableColumnFilters =
//       typeof filters === "function"
//         ? filters(this.tableColumnFilters)
//         : filters;
//   };
// }

// export const tableColumnFiltersStore = new TableColumnFiltersStore();

// export class TimerStore {
//   timer: GlobalState["timer"] = 0;

//   constructor() {
//     makeObservable(this, {
//       timer: observable,
//       setTimer: action,
//     });
//   }

//   setTimer = (
//     time:
//       | GlobalState["timer"]
//       | ((time: GlobalState["timer"]) => GlobalState["timer"]),
//   ) => {
//     this.timer = typeof time === "function" ? time(this.timer) : time;
//   };
// }

// export const timerStore = new TimerStore();

// export class SliderValueStore {
//   sliderValue: GlobalState["sliderValue"] = 0;

//   constructor() {
//     makeObservable(this, {
//       sliderValue: observable,
//       setSliderValue: action,
//     });
//   }

//   setSliderValue = (value: GlobalState["sliderValue"]) => {
//     this.sliderValue = value;
//   };
// }

// export const sliderValueStore = new SliderValueStore();
