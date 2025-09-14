import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is mobile IV therapy safe?",
      answer: "Yes, mobile IV therapy is very safe when administered by licensed healthcare professionals. All our clinicians are licensed RNs and NPs who follow strict safety protocols and use sterile equipment."
    },
    {
      question: "Do you accept insurance?", 
      answer: "We currently don't accept insurance directly, but we can provide receipts for reimbursement. Many HSA and FSA accounts cover our services. Contact your insurance provider to verify coverage."
    },
    {
      question: "Where do you serve?",
      answer: "We provide mobile IV therapy services throughout the greater Phoenix and Scottsdale area. Our service area includes Scottsdale, Phoenix, Tempe, Mesa, Chandler, and surrounding communities."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              FAQs
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/iv-therapy">Book Mobile IV</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
