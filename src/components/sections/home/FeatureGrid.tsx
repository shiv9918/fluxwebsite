// src/components/sections/home/ValueCards.tsx
import { Briefcase, Code, Users } from "lucide-react" // Example icons

export default function ValueCards() {
  const values = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Industry Exposure",
      desc: "Engage with top technologists, thought leaders, and global conferences.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Hands‑On Projects",
      desc: "Work on real applications that make an impact inside and beyond campus.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaborative Learning",
      desc: "Build skills in squads, share ideas, and grow with a driven peer network.",
    },
  ]

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-lg border border-border bg-card/60 p-6 shadow-sm hover:shadow-glow transition-shadow"
          >
            {v.icon}
            <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
