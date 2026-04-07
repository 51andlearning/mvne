import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: "📡",
    title: "End-to-End MVNO Enablement",
    description:
      "Full lifecycle support including SIM provisioning, network integration, billing, customer management, and value-added services.",
  },
  {
    icon: "🔗",
    title: "Seamless VAS Integration",
    description:
      "Robust APIs and workflow automation ensuring real-time data and unified customer experiences across all touchpoints.",
  },
  {
    icon: "⚡",
    title: "Rapid Time-to-Market",
    description:
      "A proven project methodology with a dedicated delivery team that has launched MVNOs across Africa and beyond.",
  },
  {
    icon: "📈",
    title: "Flexible Commercial Models",
    description:
      "Transparent pricing and scalable revenue-share options designed for sustainable growth and capital-light operations.",
  },
];

export default function IntroSection() {
  return (
    <section id="introduction" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-wider mb-3">
            Executive Summary
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 max-w-2xl">
            A Strategic MVNO Partnership for Centurion and Co
          </h2>
          <div className="max-w-3xl space-y-4 text-slate-600 leading-relaxed">
            <p>
              Centurion and Co is embarking on a strategic journey to launch a differentiated{" "}
              <strong className="text-[#0F172A]">Mobile Virtual Network Operator (MVNO)</strong>{" "}
              service, seamlessly integrated within its ecosystem.
            </p>
            <p>
              <strong className="text-[#0F172A]">MVNE (Pty) Ltd</strong>, supported by the{" "}
              <strong className="text-[#0F172A]">DSG Group of Companies</strong>, is honoured to
              submit this comprehensive proposal — offering both a{" "}
              <strong className="text-[#0F172A]">Full MVNO</strong> and{" "}
              <strong className="text-[#0F172A]">Digital Mobile (MVNO Light)</strong> solution. Each
              is designed to meet Centurion and Co&apos;s growth ambitions, regulatory obligations,
              and customer experience objectives.
            </p>
            <p>
              Drawing on over a decade of MVNO enablement experience, a proven technology platform,
              and a track record of successful deployments for leading African brands, MVNE brings an
              end-to-end capability that ensures delivery, agility, and scalability.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <Card key={cap.title} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="font-semibold text-[#0F172A] mb-2 text-sm leading-snug">
                  {cap.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cap.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
