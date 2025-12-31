import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-14 md:grid-cols-12">
          {/* Headshot */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/headshot.jpg"
                alt={`${site.name} headshot`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-7">
            <p className="text-sm font-medium text-neutral-600">
              {site.title} · {site.location}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.name}
            </h1>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-700">
              {site.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group relative overflow-hidden rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white"
              >
                <span className="relative z-10">View projects</span>
                <span className="absolute inset-0 -translate-x-full bg-neutral-700 transition-transform duration-300 group-hover:translate-x-0" />
              </Link>

              <a
                href="/resume.pdf"
                className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition"
              >
                Download resume
              </a>

              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-10 text-sm text-neutral-500 max-w-md">
              Selected UX/UI dashboard case studies focused on mission-critical
              systems and research-driven decisions.
            </p>
          </div>
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
