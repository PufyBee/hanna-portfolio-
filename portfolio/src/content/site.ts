export const site = {
  name: "Hanna",
  title: "UI/UX Designer",
  location: "Huntsville, AL",
  bio: [
    "UI/UX designer focused on clear, mission-critical dashboards.",
    "Worked on a PhD-led team designing dashboard interfaces and iterating from feedback."
  ],
  links: {
    email: "heb0018@uah.edu",
    linkedin: "https://www.linkedin.com/in/hannabarnes",
    resumeUrl: "/resume.pdf"
  },
  projects: [
    {
      slug: "drone-dashboard",
      title: "Drone Dashboard",
      timeframe: "Summer 2025",
      role: "UI/UX Designer",
      oneLiner: "Dashboard UI for monitoring drones, mission status, and operational context.",
      image: "/projects/drone-dashboard.png",
      figmaUrl: "" // paste later
    },
    {
      slug: "sfm-dashboard",
      title: "SFM Dashboard",
      timeframe: "Summer 2025",
      role: "UI/UX Designer",
      oneLiner: "Dashboard UI for situational awareness and at-a-glance decision support.",
      image: "/projects/sfm-dashboard.png",
      figmaUrl: "" // paste later
    }
  ]
} as const;
