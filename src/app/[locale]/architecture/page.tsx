"use client"

import { User, Server, Database, Cloud, Network } from "lucide-react"
import { motion } from "motion/react"

export default function ArchitecturePage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Architecture Approach</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          I design scalable, secure, and maintainable systems.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Features/Principles */}
        <div className="md:w-1/3 flex flex-col space-y-8">
          <div className="flex gap-4">
            <div className="mt-1 w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <Server className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Scalability</h3>
              <p className="text-sm text-foreground/60">Design systems that grow with your business.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <Network className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Security</h3>
              <p className="text-sm text-foreground/60">Implementing zero-trust architecture keeping data safe.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <Cloud className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Performance</h3>
              <p className="text-sm text-foreground/60">Optimize for speed and efficiency using edge networks.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Diagram */}
        <div className="md:w-2/3">
          <div className="border border-border/40 bg-card/20 rounded-2xl p-8 backdrop-blur overflow-x-auto">
            <div className="min-w-[500px] flex flex-col items-center gap-6">
              
              <div className="flex items-center gap-2 px-6 py-3 border border-purple-500/30 rounded-lg bg-purple-500/10 text-purple-300">
                <User className="w-5 h-5" /> User
              </div>
              
              <div className="w-px h-6 bg-border"></div>
              
              <div className="flex items-center gap-2 px-6 py-3 border border-blue-500/30 rounded-lg bg-blue-500/10 text-blue-300">
                <Network className="w-5 h-5" /> React / Next.js (Frontend)
              </div>
              
              <div className="w-px h-6 bg-border"></div>
              
              <div className="flex items-center gap-2 px-6 py-3 border border-green-500/30 rounded-lg bg-green-500/10 text-green-300">
                <Server className="w-5 h-5" /> API Gateway (Nginx)
              </div>
              
              <div className="w-px h-6 bg-border"></div>
              
              <div className="flex items-center gap-16 relative">
                <div className="flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-lg bg-primary/10 text-primary">
                  <Server className="w-5 h-5" /> Node.js / Express (Backend)
                </div>
                
                <div className="absolute left-[100%] w-16 h-px bg-border border-dashed"></div>
                
                <div className="flex items-center gap-2 px-6 py-3 border border-red-500/30 rounded-lg bg-red-500/10 text-red-300">
                  <Database className="w-5 h-5" /> Redis (Cache)
                </div>
              </div>
              
              <div className="w-px h-6 bg-border -ml-[230px]"></div>
              
              <div className="flex items-center gap-16 relative">
                <div className="flex items-center gap-2 px-6 py-3 border border-emerald-500/30 rounded-lg bg-emerald-500/10 text-emerald-300">
                  <Database className="w-5 h-5" /> MongoDB (Database)
                </div>
                
                <div className="absolute left-[100%] w-16 h-px bg-border border-dashed"></div>
                
                <div className="flex items-center gap-2 px-6 py-3 border border-orange-500/30 rounded-lg bg-orange-500/10 text-orange-300">
                  <Cloud className="w-5 h-5" /> AWS S3 (Storage)
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
