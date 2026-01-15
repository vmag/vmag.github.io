import { resumeData } from "../data/resume";
import { Github, Linkedin, Mail, MapPin, Globe, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function ResumeHeader() {
  const { personalInfo } = resumeData;

  return (
    <div className="relative mb-12">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
            <div className="flex-1">
                <div className="text-green-400 text-sm mb-2 font-mono">
                    Last login: {new Date().toDateString()} from 127.0.0.1
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2 print:text-black">
                    <span className="text-green-500 mr-2 print:text-black">➜</span>
                    {personalInfo.name}
                </h1>
                <div className="text-xl md:text-2xl text-slate-400 font-mono mb-6 border-l-2 border-green-500 pl-4 print:text-slate-600 print:border-black">
                    {personalInfo.title}
                    <span className="animate-blink inline-block w-2 h-6 bg-green-500 ml-2 align-middle print:hidden"></span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400 print:text-slate-600">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-green-400 transition-colors print:text-black">
                        <Mail className="w-4 h-4" /> {personalInfo.email}
                    </a>
                    <div className="flex items-center gap-2 print:text-black">
                        <MapPin className="w-4 h-4" /> {personalInfo.location}
                    </div>
                    {personalInfo.linkedin && (
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors print:text-black">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </a>
                    )}
                    {personalInfo.github && (
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition-colors print:text-black">
                            <Github className="w-4 h-4" /> GitHub
                        </a>
                    )}
                     {personalInfo.website && (
                        <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors print:text-black">
                            <Globe className="w-4 h-4" /> Website
                        </a>
                    )}
                </div>
            </div>
            
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="hidden md:block p-4 border border-green-500/20 rounded bg-green-500/5 backdrop-blur-sm"
            >
                <Terminal className="w-16 h-16 text-green-500 opacity-50" />
            </motion.div>
        </motion.div>
    </div>
  );
}
