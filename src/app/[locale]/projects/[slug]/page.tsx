import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Link } from "@/i18n/routing"

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container max-w-screen-md mx-auto px-4 md:px-8 py-24">
      <Link href="/projects" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
      </Link>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-8">
          <span>{project.category}</span>
          <span>&bull;</span>
          <span>Full Stack Development</span>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
              <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-border/50 bg-background font-medium rounded-md hover:bg-secondary transition-colors">
              <GithubIcon className="w-4 h-4 mr-2" /> View Source
            </a>
          )}
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2>Overview</h2>
        <p className="text-foreground/80 leading-relaxed text-lg">
          {project.description}
        </p>

        <h2 className="mt-12">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1.5 text-sm font-mono rounded-lg bg-secondary/50 border border-border/50">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="mt-12">Architecture & Implementation</h2>
        <p className="text-foreground/80 leading-relaxed">
          The architecture focuses on scalability, clean code principles, and seamless integration between the frontend and backend services. The use of modern frameworks ensures high performance and an optimal developer experience.
        </p>
      </div>
    </div>
  )
}
