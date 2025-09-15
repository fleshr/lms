"use client";

import type { FormAction } from "@/shared/model/formAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm, type FieldValues, type UseFormProps } from "react-hook-form";
import { toast } from "sonner";
import { ZodType } from "zod";

interface UseActionFormProps<T extends FieldValues>
  extends Omit<UseFormProps<T>, "resolver" | "errors" | "formControl"> {
  action: FormAction<T>;
  schema: ZodType<T, FieldValues>;
}

export const useActionForm = <T extends FieldValues>(
  props: UseActionFormProps<T>,
) => {
  const { action, schema, ...restProps } = props;
  const [formState, formAction, isPending] = useActionState(action, {
    success: false,
  });

  const form = useForm({
    resolver: zodResolver(schema),
    errors: formState.errors,
    ...restProps,
  });

  const onSubmit = form.handleSubmit((formData) => {
    startTransition(() => {
      formAction(formData);
    });
  });

  useEffect(() => {
    if (formState.success && formState.message) {
      toast.success(formState.message);
      form.reset();
    }

    if (!formState.success && formState.message) {
      toast.error(formState.message);
    }
  }, [form, formState]);

  return { form, onSubmit, isPending };
};
