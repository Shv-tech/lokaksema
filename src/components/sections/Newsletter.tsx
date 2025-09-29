'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="text-3xl font-semibold text-white">Stay on top of announcements</h2>
      <p className="mt-2 text-sm text-slate-400">Monthly updates on new speakers, workshops, and partner launches.</p>
      <form
        className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          setEmail('');
        }}
      >
        <Input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full sm:w-72"
        />
        <Button type="submit">Subscribe</Button>
      </form>
      {submitted && <Toast message="Thanks! Look out for our next update." />}
    </section>
  );
}
