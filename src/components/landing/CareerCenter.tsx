import { motion } from 'framer-motion';
import { Search, Briefcase, FileText, Video, Compass, MapPin, DollarSign } from 'lucide-react';

const jobs = [
  { role: 'Frontend Engineer', company: 'Google', location: 'Remote', salary: '$120k - $160k', type: 'Full-time' },
  { role: 'Data Scientist', company: 'Netflix', location: 'San Francisco, CA', salary: '$140k - $190k', type: 'Full-time' },
  { role: 'React Intern', company: 'Vercel', location: 'Remote', salary: '$4k/mo', type: 'Internship' },
];

export default function CareerCenter() {
  return (
    <section id="career" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div>
           <div className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2">Hiring & Placements</div>
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Skip the queue. <br/> Get hired directly.
           </h2>
           <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We partner with over 500+ top tech companies. Our AI matches your skills to verified job postings, optimizes your resume for ATS, and conducts mock interviews to ensure you're ready.
           </p>

           <div className="space-y-6">
              {[
                  { icon: FileText, title: 'AI Resume Builder', desc: 'Auto-generate ATS-friendly resumes tailored to specific job listings.' },
                  { icon: Video, title: 'Mock Interviews', desc: 'Practice technical & behavioral rounds with our AI evaluator.' },
                  { icon: Compass, title: 'Direct Referrals', desc: 'Top performers get direct referrals to our hiring partners.' }
              ].map((item, i) => (
                  <motion.div 
                     key={item.title}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex items-start gap-4"
                  >
                     <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                     </div>
                  </motion.div>
              ))}
           </div>
        </div>

        {/* Right: Job Board Mockup */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="glass-card rounded-[2rem] border border-slate-200 dark:border-white/10 p-6 shadow-xl relative"
        >
           {/* Search Bar */}
           <div className="relative mb-6">
              <input type="text" placeholder="Search roles, companies..." className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none" disabled />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-lg">Search</button>
           </div>

           <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {['All', 'Full-time', 'Internships', 'Remote'].map((filter, i) => (
                 <span key={filter} className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${i === 0 ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    {filter}
                 </span>
              ))}
           </div>

           <div className="space-y-4">
              {jobs.map((job) => (
                 <div key={job.role} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-3">
                       <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                             {job.company.charAt(0)}
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{job.role}</h4>
                             <p className="text-xs text-slate-500 font-medium">{job.company}</p>
                          </div>
                       </div>
                       <button className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400 hover:text-primary transition-colors">
                          <Briefcase className="w-4 h-4" />
                       </button>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                       <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                       <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {job.salary}</span>
                    </div>
                 </div>
              ))}
           </div>
        </motion.div>

      </div>
    </section>
  );
}
