"use client"

import * as React from "react"
import { motion } from "motion/react"
import { X, Minus, Square } from "lucide-react"

type Command = "whoami" | "skills" | "projects" | "experience" | "education" | "contact" | "help" | "clear"

export function Terminal() {
  const [history, setHistory] = React.useState<{cmd: string, output: React.ReactNode}[]>([
    {
      cmd: "whoami",
      output: (
        <div className="text-primary mt-1">
          NAGEDY<br />
          Full Stack Software Engineer
        </div>
      )
    }
  ])
  const [input, setInput] = React.useState("")
  const bottomRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase() as Command
    if (!cmd) return

    if (cmd === "clear") {
      setHistory([])
      setInput("")
      return
    }

    let output: React.ReactNode = "Command not found. Type 'help' for available commands."
    
    switch (cmd) {
      case "whoami":
        output = <div className="text-primary mt-1">NAGEDY<br/>Full Stack Software Engineer</div>
        break
      case "skills":
        output = <div className="mt-1 text-foreground/80">React, Next.js, Node.js, TypeScript, Tailwind, MongoDB, AWS, Docker</div>
        break
      case "projects":
        output = <div className="mt-1 text-foreground/80">1. NeGo App<br/>2. AGRSUP<br/>3. E-Commerce Platform</div>
        break
      case "experience":
        output = <div className="mt-1 text-foreground/80">Software Engineer @ Digilins (2025-2026)</div>
        break
      case "education":
        output = <div className="mt-1 text-foreground/80">B.Sc. Mathematics @ Sohag University</div>
        break
      case "contact":
        output = <div className="mt-1"><a href="mailto:mstfymajdn7@gmail.com" className="text-primary underline">mstfymajdn7@gmail.com</a></div>
        break
      case "help":
        output = <div className="mt-1 text-foreground/80">Available commands: whoami, skills, projects, experience, education, contact, clear</div>
        break
    }

    setHistory(prev => [...prev, { cmd: input, output }])
    setInput("")
  }

  return (
    <section className="py-16 md:py-24 container max-w-screen-xl mx-auto px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl overflow-hidden border border-border/40 bg-card/60 shadow-2xl font-mono text-sm"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-secondary/80 border-b border-border/40">
          <div className="flex space-x-2">
            <span className="text-foreground/50">{">_ Nagedy Terminal"}</span>
          </div>
          <div className="flex space-x-2">
            <button aria-label="Minimize" className="p-1 hover:bg-background/50 rounded"><Minus className="w-4 h-4" /></button>
            <button aria-label="Maximize" className="p-1 hover:bg-background/50 rounded"><Square className="w-3 h-3" /></button>
            <button aria-label="Close" className="p-1 hover:bg-destructive/20 hover:text-destructive rounded"><X className="w-4 h-4" /></button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row h-[400px]">
          {/* Sidebar / Tabs */}
          <div className="md:w-48 bg-secondary/30 border-b md:border-b-0 md:border-r border-border/40 p-4 flex flex-row md:flex-col overflow-x-auto gap-2 md:gap-1 scrollbar-hide">
            {["whoami", "skills", "projects", "experience", "education", "contact"].map(cmd => (
              <button 
                key={cmd}
                onClick={() => { setInput(cmd); document.getElementById("terminal-input")?.focus() }}
                className="text-left px-3 py-2 rounded-md hover:bg-secondary/50 text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {cmd}
              </button>
            ))}
          </div>
          
          {/* Main Terminal Window */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-background/50">
            {history.map((entry, i) => (
              <div key={i} className="mb-4">
                <div className="flex items-center text-foreground/70">
                  <span className="text-primary mr-2">nagedy@portfolio:~$</span>
                  <span>{entry.cmd}</span>
                </div>
                {entry.output}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center">
              <span className="text-primary mr-2">nagedy@portfolio:~$</span>
              <input
                id="terminal-input"
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                className="flex-1 bg-transparent border-none outline-none text-foreground caret-primary"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
