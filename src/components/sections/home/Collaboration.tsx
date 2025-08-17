// src/components/sections/home/Collaboration.tsx
import { partners } from "@/lib/content/home"

export default function Collaboration() {
  return (
    <section className="section">
      <div className="container-max">
        <h3 className="text-sm uppercase tracking-widest text-muted">
          In Collaboration With
        </h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href ?? "#"}
              className="flex items-center justify-center p-4 rounded-lg border border-border bg-card/40 hover:bg-card transition"
            >
              <img src={p.logo} alt={p.name} className="h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
