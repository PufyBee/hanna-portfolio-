export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">
        Selected Projects
      </h1>

      <p className="mt-4 max-w-2xl text-neutral-600">
        A selection of UX/UI design work focused on mission-critical dashboards,
        research-driven decisions, and clarity at scale.
      </p>

      <div className="mt-16 space-y-16">
        <section>
          <h2 className="text-2xl font-medium">Drone Operations Dashboard</h2>
          <p className="mt-2 text-neutral-600">
            UX/UI design for real-time drone monitoring and mission oversight.
            Focused on situational awareness, asset status, and operator clarity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-medium">SFM Mission Dashboard</h2>
          <p className="mt-2 text-neutral-600">
            Dashboard design supporting mission tracking, alerts, and system
            health monitoring for complex operational environments.
          </p>
        </section>
      </div>
    </main>
  );
}
