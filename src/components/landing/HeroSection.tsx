import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle, Code2, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text */}
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 px-3 py-1 rounded-full w-fit mb-8"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-widest">AI-Powered Learning</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[56px] lg:text-[72px] font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] mb-6"
          >
            Learn Skills.<br/>
            Practice Daily.<br/>
            <span className="text-gradient">Get Hired Faster.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
          >
            An AI-powered platform that combines learning, coding practice, projects, certifications, and career opportunities in one seamless experience.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/dashboard"
              className="liquid-button group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-transform"
            >
              <span className="relative z-10 flex items-center">
                Explore Path
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/#career"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors shadow-sm"
            >
              Watch Demo
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-[#0F172A] bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <p>Join <span className="text-slate-900 dark:text-white font-bold">100,000+</span> learners advancing their careers</p>
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Dashboard Mock */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="relative perspective-1000 hidden lg:flex items-center justify-center h-full"
        >
          <div className="relative z-10 glass-card w-full max-w-[580px] h-[480px] p-8 flex flex-col gap-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Student Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 dark:bg-slate-800/60 p-4 rounded-3xl border border-white/80 dark:border-slate-700/80 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Current Course</p>
                <h4 className="font-bold text-slate-800 dark:text-white">Fullstack Dev Mastery</h4>
                <div className="mt-4 h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[78%]"></div>
                </div>
                <p className="text-[10px] text-right mt-1 text-blue-600 dark:text-blue-400 font-bold">78% Complete</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-3xl text-white shadow-lg shadow-indigo-100 dark:shadow-indigo-900/50 flex flex-col justify-between">
                <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-1">Coding Streak</p>
                <div className="flex items-end gap-2">
                  <h4 className="text-4xl font-black">14</h4>
                  <span className="text-xs text-indigo-100 pb-1">Days Active</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-slate-800/80 p-5 rounded-3xl border border-white/80 dark:border-slate-700/80 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">AI Career Coach</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                  "Your Python skills match <span className="text-emerald-600 dark:text-emerald-400 font-bold">95%</span> of the Senior Backend roles at <span className="font-bold">Stripe</span>. Ready to apply?"
                </p>
              </div>
            </div>
            
            <div className="flex-1 flex gap-4 overflow-hidden">
              <div className="flex-1 bg-slate-900 rounded-3xl p-4 flex flex-col gap-2 overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Coding Challenge</span>
                  <span className="text-[10px] font-bold text-amber-500 uppercase">Medium</span>
                </div>
                <div className="font-mono text-blue-400 text-xs overflow-hidden leading-relaxed">
                  <code>
                    function solve(n) {'{'}<br/>
                    &nbsp;&nbsp;let dp = new Array(n);<br/>
                    &nbsp;&nbsp;for(let i=0; i&lt;n; i++) {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;// optimized logic<br/>
                    &nbsp;&nbsp;{'}'}<br/>
                    {'}'}
                  </code>
                </div>
              </div>
              <div className="w-32 bg-white/40 dark:bg-slate-800/40 rounded-3xl border border-white/60 dark:border-slate-700/50 flex flex-col items-center justify-center text-center p-3 gap-2 shrink-0">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400">Verified Certificate Ready</p>
              </div>
            </div>
          </div>
          
          {/* Orbital rings behind dashboard */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full z-0 pointer-events-none opacity-50 hidden lg:block"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-secondary/20 rounded-full z-0 pointer-events-none opacity-30 hidden lg:block"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-400 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
