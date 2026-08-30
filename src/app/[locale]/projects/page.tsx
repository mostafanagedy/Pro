import { projects } from "@/lib/projects"
import { Link } from "@/i18n/routing"
import { ExternalLink } from "lucide-react"

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function ProjectsPage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">My Projects</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Deployed live applications and repositories from my GitHub profile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.slug} 
            className="group flex flex-col justify-between rounded-2xl border border-border/40 bg-[#0A0E14] overflow-hidden hover:border-[#22E88A]/50 transition-all duration-300 shadow-xl"
          >
            <div>
              {/* iFrame Live Website Preview Window */}
              <div className="relative h-52 w-full overflow-hidden bg-[#070A0F] border-b border-border/40">
                {/* Browser bar header mockup */}
                <div className="absolute top-0 left-0 right-0 z-10 px-3 py-1.5 bg-[#0F141C]/90 backdrop-blur border-b border-border/30 flex items-center justify-between font-mono text-[10px]">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-foreground/40 truncate max-w-[180px]">{project.liveDemo || project.title}</span>
                </div>

                {project.liveDemo ? (
                  <div className="w-full h-full pt-7 relative overflow-hidden">
                    <iframe
                      src={project.liveDemo}
                      title={project.title}
                      className="w-[133%] h-[133%] origin-top-left scale-[0.75] border-none pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    {/* Transparent Click Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-40"></div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full pt-7 text-foreground/40 font-mono text-xs">
                    Live Preview Unavailable
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-white group-hover:text-[#22E88A] transition-colors">{project.title}</h2>
                  <div className="flex items-center space-x-2.5">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="text-foreground/50 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label={`Open live demo for ${project.title}`}
                        className="text-foreground/50 hover:text-[#22E88A] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs font-mono text-[#22E88A] mb-3">{project.category}</p>

                <p className="text-xs text-foreground/70 mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#0F141C] text-foreground/80 border border-border/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border/30 bg-[#070A0F] flex items-center justify-between text-xs font-mono">
              {project.liveDemo ? (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-white transition-colors">
                  Live Demo &rarr;
                </a>
              ) : <span></span>}
              <Link href={`/projects/${project.slug}`} className="text-[#22E88A] hover:underline">
                View Details &rarr;
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
