import { motion } from 'framer-motion';
import { BookOpen, Code2, Briefcase, GraduationCap, Trophy, Target, LayoutDashboard, Settings, Bell, Search, Flame } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-[calc(100vh-6rem)] -mt-8 mx-4 sm:mx-8 mb-8 bg-white dark:bg-[#0F172A] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden glass-card">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 hidden lg:flex flex-col">
        <div className="p-6">
           <div className="flex gap-4 items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden">
                 <img src="https://i.pravatar.cc/150?img=11" alt="User" />
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 dark:text-white text-sm">Alex Developer</h3>
                 <p className="text-xs text-slate-500 font-medium">Pro Member</p>
              </div>
           </div>
           
           <nav className="space-y-2">
              {[
                  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
                  { id: 'learning', icon: BookOpen, label: 'My Courses' },
                  { id: 'practice', icon: Code2, label: 'Practice Arena' },
                  { id: 'projects', icon: Target, label: 'Projects' },
                  { id: 'career', icon: Briefcase, label: 'Career Board' },
              ].map(item => (
                 <button 
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === item.id ? 'bg-primary text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}
                 >
                    <item.icon className="w-5 h-5 shrink-0" />
                    {item.label}
                 </button>
              ))}
           </nav>
        </div>
        
        <div className="mt-auto p-6">
           <div className="glass-dark bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl p-4 border border-indigo-500/20 text-center mb-4">
              <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                 <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Rank: Gold II</h4>
              <p className="text-xs text-slate-500">Top 15% of Platform</p>
           </div>
           
           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
              <Settings className="w-5 h-5 shrink-0" />
              Settings
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-transparent">
        {/* Topbar */}
        <div className="sticky top-0 z-10 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between">
           <div className="relative w-64 hidden sm:block">
              <input type="text" placeholder="Search courses, jobs..." className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white" />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
           </div>
           
           <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-1 bg-rose-50 dark:bg-rose-900/20 text-rose-600 px-3 py-1.5 rounded-full text-sm font-bold border border-rose-100 dark:border-rose-800/30">
                 <Flame className="w-4 h-4" /> 14
              </div>
              <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary border-2 border-white dark:border-[#0F172A]"></span>
              </button>
           </div>
        </div>

        <div className="p-8 pb-20">
           {activeTab === 'overview' && (
             <>
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Welcome back, Alex! 👋</h2>
               
               {/* Stats Grid */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                     { label: 'Courses in Progress', value: '3', icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
                     { label: 'Problems Solved', value: '142', icon: Code2, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
                     { label: 'Profile Views', value: '28', icon: Target, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
                     { label: 'Job Applications', value: '12', icon: Briefcase, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30' }
                  ].map((stat, i) => (
                     <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/50 shadow-sm"
                     >
                        <div className="flex justify-between items-start mb-4">
                           <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                              <stat.icon className={`w-5 h-5 ${stat.color}`} />
                           </div>
                           <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">+2%</span>
                        </div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                     </motion.div>
                  ))}
               </div>

               <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                     {/* Current Course */}
                     <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Jump Back In</h3>
                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                           <div className="w-full sm:w-48 h-32 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shrink-0 flex items-center justify-center">
                              <Code2 className="w-12 h-12 text-white/50" />
                           </div>
                           <div className="w-full">
                              <div className="flex justify-between items-start mb-2">
                                 <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded">Web Dev</span>
                                 <span className="text-sm text-slate-500 font-medium">65%</span>
                              </div>
                              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Advanced React Patterns</h4>
                              <p className="text-sm text-slate-500 mb-4 line-clamp-1">Module 4: Concurrent Mode & Suspense</p>
                              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 mb-4">
                                 <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                              </div>
                              <button className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-shadow">
                                 Continue Course
                              </button>
                           </div>
                        </div>
                     </div>

                     {/* Daily Practice */}
                     <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                           <h3 className="font-bold text-lg text-slate-900 dark:text-white">Daily Coding Challenge</h3>
                           <button onClick={() => setActiveTab('practice')} className="text-primary text-sm font-semibold hover:underline">View All</button>
                        </div>
                        <Link to="/problem/1" className="border border-slate-100 dark:border-slate-700 rounded-xl p-4 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 hover:border-indigo-500/50 transition-colors cursor-pointer block">
                           <div className="flex gap-4 items-center">
                              <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-500 font-bold">#42</div>
                              <div>
                                 <h4 className="font-bold text-slate-900 dark:text-white mb-1">Trapping Rain Water</h4>
                                 <div className="flex gap-2 text-xs font-medium">
                                   <span className="text-rose-500">Hard</span>
                                   <span className="text-slate-400">• Arrays</span>
                                   <span className="text-slate-400">• Two Pointers</span>
                                 </div>
                              </div>
                           </div>
                           <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors shadow-sm">
                              <svg className="w-4 h-4 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                           </div>
                        </Link>
                     </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="space-y-8">
                     {/* Upcoming Interview */}
                     <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full mix-blend-overlay blur-xl"></div>
                        <div className="text-white/80 text-xs font-bold tracking-wider uppercase mb-3">Upcoming</div>
                        <h3 className="font-bold text-xl mb-1">Mock Interview</h3>
                        <p className="text-white/80 text-sm mb-4">Google Frontend Role (AI Evaluator)</p>
                        <div className="bg-white/10 border border-white/20 rounded-xl p-3 mb-4 flex items-center justify-between backdrop-blur-md">
                           <div className="text-sm font-medium">Today</div>
                           <div className="text-sm font-bold bg-white text-primary px-2 py-1 rounded">2:00 PM</div>
                        </div>
                        <button className="w-full py-2.5 bg-white text-primary rounded-xl text-sm font-bold shadow-md hover:bg-slate-50 transition-colors">
                           Join Session
                        </button>
                     </div>

                     {/* Top Job Match */}
                     <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Top Job Match</h3>
                        <div className="flex gap-4 items-center mb-4">
                           <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xl border border-orange-200">
                              S
                           </div>
                           <div>
                              <h4 className="font-bold text-slate-900 dark:text-white">Frontend Developer</h4>
                              <p className="text-sm text-slate-500">Stripe • Remote</p>
                           </div>
                        </div>
                        <div className="flex gap-2 mb-5">
                           <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 border border-emerald-100 dark:border-emerald-800 rounded">92% Match</span>
                           <span className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">$140k - $180k</span>
                        </div>
                        <button className="w-full py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                           Apply Now
                        </button>
                     </div>
                  </div>
               </div>
             </>
           )}

           {activeTab === 'practice' && (
             <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Practice Arena</h2>
                  <div className="flex gap-2">
                     <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Difficulty</button>
                     <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium">Topics</button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                     { id: 1, title: "Trapping Rain Water", difficulty: "Hard", topics: ["Arrays", "Two Pointers"], completion: 0, link: "/problem/1" },
                     { id: 2, title: "Two Sum", difficulty: "Easy", topics: ["Arrays", "Hash Table"], completion: 100, link: "/problem/2" },
                     { id: 3, title: "Longest Palindromic Substring", difficulty: "Medium", topics: ["Strings", "DP"], completion: 100, link: "/problem/3" },
                     { id: 4, title: "LRU Cache", difficulty: "Medium", topics: ["Design", "Hash Table", "Linked List"], completion: 0, link: "/problem/4" },
                     { id: 5, title: "Merge K Sorted Lists", difficulty: "Hard", topics: ["Linked List", "Divide & Conquer", "Heap"], completion: 0, link: "/problem/5" },
                  ].map((problem) => (
                    <Link key={problem.id} to={problem.link} className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-5 flex items-center justify-between shadow-sm hover:border-primary/50 transition-colors group">
                       <div className="flex items-center gap-6">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${problem.completion === 100 ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30' : 'bg-slate-100 dark:bg-slate-900/50 text-slate-500'}`}>
                           {problem.completion === 100 ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> : `#${problem.id}`}
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">{problem.title}</h3>
                            <div className="flex gap-3 mt-1 text-xs font-medium">
                               <span className={`${problem.difficulty === 'Hard' ? 'text-rose-500' : problem.difficulty === 'Medium' ? 'text-amber-500' : 'text-emerald-500'}`}>{problem.difficulty}</span>
                               {problem.topics.map(t => (
                                 <span key={t} className="text-slate-500 dark:text-slate-400">• {t}</span>
                               ))}
                            </div>
                         </div>
                       </div>
                       <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                          <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                       </div>
                    </Link>
                  ))}
                </div>
             </div>
           )}

           {activeTab !== 'overview' && activeTab !== 'practice' && (
             <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
               <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                 <Code2 className="w-8 h-8 text-slate-400" />
               </div>
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Coming Soon</h2>
               <p className="text-slate-500 dark:text-slate-400 max-w-md">This section is currently under development. Check back later for updates.</p>
             </div>
           )}
        </div>
      </main>
    </div>
  );
}
