import Link from "next/link";
import { site } from "@/content/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-neutral-900">
          {site.name}
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/projects"
            className="rounded-full px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100"
          >
            Projects
          </Link>

          <a
            href="/resume.pdf"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Resume
          </a>

          <a
            href={`mailto:${site.links.email}`}
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
