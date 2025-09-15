import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
  vi.resetModules();
  vi.resetAllMocks();
  cleanup();
});
