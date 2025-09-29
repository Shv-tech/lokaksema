import { Card } from '@/components/ui/Card';

export function CheckInCard() {
  return (
    <Card title="Quick check-in">
      <p className="text-sm text-slate-400">
        Generate QR codes or search attendees to streamline onsite badge printing.
      </p>
      <button className="mt-4 rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400">
        Launch check-in tool
      </button>
    </Card>
  );
}
