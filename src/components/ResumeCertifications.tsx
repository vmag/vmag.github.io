import { resumeData } from "../data/resume";
import { TerminalCard } from "./TerminalCard";

export function ResumeCertifications() {
  return (
    <TerminalCard title="~/certifications" command="ls -la ~/certifications" index={4}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-slate-700 text-slate-500 text-xs uppercase">
                    <th className="py-2 px-2">Permissions</th>
                    <th className="py-2 px-2">Owner</th>
                    <th className="py-2 px-2">Type</th>
                    <th className="py-2 px-2">Name</th>
                </tr>
            </thead>
            <tbody className="font-mono text-sm">
                {resumeData.certifications.map((cert) => (
                    <tr key={cert.id} className="hover:bg-slate-800/30 transition-colors border-b border-slate-800/50 print:border-slate-300">
                        <td className="py-3 px-2 text-slate-500">-rwxr-xr-x</td>
                        <td className="py-3 px-2 text-yellow-500 print:text-black">root</td>
                        <td className="py-3 px-2 text-blue-400 whitespace-nowrap print:text-slate-700">{cert.period}</td>
                        <td className="py-3 px-2">
                            <div className="text-green-300 font-bold print:text-black">{cert.degree}</div>
                            <div className="text-slate-500 text-xs">{cert.institution}</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </TerminalCard>
  );
}
