export default function FooterSection() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-sm">MVNE (Pty) Ltd</p>
          <p className="text-white/40 text-xs mt-1">15 6th Street, Parkhurst, Johannesburg, 2193</p>
          <p className="text-white/40 text-xs">www.mvne.co.za</p>
        </div>
        <p className="text-white/30 text-xs max-w-sm text-right">
          This proposal is strictly confidential. Prepared for Centurion and Co. &copy; {new Date().getFullYear()} MVNE (Pty) Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
