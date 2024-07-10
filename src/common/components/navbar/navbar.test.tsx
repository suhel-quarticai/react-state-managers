import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { navText } from "@/utils/constants";
import { Navbar } from ".";

describe("Navbar", () => {
  it("should render without crashing", () => {
    const screen = render(<Navbar />, { wrapper: BrowserRouter });
    const element = screen.getByText(navText);

    expect(element).toBeInTheDocument();
  });
});
