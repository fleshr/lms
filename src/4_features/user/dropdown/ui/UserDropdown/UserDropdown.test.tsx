import { mockedUser } from "@/entities/auth";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { UserDropdown } from "./UserDropdown";

vi.mock("../../api/logout");

describe("UserDropdown", () => {
  it("should disable logout button on click", async () => {
    const { getByTestId } = render(<UserDropdown user={mockedUser} />);

    const trigger = getByTestId("user-avatar");
    await userEvent.click(trigger);

    const logoutButton = getByTestId("logout-btn");
    expect(logoutButton).not.toHaveAttribute("data-disabled", "");

    await userEvent.click(logoutButton);
    expect(logoutButton).toHaveAttribute("data-disabled", "");
  });
});
