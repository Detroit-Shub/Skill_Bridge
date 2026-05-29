import { Link } from 'react-router-dom';
import { BrainCircuit, Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-[#0F172A] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">SkillBridge <span className="text-primary">AI</span></span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
              An AI-powered platform combining learning, coding practice, projects, certifications, and career opportunities in one seamless experience.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Platform</h3>
            <ul className="space-y-4">
              <li><Link to="/#courses" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Courses</Link></li>
              <li><Link to="/#practice" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Coding Practice</Link></li>
              <li><Link to="/#projects" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Projects</Link></li>
              <li><Link to="/#mentorship" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">AI Mentor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Career</h3>
            <ul className="space-y-4">
              <li><Link to="/#career" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Job Portal</Link></li>
              <li><Link to="/#career" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Mock Interviews</Link></li>
              <li><Link to="/#career" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Resume Builder</Link></li>
              <li><Link to="/dashboard" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Referrals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} SkillBridge AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
