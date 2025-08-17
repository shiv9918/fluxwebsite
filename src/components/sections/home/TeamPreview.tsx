import SectionWrapper from '@/components/SectionWrapper';
import SectionCTA from '@/components/sectionCTA';

export default function TeamPreview() {
  return (
    <SectionWrapper
      title="Meet Our Team"
      description="A glimpse at the people driving Flux forward — blending creativity, tech expertise, and a shared vision for innovation."
      cta={<SectionCTA to="/team" label="Meet the Full Team →" variant="primary" />}
    >
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-32 h-32 bg-card rounded-full" />
        <div className="w-32 h-32 bg-card rounded-full" />
        <div className="w-32 h-32 bg-card rounded-full" />
      </div>
    </SectionWrapper>
  );
}
