import { Card, CardContent } from "@/components/ui/card";

const vasCategories = [
  {
    icon: "💰",
    title: "Mobile Financial Services",
    description: "Wallets, loans, insurance, and payments via UPay — creating sticky financial entanglement.",
    outcome: "New Revenue",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity & Parental Protection",
    description: "McAfee Safe Family and multi-device security suite. Exclusive Africa distribution rights via Digital Resilience.",
    outcome: "Stickiness",
  },
  {
    icon: "🔐",
    title: "Cyber Insurance (eInsurer)",
    description: "Identity theft, cyberbullying, data loss, ransomware, and mobile wallet fraud coverage — on a revenue-share basis.",
    outcome: "Differentiation",
  },
  {
    icon: "📺",
    title: "Entertainment Bundles",
    description: "OTT streaming, gaming, and digital content bundles that drive daily app engagement.",
    outcome: "Retention",
  },
  {
    icon: "✈️",
    title: "eSIM & Travel Roaming Packs",
    description: "Local and international eSIM in a single app. MVNE is the first provider globally to offer this.",
    outcome: "Differentiation",
  },
  {
    icon: "🎁",
    title: "Loyalty & Cashback",
    description: "Gamified rewards linked to top-ups, purchases, and brand interactions — drives retail synergy.",
    outcome: "Retention",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    description: "Telehealth, fitness, and mental wellbeing services bundled with SIM — ideal for family-centric CVPs.",
    outcome: "New Revenue",
  },
  {
    icon: "💼",
    title: "SME Tools",
    description: "Email, CRM, and invoicing tools bundled for business segments — higher ARPU with enterprise use cases.",
    outcome: "Higher Margins",
  },
];

const globalExamples = [
  { brand: "M-Pesa (Kenya)", highlight: "$900M+ revenue from nano-loans and mobile wallets" },
  { brand: "Jio (India)", highlight: "Bundles OTT to boost retention — Disney+, Netflix, JioCinema" },
  { brand: "DStv Internet", highlight: "Bundles satellite TV and LTE connectivity" },
  { brand: "Tesco Mobile (UK)", highlight: "Health platform bundled with SIMs" },
  { brand: "Verizon Cloud", highlight: "Monetises peace-of-mind with paid backups" },
  { brand: "Telkomsel (Indonesia)", highlight: "Ties loyalty points to top-ups, drives retail synergy" },
];

export default function VasSection() {
  return (
    <section id="vas" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-wider mb-3">
            Value-Added Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 max-w-2xl">
            VAS = Revenue + Differentiation + Retention
          </h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            MVNOs can increase ARPU by 20–40% through layered value-added services. A single VAS can
            be the reason a subscriber stays — or leaves. MVNOs win when they monetise beyond
            connectivity, address lifestyle needs, and build stickiness.
          </p>
        </div>

        {/* VAS grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {vasCategories.map((vas) => (
            <Card key={vas.title} className="bg-white border border-slate-200 hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="text-2xl mb-3">{vas.icon}</div>
                <div className="mb-3">
                  <span className="text-xs font-semibold bg-[#0369A1]/10 text-[#0369A1] px-2 py-0.5 rounded">
                    {vas.outcome}
                  </span>
                </div>
                <h3 className="font-semibold text-[#0F172A] text-sm mb-2">{vas.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{vas.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global examples */}
        <div className="bg-[#0F172A] rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-6">VAS Is a Global Trend</h3>
          <p className="text-white/60 text-sm mb-6">
            How top MVNOs and operators leverage VAS to win:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {globalExamples.map((ex) => (
              <div key={ex.brand} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white font-semibold text-sm mb-1">{ex.brand}</p>
                <p className="text-white/60 text-xs">{ex.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
