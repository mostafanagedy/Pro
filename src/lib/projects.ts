export interface Project {
  slug: string
  title: string
  category: string
  description: string
  technologies: string[]
  liveDemo?: string
  github?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "amazon-ecommerce",
    title: "Amazon E-Commerce",
    category: "E-Commerce",
    description: "Full featured Amazon-inspired E-Commerce web application deployed on Vercel with cart management, product views, and responsive UI.",
    technologies: ["React", "JavaScript", "Node.js", "Vercel"],
    liveDemo: "https://amazon-ecommerce-main.vercel.app",
    github: "https://github.com/mostafanagedy/AmazonEcommerce-main",
    featured: true
  },
  {
    slug: "e-commerce-f",
    title: "E-Commerce Store",
    category: "E-Commerce",
    description: "Modern E-Commerce front-end application built with clean UI/UX and deployed on Vercel.",
    technologies: ["React", "CSS3", "JavaScript", "Vercel"],
    liveDemo: "https://e-commerce-f-red.vercel.app",
    github: "https://github.com/mostafanagedy/E-COMMERCE-f",
    featured: true
  },
  {
    slug: "bunyan",
    title: "Bunyan Platform",
    category: "Web Apps",
    description: "Interactive web platform built for seamless user engagement and modern design aesthetics.",
    technologies: ["React", "JavaScript", "Vercel"],
    liveDemo: "https://bunyan-eight.vercel.app",
    github: "https://github.com/mostafanagedy/bunyan",
    featured: true
  },
  {
    slug: "careers-app",
    title: "Careers App",
    category: "Web Apps",
    description: "Careers and recruitment web portal based on Figma designs, featuring responsive layout and search filtering.",
    technologies: ["React", "JavaScript", "Figma", "Vercel"],
    liveDemo: "https://careers-app-figma.vercel.app",
    github: "https://github.com/mostafanagedy/Careers-App-Figma",
    featured: false
  },
  {
    slug: "asas",
    title: "Asas Platform",
    category: "Web Apps",
    description: "Web application deployed on GitHub Pages focusing on high performance and clean structure.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveDemo: "https://mostafanagedy.github.io/Asas/",
    github: "https://github.com/mostafanagedy/Asas",
    featured: false
  },
  {
    slug: "it-s-my",
    title: "It's My App",
    category: "Web Apps",
    description: "Modern web solution crafted with TypeScript and Next.js, deployed on Vercel.",
    technologies: ["Next.js", "TypeScript", "Vercel"],
    liveDemo: "https://it-s-my.vercel.app",
    github: "https://github.com/mostafanagedy/it-s-my",
    featured: false
  }
]
