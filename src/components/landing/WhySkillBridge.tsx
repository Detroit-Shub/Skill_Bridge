import { motion } from 'framer-motion';
import { BookOpen, Target, LayoutTemplate, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: BookOpen,
    title: 'Learn',
    desc: 'Industry-ready courses, video lessons, live sessions, and AI-generated notes.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10 dark:bg-blue-500/20',
    link: '/#courses'
  },
  {
    icon: Target,
    title: 'Practice',
    desc: 'Coding challenges, mock tests, interview prep, and real-world assignments.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    link: '/#practice'
  },
  {
    icon: LayoutTemplate,
    title: 'Build',
    desc: 'Guided portfolio projects and team collaboration to build a real GitHub profile.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10 dark:bg-purple-500/20',
    link: '/#projects'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Get Hired',
    desc: 'Job recommendations, resume analysis, mock interviews, and recruiter access.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10 dark:bg-rose-500/20',
    link: '/#career'
  }
];

export default function WhySkillBridge() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Everything you need, <span className="text-primary pr-2">under one roof.</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Stop jumping between platforms. SkillBridge combines learning, practice, building, and hiring into a single, seamless ecosystem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to={feature.link} className="block h-full glass-card rounded-[40px] p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
