"use client"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Digilins",
      date: "2025 - 2026",
      description: "Developing scalable web applications, REST APIs and cloud solutions. Working with modern tech stack and best practices.",
      tags: ["MERN Stack", "AWS", "Docker", "CI/CD"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Digilins",
      date: "2024",
      description: "Assisted in building and maintaining web applications and internal tools.",
      tags: ["React", "Node.js", "MongoDB", "Git"]
    }
  ]

  return (
    <div className="container max-w-screen-md mx-auto px-4 md:px-8 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          My professional journey so far.
        </p>
      </div>

      <div className="relative border-l border-border/40 ml-4 md:ml-0 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 md:pl-12">
            <div className="absolute w-4 h-4 rounded-full bg-primary left-[-8.5px] top-1.5 ring-4 ring-background"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <span className="text-sm font-mono text-primary/80 mt-1 md:mt-0">{exp.date}</span>
            </div>
            <h4 className="text-foreground/80 font-medium mb-4">{exp.company}</h4>
            <p className="text-foreground/60 leading-relaxed mb-4">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-secondary/50 border border-border/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
