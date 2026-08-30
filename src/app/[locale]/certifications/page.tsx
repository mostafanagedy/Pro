"use client"

import { ExternalLink } from "lucide-react"

export default function CertificationsPage() {
  const certs = [
    {
      title: "AWS Certified Cloud Practitioner",
      id: "CLF-C02",
      issuer: "Amazon Web Services",
      date: "2025"
    }
  ]

  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Certifications</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Continuous learning, continuous growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert, i) => (
          <div key={i} className="p-8 rounded-2xl border border-border/40 bg-card/40 backdrop-blur hover:bg-secondary/40 transition-all group">
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 rounded-lg bg-background border border-border flex items-center justify-center font-bold text-xl text-primary">
                aws
              </div>
              <a href="#" className="text-foreground/30 group-hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <h2 className="text-xl font-bold mb-2">{cert.title}</h2>
            <p className="font-mono text-sm text-foreground/60 mb-6">{cert.id}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-foreground/80">{cert.issuer}</span>
              <span className="text-foreground/50">Issued: {cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
