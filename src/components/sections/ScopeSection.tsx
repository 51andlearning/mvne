import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fullMvnoServices = [
  { title: "SIM Lifecycle Management", items: ["Bulk & individual provisioning", "eSIM & physical SIM support", "SIM swap, replacement, porting", "Real-time inventory management"] },
  { title: "Account Management", items: ["End-user account full lifecycle", "Multi-SIM linkage", "Family & business hierarchies", "GDPR/POPIA compliance"] },
  { title: "Product & Bundling", items: ["Configurable product catalogue", "Voice, data, SMS, bundles", "Dynamic pricing & promotions", "Loyalty integration via open APIs"] },
  { title: "Billing & Finance", items: ["Prepaid & subscription billing", "Automated invoicing", "Revenue recognition & reconciliation", "Integration to financial systems"] },
  { title: "VAS Platform", items: ["SMS/MMS, voicemail, USSD", "WhatsApp integration", "Airtime advance & loyalty", "API-first extensibility"] },
  { title: "Regulatory & Compliance", items: ["Full RICA/eRICA compliance", "Number portability", "Lawful intercept", "Data protection (POPIA/GDPR)"] },
  { title: "OSS/BSS", items: ["Online Charging System (OCS)", "Network Operations Centre", "Enterprise Product Catalogue", "Customisable dashboards"] },
  { title: "Support & Service Desk", items: ["24/7 technical support", "2nd/3rd level support", "Dispute management", "Knowledge base & self-service"] },
];

const mvnoLightServices = [
  { title: "eSIM-First Provisioning", items: ["Digital onboarding", "Physical SIM option", "Rapid activation"] },
  { title: "Digital Self-Service", items: ["App, web & USSD recharge", "Real-time balance", "White-labelled portal"] },
  { title: "Prepaid Billing", items: ["Automated invoicing", "Digital delivery", "Real-time charging"] },
  { title: "Core VAS", items: ["SMS, voicemail, USSD", "WhatsApp integration", "API extensibility"] },
  { title: "Digital CRM", items: ["Real-time analytics", "Segmentation", "Campaign management"] },
  { title: "Digital Support", items: ["Chat, email, knowledge base", "2nd/3rd line escalation", "Digital-first SLA"] },
];

const mvpPackages = [
  { name: "GCT 1.5GB", minutes: "10 MIN", data: "1,536 MB", sms: "20 SMS" },
  { name: "GCT 3GB", minutes: "20 MIN", data: "3,072 MB", sms: "50 SMS" },
  { name: "GCT 5GB", minutes: "30 MIN", data: "5,325 MB", sms: "100 SMS" },
  { name: "GCT 10GB", minutes: "40 MIN", data: "10,445 MB", sms: "200 SMS" },
];

export default function ScopeSection() {
  return (
    <section id="scope" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-wider mb-3">
            Scope of Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 max-w-2xl">
            Two Paths to Market — One Proven Partner
          </h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            MVNE offers both a Full MVNO and a Digital Mobile (MVNO Light) solution. Each path is
            tailored to different levels of investment, operational complexity, and time-to-market
            requirements.
          </p>
        </div>

        <Tabs defaultValue="full" className="mb-16">
          <TabsList className="mb-8 bg-slate-100">
            <TabsTrigger value="full" className="data-[state=active]:bg-[#0369A1] data-[state=active]:text-white">
              Full MVNO
            </TabsTrigger>
            <TabsTrigger value="light" className="data-[state=active]:bg-[#0369A1] data-[state=active]:text-white">
              Digital Mobile (MVNO Light)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="full">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fullMvnoServices.map((service) => (
                <div key={service.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="font-semibold text-[#0F172A] text-sm mb-3">{service.title}</h4>
                  <ul className="space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-[#0369A1] flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="light">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mvnoLightServices.map((service) => (
                <div key={service.title} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="font-semibold text-[#0F172A] text-sm mb-3">{service.title}</h4>
                  <ul className="space-y-1.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-[#0369A1] flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* MVP packages */}
        <div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-2">Illustrative MVP Prepaid Packages</h3>
          <p className="text-slate-500 text-sm mb-6">
            These packages are illustrative and will be refined during the MVP design phase.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left px-5 py-3 rounded-tl-xl font-semibold">Package</th>
                  <th className="text-center px-5 py-3 font-semibold">Minutes/Month</th>
                  <th className="text-center px-5 py-3 font-semibold">Data/Month</th>
                  <th className="text-center px-5 py-3 rounded-tr-xl font-semibold">SMS/Month</th>
                </tr>
              </thead>
              <tbody>
                {mvpPackages.map((pkg, i) => (
                  <tr
                    key={pkg.name}
                    className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}
                  >
                    <td className="px-5 py-3 font-medium text-[#0F172A]">{pkg.name}</td>
                    <td className="px-5 py-3 text-center text-slate-600">{pkg.minutes}</td>
                    <td className="px-5 py-3 text-center text-slate-600">{pkg.data}</td>
                    <td className="px-5 py-3 text-center text-slate-600">{pkg.sms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
