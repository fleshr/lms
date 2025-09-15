"use client";

import { UpdateUserInfoDtoSchema, type User } from "@/entities/auth";
import { useActionForm } from "@/shared/lib/useActionForm";
import { Button } from "@/shared/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/Form";
import { Input } from "@/shared/ui/Input";
import { updateUserInfoAction } from "../../api/updateUserInfo";

interface UpdateUserInfoFormProps {
  user: User;
}

export const UpdateUserInfoForm = (props: UpdateUserInfoFormProps) => {
  const { user } = props;
  const { form, onSubmit, isPending } = useActionForm({
    action: updateUserInfoAction,
    schema: UpdateUserInfoDtoSchema,
    values: {
      name: user.name,
      image: user.image ?? "",
    },
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-2" type="submit" disabled={isPending}>
          Update
        </Button>
      </form>
    </Form>
  );
};
