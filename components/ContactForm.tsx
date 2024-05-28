'use client'

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';


const quoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  details: z.string().min(1, "Details are required"),
});

type ContactFormData = z.infer<typeof quoteSchema>;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (values) => {
    console.log(values);
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label className="block text-gray-700">Name</Label>
              <Input
                type="text"
                {...register('name')}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder='Contact Name'
              />
              {errors.name?.message && typeof errors.name.message === 'string' && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <Label className="block text-gray-700">Email</Label>
              <Input
                type="email"
                {...register('email')}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder='Contact Email'
              />
              {errors.email?.message && typeof errors.email.message === 'string' && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <Label className="block text-gray-700">Message</Label>
              <Textarea
                {...register('details')}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                rows={4}
                placeholder='Message'
              />
              {errors.details?.message && typeof errors.details.message === 'string' && (
                <span className="text-red-500">{errors.details.message}</span>
              )}
            </div>
            <Button className='w-full hover:scale-110' type='submit'>Submit</Button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Thank you!</h3>
            <p className="mt-2 text-gray-700">Your question has been submitted. We will get back to you soon.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
