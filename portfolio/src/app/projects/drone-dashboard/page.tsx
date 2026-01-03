import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type VideoItem = {
  src: string;
  title: string;
  caption?: string;
  showControls?: boolean;
};

function VideoCard({
  src,
  title,
  caption,
  showControls = true,
}: VideoItem) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
      <div className="relative aspect-[16/10] w-full">
        <video
          className="h-full w-full object-cover"
          src={src}
          controls={showControls}
          playsInline
          preload="metadata"
        />
      </div>
      <figcaption className="px-4 py-3">
        <p className="text-sm font-semibold text-neutral-900">{title}</p>
        {caption ? <p className="mt-1 text-sm text-neutral-600">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}

export default function DroneDashboardPage() {
  const base = "/projects/drone";

  // HERO VIDEO (replaces hero image)
  const heroVideo = {
    src: `${base}/hero.mp4`,
    label: "Drone Dashboard",
  };

  // OPTIONAL extra videos (2)
  const videos: VideoItem[] = [
    {
      src: `${base}/demo1.mp4`,
      title: "Demo video 1",
      caption: "Drop demo1.mp4 into /public/projects/drone/",
      showControls: true,
    },

  ];

  // Keep the image gallery too (unchanged)
  const gallery: GalleryItem[] = [
    { src: `${base}/img1.png`, alt: "Drone Dashboard screenshot 1" },
    { src: `${base}/img2.png`, alt: "Drone Dashboard screenshot 2" },
    { src: `${base}/img3.png`, alt: "Drone Dashboard screenshot 3" },
    { src: `${base}/img4.png`, alt: "Drone Dashboard screenshot 4" },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-600">Case Study</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              Drone Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-neutral-600">
              UX/UI design for a mission dashboard supporting drone monitoring,
              mission status, and operational clarity.
            </p>
          </div>

          <Link
            href="/projects"
            className="w-fit rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Back to projects
          </Link>
        </div>

        {/* HERO VIDEO */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
          <div className="relative aspect-[16/9] w-full">
            <video
              className="h-full w-full object-cover"
              src={heroVideo.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
          <div className="border-t border-neutral-200 bg-white px-5 py-3">
            <p className="text-sm font-medium text-neutral-700">{heroVideo.label}</p>
            <p className="mt-1 text-xs text-neutral-500">
              Put the file at <span className="font-mono">{heroVideo.src}</span>
            </p>
          </div>
        </div>

        {/* Content blocks */}
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <section className="md:col-span-1">
            <h2 className="text-lg font-semibold">Role</h2>
            <p className="mt-2 text-neutral-600">
              UX/UI Designer — led interface design decisions and iteration.
            </p>

            <h2 className="mt-8 text-lg font-semibold">Tools</h2>
            <ul className="mt-2 space-y-2 text-neutral-600">
              <li>Figma</li>
              <li>Usability checklist / heuristic evaluation</li>
              <li>Survey feedback synthesis</li>
            </ul>
          </section>

          <section className="md:col-span-2">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="mt-2 text-neutral-600">
              This case study highlights key screens, design rationale, and
              iterations. Sensitive details can be blurred/redacted as needed.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Problem</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: describe what operators needed to see quickly and
                  why clarity mattered.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Design Focus</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: hierarchy, status readability, alert salience,
                  and reducing cognitive load.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Key Screens</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: mission overview, map view, alerts, asset status.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold">Outcome</h3>
                <p className="mt-2 text-neutral-600">
                  Placeholder: improved readability, clearer states, better
                  handoff to engineering.
                </p>
              </div>
            </div>

            {/* Extra videos (2) */}
            <h2 className="mt-12 text-lg font-semibold">Videos</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {videos.map((v) => (
                <VideoCard key={v.src} {...v} />
              ))}
            </div>

            {/* Image gallery */}
            <h2 className="mt-12 text-lg font-semibold">Screens</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {gallery.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {item.caption ? (
                    <figcaption className="px-4 py-3 text-sm text-neutral-600">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
