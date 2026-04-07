import { Badge } from "@/components/ui/badge";

const meta = [
  { label: "Prepared by", value: "MVNE (Pty) Ltd" },
  { label: "Prepared for", value: "Centurion and Co" },
  { label: "Valid for", value: "30 Days" },
  { label: "Date", value: "April 2026" },
];

export default function HeroSection() {
  return (
    <section className="bg-[#0F172A] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Badge className="bg-[#0369A1]/20 text-[#38BDF8] border border-[#0369A1]/40 text-xs font-medium px-3 py-1">
            MVNO Enablement Proposal
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          Innovate, Differentiate &amp; Scale in the Digital Telco Era
        </h1>

        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          A comprehensive MVNO enablement proposal for Centurion and Co — covering full MVNO platform
          services, value-added services, and go-to-market strategy, delivered by MVNE (Pty) Ltd and
          the DSG Group of Companies.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {meta.map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#signatures"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-medium bg-[#0369A1] hover:bg-[#0284C7] text-white transition-colors"
          >
            Accept Proposal
          </a>
          <a
            href="#introduction"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Read Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
