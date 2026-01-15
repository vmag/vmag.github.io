import { resumeData } from "../data/resume";
import { TerminalCard } from "./TerminalCard";

export function ResumeSummary() {
  return (
    <TerminalCard title="about_me.txt" command="cat about_me.txt" index={0}>
      <p className="leading-relaxed text-green-100/90 whitespace-pre-wrap print:text-black">
        {resumeData.personalInfo.summary}
      </p>
    </TerminalCard>
  );
}
