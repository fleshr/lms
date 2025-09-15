import * as auth from "@/entities/auth";
import { redirect } from "next/navigation";
import { describe, expect, it, vi } from "vitest";
import { logoutAction } from "./logout";

vi.mock("next/navigation");
const redirectMock = vi.mocked(redirect);

const logoutMock = vi.spyOn(auth, "logout");

describe("logout", () => {
  it("should redirect on error", async () => {
    logoutMock.mockRejectedValue(new Error("Some Error"));
    await logoutAction();
    expect(redirectMock).toBeCalled();
  });

  it("should redirect on success", async () => {
    logoutMock.mockResolvedValue();
    await logoutAction();
    expect(redirectMock).toBeCalled();
  });
});
