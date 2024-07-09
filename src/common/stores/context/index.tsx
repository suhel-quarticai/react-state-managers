import { createContext, useState } from "react";

type GlobalContextType = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = (props: React.PropsWithChildren) => {
  const [searchText, setSearchText] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        searchText,
        setSearchText,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
