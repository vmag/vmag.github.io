import { resumeData } from "../data/resume";
import { TerminalCard } from "./TerminalCard";
import { ExternalLink, Folder } from "lucide-react";

export function ResumeProjects() {
  if (!resumeData.projects || resumeData.projects.length === 0) return null;

  return (
    <TerminalCard title="projects" command="./list_projects.sh" index={4}>
      <div className="grid grid-cols-1 gap-6">
        {resumeData.projects.map((project) => (
          <div key={project.id} className="group border border-slate-800 bg-slate-900/30 p-4 rounded hover:border-green-500 hover:bg-slate-900/50 transition-all print:bg-white print:border-slate-300">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-400 group-hover:text-green-400 transition-colors print:text-black" />
                    <h3 className="text-lg font-bold text-green-100 group-hover:text-green-400 transition-colors print:text-black">{project.name}</h3>
                </div>
                 {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-400 transition-colors print:text-black">
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>
            
            <p className="text-slate-400 text-sm mb-4 pl-6 border-l border-slate-800 group-hover:border-green-500/30 transition-colors print:text-slate-800 print:border-slate-300">
                {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pl-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs text-yellow-500/80 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20 print:bg-white print:text-black print:border-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TerminalCard>
  );
}
