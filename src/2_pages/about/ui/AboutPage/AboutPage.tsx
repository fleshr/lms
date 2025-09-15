import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import { faq } from "../../config/faq";

export const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-3xl py-16">
      <section>
        <h1 className="text-center text-3xl font-bold">About Our Platform</h1>
        <p className="text-muted-foreground mt-4 text-center text-base">
          This project is a lightweight Learning Management System (LMS) built
          with Next.js. It helps students track their progress, explore new
          courses, and leave reviews.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-center text-2xl font-bold">FAQ</h2>
        <Accordion type="multiple" className="mt-6">
          {faq.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};
