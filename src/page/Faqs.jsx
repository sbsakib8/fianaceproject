import {Accordion, AccordionItem} from "@nextui-org/react";
import Faqsdata from "../data/FAQS/Faqsdata";
 function Faqs() {
  

  return (
    <Accordion>
      {
        Faqsdata.map((faq, index) => (
          <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={faq.question}>
            {faq.answer}
          </AccordionItem>
        ))
      }
      
    </Accordion>
  );
}
export default Faqs;