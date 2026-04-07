export default function SignaturesSection() {
  return (
    <section id="signatures" className="py-20 px-6 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-[#38BDF8] text-sm font-semibold uppercase tracking-wider mb-3">
            Acceptance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Partner?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            By signing below, both parties agree to proceed to formal contract negotiation based on
            the terms outlined in this proposal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* MVNE block */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-5">
              For MVNE (Pty) Ltd
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Signatory</p>
                <p className="text-white font-semibold">Yaron Assabi</p>
                <p className="text-white/50 text-sm">Founder &amp; CEO, DSG Group</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Account Contact</p>
                <p className="text-white font-semibold">Edward Wicks</p>
                <p className="text-white/50 text-sm">CCO, MVNE — edwardw@mvne.co.za</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Technical Contact</p>
                <p className="text-white font-semibold">Hugo Mokken</p>
                <p className="text-white/50 text-sm">CTO, MVNE — hugom@mvne.co.za</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <div className="h-12 border-b border-white/20 mb-2" />
                <p className="text-white/40 text-xs">Signature &amp; Date</p>
              </div>
            </div>
          </div>

          {/* Client block */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-5">
              For Centurion and Co
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Authorised Signatory</p>
                <div className="h-7 border-b border-white/20 w-48" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Full Name</p>
                <div className="h-7 border-b border-white/20 w-48" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Title / Role</p>
                <div className="h-7 border-b border-white/20 w-48" />
              </div>
              <div className="pt-6 border-t border-white/10">
                <div className="h-12 border-b border-white/20 mb-2" />
                <p className="text-white/40 text-xs">Signature &amp; Date</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/30 text-xs text-center mt-10 max-w-2xl mx-auto">
          This proposal is valid for 30 days from the date of issue. Acceptance constitutes agreement
          to proceed to formal MSA negotiation only. This document is confidential and intended solely
          for Centurion and Co.
        </p>
      </div>
    </section>
  );
}
