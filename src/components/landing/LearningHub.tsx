import { motion } from 'framer-motion';
import { Network, Database, Brain, Lock, Cloud, Palette, Command, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Web Development', icon: Network, color: 'text-indigo-500' },
  { name: 'Data Science', icon: Database, color: 'text-blue-500' },
  { name: 'AI & Machine Learning', icon: Brain, color: 'text-purple-500' },
  { name: 'Cybersecurity', icon: Lock, color: 'text-rose-500' },
  { name: 'Cloud Computing', icon: Cloud, color: 'text-sky-500' },
  { name: 'UI/UX Design', icon: Palette, color: 'text-pink-500' },
  { name: 'DevOps', icon: Command, color: 'text-emerald-500' },
  { name: 'Mobile Development', icon: Smartphone, color: 'text-orange-500' }
];

export default function LearningHub() {
  return (
    <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2">Learning Hub</div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Master the most in-demand skills.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Interactive courses guided by AI, with personalized roadmaps and industry-recognized certificates.
          </p>
        </div>
        <Link to="/dashboard" className="text-primary font-bold hover:underline px-4 py-2 self-start md:self-auto shrink-0">
          View all courses &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group cursor-pointer bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-primary/30 transition-all text-center flex flex-col items-center gap-4"
          >
            <div className={`w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
              <cat.icon className={`w-8 h-8 ${cat.color}`} />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
              {cat.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
