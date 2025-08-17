// src/components/home/ContactPreview.tsx
import SectionWrapper from "@/components/SectionWrapper";
import SectionCTA from "@/components/sectionCTA";

export default function ContactPreview() {
  return (
    <SectionWrapper
      title="Get in Touch"
      description="Have questions, ideas, or just want to say hi? We’d love to hear from you."
      cta={
        <SectionCTA
          to="/contact"
          label="Go to Contact Page →"
          variant="primary"
        />
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-background/50 border border-border shadow-sm">
            <p className="font-semibold text-lg mb-1">Email</p>
            <a
              href="mailto:contact@fluxsociety.com"
              className="text-primary hover:underline break-all"
            >
              contact@fluxsociety.com
            </a>
          </div>
          <div className="p-6 rounded-lg bg-background/50 border border-border shadow-sm">
            <p className="font-semibold text-lg mb-1">Location</p>
            <p className="text-muted-foreground">
              MMM University of Technology, Gorakhpur, Uttar Pradesh
            </p>
          </div>
        </div>

        {/* Google Map Embed */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=26.73056,83.43333"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
        >
          <iframe
            title="MMMUT Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14247.976!2d83.43333!3d26.73056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915c5f6b2b2b2b%3A0xabcdef123456789!2sMMM%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </a>
      </div>
    </SectionWrapper>
  );
}
