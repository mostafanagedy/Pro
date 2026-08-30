"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "@/i18n/routing"
import Image from "next/image"

export function Hero() {
  const t = useTranslations("HomePage")

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Content) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-[#22E88A] bg-[#22E88A]/10 w-fit px-3 py-1.5 rounded-full border border-[#22E88A]/20">
              <span className="w-2 h-2 rounded-full bg-[#22E88A] animate-pulse"></span>
              <span>developer@portfolio:~</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-[#22E88A]">Nagedy</span> 👋<br />
              <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground/90 block mt-2">
                Full Stack Software Engineer_
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed">
              I build scalable web applications, RESTful APIs and digital products that solve real problems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-[#22E88A] hover:bg-[#1fd37d] text-black font-semibold shadow-lg shadow-[#22E88A]/20">
                <Link href="/projects">
                  <span className="mr-1">&gt;</span> View My Work
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-border/60 hover:bg-secondary/60 text-foreground font-medium">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono rounded-md bg-[#0F141C] border border-border/40 text-foreground/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Desk Setup & System Status Overlay) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl border border-border/50 bg-[#0B0F14] overflow-hidden shadow-2xl group">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/hero_desk.jpg"
                  alt="Developer Workspace"
                  fill
                  priority
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent"></div>
              </div>

              {/* Float code icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#22E88A]/20 border border-[#22E88A]/50 backdrop-blur-md flex items-center justify-center text-[#22E88A] font-mono text-xl shadow-lg">
                &lt;/&gt;
              </div>

              {/* System Status Floating Card */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-48 sm:w-56 rounded-xl border border-border/60 bg-[#0B0F14]/90 backdrop-blur-md p-4 shadow-xl text-xs font-mono">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-border/40 text-foreground/50 tracking-wider">
                  <span>SYSTEM STATUS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22E88A]"></span>
                </div>
                
                <div className="space-y-2">
                  {[
                    { name: "BACKEND", status: "ONLINE" },
                    { name: "DATABASE", status: "ONLINE" },
                    { name: "API GATEWAY", status: "ONLINE" },
                    { name: "REDIS CACHE", status: "ONLINE" },
                    { name: "STORAGE (S3)", status: "ONLINE" },
                  ].map((service) => (
                    <div key={service.name} className="flex justify-between items-center">
                      <span className="text-foreground/70">{service.name}</span>
                      <span className="text-[#22E88A] flex items-center text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22E88A] mr-1 animate-ping"></span>
                        {service.status}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-3 pt-2 border-t border-border/40">
                  <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
                    <span>UPTIME</span>
                    <span className="text-foreground/80">32d 14h 27m</span>
                  </div>
                  {/* Sparkline chart SVG */}
                  <svg className="w-full h-4 text-[#22E88A]" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M0 15 L15 12 L30 14 L45 8 L60 10 L75 4 L90 7 L100 2" />
                  </svg>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
