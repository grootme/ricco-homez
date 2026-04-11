'use client';

interface PartnersSectionProps {
  title?: string;
}

const partners = [
  { id: 1, name: 'Zillow', logo: 'Zillow' },
  { id: 2, name: 'Realtor', logo: 'Realtor.com' },
  { id: 3, name: 'Redfin', logo: 'Redfin' },
  { id: 4, name: 'Trulia', logo: 'Trulia' },
  { id: 5, name: 'Homes', logo: 'Homes.com' },
  { id: 6, name: 'Century21', logo: 'Century 21' },
  { id: 7, name: 'Remax', logo: 'RE/MAX' },
  { id: 8, name: 'Coldwell', logo: 'Coldwell Banker' },
  { id: 9, name: 'Keller', logo: 'Keller Williams' },
];

export default function PartnersSection({
  title = "Trusted by the world's best",
}: PartnersSectionProps) {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-gray-400 text-sm uppercase tracking-wider">
          {title}
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* First row - scrolling right */}
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-4 flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-gray-300 hover:text-[#eb6753] transition-colors cursor-pointer whitespace-nowrap">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
