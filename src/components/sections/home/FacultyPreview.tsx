// src/components/home/FacultyPreview.tsx
import SectionCTA from "@/components/sectionCTA";

export default function FacultyPreview() {
  return (
    <section className="section bg-[hsl(var(--card)/0.6)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text + CTA (left on desktop) */}
          <div className="max-w-xl md:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Meet Our Faculty
            </h2>
            <p className="mt-4 text-lg text-neutral-300 leading-relaxed mb-6">
              Under the guidance of our Head of Department, our faculty team blends expertise
              with dedication — shaping the minds of tomorrow through innovation, research,
              and unwavering commitment to excellence.
            </p>
            <div className="mt-6">
              <SectionCTA
                to="/faculty"
                label="View All Faculty →"
                variant="primary"
              />
            </div>
          </div>

          {/* HOD Image (right on desktop) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/faculty/hod.jpg"
              alt="Head of Department"
              className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full shadow-lg border-4 border-neutral-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
