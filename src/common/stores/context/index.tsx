import { createContext, useState } from "react";

type GlobalContextType = {
  searchText: string;
  setSearchText: (text: string) => void;
  sliderValue: number;
  setSliderValue: (value: number) => void;
  counter: number;
  setCounter: (count: number) => void;
  timer: number;
  setTimer: (time: number | ((prev: number) => number)) => void;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = (props: React.PropsWithChildren) => {
  const [searchText, setSearchText] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
