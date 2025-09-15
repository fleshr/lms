import { APIError } from "better-auth";
import { describe, expect, it } from "vitest";
import { handleAuthFromError } from "./handleAuthFromError";

describe("handleAuthFromError", () => {
  it("should return correct form state for unknown error", () => {
    const error = new Error("Something went wrong");
    const result = handleAuthFromError(error);

    expect(result).toEqual({ success: false, message: "Something went wrong" });
  });

  it("should return errors for fields", () => {
    const error = new APIError("BAD_REQUEST", {
      code: "INVALID_PASSWORD",
      message: "Invalid password",
    });
    const result = handleAuthFromError(error, {
      INVALID_PASSWORD: ["password", "confirmPassword"],
    });

    expect(result).toEqual({
      success: false,
      errors: {
        password: {
          type: "required",
          message: "Invalid password",
        },
        confirmPassword: {
          type: "required",
          message: "Invalid password",
        },
      },
    });
  });

  it("should return error message if no fields", () => {
    const error = new APIError("BAD_REQUEST", {
      code: "INVALID_PASSWORD",
      message: "Invalid password",
    });
    const result = handleAuthFromError(error);

    expect(result).toEqual({
      success: false,
      message: "Invalid password",
    });
  });
});
