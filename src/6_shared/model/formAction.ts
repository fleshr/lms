import type { FormState } from "./formState";

export type FormAction<T extends object, S = FormState<T>> = (
  _prevState: S,
  data: T,
) => Promise<S>;
