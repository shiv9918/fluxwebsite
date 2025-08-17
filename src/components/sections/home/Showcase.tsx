// src/components/sections/home/WhatWeBuild.tsx
import { Code, Rocket, Users } from "lucide-react"

export default function WhatWeBuild() {
  const items = [
    {
      icon: <Rocket className="w-7 h-7 text-primary" />,
      title: "Innovation-First Projects",
      desc: "From AI tools to open-source contributions, we build tech that matters.",
    },
    {
      icon: <Code className="w-7 h-7 text-primary" />,
      title: "Real-World Skills",
      desc: "Master cutting-edge frameworks, tools, and workflows through practice.",
    },
    {
      icon: <Users className="w-7 h-7 text-primary" />,
      title: "Team-Driven Development",
      desc: "Collaborate across squads, share knowledge, and create lasting impact.",
    },
  ]

  return (
    <section className="section">
      <div className="container-max">
        <h2 className="headline text-3xl sm:text-4xl">What We Build</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card/60 p-6 shadow-sm hover:shadow-glow transition-shadow"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
