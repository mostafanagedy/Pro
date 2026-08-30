"use client"

import * as React from "react"
import { usePathname } from "@/i18n/routing"
import { Link } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "./ThemeToggle"
import { LangToggle } from "./LangToggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

const routes = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Architecture", path: "/architecture" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between space-x-2 md:space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.path ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LangToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden ml-2"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        href={route.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-lg font-medium",
                          pathname === route.path ? "text-foreground" : "text-foreground/60"
                        )}
                      >
                        {route.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
