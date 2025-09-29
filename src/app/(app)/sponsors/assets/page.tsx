import type { Metadata } from 'next';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Sponsor Assets',
  description: 'Upload creative assets and collateral.'
};

export default function SponsorAssetsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Upload assets</h1>
      <form className="rounded-2xl border border-slate-900/60 bg-slate-950/60 p-6 space-y-4">
        <Input placeholder="Asset title" required />
        <input type="file" className="text-sm text-slate-300" />
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
}
