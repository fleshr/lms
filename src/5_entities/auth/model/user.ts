import { auth } from "../config/auth";

export type UserDto = typeof auth.$Infer.Session.user;
export type User = Pick<UserDto, "id" | "name" | "email" | "image">;
