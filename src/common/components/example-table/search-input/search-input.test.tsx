import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RecoilRoot } from "recoil";
import { GlobalContextProvider } from "@/stores/context";
import { SearchInputContext } from "./context";
import { SearchInputZustand } from "./zustand";
import { SearchInputRecoil } from "./recoil";
import { SearchInputJotai } from "./jotai";
import { SearchInputMobx } from "./mobx";
import { SearchInputValtio } from "./valtio";

const runTests = (
  Component: React.FC,
  wrapper?: React.FC<{ children: React.ReactNode }>,
) => {
  it("renders correctly with initial state", () => {
    render(<Component />, { wrapper });

    // Verify that the component renders with the correct text and initial state
    expect(screen.getByText("Search Input for Table")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toHaveValue("");
  });

  it("calls onChange with the correct value when input changes", async () => {
    const user = userEvent.setup();

    render(<Component />, { wrapper });

    await act(() => user.type(screen.getByTestId("search-input"), "t"));

    expect(screen.getByTestId("search-input")).toHaveValue("t");
  });
};

describe("SearchInputContext", () => {
  runTests(SearchInputContext, GlobalContextProvider);
});

describe("SearchInputZustand", () => {
  runTests(SearchInputZustand);
});

describe("SearchInputRecoil", () => {
  runTests(SearchInputRecoil, RecoilRoot);
});

describe("SearchInputJotai", () => {
  runTests(SearchInputJotai);
});

describe("SearchInputMobx", () => {
  runTests(SearchInputMobx);
});

describe("SearchInputValtio", () => {
  runTests(SearchInputValtio);
});
