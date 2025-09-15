import * as auth from "@/entities/auth";
import { routes } from "@/shared/config/routes";
import { redirect, RedirectType } from "next/navigation";
import { describe, expect, it, vi } from "vitest";
import { loginAction } from "./login";

vi.mock("next/navigation");
const redirectMock = vi.mocked(redirect);

const testData = { email: "", password: "" };
const loginMock = vi.spyOn(auth, "login");

describe("login", () => {
  it("should return false on error", async () => {
    loginMock.mockRejectedValue(new Error("Some Error"));
    const result = await loginAction({ success: false }, testData);
    expect(result.success).toBeFalsy();
  });

  it("should return redirect on main page success", async () => {
    loginMock.mockResolvedValue();
    await loginAction({ success: false }, testData);
    expect(redirectMock).toBeCalledWith(routes.main, RedirectType.replace);
  });
});
