import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { completeLessonAction } from "../../api/completeLesson";
import { CompleteLessonUser } from "./CompleteLessonUser";

vi.mock("../../api/completeLesson");
const mock = vi.mocked(completeLessonAction);

describe("completeLesson", () => {
  it("should call completeLessonAction on click with correct params", async () => {
    const { getByText } = render(
      <CompleteLessonUser lessonId="1" isCompleted={false} />,
    );

    const button = getByText("Mark as complete");

    await act(async () => {
      await userEvent.click(button);
    });

    expect(mock).toHaveBeenCalledWith(false, "1");
  });

  it("should display complete text after success action", async () => {
    mock.mockResolvedValue(true);

    const { getByText, queryByText } = render(
      <CompleteLessonUser lessonId="1" isCompleted={false} />,
    );

    const button = getByText("Mark as complete");
    await act(async () => {
      await userEvent.click(button);
    });

    const text = queryByText("You have complete this lesson");
    expect(button).not.toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("should display button instead of text after action failure", async () => {
    mock.mockResolvedValue(false);

    const { getByText, queryByText } = render(
      <CompleteLessonUser lessonId="1" isCompleted={false} />,
    );

    const button = getByText("Mark as complete");
    await act(async () => {
      await userEvent.click(button);
    });

    const text = queryByText("You have complete this lesson");
    expect(button).toBeInTheDocument();
    expect(text).not.toBeInTheDocument();
  });
});
