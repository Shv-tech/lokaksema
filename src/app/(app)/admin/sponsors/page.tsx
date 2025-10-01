"use client";

import { useEffect, useState, useTransition } from "react";
// IMPORTANT: type-only import so Prisma code is not bundled into the browser
import type { Sponsor } from "@prisma/client";

// If your schema uses an enum `SponsorTier`, don't import it at runtime.
// Just use string literals here to avoid bundling server code.
const TIER_OPTIONS = ["PLATINUM", "GOLD", "SILVER", "BRONZE", "CUSTOM"] as const;

// In case your API returns a subset/superset, keep it tolerant:
type UISponsor = Pick<
  Sponsor,
  "id" | "companyName" | "tier" | "contactName" | "contactEmail" | "websiteUrl" | "createdAt"
> & {
  // Optional extras that might exist in your schema:
  description?: string | null;
  logoUrl?: string | null;
};

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<UISponsor[]>([]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Load sponsors from API (GET /api/sponsors should return JSON array)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/sponsors", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load sponsors (${res.status})`);
        const data: UISponsor[] = await res.json();
        if (mounted) setSponsors(data);
      } catch (e: unknown) {
        if (mounted) setError(e instanceof Error ? e.message : "Failed to load sponsors");
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Create sponsor (POST /api/sponsors expects JSON)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      companyName: String(fd.get("companyName") || ""),
      tier: String(fd.get("tier") || "BRONZE"),
      contactName: String(fd.get("contactName") || ""),
      contactEmail: String(fd.get("contactEmail") || ""),
      websiteUrl: String(fd.get("websiteUrl") || ""),
      // Optional fields if your schema includes them:
      description: fd.get("description") ? String(fd.get("description")) : undefined,
      logoUrl: fd.get("logoUrl") ? String(fd.get("logoUrl")) : undefined,
    };

    // Basic client-side validation to match typical required fields
    if (
      !payload.companyName ||
      !payload.tier ||
      !payload.contactEmail ||
      !payload.contactName
    ) {
      setError("Please fill all required fields.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/sponsors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(text || `Failed to create sponsor (${res.status})`);
        }

        const newSponsor: UISponsor = await res.json();
        setSponsors((prev) => [...prev, newSponsor]);
        e.currentTarget.reset();
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to create sponsor");
      }
    });
  }

  // Delete sponsor (DELETE /api/sponsors/[id])
  async function handleDelete(id: string) {
    setError(null);
    startTransition(async () => {
      try {
        const res = await fetch(`/api/sponsors/${encodeURIComponent(id)}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error(`Failed to delete sponsor (${res.status})`);
        setSponsors((prev) => prev.filter((s) => s.id !== id));
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to delete sponsor");
      }
    });
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Manage Sponsors</h1>

      {error && (
        <div className="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Add Sponsor Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-lg mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g. TechCorp"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Tier <span className="text-red-500">*</span>
            </label>
            <select name="tier" required className="w-full border px-3 py-2 rounded" defaultValue="BRONZE">
              {TIER_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactName"
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="contactEmail"
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="jane@techcorp.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Website URL</label>
            <input
              type="url"
              name="websiteUrl"
              className="w-full border px-3 py-2 rounded"
              placeholder="https://techcorp.com"
            />
          </div>

          {/* Optional fields if present in your schema */}
          <div>
            <label className="block text-sm font-medium mb-1">Logo URL (optional)</label>
            <input
              type="url"
              name="logoUrl"
              className="w-full border px-3 py-2 rounded"
              placeholder="https://cdn.../logo.png"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description (optional)</label>
          <textarea
            name="description"
            className="w-full border px-3 py-2 rounded"
            rows={3}
            placeholder="Brief description of the sponsor"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
          disabled={isPending}
        >
          {isPending ? "Adding..." : "Add Sponsor"}
        </button>
      </form>

      {/* Sponsors List */}
      <div className="space-y-4">
        {sponsors.length === 0 ? (
          <p className="text-gray-600">No sponsors yet.</p>
        ) : (
          sponsors.map((s) => (
            <div
              key={s.id}
              className="flex items-start justify-between bg-white p-4 rounded border"
            >
              <div className="space-y-1">
                <div className="font-semibold">{s.companyName}</div>
                <div className="text-sm text-gray-600">
                  Tier: <span className="font-medium">{s.tier}</span>
                </div>
                {s.websiteUrl && (
                  <div className="text-sm">
                    <a
                      href={s.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-700 underline"
                    >
                      {s.websiteUrl}
                    </a>
                  </div>
                )}
                <div className="text-sm text-gray-600">
                  Contact: {s.contactName} • {s.contactEmail}
                </div>
                {s.description && (
                  <div className="text-sm text-gray-700">{s.description}</div>
                )}
              </div>

              <button
                onClick={() => handleDelete(s.id)}
                className="text-red-600 hover:underline"
                disabled={isPending}
                aria-label={`Delete ${s.companyName}`}
              >
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
