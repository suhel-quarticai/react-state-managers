import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RecoilRoot } from "recoil";
import { GlobalContextProvider } from "@/stores/context";
import { CounterContext } from "./context";
import { CounterZustand } from "./zustand";
import { CounterRecoil } from "./recoil";
import { CounterJotai } from "./jotai";
import { CounterMobx } from "./mobx";
import { CounterValtio } from "./valtio";

const runTests = (
  Component: React.FC,
  wrapper?: React.FC<{ children: React.ReactNode }>,
) => {
  it("renders correctly with initial state", () => {
    render(<Component />, { wrapper });

    // Verify that the Counter component is rendered with the correct props
    expect(screen.getByTestId("counter-value").innerHTML).toBe("0");
    expect(screen.getByText("Counter")).toBeInTheDocument();

    expect(screen.getByTestId("increment-button")).toBeInTheDocument();
    expect(screen.getByTestId("decrement-button")).toBeInTheDocument();
  });

  it("updates counter value when increment or decrement button is clicked", async () => {
    const user = userEvent.setup();

    render(<Component />, { wrapper });

    expect(screen.getByTestId("counter-value").innerHTML).toBe("0");
    await act(() => user.click(screen.getByTestId("increment-button")));

    expect(screen.getByTestId("counter-value").innerHTML).toBe("1");

    await act(() => user.click(screen.getByTestId("decrement-button")));
    await act(() => user.click(screen.getByTestId("decrement-button")));
    expect(screen.getByTestId("counter-value").innerHTML).toBe("-1");
  });
};

describe("CounterContext", () => {
  runTests(CounterContext, GlobalContextProvider);
});

describe("CounterZustand", () => {
  runTests(CounterZustand);
});

describe("CounterRecoil", () => {
  runTests(CounterRecoil, RecoilRoot);
});

describe("CounterJotai", () => {
  runTests(CounterJotai);
});

describe("CounterMobx", () => {
  runTests(CounterMobx);
});

describe("CounterValtio", () => {
  runTests(CounterValtio);
});
