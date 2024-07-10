import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RecoilRoot } from "recoil";
import { GlobalContextProvider } from "@/stores/context";
import { SelectChartTabsContext } from "./context";
import { SelectChartTabsZustand } from "./zustand";
import { SelectChartTabsRecoil } from "./recoil";
import { SelectChartTabsJotai } from "./jotai";
import { SelectChartTabsMobx } from "./mobx";
import { SelectChartTabsValtio } from "./valtio";

const runTests = (
  Component: React.FC,
  wrapper?: React.FC<{ children: React.ReactNode }>,
) => {
  it("renders correctly with initial state", () => {
    render(<Component />, { wrapper });

    // Verify that the component renders with the correct text and initial state
    expect(screen.getByText("Chart Tab")).toBeInTheDocument();
    expect(screen.getByText("Desktop")).toBeInTheDocument();
    expect(screen.getByText("Mobile")).toBeInTheDocument();

    expect(screen.getByTestId("desktop-button")).toHaveClass("bg-secondary");
    expect(screen.getByTestId("mobile-button")).not.toHaveClass("bg-secondary");
  });

  it("calls setChartTab with 'desktop' when the Desktop button is clicked", async () => {
    const user = userEvent.setup();

    render(<Component />, { wrapper });

    await act(() => user.click(screen.getByTestId("desktop-button")));

    expect(screen.getByTestId("desktop-button")).toHaveClass("bg-secondary");
    expect(screen.getByTestId("mobile-button")).not.toHaveClass("bg-secondary");
  });

  it("calls setChartTab with 'mobile' when the Mobile button is clicked", async () => {
    const user = userEvent.setup();

    render(<Component />, { wrapper });

    await act(() => user.click(screen.getByTestId("mobile-button")));

    expect(screen.getByTestId("desktop-button")).not.toHaveClass(
      "bg-secondary",
    );
    expect(screen.getByTestId("mobile-button")).toHaveClass("bg-secondary");
  });
};

describe("SelectChartTabsContext", () => {
  runTests(SelectChartTabsContext, GlobalContextProvider);
});

describe("SelectChartTabsZustand", () => {
  runTests(SelectChartTabsZustand);
});

describe("SelectChartTabsRecoil", () => {
  runTests(SelectChartTabsRecoil, RecoilRoot);
});

describe("SelectChartTabsJotai", () => {
  runTests(SelectChartTabsJotai);
});

describe("SelectChartTabsMobx", () => {
  runTests(SelectChartTabsMobx);
});

describe("SelectChartTabsValtio", () => {
  runTests(SelectChartTabsValtio);
});
