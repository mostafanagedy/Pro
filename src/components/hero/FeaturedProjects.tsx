"use client"

import { motion } from "motion/react"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { projects } from "@/lib/projects"

export function FeaturedProjects() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section className="py-12">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-mono font-semibold tracking-wider text-foreground/50 uppercase">
            FEATURED PROJECTS
          </h2>
          <Link href="/projects" className="text-xs font-mono text-foreground/60 hover:text-[#22E88A] transition-colors flex items-center">
            View all projects <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border/40 bg-[#0A0E14] overflow-hidden flex flex-col justify-between hover:border-[#22E88A]/40 transition-colors group shadow-xl"
            >
              <div>
                {/* iFrame Browser Mockup Preview */}
                <div className="relative h-48 w-full overflow-hidden bg-[#070A0F] border-b border-border/40">
                  <div className="absolute top-0 left-0 right-0 z-10 px-3 py-1 bg-[#0F141C]/90 backdrop-blur border-b border-border/30 flex items-center justify-between font-mono text-[9px]">
                    <div className="flex space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                    </div>
                    <span className="text-foreground/40 truncate max-w-[150px]">{project.liveDemo}</span>
                  </div>

                  {project.liveDemo ? (
                    <div className="w-full h-full pt-6 relative overflow-hidden">
                      <iframe
                        src={project.liveDemo}
                        title={project.title}
                        className="w-[133%] h-[133%] origin-top-left scale-[0.75] border-none pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-40"></div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full pt-6 text-foreground/40 font-mono text-xs">
                      Live Preview Unavailable
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white group-hover:text-[#22E88A] transition-colors">{project.title}</h3>
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-foreground/40 group-hover:text-[#22E88A] transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-[11px] font-mono text-[#22E88A]">{project.category}</p>
                  <p className="text-xs text-foreground/70 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#0F141C] border border-border/40 text-foreground/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 py-3 border-t border-border/40 flex items-center justify-between text-xs font-mono bg-[#070A0F]">
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-white transition-colors">
                    Live Demo &rarr;
                  </a>
                )}
                <Link href={`/projects/${project.slug}`} className="text-[#22E88A] hover:underline">
                  View Case Study &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
