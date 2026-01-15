import { ResumeHeader } from "./components/ResumeHeader";
import { ResumeSummary } from "./components/ResumeSummary";
import { ResumeSkills } from "./components/ResumeSkills";
import { ResumeExperience } from "./components/ResumeExperience";
import { ResumeEducation } from "./components/ResumeEducation";
import { ResumeCertifications } from "./components/ResumeCertifications";
import { ResumeProjects } from "./components/ResumeProjects";
import { Button } from "./components/ui/button";
import { Printer } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-300 font-mono selection:bg-green-900 selection:text-green-100 overflow-x-hidden pb-20">
      
      {/* Matrix/Scanline Overlay */}
      <div className="scanlines"></div>
      
      {/* Print Button (Floating) */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden">
         <Button 
            onClick={() => window.print()} 
            className="bg-green-600 hover:bg-green-500 text-white rounded-full h-14 w-14 shadow-lg shadow-green-900/50 border border-green-400 flex items-center justify-center"
         >
            <Printer className="w-6 h-6" />
         </Button>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20">
        <ResumeHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
                <ResumeSummary />
            </div>
            
            <div className="lg:col-span-8 space-y-8">
                <ResumeExperience />
                <ResumeProjects />
                <ResumeEducation />
                <ResumeCertifications />
            </div>
            
            <div className="lg:col-span-4 space-y-8">
                <ResumeSkills />
            </div>
        </div>
        
        <footer className="mt-20 text-center text-xs text-slate-600 border-t border-slate-800 pt-8">
            <p>
                <span className="text-green-500">root@resume</span>:
                <span className="text-blue-400">~</span>$ exit 0
            </p>
            <p className="mt-2">© {new Date().getFullYear()} Virginijus Magelinskas. Built with React & Tailwind.</p>
        </footer>
      </main>

      {/* Print Styles Overlay (Only visible when printing) - REMOVED */}
    </div>
  );
}
