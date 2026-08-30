"use client"

import { motion } from "motion/react"
import { Folder, Calendar, Code2, Star } from "lucide-react"

const stats = [
  { value: "5+", label: "Projects Completed", icon: <Folder className="w-5 h-5 text-primary" /> },
  { value: "2+", label: "Years Experience", icon: <Calendar className="w-5 h-5 text-primary" /> },
  { value: "10+", label: "Technologies", icon: <Code2 className="w-5 h-5 text-primary" /> },
  { value: "100%", label: "Client Satisfaction", icon: <Star className="w-5 h-5 text-primary" /> },
]

export function Stats() {
  return (
    <section className="py-8">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl border border-border/40 bg-[#0A0E14] hover:border-[#22E88A]/40 transition-colors flex items-center space-x-4"
            >
              <div className="p-3 rounded-lg bg-[#22E88A]/10 text-[#22E88A]">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-foreground/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
