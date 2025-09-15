import * as auth from "@/entities/auth";
import * as progress from "@/entities/progress";
import { revalidatePath } from "next/cache";
import { describe, expect, it, vi } from "vitest";
import { completeLessonAction } from "./completeLesson";

vi.mock("next/cache");
const revalidatePathMock = vi.mocked(revalidatePath);

const getUserMock = vi.spyOn(auth, "getUser");
const addProgressMock = vi.spyOn(progress, "addProgress");
const getProgressMock = vi.spyOn(progress, "getProgress");

describe("completeLesson", () => {
  it("should return true if lessson is already complete", async () => {
    const result = await completeLessonAction(true, "1");
    expect(result).toBeTruthy();
  });

  it("should return false if user is not authenticated", async () => {
    getUserMock.mockResolvedValue(undefined);

    const result = await completeLessonAction(false, "1");
    expect(result).toBeFalsy();
  });

  it("should return true if progress already exists", async () => {
    getUserMock.mockResolvedValue(auth.mockedUser);
    getProgressMock.mockResolvedValue(progress.mockedProgress);

    const result = await completeLessonAction(false, "1");
    expect(result).toBe(true);
  });

  it("should return true on successful lessson completion", async () => {
    getUserMock.mockResolvedValue(auth.mockedUser);
    getProgressMock.mockResolvedValue(undefined);
    addProgressMock.mockResolvedValue();

    const result = await completeLessonAction(false, "1");
    expect(revalidatePathMock).toHaveBeenCalled();
    expect(result).toBe(true);
  });

  it("should return false on lessson completion error", async () => {
    getUserMock.mockResolvedValue(auth.mockedUser);
    getProgressMock.mockResolvedValue(undefined);
    addProgressMock.mockRejectedValue(new Error());

    const result = await completeLessonAction(false, "1");
    expect(revalidatePathMock).not.toHaveBeenCalled();
    expect(result).toBe(false);
  });
});
