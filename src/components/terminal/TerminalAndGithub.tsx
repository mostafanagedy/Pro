"use client"

import * as React from "react"
import { motion } from "motion/react"
import { GitCommit, ExternalLink, X, Minus, Square } from "lucide-react"

export function TerminalAndGithub() {
  const [activeTab, setActiveTab] = React.useState<string>("whoami")

  const terminalOutputs: Record<string, React.ReactNode> = {
    whoami: (
      <div className="mt-2 font-mono space-y-2">
        <pre className="text-[#22E88A] text-[10px] sm:text-xs leading-none font-extrabold select-none">
{`  _  _   A   ___ ___ ___  驰 
 | \\| | /_\\ / __| __|   \\| |
 | .  |/ _ \\ (_ | _|| |) |_|
 |_|\\_/_/ \\_\\___|___|___/(_) `}
        </pre>
        <div className="text-foreground/90 font-semibold pt-1">
          Full Stack Software Engineer
        </div>
        <p className="text-foreground/60 text-xs">
          Building modern web applications, RESTful APIs and cloud solutions.
        </p>
      </div>
    ),
    skills: (
      <div className="mt-2 font-mono text-xs space-y-1 text-foreground/80">
        <p><span className="text-[#22E88A]">Frontend:</span> React | Next.js | TypeScript | Tailwind CSS | HTML5/CSS3</p>
        <p><span className="text-[#22E88A]">Backend:</span> Node.js | Express.js | REST APIs | JWT</p>
        <p><span className="text-[#22E88A]">Database:</span> MongoDB | PostgreSQL | SQL</p>
        <p><span className="text-[#22E88A]">Cloud/DevOps:</span> AWS | Docker | Git | CI/CD | Linux</p>
      </div>
    ),
    projects: (
      <div className="mt-2 font-mono text-xs space-y-1 text-foreground/80">
        <p>1. <span className="text-[#22E88A]">Amazon E-Commerce</span> - https://amazon-ecommerce-main.vercel.app</p>
        <p>2. <span className="text-[#22E88A]">E-Commerce Store</span> - https://e-commerce-f-red.vercel.app</p>
        <p>3. <span className="text-[#22E88A]">Bunyan Platform</span> - https://bunyan-eight.vercel.app</p>
        <p>4. <span className="text-[#22E88A]">Careers App</span> - https://careers-app-figma.vercel.app</p>
        <p>5. <span className="text-[#22E88A]">Asas</span> - https://mostafanagedy.github.io/Asas/</p>
      </div>
    ),
    experience: (
      <div className="mt-2 font-mono text-xs space-y-1 text-foreground/80">
        <p><span className="text-[#22E88A]">Software Engineer @ Digilins</span> (Dec 2025 - Present)</p>
        <p><span className="text-[#22E88A]">Full Stack Developer Intern @ Digilins</span> (2024)</p>
      </div>
    ),
    education: (
      <div className="mt-2 font-mono text-xs text-foreground/80">
        <p><span className="text-[#22E88A]">B.Sc. Mathematics</span> - Sohag University (Graduated with Excellent grade)</p>
      </div>
    ),
    contact: (
      <div className="mt-2 font-mono text-xs text-foreground/80 space-y-1">
        <p>Email: <a href="mailto:mstfymajdn7@gmail.com" className="text-[#22E88A] underline">mstfymajdn7@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/mostafanagedy" target="_blank" className="text-[#22E88A] underline">github.com/mostafanagedy</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/mostafa-nagdey" target="_blank" className="text-[#22E88A] underline">linkedin.com/in/mostafa-nagdey</a></p>
      </div>
    )
  }

  const githubActivities = [
    { message: "feat: add authentication", time: "2 hours ago" },
    { message: "fix: resolve payment issue", time: "1 day ago" },
    { message: "chore: update dependencies", time: "3 days ago" },
    { message: "refactor: optimize queries", time: "5 days ago" },
  ]

  return (
    <section className="py-12">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Terminal Window (8 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 rounded-xl border border-border/50 bg-[#0A0E14] shadow-2xl overflow-hidden font-mono text-xs flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0F141C] border-b border-border/40">
              <div className="flex items-center space-x-2 text-foreground/60">
                <span>&gt;_ Nagedy Terminal</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-[8px]">−</span>
                <span className="w-3 h-3 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-[8px]">□</span>
                <span className="w-3 h-3 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-[8px]">✕</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-1 min-h-[300px]">
              {/* Sidebar Tabs */}
              <div className="sm:w-40 bg-[#070A0F] border-b sm:border-b-0 sm:border-r border-border/40 p-3 flex flex-row sm:flex-col overflow-x-auto gap-1">
                {Object.keys(terminalOutputs).map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => setActiveTab(cmd)}
                    className={`text-left px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                      activeTab === cmd 
                        ? "bg-[#22E88A]/10 text-[#22E88A] font-semibold border-l-2 border-[#22E88A]" 
                        : "text-foreground/60 hover:text-foreground hover:bg-secondary/40"
                    }`}
                  >
                    &gt; {cmd}
                  </button>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-5 space-y-4 bg-[#0A0E14] overflow-y-auto">
                <div>
                  <div className="flex items-center text-foreground/70">
                    <span className="text-[#22E88A] mr-2">nagedy@portfolio:~$</span>
                    <span className="text-foreground">{activeTab}</span>
                  </div>
                  {terminalOutputs[activeTab]}
                </div>
                
                <div className="flex items-center text-foreground/70 pt-4 border-t border-border/20">
                  <span className="text-[#22E88A] mr-2">nagedy@portfolio:~$</span>
                  <span className="w-2 h-4 bg-[#22E88A] animate-pulse inline-block"></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GitHub Activity Box (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 rounded-xl border border-border/50 bg-[#0A0E14] p-5 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border/40 mb-4">
                <h3 className="font-semibold text-sm tracking-wide text-foreground">GitHub Activity</h3>
                <GitCommit className="w-4 h-4 text-[#22E88A]" />
              </div>

              <div className="space-y-4 font-mono text-xs">
                {githubActivities.map((act, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="mt-0.5 p-1 rounded bg-[#22E88A]/10 text-[#22E88A]">
                      <GitCommit className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/90 font-medium">{act.message}</p>
                      <p className="text-foreground/40 text-[11px] mt-0.5">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="https://github.com/mostafanagedy" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-between text-xs font-mono text-foreground/60 hover:text-[#22E88A] pt-4 mt-4 border-t border-border/40 transition-colors"
            >
              <span>View more on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
