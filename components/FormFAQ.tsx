import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'; 

const FAQ = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full md:w-1/2 mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does it take to get a quote?</AccordionTrigger>
          <AccordionContent>
            Our representatives will contact you within 24 hours after you submit the form.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What services do you offer?</AccordionTrigger>
          <AccordionContent>
            We offer a wide range of services including delivery, transport, and logistics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is there a cost for requesting a quote?</AccordionTrigger>
          <AccordionContent>
            No, requesting a quote is completely free. You only pay for the services you choose.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I track my service request?</AccordionTrigger>
          <AccordionContent>
            Once your request is processed, we will provide you with a tracking number that you can use to monitor the status of your service.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Can I change the details of my request after submission?</AccordionTrigger>
          <AccordionContent>
            Yes, you can contact our support team to make changes to your request. Please note that changes may affect the quote.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>What if I need urgent service?</AccordionTrigger>
          <AccordionContent>
            We offer expedited services for urgent requests. Please indicate the urgency in your details or contact us directly for immediate assistance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default FAQ;
