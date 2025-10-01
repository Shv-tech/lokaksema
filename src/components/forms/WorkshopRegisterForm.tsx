'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

type WorkshopInput = {
  name: string;
  email: string;
  workshopId: string;
};

const workshops = [
  { id: 'ai-prototyping', label: 'AI Prototyping Lab' },
  { id: 'policy-design', label: 'Inclusive Policy Design' },
  { id: 'hardware', label: 'Climate Hardware Clinic' }
];

export function WorkshopRegisterForm() {
  const { register, handleSubmit, reset, formState } = useForm<WorkshopInput>();

  const onSubmit = handleSubmit(async (data) => {
    await fetch('/api/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input placeholder="Full name" {...register('name')} />
      <Input type="email" placeholder="Email" {...register('email')} />
      <Select defaultValue={workshops[0].id} {...register('workshopId')}>
        {workshops.map((workshop) => (
          <option key={workshop.id} value={workshop.id}>
            {workshop.label}
          </option>
        ))}
      </Select>
      <Button type="submit" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Booking…' : 'Reserve workshop seat'}
      </Button>
    </form>
  );
}
