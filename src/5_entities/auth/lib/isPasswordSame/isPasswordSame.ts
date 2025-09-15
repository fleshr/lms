import type { RefinementCtx } from "zod";

export const isPasswordSame =
  <T extends object, K extends keyof T = keyof T>(
    passField: K,
    confirmPassField: K,
  ) =>
  (args: T, ctx: RefinementCtx<T>) => {
    if (args[passField] !== args[confirmPassField]) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: [confirmPassField],
      });
    }
  };
