import Link from "next/link";

function BubbleCard({
  title,
  subtitle,
  href,
}: {
  title: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative grid h-[70vh] w-full place-items-center overflow-hidden"
    >
      {/* Ambient hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200/70 blur-3xl" />
      </div>

      <div className="relative">
        {/* Pulse rings */}
        <div className="pointer-events-none absolute inset-0 -m-10 rounded-full border border-neutral-200/80 animate-bubbleRing" />
        <div className="pointer-events-none absolute inset-0 -m-20 rounded-full border border-neutral-200/50 animate-bubbleRingSlow" />

        {/* Main bubble */}
        <div className="relative grid h-72 w-72 place-items-center rounded-full border border-neutral-200 bg-white shadow-[0_30px_90px_-55px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_40px_120px_-70px_rgba(0,0,0,0.55)]">
          {/* Subtle sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white via-white to-neutral-100 opacity-70" />

          {/* Floating highlights */}
          <div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-white/70 blur-2xl animate-bubbleFloat" />
          <div className="pointer-events-none absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-white/50 blur-2xl animate-bubbleFloat2" />

          <div className="relative px-10 text-center">
            <p className="text-xs font-medium tracking-wide text-neutral-500">
              {subtitle}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
              {title}
            </h2>

            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-700">
              View case study
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Selected Projects
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Two focused case studies. Clean visuals, clear decisions, and
          research-informed UI patterns.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50">
            <BubbleCard
              title="Drone Dashboard"
              subtitle="Summer 2025"
              href="/projects/drone-dashboard"
            />
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50">
            <BubbleCard
              title="SFM Dashboard"
              subtitle="Summer 2025"
              href="/projects/sfm-dashboard"
            />
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
