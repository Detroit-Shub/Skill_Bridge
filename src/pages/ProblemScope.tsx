import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Play, Settings } from 'lucide-react';
import Editor from '@monaco-editor/react';

export default function ProblemScope() {
  const { id } = useParams();
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState<string | null>(null);

  const problems: Record<string, any> = {
    '1': {
      title: "1. Trapping Rain Water",
      difficulty: "Hard",
      topics: ["Arrays", "Two Pointers"],
      description: `
        <p>Commander Alex, we need your help to consolidate liquid energy gathered across multiple planetary basins during a stellar storm.</p>
        <p>You are given <code>n</code> non-negative integers representing an elevation map of our energy silos where the width of each silo is <code>1</code>. Compute how much liquid energy it can trap after raining.</p>
        <br/>
        <p><strong>Example 1:</strong></p>
        <pre class="bg-[#0F172A] p-3 rounded-lg text-slate-300 font-mono text-sm mt-2 mb-4 border border-slate-700">
<strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of liquid energy are being trapped.
        </pre>
        <p><strong>Example 2:</strong></p>
        <pre class="bg-[#0F172A] p-3 rounded-lg text-slate-300 font-mono text-sm mt-2 mb-4 border border-slate-700">
<strong>Input:</strong> height = [4,2,0,3,2,5]
<strong>Output:</strong> 9
        </pre>
        <br/>
        <p><strong>Constraints:</strong></p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-400">
          <li><code>n == height.length</code></li>
          <li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
          <li><code>0 &lt;= height[i] &lt;= 10<sup>5</sup></code></li>
        </ul>
      `,
      defaultCode: '// Write your solution here\n\nfunction trapRainWater(height) {\n  \n}'
    },
    '2': {
       title: "2. Two Sum",
       difficulty: "Easy",
       topics: ["Arrays", "Hash Table"],
       description: `
        <p>Commander Alex, we need to calibrate the hyper-drive engine by pairing two energy cells that have a specific combined power output.</p>
        <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
        <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
        <p>You can return the answer in any order.</p>
        <br/>
        <p><strong>Example 1:</strong></p>
        <pre class="bg-[#0F172A] p-3 rounded-lg text-slate-300 font-mono text-sm mt-2 mb-4 border border-slate-700">
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
        </pre>
       `,
       defaultCode: '// Write your solution here\n\nfunction twoSum(nums, target) {\n  \n}'
    },
    '3': {
       title: "3. Longest Palindromic Substring",
       difficulty: "Medium",
       topics: ["Strings", "DP"],
       description: `
        <p>Commander Alex, we are scanning deep space signals for symmetric frequencies that indicate a stable wormhole.</p>
        <p>Given a string <code>s</code> representing a frequency signature, return the longest palindromic substring in <code>s</code>.</p>
        <br/>
        <p><strong>Example 1:</strong></p>
        <pre class="bg-[#0F172A] p-3 rounded-lg text-slate-300 font-mono text-sm mt-2 mb-4 border border-slate-700">
<strong>Input:</strong> s = "babad"
<strong>Output:</strong> "bab"
<strong>Explanation:</strong> "aba" is also a valid answer.
        </pre>
       `,
       defaultCode: '// Write your solution here\n\nfunction longestPalindrome(s) {\n  \n}'
    },
    '4': {
       title: "4. LRU Cache",
       difficulty: "Medium",
       topics: ["Design", "Hash Table", "Linked List"],
       description: `
        <p>Commander Alex, the navigational computer's quantum memory is limited. We need you to design a Least Recently Used (LRU) cache system.</p>
        <p>Implement the <code>LRUCache</code> class:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-400 mb-4">
          <li><code>LRUCache(int capacity)</code> Initialize the LRU cache with positive size capacity.</li>
          <li><code>int get(int key)</code> Return the value of the key if the key exists, otherwise return -1.</li>
          <li><code>void put(int key, int value)</code> Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.</li>
        </ul>
        <p>The functions <code>get</code> and <code>put</code> must each run in <code>O(1)</code> average time complexity.</p>
       `,
       defaultCode: '// Write your solution here\n\nclass LRUCache {\n  constructor(capacity) {\n    \n  }\n  get(key) {\n    \n  }\n  put(key, value) {\n    \n  }\n}'
    },
    '5': {
       title: "5. Merge K Sorted Lists",
       difficulty: "Hard",
       topics: ["Linked List", "Divide & Conquer"],
       description: `
        <p>Commander Alex, multiple space fleets are arriving at the rendezvous sector. Their arrival logs are sorted, but we need to merge them into one master log.</p>
        <p>You are given an array of <code>k</code> linked-lists <code>lists</code>, each linked-list is sorted in ascending order.</p>
        <p>Merge all the linked-lists into one sorted linked-list and return it.</p>
        <br/>
        <p><strong>Example 1:</strong></p>
        <pre class="bg-[#0F172A] p-3 rounded-lg text-slate-300 font-mono text-sm mt-2 mb-4 border border-slate-700">
<strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]]
<strong>Output:</strong> [1,1,2,3,4,4,5,6]
<strong>Explanation:</strong> The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
        </pre>
       `,
       defaultCode: '// Write your solution here\n\nfunction mergeKLists(lists) {\n  \n}'
    }
  };

  const problem = problems[id || '1'] || problems['1'];
  const [code, setCode] = useState(problem.defaultCode);

  const handleRun = () => {
     setOutput("Running tests...\n\nTest Case 1: PASS\nTest Case 2: PASS\n\nExecution Time: 42ms\nMemory Usage: 32MB");
  };

  return (
    <div className="flex flex-col h-screen bg-[#0F172A] text-white overflow-hidden font-sans">
      {/* Top Navbar */}
      <div className="h-14 border-b border-slate-800 flex items-center justify-between px-4 bg-[#1E293B]">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <span className="font-bold text-sm tracking-wide text-slate-200">Practice Arena</span>
        </div>
        
        <div className="flex items-center gap-2">
           <button 
              onClick={handleRun}
              className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors text-slate-200"
           >
              Run Code
           </button>
           <button className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 text-white shadow-lg shadow-emerald-900/20 shadow-inner">
              <Play className="w-3.5 h-3.5" fill="currentColor" /> Submit
           </button>
        </div>
      </div>

      {/* Main Split View */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4 overflow-hidden">
        
        {/* Left Pane - Description */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#1E293B] rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl">
           <div className="h-12 border-b border-slate-700/50 flex items-center px-4 bg-[#1E293B]">
             <div className="text-sm font-bold text-slate-200 border-b-2 border-primary h-full flex items-center">Description</div>
           </div>
           <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              <h1 className="text-2xl font-bold mb-4 text-white">{problem.title}</h1>
              <div className="mb-6 flex gap-3 items-center">
                 <span className={`text-xs font-bold px-2 py-1 rounded-full border ${problem.difficulty === 'Hard' ? 'text-rose-500 bg-rose-500/10 border-rose-500/20' : problem.difficulty === 'Medium' ? 'text-amber-500 bg-amber-500/10 border-amber-500/20' : 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20'}`}>
                    {problem.difficulty}
                 </span>
                 {problem.topics?.map((topic: string) => (
                    <span key={topic} className="text-slate-400 text-xs font-medium bg-slate-800 border border-slate-700 px-2 py-1 rounded-full">
                       {topic}
                    </span>
                 ))}
              </div>
              <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed" 
                   dangerouslySetInnerHTML={{ __html: problem.description }} />
           </div>
        </div>

        {/* Right Pane - IDE & Output */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 overflow-hidden">
            {/* Editor */}
            <div className="flex-1 flex flex-col bg-[#1E293B] rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl">
               <div className="h-12 border-b border-slate-700/50 flex items-center justify-between px-4 bg-[#1E293B]">
                 <div className="flex items-center gap-2">
                     <select 
                       value={language}
                       onChange={(e) => setLanguage(e.target.value)}
                       className="bg-slate-800 border border-slate-700 text-sm text-slate-200 rounded-lg py-1 px-3 focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer hover:bg-slate-700 transition-colors"
                       style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
                     >
                       <option value="javascript">JavaScript</option>
                       <option value="python">Python</option>
                       <option value="java">Java</option>
                       <option value="cpp">C++</option>
                       <option value="typescript">TypeScript</option>
                     </select>
                     <div className="pointer-events-none -ml-6 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                     </div>
                 </div>
                 <div className="flex gap-2">
                    <button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors text-slate-400" title="Settings">
                       <Settings className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors text-slate-400" title="Full Screen">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                    </button>
                 </div>
               </div>
               <div className="flex-1 rounded-b-xl overflow-hidden pt-2">
                 <Editor
                   height="100%"
                   language={language}
                   theme="vs-dark"
                   value={code}
                   onChange={(val) => setCode(val || '')}
                   options={{
                     minimap: { enabled: false },
                     fontSize: 14,
                     fontFamily: 'JetBrains Mono, monospace',
                     padding: { top: 16, bottom: 16 },
                     scrollBeyondLastLine: false,
                     lineHeight: 24,
                     bracketPairColorization: { enabled: true },
                     guides: { bracketPairs: true, indentation: true },
                   }}
                 />
               </div>
            </div>

            {/* Testcases & Output Console */}
            <div className="h-[250px] flex flex-col bg-[#1E293B] rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl shrink-0">
               <div className="h-10 border-b border-slate-700/50 flex items-center px-4 bg-[#1E293B] gap-6">
                 <button className="text-sm font-bold text-slate-400 hover:text-slate-200 h-full flex items-center">Testcase</button>
                 <button className="text-sm font-bold text-slate-200 border-b-2 border-primary h-full flex items-center">Test Result</button>
               </div>
               <div className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-[#0F172A]">
                  {!output ? (
                      <div className="text-slate-500 h-full flex items-center justify-center">Run your code to see results here.</div>
                  ) : (
                      <pre className="text-slate-300">{output}</pre>
                  )}
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}
