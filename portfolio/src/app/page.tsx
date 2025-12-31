import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Headshot */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/headshot.jpg"
                alt={`${site.name} headshot`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-7">
            <p className="text-sm font-medium text-neutral-600">
              {site.title} · {site.location}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.name}
            </h1>

            <div className="mt-4 space-y-3 text-base leading-relaxed text-neutral-700">
              {site.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {/* COOL BUTTON */}
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
              >
                {/* subtle sheen */}
                <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute -left-1/2 top-0 h-full w-[200%] -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-30%] group-hover:translate-x-[30%] transition-transform duration-700" />
                </span>

                {/* content */}
                <span className="relative inline-flex items-center">
                  View projects
                  <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>

              <a
                href="/resume.pdf"
                className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                Download resume
              </a>

              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-10 text-sm text-neutral-500">
              Two selected dashboard projects below.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {site.projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <p className="text-sm font-medium text-neutral-500">
                    {p.timeframe}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-neutral-900">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">{p.oneLiner}</p>
                  <p className="mt-4 text-sm font-semibold text-neutral-900">
                    View project{" "}
                    <span className="ml-1 inline-block transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
