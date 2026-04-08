import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const commercialModel = [
  {
    phase: "Phase 1",
    title: "MVP Design & Launch Readiness",
    items: [
      "Minimum Viable Customer Launch Proposition",
      "Go-to-Market plan (sales, distribution, CX)",
      "Operating model & technical architecture",
      "Integrated customer experience design",
    ],
  },
  {
    phase: "Phase 2",
    title: "Platform Build & Integration",
    items: [
      "OSS/BSS platform configuration",
      "MNO integration & provisioning",
      "VAS integrations (McAfee, eInsurer, eSIM)",
      "Self-care app / USSD menu build",
    ],
  },
  {
    phase: "Phase 3",
    title: "Launch & Scale",
    items: [
      "Soft launch with controlled subscriber base",
      "CVM and marketing automation activated",
      "24/7 NOC and support desk operational",
      "Monthly business review cadence",
    ],
  },
];

const assumptions = [
  { label: "Target Market", value: "Centurion and Co existing customer base" },
  { label: "Acquisition Rate", value: "7% of addressable base" },
  { label: "ARPU Target", value: "R75 / month" },
  { label: "Churn Rate", value: "30% (managed via CVM)" },
  { label: "Scale Target Y3", value: "~1 million subscribers" },
  { label: "Scale Target Y5", value: "~2 million subscribers" },
];

const invoicing = [
  { milestone: "On Signing", percentage: "50%", description: "Project initiation and platform setup" },
  { milestone: "At Migration", percentage: "25%", description: "Integration and testing complete" },
  { milestone: "At Acceptance", percentage: "25%", description: "Successful go-live and acceptance" },
];

export default function CommercialSection() {
  return (
    <section id="commercial" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-wider">
            Commercial Terms
          </p>
          <div className="accent-bar" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 max-w-2xl">
            A Capital-Light, OPEX-Only Commercial Model
          </h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            MVNE offers a flexible commercial model designed for sustainable growth. No heavy upfront
            infrastructure investment — leverage MVNE&apos;s proven platform on a managed service or
            shared risk basis.
          </p>
        </div>

        {/* Strategic assumptions */}
        <div className="bg-[#0F172A] rounded-2xl p-8 mb-12">
          <h3 className="text-white font-bold text-xl mb-6">Strategic Objectives &amp; Assumptions</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {assumptions.map((a) => (
              <div key={a.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{a.label}</p>
                <p className="text-white font-semibold text-sm">{a.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery phases */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {commercialModel.map((phase, i) => (
            <Card key={phase.phase} className="proposal-card bg-white border border-slate-200">
              <CardContent className="pt-6 pb-6">
                <Badge className="mb-3 bg-[#0369A1]/10 text-[#0369A1] border-0 text-xs">
                  {phase.phase}
                </Badge>
                <h3 className="font-bold text-[#0F172A] mb-4 text-sm">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="text-[#0369A1] font-bold flex-shrink-0">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Invoicing schedule */}
        <div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">Invoicing Schedule</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {invoicing.map((inv) => (
              <div
                key={inv.milestone}
                className="bg-white border border-slate-200 rounded-xl p-6 text-center"
              >
                <p className="text-4xl font-bold text-[#0369A1] mb-2">{inv.percentage}</p>
                <p className="font-semibold text-[#0F172A] text-sm mb-1">{inv.milestone}</p>
                <p className="text-slate-500 text-xs">{inv.description}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            Payment terms: 30 days from invoice date. Detailed pricing provided upon request and
            subject to scope confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
