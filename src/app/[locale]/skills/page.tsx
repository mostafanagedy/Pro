"use client"

export default function SkillsPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "SQL"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD", "Linux", "Git"] },
  ]

  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Skills</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Technologies and tools I work with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur">
            <h2 className="text-xl font-semibold mb-6 text-primary">{skillGroup.category}</h2>
            <div className="flex flex-col space-y-4">
              {skillGroup.items.map(item => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                  <span className="text-foreground/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
