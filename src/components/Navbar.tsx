import { Link, useLocation } from 'react-router-dom';
import { Moon, Menu, X, BrainCircuit, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from '../utils/scroll';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      enableBodyScroll();
      setMobileMenuOpen(false);
    } else {
      disableBodyScroll();
      setMobileMenuOpen(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/#courses' },
    { name: 'Practice', path: '/#practice' },
    { name: 'Mentorship', path: '/#mentorship' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">SkillBridge <span className="text-primary">AI</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/dashboard"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all duration-200 bg-slate-900 dark:bg-white dark:text-slate-900 border border-transparent rounded-full hover:shadow-lg hover:shadow-slate-900/20 dark:hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleMobileMenu} className="p-2 text-slate-600 dark:text-slate-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-dark border-none fixed inset-0 top-20 z-40 bg-white/90 dark:bg-slate-900/90 flex flex-col"
          >
            <div className="flex flex-col px-4 pt-8 pb-6 space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    to={link.path}
                    onClick={toggleMobileMenu}
                    className="block text-2xl font-semibold text-slate-900 dark:text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-6"
              >
                <Link 
                  to="/dashboard"
                  onClick={toggleMobileMenu}
                  className="w-full flex items-center justify-center px-6 py-4 text-lg font-medium text-white bg-primary rounded-2xl hover:bg-primary/90 transition-colors"
                >
                  Start Learning Free
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
