import * as auth from "@/entities/auth";
import { describe, expect, it, vi } from "vitest";
import { updateUserInfoAction } from "./updateUserInfo";

const testData = { name: "", image: "" };
const mock = vi.spyOn(auth, "updateUserInfo");

describe("changePassword", () => {
  it("should return false on error", async () => {
    mock.mockRejectedValue(new Error("Some Error"));
    const result = await updateUserInfoAction({ success: false }, testData);
    expect(result.success).toBeFalsy();
  });

  it("should return true on success", async () => {
    mock.mockResolvedValue();
    const result = await updateUserInfoAction({ success: false }, testData);
    expect(result.success).toBeTruthy();
  });
});
