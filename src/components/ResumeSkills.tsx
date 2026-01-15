import { resumeData } from "../data/resume";
import { TerminalCard } from "./TerminalCard";

export function ResumeSkills() {
  return (
    <TerminalCard title="skills.json" command="jq .skills skills.json" index={1}>
      <div className="grid grid-cols-1 gap-6">
        {resumeData.skills.map((skillGroup, index) => (
          <div key={index} className="bg-slate-900/50 p-4 rounded border border-slate-800 hover:border-green-500/50 transition-colors print:bg-white print:border-slate-300">
            <div className="text-cyan-400 font-bold mb-3 flex items-baseline gap-2 print:text-black">
                <span className="text-slate-600 print:text-slate-400 shrink-0 text-sm">const</span>
                <span className="leading-tight">{skillGroup.category}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="px-2 py-1 text-xs md:text-sm bg-slate-800 text-green-300 rounded border border-slate-700 font-mono hover:bg-green-900/30 hover:text-green-200 cursor-default print:bg-white print:text-black print:border-slate-300">
                  "{item}"
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalCard>
  );
}
