import { Smartphone, Tablet } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAppContext } from "@/context/AppContext"
import { translations } from "@/lib/translations"

const Download2 = ({ className }) => {
  const { lang } = useAppContext();
  const t = translations[lang].download;

  return (
    <section id="download" className={cn("bg-muted/50 py-32", className)}>
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-balance font-serif text-4xl font-medium">
            {t.title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-6 mt-4 text-balance">
            {t.desc}
          </p>
        </div>

        {/* Download Options */}
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* iOS */}
          <div className="text-center group">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              iOS
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {lang === 'en' ? 'Designed specifically for iOS devices.' : 'مصمم خصيصاً لأجهزة iOS.'}
            </p>
            <a href="#" className="mx-auto block w-fit hover:opacity-80 transition-opacity">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                alt={t.appStore}
                className="h-10"
              />
            </a>
          </div>

          {/* Android */}
          <div className="text-center group">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Tablet className="h-10 w-10 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              Android
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {lang === 'en' ? 'Optimized for Android ecosystem.' : 'محسن لنظام الأندرويد.'}
            </p>
            <a href="#" className="mx-auto block w-fit hover:opacity-80 transition-opacity">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                alt={t.googlePlay}
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Download2 }