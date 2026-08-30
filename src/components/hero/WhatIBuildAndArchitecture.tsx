"use client"

import { motion } from "motion/react"
import { Globe, ShoppingCart, Server, Cloud, Code2, GitBranch, User, Database } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    description: "Modern, responsive and performance-optimized web apps.",
    icon: <Globe className="w-5 h-5 text-[#22E88A]" />
  },
  {
    title: "E-Commerce Platforms",
    description: "Full-featured e-commerce solutions with secure payments.",
    icon: <ShoppingCart className="w-5 h-5 text-[#22E88A]" />
  },
  {
    title: "REST APIs",
    description: "Scalable, secure and well-documented APIs.",
    icon: <Server className="w-5 h-5 text-[#22E88A]" />
  },
  {
    title: "Cloud Solutions",
    description: "Deploy, manage and scale applications on AWS cloud.",
    icon: <Cloud className="w-5 h-5 text-[#22E88A]" />
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated workflows, CI/CD pipelines and infrastructure.",
    icon: <GitBranch className="w-5 h-5 text-[#22E88A]" />
  },
  {
    title: "System Architecture",
    description: "Design scalable and maintainable software architectures.",
    icon: <Code2 className="w-5 h-5 text-[#22E88A]" />
  }
]

export function WhatIBuildAndArchitecture() {
  return (
    <section className="py-12">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: What I Build (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-xs font-mono font-semibold tracking-wider text-foreground/50 uppercase">
              WHAT I BUILD
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl border border-border/40 bg-[#0A0E14] hover:border-[#22E88A]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#22E88A]/10 border border-[#22E88A]/20 flex items-center justify-center mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{service.title}</h3>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Architecture Approach (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-xs font-mono font-semibold tracking-wider text-foreground/50 uppercase">
              ARCHITECTURE APPROACH
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border/40 bg-[#0A0E14] flex flex-col items-center justify-center min-h-[350px]"
            >
              <div className="w-full max-w-sm flex flex-col items-center space-y-3 font-mono text-xs">
                
                {/* User */}
                <div className="w-40 py-2 rounded-lg border border-purple-500/50 bg-purple-500/10 text-purple-300 flex items-center justify-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>User</span>
                </div>

                <div className="w-px h-3 bg-border"></div>

                {/* React / Next.js */}
                <div className="w-52 py-2 rounded-lg border border-blue-500/50 bg-blue-500/10 text-blue-300 flex items-center justify-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>React / Next.js (Frontend)</span>
                </div>

                <div className="w-px h-3 bg-border"></div>

                {/* API Gateway */}
                <div className="w-52 py-2 rounded-lg border border-[#22E88A]/50 bg-[#22E88A]/10 text-[#22E88A] flex items-center justify-center space-x-2">
                  <Server className="w-4 h-4" />
                  <span>API Gateway (Nginx)</span>
                </div>

                <div className="w-px h-3 bg-border"></div>

                {/* Backend & Redis Row */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-44 py-2 rounded-lg border border-[#22E88A]/50 bg-[#22E88A]/10 text-[#22E88A] flex items-center justify-center space-x-1.5">
                    <Server className="w-3.5 h-3.5" />
                    <span>Node.js / Express</span>
                  </div>
                  
                  <div className="w-8 h-px bg-border border-dashed"></div>

                  <div className="w-28 py-2 rounded-lg border border-red-500/50 bg-red-500/10 text-red-300 flex items-center justify-center space-x-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>Redis (Cache)</span>
                  </div>
                </div>

                <div className="w-px h-3 bg-border -ml-28"></div>

                {/* Database & Storage Row */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-44 py-2 rounded-lg border border-emerald-500/50 bg-emerald-500/10 text-emerald-300 flex items-center justify-center space-x-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>MongoDB (Database)</span>
                  </div>

                  <div className="w-8 h-px bg-border border-dashed"></div>

                  <div className="w-28 py-2 rounded-lg border border-orange-500/50 bg-orange-500/10 text-orange-300 flex items-center justify-center space-x-1">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>AWS S3</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
