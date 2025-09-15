import { describe, expect, it, vi } from "vitest";
import type { RefinementCtx } from "zod";
import { isPasswordSame } from "./isPasswordSame";

const sameFields = {
  password: "password",
  confirmPassword: "password",
};

const wrongFields = {
  password: "password",
  confirmPassword: "something",
};

const mockedCtx = { addIssue: vi.fn() };

describe("isPasswordSame", () => {
  it("should not call zod context addIssue", () => {
    isPasswordSame<typeof sameFields>("password", "confirmPassword")(
      sameFields,
      mockedCtx as unknown as RefinementCtx<typeof sameFields>,
    );

    expect(mockedCtx.addIssue).not.toHaveBeenCalled();
  });

  it("should call zod context addIssue", () => {
    isPasswordSame<typeof wrongFields>("password", "confirmPassword")(
      wrongFields,
      mockedCtx as unknown as RefinementCtx<typeof wrongFields>,
    );

    expect(mockedCtx.addIssue).toHaveBeenCalled();
  });
});
