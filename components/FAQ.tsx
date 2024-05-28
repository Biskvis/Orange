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
        
        {/* General Service FAQs */}
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
        <AccordionItem value="item-7">
          <AccordionTrigger>What areas do you serve?</AccordionTrigger>
          <AccordionContent>
            We serve all major cities and towns. For rural or remote areas, please contact us to check availability.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>What are your delivery hours?</AccordionTrigger>
          <AccordionContent>
            Our standard delivery hours are from 8 AM to 8 PM, Monday to Saturday. Special arrangements can be made for deliveries outside these hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger>Do you offer insurance for goods?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer insurance options for your goods. Please discuss with our representative to choose the best coverage for your needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger>How do I fill out the contact form?</AccordionTrigger>
          <AccordionContent>
            Simply enter your name, email address, and message in the respective fields and click on the submit button. Our team will get back to you as soon as possible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger>What happens after I submit the contact form?</AccordionTrigger>
          <AccordionContent>
            After submission, you will receive an acknowledgment email. Our team will review your message and respond within 24-48 hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger>Is my information secure?</AccordionTrigger>
          <AccordionContent>
            Absolutely. We use SSL encryption to ensure that your information is safe and secure. We do not share your data with third parties.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger>Can I edit my message after submitting the form?</AccordionTrigger>
          <AccordionContent>
            Once the form is submitted, you cannot edit your message. However, you can submit a new form with the correct information or contact our support team for assistance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger>What if I don&apos;t receive a response?</AccordionTrigger>
          <AccordionContent>
            If you don&apos;t receive a response within 48 hours, please check your spam/junk folder or contact us directly at our support email.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default FAQ;
