"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export function LangToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en"
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={switchLocale}
      className="font-mono text-sm uppercase px-2 h-9 border border-border/50 bg-background/50 backdrop-blur-sm"
    >
      {locale === "en" ? "AR" : "EN"}
    </Button>
  )
}
