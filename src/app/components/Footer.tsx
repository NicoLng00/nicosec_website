import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a24] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#00ff88]/10 border border-[#00ff88]/30 flex items-center justify-center">
            <Terminal className="w-3 h-3 text-[#00ff88]" />
          </div>
          <span className="text-[#71717a] text-xs font-['JetBrains_Mono']">
            nico<span className="text-[#00ff88]">.sec</span>
          </span>
        </div>

        <p className="text-[#3a3a4a] text-xs font-['JetBrains_Mono']">
          &copy; {new Date().getFullYear()} — Designed & built with purpose and security.
        </p>

        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-[#71717a] text-xs font-['JetBrains_Mono']">
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
