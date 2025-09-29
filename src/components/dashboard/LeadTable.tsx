import { Table } from '@/components/ui/Table';

const leads = [
  ['Asha Mehta', 'Innovate Labs', 'VIP'],
  ['Luis Ferreira', 'SolarMesh', 'Standard'],
  ['Nandini Rao', 'CivicStack', 'Student'],
  ['Kimani Waweru', 'UbuntuGrid', 'VIP']
];

export function LeadTable() {
  return <Table headers={['Name', 'Organisation', 'Ticket']} rows={leads.map((lead) => lead.map((value) => value))} />;
}
