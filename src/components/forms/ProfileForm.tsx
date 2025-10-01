'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export type ProfileInput = {
  name: string;
  title?: string;
  company?: string;
  bio?: string;
};

export function ProfileForm({ defaultValues }: { defaultValues?: ProfileInput }) {
  const { register, handleSubmit, formState } = useForm<ProfileInput>({
    defaultValues
  });

  const onSubmit = handleSubmit(async (data) => {
    await fetch('/api/users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input placeholder="Full name" {...register('name')} />
      <Input placeholder="Role or title" {...register('title')} />
      <Input placeholder="Company" {...register('company')} />
      <Textarea rows={4} placeholder="Short bio" {...register('bio')} />
      <Button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Saving…' : 'Save profile'}
      </Button>
    </form>
  );
}
