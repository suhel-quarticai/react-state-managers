import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterZustand } from ".";

describe("CounterZustand", () => {
  it("renders correctly with initial state", () => {
    render(<CounterZustand className="test-class" />);

    // Verify that the Counter component is rendered with the correct props
    expect(screen.getByTestId("counter-value").innerHTML).toBe("0");
    expect(screen.getByText("Counter")).toBeInTheDocument();

    expect(screen.getByTestId("increment-button")).toBeInTheDocument();
    expect(screen.getByTestId("decrement-button")).toBeInTheDocument();
  });

  it("calls setCounter when increment button is clicked", async () => {
    const user = userEvent.setup();

    render(<CounterZustand className="test-class" />);

    expect(screen.getByTestId("counter-value").innerHTML).toBe("0");
    await act(() => user.click(screen.getByTestId("increment-button")));

    expect(screen.getByTestId("counter-value").innerHTML).toBe("1");

    await act(() => user.click(screen.getByTestId("decrement-button")));
    await act(() => user.click(screen.getByTestId("decrement-button")));
    expect(screen.getByTestId("counter-value").innerHTML).toBe("-1");
  });
});
