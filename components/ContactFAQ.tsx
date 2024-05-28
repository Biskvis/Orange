import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'; 

const ContactFAQ = () => (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Form FAQs</h2>
        <Accordion type="single" collapsible className="w-full md:w-1/2 mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I fill out the contact form?</AccordionTrigger>
            <AccordionContent>
              Simply enter your name, email address, and message in the respective fields and click on the submit button. Our team will get back to you as soon as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What happens after I submit the contact form?</AccordionTrigger>
            <AccordionContent>
              After submission, you will receive an acknowledgment email. Our team will review your message and respond within 24-48 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is my information secure?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We use SSL encryption to ensure that your information is safe and secure. We do not share your data with third parties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I edit my message after submitting the form?</AccordionTrigger>
            <AccordionContent>
              Once the form is submitted, you cannot edit your message. However, you can submit a new form with the correct information or contact our support team for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What if I don&apos;t receive a response?</AccordionTrigger>
            <AccordionContent>
              If you don&apos;t receive a response within 48 hours, please check your spam/junk folder or contact us directly at our support email.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
  
  export default ContactFAQ;
  
