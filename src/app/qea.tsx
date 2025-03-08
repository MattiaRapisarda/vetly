import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const QEA = () => (
  <div className="flex justify-center items-center bg-gray-100 p-8"> {/* Rimuovi min-h-screen */}
    <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg flex gap-6 items-start">
      {/* Prima colonna */}
      <Accordion
        className="w-1/2 rounded-md bg-mauve6 shadow-md"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>
            Yes. It is unstyled by default, giving you freedom over the look and feel.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Seconda colonna */}
      <Accordion
        className="w-1/2 rounded-md bg-mauve6 shadow-md"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it customizable?</AccordionTrigger>
          <AccordionContent>
            Absolutely! You can style it however you want.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export default QEA;
