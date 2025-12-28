type Project = {
  title: string;
  timeframe: string;
  role: string;
  team: string;
  tools: string[];
  goal: string;
  highlights: string[];
  outcomes: string[];
  reflection: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">{project.timeframe}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-neutral-900">Role</p>
            <p className="text-sm text-neutral-700">{project.role}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900">Team</p>
            <p className="text-sm text-neutral-700">{project.team}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900">Tools</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm font-medium text-neutral-900">Goal</p>
            <p className="mt-1 text-sm text-neutral-700">{project.goal}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-neutral-900">Highlights</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                {project.highlights.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-900">Outcomes</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                {project.outcomes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-neutral-50 p-4">
            <p className="text-sm font-medium text-neutral-900">Reflection</p>
            <p className="mt-1 text-sm text-neutral-700">{project.reflection}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
