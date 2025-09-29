import { Card } from '@/components/ui/Card';
// ...existing code...
import { buildMetric } from '@/lib/analytics'
// ...existing code...

// Computes the conversion rate as a percentage, rounded to 1 decimal place
function computeConversionRate(leads: number, registrations: number): number {
  if (leads === 0) return 0;
  return Math.round((registrations / leads) * 1000) / 10;
}

const data = {
  leads: 1280,
  registrations: 864,
  checkIns: 742
};

export function Kpis() {
  const metrics = [
    buildMetric('Waitlist leads', data.leads, 980),
    buildMetric('Confirmed registrations', data.registrations, 720),
    buildMetric('Onsite check-ins', data.checkIns, 0)
  ];

  const conversion = computeConversionRate(data.leads, data.registrations);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} title={metric.label} description={"Change % vs last period"}>
          <p className="text-3xl font-semibold text-white">{metric.value.toLocaleString()}</p>
        </Card>
      ))}
      <Card title="Lead → Registration" description="Conversion rate">
        <p className="text-3xl font-semibold text-white">{conversion}%</p>
      </Card>
    </div>
  );
}
