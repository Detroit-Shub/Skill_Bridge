import { motion } from 'framer-motion';
import { Terminal, Code, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CodingPractice() {
  return (
    <section id="practice" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card rounded-[2.5rem] !bg-slate-50 dark:!bg-slate-900 overflow-hidden relative shadow-2xl shadow-indigo-500/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/20 to-transparent blur-3xl pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10">
          <div>
            <div className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2">Coding Arena</div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Practice makes perfect.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              Sharpen your logic with our massive library of coding challenges. From basic Arrays to complex System Design, prepare for top tech interviews.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {['Arrays & Strings', 'Dynamic Programming', 'Trees & Graphs', 'System Design'].map((topic) => (
                    <div key={topic} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-3 shadow-sm dark:shadow-none">
                        <Code className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                        <span className="font-medium text-sm">{topic}</span>
                    </div>
                ))}
            </div>

            <Link to="/dashboard" className="inline-block liquid-button px-8 py-4 bg-indigo-500 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/30 hover:bg-indigo-600 transition-colors">
              <span className="relative z-10">Solve Challenges</span>
            </Link>
          </div>

          <div className="relative">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-[#0F111A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#1A1D27]">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                   <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                 </div>
                 <div className="flex gap-4 text-xs font-medium text-slate-400">
                    <span className="text-white border-b border-indigo-500 pb-3 -mb-3">Problem</span>
                    <span>Solution</span>
                    <span>Submissions</span>
                 </div>
              </div>
              {/* Editor Body */}
              <div className="flex h-64 sm:h-80">
                 {/* Left Panel */}
                 <div className="w-1/2 border-r border-white/10 p-5 overflow-hidden">
                    <h4 className="text-white font-semibold text-lg mb-2">1. Two Sum</h4>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded mb-4 inline-block">Easy</span>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans mb-4">
                       Given an array of integers <code className="bg-white/10 px-1 rounded text-slate-300">nums</code> and an integer <code className="bg-white/10 px-1 rounded text-slate-300">target</code>, return indices of the two numbers such that they add up to target.
                    </p>
                 </div>
                 {/* Right Panel - Code */}
                 <div className="w-1/2 bg-[#0A0C14] p-4 text-sm font-mono text-slate-300 overflow-hidden relative">
                    <div className="flex mb-4">
                       <span className="text-indigo-400 mr-2">function</span>
                       <span className="text-amber-300 mr-1">twoSum</span>
                       <span className="text-slate-400">(nums, target) {'{'}</span>
                    </div>
                    <div className="pl-4 mb-2">
                       <span className="text-emerald-400 mr-2">const</span>
                       <span className="text-slate-300 mr-2">map</span>
                       <span className="text-emerald-400 mr-2">= new</span>
                       <span className="text-amber-300 mr-2">Map</span>
                       <span className="text-slate-400">();</span>
                    </div>
                    <div className="pl-4 mb-2">
                       <span className="text-rose-400 mr-2">for</span>
                       <span className="text-slate-400">(</span>
                       <span className="text-emerald-400">let</span>
                       <span className="text-slate-300"> i = 0; i &lt; nums.</span>
                       <span className="text-indigo-300">length</span>
                       <span className="text-slate-400">; i++) {'{'}</span>
                    </div>
                    {/* Blinking cursor */}
                    <div className="pl-8 mb-2 flex items-center">
                       <div className="w-2 h-4 bg-white/80 animate-pulse"></div>
                    </div>
                    <div className="pl-4 mb-2 text-slate-400">
                       {'}'}
                    </div>
                    <div className="text-slate-400">
                       {'}'}
                    </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Floating badges */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4"
            >
               <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Daily Streak</p>
                  <p className="font-bold text-slate-900 dark:text-white text-xl">14 Days</p>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
