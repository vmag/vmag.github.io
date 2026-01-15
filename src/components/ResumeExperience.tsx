import { resumeData } from "../data/resume";
import { TerminalCard } from "./TerminalCard";

export function ResumeExperience() {
  return (
    <TerminalCard title="system.log" command="tail -n 10 /var/log/experience" index={2}>
      <div className="space-y-8 font-mono">
        {resumeData.experience.map((job) => (
          <div key={job.id} className="relative pl-6 border-l border-slate-700 hover:border-green-500/50 transition-colors group print:border-l-2 print:border-slate-300">
            <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-slate-700 group-hover:bg-green-500 transition-colors print:hidden"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <div>
                    <span className="text-yellow-400 font-bold print:text-black">root@job:{job.id}</span>
                    <span className="text-slate-500 mx-2">/</span>
                    <span className="text-green-400 font-bold print:text-black">{job.role}</span>
                </div>
                <span className="text-slate-500 text-sm whitespace-nowrap bg-slate-800 px-2 py-0.5 rounded print:bg-transparent print:border print:border-slate-300">[{job.period}]</span>
            </div>
            
            <div className="text-purple-400 text-sm mb-3 print:text-slate-700">@ {job.company}</div>
            
            <div className="text-slate-400 mb-4 text-sm md:text-base border-l-2 border-slate-800 pl-4 italic print:text-slate-800 print:border-slate-300">
                # {job.description}
            </div>
            
            {job.achievements && (
              <div className="space-y-1">
                {job.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-2 text-sm text-slate-300 print:text-slate-700">
                    <span className="text-green-500 print:text-black">➜</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </TerminalCard>
  );
}
