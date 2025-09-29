export default function AboutPage() {
return (
<div className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold mb-4">About the Summit</h1>
<p className="text-gray-700 max-w-3xl">Lokasema 2026 brings together global leaders, researchers, ethicists, and innovators to shape the future of artificial intelligence in service of humanity's greatest challenges and opportunities.</p>
<div className="grid md:grid-cols-3 gap-6 mt-8">
{["Collaboration","Inclusion","Responsibility"].map((k)=> (
<div key={k} className="card">
<div className="font-semibold mb-1">{k}</div>
<p className="text-gray-medium">We foster {k.toLowerCase()} across disciplines and geographies.</p>
</div>
))}
</div>
</div>
)
}
