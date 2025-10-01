'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sponsorApplySchema, type SponsorApplyInput } from '@/lib/validators';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export function SponsorApplyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<SponsorApplyInput>({ resolver: zodResolver(sponsorApplySchema) });

  const onSubmit = handleSubmit(async (data) => {
    await fetch('/api/sponsors/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input placeholder="Company" {...register('company')} />
      {errors.company && <p className="text-xs text-red-400">{errors.company.message}</p>}
      <Input placeholder="Primary contact name" {...register('contactName')} />
      {errors.contactName && <p className="text-xs text-red-400">{errors.contactName.message}</p>}
      <Input type="email" placeholder="Contact email" {...register('email')} />
      {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
      <Select defaultValue="bronze" {...register('tier')}>
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
        <option value="platinum">Platinum</option>
      </Select>
      <Textarea rows={4} placeholder="Tell us about your goals" {...register('message')} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Submit application'}
      </Button>
    </form>
  );
}
