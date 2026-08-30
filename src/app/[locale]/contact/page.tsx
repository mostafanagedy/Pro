"use client"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 md:px-8 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Build Something Amazing Together 🚀</h1>
        <p className="text-lg text-foreground/60 max-w-2xl">
          Have a project in mind or want to collaborate? Let's talk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a href="mailto:mstfymajdn7@gmail.com" className="text-primary hover:underline">mstfymajdn7@gmail.com</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-foreground/80">Cairo, Egypt</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <a href="https://github.com/mostafanagedy" target="_blank" rel="noreferrer" className="text-primary hover:underline">github.com/mostafanagedy</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a href="https://linkedin.com/in/mostafa-nagdey" target="_blank" rel="noreferrer" className="text-primary hover:underline">linkedin.com/in/mostafa-nagdey</a>
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" type="email" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <input id="subject" type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" rows={5} className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50" required></textarea>
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
