"use client"

import { motion } from "motion/react"
import { ExternalLink, CheckCircle } from "lucide-react"

export function ExperienceCertificationsTechStack() {
  const experiences = [
    {
      date: "Dec 2025 - Present",
      role: "Software Engineer",
      company: "Digilins",
      desc: "Developing scalable web applications, REST APIs and cloud solutions. Working with modern tech stack and best practices."
    },
    {
      date: "2024 (Internship)",
      role: "Full Stack Developer Intern",
      company: "Digilins",
      desc: "Assisted in building and maintaining web applications and internal tools."
    }
  ]

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "ex" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
    { name: "Linux", icon: "🐧" },
    { name: "CI/CD", icon: "🔄" },
    { name: "GitHub", icon: "🐙" },
    { name: "Redis", icon: "🔴" },
    { name: "JWT", icon: "🔑" }
  ]

  return (
    <section className="py-12">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Col 1: EXPERIENCE (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xs font-mono font-semibold tracking-wider text-foreground/50 uppercase">
              EXPERIENCE
            </h2>

            <div className="p-5 rounded-xl border border-border/40 bg-[#0A0E14] space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-5 border-l border-[#22E88A]/30 space-y-1">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#22E88A]"></span>
                  <p className="text-[11px] font-mono text-foreground/40">{exp.date}</p>
                  <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                  <p className="text-xs font-mono text-[#22E88A]">{exp.company}</p>
                  <p className="text-xs text-foreground/60 leading-relaxed pt-1">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: CERTIFICATIONS (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xs font-mono font-semibold tracking-wider text-foreground/50 uppercase">
              CERTIFICATIONS
            </h2>

            <div className="p-5 rounded-xl border border-border/40 bg-[#0A0E14] flex flex-col justify-between min-h-[250px]">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center font-bold text-xs text-[#FF9900]">
                    aws
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">AWS Certified</h3>
                    <p className="text-sm font-extrabold text-[#FF9900]">Cloud Practitioner</p>
                    <p className="text-[10px] font-mono text-foreground/40">CLF-C02</p>
                  </div>
                </div>

                <p className="text-xs text-foreground/60 font-mono">Issued: 2025</p>
              </div>

              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <button className="inline-flex items-center text-xs font-mono text-[#22E88A] hover:underline">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" /> Verify &rarr;
                </button>
                <div className="flex space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22E88A]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: TECH STACK (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-xs font-mono font-semibold tracking-wider text-foreground/50 uppercase">
              TECH STACK
            </h2>

            <div className="p-5 rounded-xl border border-border/40 bg-[#0A0E14]">
              <div className="grid grid-cols-5 gap-3 text-center">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#0F141C] border border-border/30 hover:border-[#22E88A]/40 transition-colors">
                    <span className="text-base mb-1">{tech.icon}</span>
                    <span className="text-[9px] font-mono text-foreground/60 truncate w-full">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
