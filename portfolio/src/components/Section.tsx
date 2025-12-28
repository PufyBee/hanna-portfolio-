import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
