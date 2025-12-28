import Image from "next/image";
import Navbar from "@/components/Navbar";
import { site } from "@/content/site";

export default function DroneDashboardPage() {
  const p = site.projects.find((x) => x.slug === "drone-dashboard")!;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm font-medium text-neutral-500">
          {p.role} · {p.timeframe}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {p.title}
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700">{p.oneLiner}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
          >
            Resume
          </a>

          {p.figmaUrl ? (
            <a
              href={p.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              View Figma workspace
            </a>
          ) : (
            <span className="rounded-full bg-neutral-900/10 px-5 py-3 text-sm font-semibold text-neutral-700">
              Figma link (add later)
            </span>
          )}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9]">
            <Image src={p.image} alt={`${p.title} screenshot`} fill className="object-cover" />
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">What Hanna owned</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Visual design system and overall layout</li>
              <li>• Information hierarchy for status, alerts, and mission context</li>
              <li>• UI states and consistency across views</li>
              <li>• Design handoff-ready components (no code)</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">Process</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Wireframes → iteration → polished screens</li>
              <li>• Heuristic review using a usability checklist</li>
              <li>• Feedback synthesis (survey + team input)</li>
              <li>• Refinement for clarity under time pressure</li>
            </ul>
          </section>
        </div>

        <p className="mt-10 text-sm text-neutral-500">
          Selected screen shown. Additional views and design decisions available in the design workspace.
        </p>
      </main>
    </div>
  );
}
