import { createContext, useState } from "react";

type ChartTab = "mobile" | "desktop" | "views";

type GlobalContextType = {
  searchText: string;
  setSearchText: (text: string) => void;
  sliderValue: number;
  setSliderValue: (value: number) => void;
  counter: number;
  setCounter: (count: number) => void;
  timer: number;
  setTimer: (time: number | ((prev: number) => number)) => void;
  chartTab: ChartTab;
  setChartTab: (tab: ChartTab) => void;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = (props: React.PropsWithChildren) => {
  const [searchText, setSearchText] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [chartTab, setChartTab] = useState<ChartTab>("desktop");

  return (
    <GlobalContext.Provider
      value={{
        searchText,
        setSearchText,
        sliderValue,
        setSliderValue,
        counter,
        setCounter,
        timer,
        setTimer,
        chartTab,
        setChartTab,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
