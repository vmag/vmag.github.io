import { resumeData } from "../data/resume";
import { TerminalCard } from "./TerminalCard";

export function ResumeEducation() {
  return (
    <TerminalCard title="education.txt" command="cat ~/education.txt" index={3}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-slate-700 text-slate-500 text-xs uppercase">
                    <th className="py-2 px-2">Permissions</th>
                    <th className="py-2 px-2">Owner</th>
                    <th className="py-2 px-2">Status</th>
                    <th className="py-2 px-2">Details</th>
                </tr>
            </thead>
            <tbody className="font-mono text-sm">
                {resumeData.education.map((edu) => (
                    <tr key={edu.id} className="hover:bg-slate-800/30 transition-colors border-b border-slate-800/50 print:border-slate-300">
                        <td className="py-3 px-2 text-slate-500">-r--r--r--</td>
                        <td className="py-3 px-2 text-yellow-500 print:text-black">root</td>
                        <td className="py-3 px-2 text-blue-400 whitespace-nowrap print:text-slate-700">{edu.period}</td>
                        <td className="py-3 px-2">
                            <div className="text-green-300 font-bold print:text-black">{edu.degree}</div>
                            <div className="text-slate-500 text-xs">{edu.institution}</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </TerminalCard>
  );
}
