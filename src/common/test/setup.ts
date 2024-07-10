import { afterEach, beforeAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  };
});

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    useLocation: () => ({
      pathname: "/",
    }),
  };
});

vi.mock("window", () => ({
  matchMedia: vi.fn(),
  mediaQuery: {
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  },
}));
