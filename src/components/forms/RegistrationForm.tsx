'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationInput } from '@/lib/validators';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';

const sessionOptions = [
  { id: 'opening-keynote', label: 'Opening Keynote' },
  { id: 'ai-social-good', label: 'AI for Social Good' },
  { id: 'circular-hardware', label: 'Circular hardware lab' }
];

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<RegistrationInput>({ resolver: zodResolver(registrationSchema), defaultValues: { sessions: [] } });

  const onSubmit = handleSubmit(async (data) => {
    await fetch('/api/registrations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input placeholder="Full name" {...register('name')} />
      {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
      <Input type="email" placeholder="Work email" {...register('email')} />
      {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
      <Select {...register('ticketType')} defaultValue="standard">
        <option value="standard">Standard</option>
        <option value="vip">VIP</option>
        <option value="student">Student</option>
      </Select>
      {errors.ticketType && <p className="text-xs text-red-400">{errors.ticketType.message}</p>}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-slate-400">Pick your sessions</p>
        {sessionOptions.map((session) => (
          <label key={session.id} className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" value={session.id} {...register('sessions')} className="rounded border-slate-700" />
            {session.label}
          </label>
        ))}
        {errors.sessions && <p className="text-xs text-red-400">{errors.sessions.message}</p>}
      </div>
      <Textarea rows={3} placeholder="Dietary or accessibility requirements" {...register('notes')} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Processing…' : 'Complete registration'}
      </Button>
    </form>
  );
}

