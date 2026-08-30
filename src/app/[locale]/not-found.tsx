"use client"

import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-32 flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h1 className="text-8xl font-black text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg text-foreground/60 max-w-md mb-8 font-mono">
        Looks like you're lost in the code...
      </p>
      
      {/* Astronaut or futuristic visual placeholder */}
      <div className="w-64 h-64 mb-12 relative opacity-80">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-4 rounded-full border border-primary/40 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-primary text-xl">
          {"</>"}
        </div>
      </div>

      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
        <Link href="/">
          {"> Go Back Home"}
        </Link>
      </Button>
    </div>
  )
}
