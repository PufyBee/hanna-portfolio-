import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <div className="mx-auto max-w-5xl px-6 text-sm text-neutral-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Built with Next.js + Tailwind.</p>
          <div className="flex gap-4">
            <a className="hover:text-neutral-900" href={`mailto:${site.links.email}`}>
              Email
            </a>
            <a className="hover:text-neutral-900" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
