import type {
  CourseWithLessonsCount,
  CourseWithProgress,
} from "../model/course";

export const mockedCourses: (CourseWithLessonsCount & CourseWithProgress)[] = [
  {
    id: "1",
    title: "Course 1",
    description: "Course description 1",
    lessonsCount: 10,
    startedLessonsCount: 0,
  },
  {
    id: "2",
    title: "Course 2",
    description: "Course description 2",
    lessonsCount: 20,
    startedLessonsCount: 5,
  },
  {
    id: "3",
    title: "Course 3",
    description: "Course description 3",
    lessonsCount: 15,
    startedLessonsCount: 0,
  },
  {
    id: "4",
    title: "Course 4",
    description: "Course description 4",
    lessonsCount: 5,
    startedLessonsCount: 5,
  },
];
