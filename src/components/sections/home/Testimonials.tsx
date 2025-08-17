// src/components/sections/home/Testimonials.tsx
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import aarav from "@/assets/images/aarav.jpg"
import sharma from "@/assets/images/sharma.jpg"
import kriti from "@/assets/images/kriti.jpg"

export default function Testimonials() {
  const reviews = [
    {
      name: "Aarav Gupta",
      role: "Core Member",
      img: aarav,
      quote:
        "Joining Flux transformed the way I approach technology. From shipping my first live project to presenting at an industry meetup — the mentorship and collaboration here have been game‑changers.",
    },
    {
      name: "Prof. Sharma",
      role: "Faculty Advisor",
      img: sharma,
      quote:
        "Flux is a student‑driven initiative where academic rigor meets creativity and execution. It's inspiring to see our CSE students innovate while staying rooted in industry relevance.",
    },
    {
      name: "Kriti Verma",
      role: "Project Lead",
      img: kriti,
      quote:
        "What sets Flux apart is the culture — you’re not just learning, you’re building alongside peers who push you to aim higher, solve real problems, and think globally.",
    },
  ]

  return (
    <section className="section">
      <div className="container-max">
        <h2 className="headline text-3xl sm:text-4xl">What People Say</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-lg border border-border bg-card/60 p-6 shadow-sm hover:shadow-glow transition-shadow"
            >
              <div className="flex items-center gap-4">
                <LazyLoadImage
                  src={r.img}
                  alt={r.name}
                  width={80} // bigger profile
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{r.name}</h4>
                  <p className="text-sm text-muted-foreground">{r.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                “{r.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
