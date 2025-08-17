import SectionWrapper from '@/components/SectionWrapper';
import SectionCTA from '@/components/sectionCTA';

export default function EventsPreview() {
  return (
    <SectionWrapper
      title="Upcoming Events"
      description="Stay in the loop with our latest workshops, meetups, and tech festivals designed to spark your curiosity."
      cta={<SectionCTA to="/events" label="View All Events →" variant="primary" />}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-card rounded-md shadow">
          <h3 className="font-semibold mb-2">Hackathon 2025</h3>
          <p className="text-sm text-muted-foreground">Aug 28 – 29</p>
        </div>
        <div className="p-6 bg-card rounded-md shadow">
          <h3 className="font-semibold mb-2">AI Workshop</h3>
          <p className="text-sm text-muted-foreground">Sep 5</p>
        </div>
         <div className="p-6 bg-card rounded-md shadow">
          <h3 className="font-semibold mb-2">Alumni Meet</h3>
          <p className="text-sm text-muted-foreground">Oct 14</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
