import * as auth from "@/entities/auth";
import { routes } from "@/shared/config/routes";
import { redirect, RedirectType } from "next/navigation";
import { describe, expect, it, vi } from "vitest";
import { registerAction } from "./register";

vi.mock("next/navigation");
const redirectMock = vi.mocked(redirect);

const testData = { email: "", password: "", name: "", confirmPassword: "" };
const registerMock = vi.spyOn(auth, "register");

describe("register", () => {
  it("should return false on error", async () => {
    registerMock.mockRejectedValue(new Error("Some Error"));
    const result = await registerAction({ success: false }, testData);
    expect(result.success).toBeFalsy();
  });

  it("should return redirect on main page success", async () => {
    registerMock.mockResolvedValue();
    await registerAction({ success: false }, testData);
    expect(redirectMock).toBeCalledWith(routes.main, RedirectType.replace);
  });
});
