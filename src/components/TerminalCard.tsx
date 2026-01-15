import { motion } from "motion/react";
import { ReactNode } from "react";

export function TerminalCard({ children, title, command, index = 0 }: { children: ReactNode; title?: string; command?: string, index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-8 border border-slate-700 bg-[#0d1117] rounded-md overflow-hidden shadow-xl print:border-none print:shadow-none print:bg-white print:mb-4"
    >
      {/* Terminal Title Bar */}
      <div className="bg-[#161b22] px-4 py-2 border-b border-slate-700 flex items-center gap-2 print:hidden">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-xs text-slate-400 font-mono flex-1 text-center md:text-left">
           {title ? title : 'bash'}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 md:p-6 font-mono text-sm md:text-base relative print:p-0">
        {command && (
          <div className="flex items-center gap-2 mb-4 text-green-400 border-b border-slate-800 pb-2 print:hidden">
            <span className="text-blue-400">➜</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-400">$</span>
            <span className="typing-effect">{command}</span>
          </div>
        )}
        <div className="text-slate-300 print:text-black">
            {children}
        </div>
      </div>
    </motion.div>
  );
}
