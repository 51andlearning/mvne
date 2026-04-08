"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const terms = [
  {
    id: "validity",
    title: "Proposal Validity",
    content:
      "This proposal is valid for 30 days from the date of issue. MVNE reserves the right to withdraw or amend this proposal if not accepted within the validity period. Pricing and availability are subject to change after expiry.",
  },
  {
    id: "agreement",
    title: "Agreement & Acceptance",
    content:
      "Acceptance of this proposal constitutes agreement to proceed to formal contract negotiation. A formal Master Services Agreement (MSA) and Statement of Work (SOW) will govern the commercial relationship. This proposal does not constitute a binding contract until both parties have executed the MSA.",
  },
  {
    id: "payment",
    title: "Payment Terms",
    content:
      "All invoices are payable within 30 days of the invoice date. Late payments attract a penalty of 2% per month, compounding monthly, on overdue amounts. MVNE reserves the right to suspend services for accounts more than 60 days overdue.",
  },
  {
    id: "invoicing",
    title: "Invoicing Schedule",
    content:
      "The project is invoiced in three milestones: 50% upon signing of the MSA/SOW, 25% upon completion of integration and migration, and 25% upon successful go-live and client acceptance. Monthly managed service fees are invoiced in advance at the start of each calendar month.",
  },
  {
    id: "pricing",
    title: "Pricing Adjustments",
    content:
      "Pricing is subject to annual CPI-linked adjustments. Any changes to scope, technical requirements, or regulatory obligations that materially affect cost will be subject to a formal change control process and may result in pricing amendments. All prices are exclusive of VAT unless stated otherwise.",
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content:
      "This proposal is strictly confidential and intended solely for Centurion and Co. It may not be shared, reproduced, or disclosed to third parties without prior written consent from MVNE (Pty) Ltd. Both parties agree to treat all shared technical, commercial, and strategic information as confidential.",
  },
  {
    id: "ip",
    title: "Intellectual Property",
    content:
      "MVNE retains ownership of all platform IP, software, and proprietary technology. Client-specific configurations, brand assets, and data remain the property of Centurion and Co. Any jointly developed IP will be subject to separate IP ownership terms in the MSA.",
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content:
      "MVNE's liability under this proposal and any resulting agreement is limited to the fees paid in the 12 months preceding a claim. Neither party shall be liable for indirect, consequential, or punitive damages. Force majeure events, regulatory changes, and MNO network outages are excluded from MVNE's service liability.",
  },
];

export default function TermsSection() {
  return (
    <section id="terms" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-wider">
            Terms &amp; Conditions
          </p>
          <div className="accent-bar" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 max-w-2xl">
            Proposal Terms
          </h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            The following terms govern this proposal and any subsequent engagement. A full Master
            Services Agreement will be provided upon acceptance.
          </p>
        </div>

        <Accordion className="space-y-3">
          {terms.map((term) => (
            <AccordionItem
              key={term.id}
              value={term.id}
              className="border border-slate-200 rounded-xl px-6 data-[state=open]:border-[#0369A1]/40"
            >
              <AccordionTrigger className="text-[#0F172A] font-semibold text-sm py-5 hover:no-underline">
                {term.title}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5">
                {term.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
