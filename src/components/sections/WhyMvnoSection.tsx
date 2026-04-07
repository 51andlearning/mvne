import { Card, CardContent } from "@/components/ui/card";

const dimensions = [
  {
    code: "CVP",
    title: "Customer Value Proposition",
    description: "A value proposition that resonates deeply with your target audience — answering why a customer should choose you over anyone else.",
  },
  {
    code: "Marketing",
    title: "Data-Driven Marketing",
    description: "Scalable, data-driven customer acquisition and retention strategies that leverage your existing brand equity.",
  },
  {
    code: "CV",
    title: "Customer Value Management",
    description: "Maximise ARPU, engagement, and brand lifetime value through AI-driven personalisation and CVM.",
  },
  {
    code: "CX",
    title: "Customer Experience",
    description: "Frictionless, digital-first and emotionally intelligent experiences across every channel.",
  },
  {
    code: "VAS",
    title: "Value-Added Services",
    description: "Smart service bundling that unlocks loyalty and margin — insurance, OTT, eSIM, security, and more.",
  },
];

const advantages = [
  "Non-comparative Proposition",
  "Better Customer Engagement",
  "Greater Customer Insight",
  "Greater Retention",
  "Improved Security",
  "Converged Content Offerings",
  "Core Business Products & Services",
  "Telecoms Products & Services",
];

const marketStats = [
  { value: "$109.9B", label: "Global MVNO market by 2027" },
  { value: "20–40%", label: "ARPU uplift via layered VAS" },
  { value: "3×", label: "Higher LTV with bundled VAS" },
  { value: "40%+", label: "Churn without great CX" },
];

export default function WhyMvnoSection() {
  return (
    <section id="why-mvno" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-wider mb-3">
            Why MVNO
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 max-w-2xl">
            MVNOs Are No Longer Side Projects — They Are Strategic Digital Brands
          </h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Success takes more than network access or a clever app. It takes alignment across five
            key dimensions — and a partner who has done it before.
          </p>
        </div>

        {/* 5 dimensions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {dimensions.map((d) => (
            <Card key={d.code} className="border border-slate-200 bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <span className="inline-block bg-[#0369A1]/10 text-[#0369A1] text-xs font-bold px-2 py-1 rounded mb-3">
                  {d.code}
                </span>
                <h3 className="font-semibold text-[#0F172A] mb-2">{d.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{d.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market stats */}
        <div className="bg-[#0F172A] rounded-2xl p-8 mb-16">
          <h3 className="text-white font-bold text-xl mb-8 text-center">Market Opportunity</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[#38BDF8] text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive advantages */}
        <div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">
            The Underlying Competitive Advantage of an MVNO
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {advantages.map((adv) => (
              <div
                key={adv}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-4 py-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#0369A1] flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
