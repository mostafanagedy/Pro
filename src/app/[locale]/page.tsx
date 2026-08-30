import { Hero } from "@/components/hero/Hero"
import { TerminalAndGithub } from "@/components/terminal/TerminalAndGithub"
import { Stats } from "@/components/hero/Stats"
import { WhatIBuildAndArchitecture } from "@/components/hero/WhatIBuildAndArchitecture"
import { FeaturedProjects } from "@/components/hero/FeaturedProjects"
import { ExperienceCertificationsTechStack } from "@/components/hero/ExperienceCertificationsTechStack"
import { CtaBanner } from "@/components/hero/CtaBanner"

export default function HomePage() {
  return (
    <div className="space-y-4 pb-12">
      <Hero />
      <TerminalAndGithub />
      <Stats />
      <WhatIBuildAndArchitecture />
      <FeaturedProjects />
      <ExperienceCertificationsTechStack />
      <CtaBanner />
    </div>
  )
}
