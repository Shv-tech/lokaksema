'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { querySchema, type QueryInput } from '@/lib/validators';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export function QueryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<QueryInput>({ resolver: zodResolver(querySchema) });

  const onSubmit = handleSubmit(async (data) => {
    await fetch('/api/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input placeholder="Name" {...register('name')} />
      {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
      <Input type="email" placeholder="Email" {...register('email')} />
      {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
      <Input placeholder="Subject" {...register('subject')} />
      {errors.subject && <p className="text-xs text-red-400">{errors.subject.message}</p>}
      <Textarea rows={4} placeholder="Message" {...register('message')} />
      {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
