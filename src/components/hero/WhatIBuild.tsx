"use client"

import { motion } from "motion/react"
import { Globe, ShoppingCart, Server, Cloud, Code, GitBranch } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    description: "Building fast, responsive, and scalable single-page applications using React and Next.js.",
    icon: <Globe className="w-6 h-6 text-primary" />
  },
  {
    title: "E-Commerce Platforms",
    description: "Creating secure, high-conversion online stores with complex product management and payment integrations.",
    icon: <ShoppingCart className="w-6 h-6 text-primary" />
  },
  {
    title: "REST APIs",
    description: "Designing robust backends and microservices with Node.js, Express, and secure authentication.",
    icon: <Server className="w-6 h-6 text-primary" />
  },
  {
    title: "Cloud Solutions",
    description: "Deploying and managing applications on AWS with scalable infrastructure and storage solutions.",
    icon: <Cloud className="w-6 h-6 text-primary" />
  },
  {
    title: "System Architecture",
    description: "Planning and structuring complex applications, databases, and caching layers for optimal performance.",
    icon: <Code className="w-6 h-6 text-primary" />
  },
  {
    title: "DevOps & CI/CD",
    description: "Setting up automated testing and deployment pipelines using Docker and GitHub Actions.",
    icon: <GitBranch className="w-6 h-6 text-primary" />
  }
]

export function WhatIBuild() {
  return (
    <section className="py-24">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What I Build</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Delivering end-to-end solutions, from intuitive user interfaces to robust backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border/40 bg-card/40 backdrop-blur hover:bg-secondary/40 transition-all hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
