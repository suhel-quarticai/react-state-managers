import { render, screen } from "@testing-library/react";

import { RecoilRoot } from "recoil";
import { GlobalContextProvider } from "@/stores/context";
import { ValuesSummaryContext } from "./context";
import { ValuesSummaryZustand } from "./zustand";
import { ValuesSummaryRecoil } from "./recoil";
import { ValuesSummaryJotai } from "./jotai";
import { ValuesSummaryMobx } from "./mobx";
import { ValuesSummaryValtio } from "./valtio";

const runTests = (
  Component: React.FC,
  wrapper?: React.FC<{ children: React.ReactNode }>,
) => {
  it("renders correctly with initial props", () => {
    render(<Component />, { wrapper });

    expect(screen.getByText("Slider")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByText("Timer")).toBeInTheDocument();
  });
};

describe("ValuesSummaryContext", () => {
  runTests(ValuesSummaryContext, GlobalContextProvider);
});

describe("ValuesSummaryZustand", () => {
  runTests(ValuesSummaryZustand);
});

describe("ValuesSummaryRecoil", () => {
  runTests(ValuesSummaryRecoil, RecoilRoot);
});

describe("ValuesSummaryJotai", () => {
  runTests(ValuesSummaryJotai);
});

describe("ValuesSummaryMobx", () => {
  runTests(ValuesSummaryMobx);
});

describe("ValuesSummaryValtio", () => {
  runTests(ValuesSummaryValtio);
});
