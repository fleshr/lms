import type { User, UserDto } from "../../model/user";

export const mapUser = (user: UserDto): User => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
  };
};
