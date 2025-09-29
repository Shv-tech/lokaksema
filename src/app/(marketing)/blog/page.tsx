export default function BlogPage() {
return (
<div className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold mb-4">News & Insights</h1>
<p className="text-gray-700">Thought leadership and updates will appear here.</p>
<div className="grid md:grid-cols-3 gap-6 mt-8">
{[1,2,3].map(i=> (
<article key={i} className="card">
<div className="font-semibold">Post Title {i}</div>
<p className="text-gray-medium">Short description for the article. Coming soon.</p>
</article>
))}
</div>
</div>
)
}