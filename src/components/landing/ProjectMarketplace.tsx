import { motion } from 'framer-motion';
import { Layers, Clock, Star, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Video Analysis Dashboard',
    desc: 'Build a full-stack dashboard processing video metadata using Next.js and Tailwind.',
    level: 'Advanced',
    time: '24 Hours',
    tags: ['React', 'Next.js', 'PostgreSQL', 'AI'],
    image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Fintech Banking Portal',
    desc: 'Create a secure banking application with real-time transaction updates.',
    level: 'Intermediate',
    time: '18 Hours',
    tags: ['Vue.js', 'Node.js', 'WebSockets'],
    image: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'E-Commerce Marketplace',
    desc: 'Develop a scalable digital storefront with Stripe payment integration.',
    level: 'Intermediate',
    time: '20 Hours',
    tags: ['React', 'Stripe', 'Express'],
    image: 'bg-gradient-to-br from-orange-500/20 to-rose-500/20'
  }
];

export default function ProjectMarketplace() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
         <div className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2">Build Real Portfolio</div>
         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Proof of work matters.
         </h2>
         <p className="text-lg text-slate-600 dark:text-slate-400">
            Ditch the standard "Todo list" apps. Build enterprise-grade, guided capstone projects that genuinely impress hiring managers.
         </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
         {projects.map((proj, i) => (
            <motion.div
               key={proj.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="glass-card rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-slate-200 dark:border-white/5"
            >
               <div className={`h-48 w-full ${proj.image} relative overflow-hidden flex items-center justify-center`}>
                  <Layers className="w-16 h-16 opacity-30 text-slate-900 dark:text-white" />
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <button className="glass px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                        View Details <ExternalLink className="w-4 h-4" />
                     </button>
                  </div>
               </div>
               
               <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                     <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {proj.level}
                     </span>
                     <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {proj.time}
                     </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{proj.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{proj.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                     {proj.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 px-2 py-1 rounded">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
    </section>
  );
}
