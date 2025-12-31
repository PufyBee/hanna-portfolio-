import Link from "next/link";

export default function SFMDashboardPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-neutral-600">Case Study</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              SFM Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-neutral-600">
              UX/UI design supporting situational awareness, alerts, and system
              health monitoring in complex operational environments.
            </p>
          </div>

          <Link
            href="/projects"
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Back to projects
          </Link>
        </div>

        {/* Hero screenshot placeholder */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
          <div className="grid place-items-center px-6 py-24">
            <div className="text-center">
              <p className="text-sm font-medium text-neutral-600">
                Screenshot placeholder
              </p>
              <p className="mt-2 text-neutral-500">
                We’ll drop the hero dashboard image here later.
              </p>
            </div>
          </div>
        </div>

        {/* Content blocks */}
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <section className="md:col-span-1">
            <h2 className="text-lg font-semibold">Role</h2>
            <p className="mt-2 text-neutral-600">
              UX/UI Designer — contributed core layout, components, and
              interaction states.
            </p>

            <h2 className="mt-8 text-lg font-semibold">Tools</h2>
            <ul className="mt-2 space-y-2 text-neutral-600">
              <li>Figma</li>
              <li>Heuristic evaluation</li>
              <li>User feedback synthesis</li>
            </ul>
          </section>

          <section className="md:col-span-2">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-2 text-neutral-600">
              This case study will focus on information hierarchy, clear alert
              severity, and consistent dashboard patterns.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Problem</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: describe the operational context and what
                  “success” looked like for users.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Design Focus</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: readability, consistent states, and fast scanning
                  for high-priority items.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Key Screens</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: overview, alert views, health panels, tables.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Outcome</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: clearer navigation, stronger hierarchy, improved
                  component reuse.
                </p>
              </div>
            </div>

            {/* Gallery placeholders */}
            <h2 className="mt-12 text-lg font-semibold">Screens (placeholder)</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="h-56 rounded-2xl border border-neutral-200 bg-neutral-50 grid place-items-center text-neutral-500">
                Screenshot 1
              </div>
              <div className="h-56 rounded-2xl border border-neutral-200 bg-neutral-50 grid place-items-center text-neutral-500">
                Screenshot 2
              </div>
              <div className="h-56 rounded-2xl border border-neutral-200 bg-neutral-50 grid place-items-center text-neutral-500">
                Screenshot 3
              </div>
              <div className="h-56 rounded-2xl border border-neutral-200 bg-neutral-50 grid place-items-center text-neutral-500">
                Screenshot 4
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
