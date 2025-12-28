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
              <Link
                href="/projects"
                className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                View projects
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
                  className="group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <p className="text-sm font-medium text-neutral-500">{p.timeframe}</p>
                  <p className="mt-1 text-lg font-semibold text-neutral-900">{p.title}</p>
                  <p className="mt-2 text-sm text-neutral-700">{p.oneLiner}</p>
                  <p className="mt-4 text-sm font-semibold text-neutral-900">
                    View project <span className="ml-1 group-hover:translate-x-0.5 inline-block transition">→</span>
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
