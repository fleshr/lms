import * as auth from "@/entities/auth";
import { describe, expect, it, vi } from "vitest";
import { changePasswordAction } from "./changePassword";

const testData = { currentPassword: "", newPassword: "", confirmPassword: "" };
const mock = vi.spyOn(auth, "changePassword");

describe("changePassword", () => {
  it("should return false on error", async () => {
    mock.mockRejectedValue(new Error("Some Error"));
    const result = await changePasswordAction({ success: false }, testData);
    expect(result.success).toBeFalsy();
  });

  it("should return true on success", async () => {
    mock.mockResolvedValue();
    const result = await changePasswordAction({ success: false }, testData);
    expect(result.success).toBeTruthy();
  });
});
