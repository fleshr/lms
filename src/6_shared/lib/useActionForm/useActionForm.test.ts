import { act, renderHook } from "@testing-library/react";
import { toast } from "sonner";
import { describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { useActionForm } from "./useActionForm";

vi.mock("sonner");
const mockedToast = vi.mocked(toast);

const mockedAction = vi.fn();
const testSchema = z.object({ testField: z.string() });

describe("useActionForm", () => {
  it("should call action", async () => {
    mockedAction.mockResolvedValue({ success: false });

    const { result } = renderHook(() =>
      useActionForm({
        action: mockedAction,
        schema: testSchema,
        defaultValues: { testField: "" },
      }),
    );

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(mockedAction).toHaveBeenCalledWith(
      { success: false },
      { testField: "" },
    );
  });

  it("should show toast.success with message on success", async () => {
    mockedAction.mockResolvedValue({ success: true, message: "Success" });

    const { result } = renderHook(() =>
      useActionForm({
        action: mockedAction,
        schema: testSchema,
        defaultValues: { testField: "" },
      }),
    );

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(mockedToast.success).toHaveBeenCalledWith("Success");
  });

  it("should show toast.error with message on error", async () => {
    mockedAction.mockResolvedValue({ success: false, message: "Error" });

    const { result } = renderHook(() =>
      useActionForm({
        action: mockedAction,
        schema: testSchema,
        defaultValues: { testField: "" },
      }),
    );

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(mockedToast.error).toHaveBeenCalledWith("Error");
  });
});
