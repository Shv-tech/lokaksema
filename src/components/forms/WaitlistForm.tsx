'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { waitlistSchema, type WaitlistInput } from '@/lib/validators';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<WaitlistInput>({ resolver: zodResolver(waitlistSchema) });

  const onSubmit = handleSubmit(async (data) => {
    await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    setSubmitted(true);
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Input placeholder="Full name" {...register('name')} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>
      <div>
        <Input type="email" placeholder="Work email" {...register('email')} />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>
      <div>
        <Textarea placeholder="Company or affiliation" rows={3} {...register('company')} />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Joining…' : 'Join waitlist'}
      </Button>
      {submitted && <p className="text-sm text-green-400">Thanks! Look out for a confirmation email.</p>}
    </form>
  );
}
