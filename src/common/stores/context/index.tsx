import { createContext, useState } from "react";
import { ColumnFiltersState } from "@tanstack/react-table";

type ChartTab = "mobile" | "desktop" | "views";

type GlobalContextType = {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  counter: number;
  setCounter: (count: number) => void;
  timer: number;
  setTimer: (time: number | ((prev: number) => number)) => void;
  chartTab: ChartTab;
  setChartTab: (tab: ChartTab) => void;
  githubSearch: string;
  setGithubSearch: (search: string) => void;
  tableColumnFilters: ColumnFiltersState;
  setTableColumnFilters: (
    filters:
      | ColumnFiltersState
      | ((prev: ColumnFiltersState) => ColumnFiltersState),
  ) => void;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = (props: React.PropsWithChildren) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [githubSearch, setGithubSearch] = useState("");
  const [chartTab, setChartTab] = useState<ChartTab>("desktop");
  const [tableColumnFilters, setTableColumnFilters] =
    useState<ColumnFiltersState>([]);

  return (
    <GlobalContext.Provider
      value={{
        sliderValue,
        setSliderValue,
        counter,
        setCounter,
        timer,
        setTimer,
        githubSearch,
        setGithubSearch,
        chartTab,
        setChartTab,
        tableColumnFilters,
        setTableColumnFilters,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
