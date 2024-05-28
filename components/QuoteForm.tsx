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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Service is required"),
  details: z.string().min(1, "Details are required"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit: SubmitHandler<QuoteFormData> = (values) => {
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
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Get a Quote</h2>
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
              <Label className="block text-gray-700">Service</Label>
              <Select onValueChange={(value) => setValue('service', value)}>
                <SelectTrigger className="w-full p-2 border border-gray-300 rounded mt-1">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="logistics">Logistics</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.service?.message && typeof errors.service.message === 'string' && (
                <span className="text-red-500">{errors.service.message}</span>
              )}
            </div>
            <div>
              <Label className="block text-gray-700">Details</Label>
              <Textarea
                {...register('details')}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                rows={4}
                placeholder='Details'
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
            <p className="mt-2 text-gray-700">Your request has been submitted. We will get back to you soon.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default QuoteForm;
