import { describe, expect, it } from "vitest";
import type { User, UserDto } from "../../model/user";
import { mapUser } from "./mapUser";

const userDto: UserDto = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  image: "https://example.com/image.jpg",
  createdAt: new Date(),
  updatedAt: new Date(),
  emailVerified: false,
};

const user: User = {
  id: userDto.id,
  name: userDto.name,
  email: userDto.email,
  image: userDto.image,
};

describe("mapUser", () => {
  it("should map user", () => {
    const mappedUser = mapUser(userDto);
    expect(mappedUser).toEqual(user);
  });
});
