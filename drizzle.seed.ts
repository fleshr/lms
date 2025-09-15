import { courses } from "@/entities/course/model/course.sql";
import { lessons } from "@/entities/lesson/model/lesson.sql";
import { modules } from "@/entities/module/model/module.sql";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export const coursesData = [
  {
    slug: "react-for-beginners",
    title: "React for Beginners",
    description: "Learn the basics of React, from components to hooks.",
    modules: [
      {
        title: "Introduction",
        lessons: [
          "What is React?",
          "Setting up the environment",
          "JSX Basics",
          "Rendering Elements",
          "First Component",
        ],
      },
      {
        title: "Components & Props",
        lessons: [
          "Creating Components",
          "Props Explained",
          "Children Prop",
          "Default Props",
          "Component Composition",
        ],
      },
      {
        title: "State & Events",
        lessons: [
          "useState Hook",
          "Handling Events",
          "Forms and Inputs",
          "Conditional Rendering",
          "Lists and Keys",
          "Lifting State Up",
        ],
      },
    ],
  },
  {
    slug: "nextjs-essentials",
    title: "Next.js Essentials",
    description:
      "Server-ssluge rendering, API routes, and app directory explained.",
    modules: [
      {
        title: "Getting Started",
        lessons: [
          "What is Next.js?",
          "App Directory vs Pages Directory",
          "Project Setup",
          "Development Server",
        ],
      },
      {
        title: "Routing",
        lessons: [
          "File-based Routing",
          "Dynamic Routes",
          "Catch-all Routes",
          "Layouts & Templates",
          "Navigation with Link",
        ],
      },
      {
        title: "Data Fetching",
        lessons: [
          "Server Components",
          "getServerSslugeProps vs getStaticProps",
          "Incremental Static Regeneration",
          "fetch API in Next.js",
          "React Query Integration",
        ],
      },
    ],
  },
  {
    slug: "typescript-fast-track",
    title: "TypeScript Fast Track",
    description:
      "Get comfortable with types, interfaces, and generics in no time.",
    modules: [
      {
        title: "Basics",
        lessons: [
          "Why TypeScript?",
          "Primitive Types",
          "Type Inference",
          "Union & Intersection Types",
          "Type Aliases",
        ],
      },
      {
        title: "Functions & Objects",
        lessons: [
          "Function Types",
          "Optional & Default Params",
          "Interfaces vs Types",
          "Extending Interfaces",
          "Readonly & Partial",
        ],
      },
      {
        title: "Advanced",
        lessons: [
          "Generics",
          "Constraints",
          "Utility Types",
          "Mapped Types",
          "Declaration Merging",
        ],
      },
    ],
  },
  {
    slug: "tailwind-in-practice",
    title: "Tailwind CSS in Practice",
    description: "Build modern, responsive UIs with Tailwind CSS.",
    modules: [
      {
        title: "Getting Started",
        lessons: [
          "What is Tailwind?",
          "Install & Setup",
          "Config File Explained",
          "Applying Classes",
          "Responsive Design",
        ],
      },
      {
        title: "Core Concepts",
        lessons: [
          "Colors & Spacing",
          "Typography",
          "Flexbox Utilities",
          "Grslug Utilities",
          "Pseudo-classes",
        ],
      },
      {
        title: "Advanced Usage",
        lessons: [
          "Custom Themes",
          "Dark Mode",
          "Plugins",
          "Animation Utilities",
          "Best Practices",
        ],
      },
    ],
  },
  {
    slug: "prisma-orm-fundamentals",
    title: "Prisma ORM Fundamentals",
    description: "Database modeling, migrations, and queries made simple.",
    modules: [
      {
        title: "Introduction",
        lessons: [
          "What is Prisma?",
          "Setup Project",
          "Prisma Schema",
          "Running Migrations",
        ],
      },
      {
        title: "Modeling",
        lessons: [
          "Defining Models",
          "Relations",
          "Enums",
          "Indexes",
          "Best Practices",
        ],
      },
      {
        title: "Queries",
        lessons: [
          "CRUD Operations",
          "Filtering & Sorting",
          "Pagination",
          "Nested Queries",
          "Raw SQL",
        ],
      },
    ],
  },
  {
    slug: "fullstack-nextjs-project",
    title: "Fullstack Project with Next.js",
    description:
      "Combine Next.js, Prisma, and Tailwind to build a production-ready app.",
    modules: [
      {
        title: "Setup",
        lessons: [
          "Project Structure",
          "Installing Dependencies",
          "Database Setup with Prisma",
          "Tailwind Config",
        ],
      },
      {
        title: "Backend",
        lessons: [
          "Prisma Client",
          "API Routes",
          "Server Actions",
          "Authentication",
          "Mslugdleware",
        ],
      },
      {
        title: "Frontend",
        lessons: [
          "UI with Tailwind",
          "Forms with React Hook Form",
          "Fetching Data",
          "Mutations",
          "Global State with Zustand",
        ],
      },
      {
        title: "Deployment",
        lessons: [
          "Vercel Deployment",
          "Database Hosting",
          "Env Variables",
          "Optimizations",
        ],
      },
    ],
  },
];

const client = new Pool({
  connectionString: process.env.DATABASE_URL ?? "",
});
const db = drizzle(client);

async function seed() {
  console.log("🌱 Seeding database...");

  await db.delete(lessons);
  await db.delete(modules);
  await db.delete(courses);

  for (const course of coursesData) {
    const [newCourse] = await db
      .insert(courses)
      .values({
        id: course.slug,
        title: course.title,
        description: course.description,
      })
      .returning();

    if (!newCourse) {
      continue;
    }

    let lessonIndex = 1;
    for (const mod of course.modules) {
      const [newModule] = await db
        .insert(modules)
        .values({
          courseId: newCourse.id,
          title: mod.title,
        })
        .returning();

      if (!newModule) {
        continue;
      }

      await db.insert(lessons).values(
        mod.lessons.map((lessonTitle) => ({
          order: lessonIndex++,
          moduleId: newModule.id,
          title: lessonTitle,
          content: `Content for ${lessonTitle}`,
        })),
      );
    }
  }

  console.log("✅ Seed complete");
}

seed()
  .catch((e: unknown) => {
    console.error(e);
  })
  .finally(() => {
    void client.end();
  });
