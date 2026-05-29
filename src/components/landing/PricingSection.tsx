import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    desc: 'Perfect for beginners exploring basic skills.',
    features: ['Limited courses', 'Basic coding practice', 'Community support', 'Standard dashboard'],
    highlighted: false,
    btnText: 'Start Free'
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    desc: 'For serious learners wanting full platform access.',
    features: ['Unlimited courses', 'Advanced coding challenges', 'AI Mentor (Basic)', 'Certifications', 'Portfolio projects'],
    highlighted: false,
    btnText: 'Go Pro'
  },
  {
    name: 'Career Plus',
    price: '$99',
    period: '/mo',
    desc: 'The ultimate track to get hired fast.',
    features: ['Everything in Pro', 'AI Mentor (Unlimited)', 'Mock interviews with AI feedback', 'ATS Resume Builder', 'Direct job referrals', '1-on-1 human mentorship'],
    highlighted: true,
    btnText: 'Fast-Track Career'
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Invest in your future.
         </h2>
         <p className="text-lg text-slate-600 dark:text-slate-400">
            Choose the plan that fits your career goals. Upskill, practice, and get hired.
         </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
           <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[2rem] p-8 ${plan.highlighted ? 'bg-[#0F172A] text-white shadow-2xl shadow-primary/20 scale-105 z-10 border border-primary/30' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}
           >
              {plan.highlighted && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" /> Most Popular
                 </div>
              )}
              
              <div className="mb-8">
                 <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? '' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
                 <p className={`text-sm mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{plan.desc}</p>
                 <div className="flex items-end gap-1">
                    <span className={`text-4xl font-extrabold ${plan.highlighted ? '' : 'text-slate-900 dark:text-white'}`}>{plan.price}</span>
                    {plan.period && <span className={`text-sm mb-1 ${plan.highlighted ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>{plan.period}</span>}
                 </div>
              </div>

              <ul className="space-y-4 mb-8">
                 {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                       <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-accent' : 'text-primary'}`} />
                       <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}>{feature}</span>
                    </li>
                 ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlighted ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'}`}>
                 {plan.btnText}
              </button>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
