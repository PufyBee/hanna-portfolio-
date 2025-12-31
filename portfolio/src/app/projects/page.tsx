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
      className="group relative grid place-items-center h-[70vh] w-full overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-neutral-200/70" />
      </div>

      {/* Bubble */}
      <div className="relative">
        {/* Outer pulse rings */}
        <div className="pointer-events-none absolute inset-0 -m-10 rounded-full border border-neutral-200/80 animate-[pulse_3.8s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute inset-0 -m-20 rounded-full border border-neutral-200/50 animate-[pulse_5.2s_ease-in-out_infinite]" />

        {/* Main circle */}
        <div className="relative grid h-72 w-72 place-items-center rounded-full border border-neutral-200 bg-white shadow-[0_30px_90px_-55px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_40px_120px_-70px_rgba(0,0,0,0.55)]">
          {/* Subtle gradient sheen */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white via-white to-neutral-100 opacity-70" />

          {/* Soft moving highlight */}
          <div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-white/70 blur-2xl animate-[float_7s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-white/50 blur-2xl animate-[float2_8.5s_ease-in-out_infinite]" />

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
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Selected Projects
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Two focused case studies. Clean visuals, clear decisions, and
          research-informed UI patterns.
        </p>
      </div>

      {/* Split */}
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
      </div>

      {/* Keyframes (Tailwind arbitrary animation names need these class names to exist)
         We can define them in globals.css too, but this works fine because we’re using arbitrary animations.
      */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(10px, 14px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-12px, -10px);
          }
        }
      `}</style>
    </main>
  );
}
