import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, LineChart, FileText } from 'lucide-react';

export default function AIMentor() {
  return (
    <section id="mentorship" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Chat UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl -z-10"></div>
          
          <div className="glass-card rounded-[2rem] border border-white/50 dark:border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-3xl bg-white/40 dark:bg-slate-900/40">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center p-0.5">
                 <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                 </div>
               </div>
               <div>
                 <h3 className="font-bold text-slate-900 dark:text-white">SkillBridge Assistant</h3>
                 <p className="text-xs text-primary font-medium flex items-center gap-1">
                   <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Online
                 </p>
               </div>
            </div>

            {/* Chat History */}
            <div className="space-y-6 mb-6">
               <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0"></div>
                 <div className="glass bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none p-4 shadow-sm">
                    <p className="text-sm text-slate-700 dark:text-slate-300">Could you review my resume? I'm applying for a React developer role.</p>
                 </div>
               </div>
               
               <div className="flex gap-4 flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                 </div>
                 <div className="glass bg-primary/10 border-primary/20 rounded-2xl rounded-tr-none p-4 shadow-sm max-w-[85%]">
                    <p className="text-sm text-slate-800 dark:text-slate-200 mb-3">
                      I've analyzed your resume targeting React roles. Your ATS score is currently <strong>72%</strong>. 
                    </p>
                    <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-3 mb-2 space-y-2">
                       <div className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                         <LineChart className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                         <span>Add metrics to your experience section (e.g. "improved load time by 30%")</span>
                       </div>
                       <div className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                         <FileText className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                         <span>Include keywords: Context API, Redux Toolkit, and Vite.</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Input Box */}
            <div className="relative">
               <input type="text" placeholder="Ask your AI mentor..." className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full py-4 pl-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-slate-900 dark:text-white" disabled />
               <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-4 h-4" />
               </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <div>
          <div className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2">24/7 AI Career Coach</div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Your personal mentor, always available.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Get instant feedback on your code, personalized learning recommendations, resume reviews, and career guidance powered by advanced AI.
          </p>
          
          <ul className="space-y-5">
             {[
               "Personalized learning roadmaps that adapt to your pace",
               "Instant code debugging and optimization suggestions",
               "Real-time ATS resume analysis and formatting tips",
               "Skill-gap analysis compared to industry job requirements"
             ].map((item, i) => (
               <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
               </li>
             ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
