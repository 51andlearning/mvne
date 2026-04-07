import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const businessUnits = [
  {
    name: "CXG",
    focus: "Integrated CX Solutions",
    capabilities: [
      "Omni-channel support (contact centre, social, WhatsApp, SMS, email)",
      "IT service desk & workforce management",
      "CRM and Business Intelligence",
      "Level 2 BBBEE, 25+ years experience",
    ],
  },
  {
    name: "Broadbrand",
    focus: "Marketing as a Service",
    capabilities: [
      "AI-driven strategy & content creation",
      "Digital advertising, SEO/SEM, social CRM",
      "Xanite CVM platform",
      "PersAIc AI persona targeting",
    ],
  },
  {
    name: "Digital Resilience",
    focus: "Cybersecurity Solutions",
    capabilities: [
      "Managed security services",
      "Enterprise and consumer cyber defence",
      "Exclusive McAfee distribution rights in Africa",
      "Risk management & compliance",
    ],
  },
  {
    name: "eInsurer",
    focus: "Cyber Insurance",
    capabilities: [
      "Identity theft protection",
      "Data restoration coverage",
      "Cyberbullying & extortion response",
      "Available as revenue-share VAS",
    ],
  },
  {
    name: "Digital Mall / UFreight",
    focus: "4PL & eCommerce",
    capabilities: [
      "Device sourcing, warehousing & last mile delivery",
      "Full RICA process management",
      "POPIA compliance via optional.me",
      "Turnkey eCommerce platform",
    ],
  },
  {
    name: "MVNE",
    focus: "MVNO Enablement",
    capabilities: [
      "Full MVNO platform: OSS/BSS, OCS, CVM, digital channels",
      "VAS integration (insurance, OTT, eSIM, security)",
      "Commercial viability analysis",
      "MTN Innovation Partner of the Year",
    ],
  },
];

const partners = [
  { name: "Globetom", role: "iPaaS & BSS (TM Forum Open APIs)" },
  { name: "Flolive", role: "IoT / eSIM platform" },
  { name: "Pharos Avantgard", role: "USSD, SMSC, PCRF" },
  { name: "NetEngage", role: "Converged Billing / OCS" },
  { name: "Lumine Group", role: "Global comms software ecosystem ($49B)" },
  { name: "MTN", role: "Host MNO — network agnostic capable" },
];

export default function DsgDifferenceSection() {
  return (
    <section id="dsg-difference" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-wider mb-3">
            The DSG Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 max-w-2xl">
            25 Years of Digital Innovation Across Africa
          </h2>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            The Digital Solutions Group has been in operation for more than 25 years, servicing a
            multitude of customers. We partner with our customers to build comprehensive solutions
            that innovate business relationships and yield mutual return on investment. MVNE is a
            wholly owned subsidiary of DSG — giving Centurion and Co access to a full group of
            complementary capabilities.
          </p>
        </div>

        {/* Business units grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {businessUnits.map((unit) => (
            <Card key={unit.name} className="border border-slate-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#0F172A]">{unit.name}</h3>
                  <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                    {unit.focus}
                  </Badge>
                </div>
                <ul className="space-y-1.5">
                  {unit.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-[#0369A1] mt-0.5 flex-shrink-0">›</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology partners */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="font-bold text-[#0F172A] text-xl mb-6">Technology Partners</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 rounded-lg px-4 py-3">
                <p className="font-semibold text-[#0F172A] text-sm">{p.name}</p>
                <p className="text-slate-500 text-xs mt-0.5">{p.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "13+", label: "Years MVNO enablement" },
            { value: "25+", label: "Years DSG Group" },
            { value: "6", label: "African countries deployed" },
            { value: "100%", label: "MVNO success rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center border border-slate-200 rounded-xl py-5">
              <p className="text-2xl font-bold text-[#0369A1]">{stat.value}</p>
              <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
