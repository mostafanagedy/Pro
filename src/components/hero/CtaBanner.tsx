"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Send, Download } from "lucide-react"
import { Link } from "@/i18n/routing"
import Image from "next/image"

export function CtaBanner() {
  return (
    <section className="py-12">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-purple-500/30 bg-gradient-to-r from-[#110B24] via-[#0F0C1E] to-[#0A0D18] p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-8 space-y-4 z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                LET'S BUILD SOMETHING AMAZING TOGETHER 🚀
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 max-w-lg">
                Have a project in mind? Let's discuss how I can help you build it.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-[#22E88A] hover:bg-[#1fd37d] text-black font-semibold shadow-lg shadow-[#22E88A]/20">
                  <Link href="/contact">
                    <Send className="mr-2 h-4 w-4" /> Start a Conversation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-border/60 hover:bg-secondary/60 text-foreground font-medium">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </div>

            {/* Right Astronaut Image */}
            <div className="md:col-span-4 flex justify-center md:justify-end z-10">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl">
                <Image
                  src="/images/astronaut.jpg"
                  alt="3D Astronaut Developer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
