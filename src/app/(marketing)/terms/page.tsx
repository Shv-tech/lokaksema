import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Participation and platform terms for Lokaksema 2026.'
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 space-y-4 text-sm text-slate-300">
      <h1 className="text-3xl font-semibold text-white">Terms</h1>
      <p>By participating in Lokaksema 2026, you agree to uphold our community guidelines and use the platform responsibly.</p>
      <p>Highlights:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Tickets are non-transferable without organiser approval.</li>
        <li>Recording of closed-door sessions is prohibited.</li>
        <li>All sponsorship activations must align with our sustainability charter.</li>
      </ul>
    </div>
  );
}
