import React from 'react'
import { Menu, X, Globe, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useAppContext } from '@/context/AppContext'
import { translations } from '@/lib/translations'

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { lang, theme, toggleLang, toggleTheme } = useAppContext()
  const t = translations[lang].nav

  const menuItems = [
    { name: t.features, href: '#features' },
    { name: t.howItWorks, href: '#how-it-works' },
    { name: t.download, href: '#download' },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : 'inactive'}
        className={cn(
          'fixed z-20 w-full transition-all duration-300',
          isScrolled && 'border-b border-black/5 bg-background/75 backdrop-blur-lg'
        )}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-6 lg:gap-0">
            <div className="flex w-full justify-between gap-6 lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2 "
              >
                <span className="text-2xl font-bold text-primary">FixPay</span>
              </a>

              <div className="flex items-center gap-2 lg:hidden">
                <Button variant="ghost" size="icon" onClick={toggleLang} className="rounded-full">
                  <Globe className="size-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                  {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </Button>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                  className="relative z-20 p-2.5"
                >
                  <Menu className="m-auto size-6 duration-200 in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100" />
                </button>
              </div>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                <div className="hidden lg:flex items-center gap-1">
                  {menuItems.map((item, index) => (
                    <Button key={index} asChild variant="ghost" size="sm" className="rounded-full">
                      <a href={item.href}>{item.name}</a>
                    </Button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={toggleLang} className="rounded-full gap-2 px-3">
                    <Globe className="size-4" />
                    <span>{lang === 'en' ? 'عربي' : 'English'}</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                    {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </Button>
                </div>

                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className={cn("rounded-full px-4 py-2")}
                >
                  <a href="#">
                    <span>{t.login}</span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="sm"
                  className={cn("rounded-full px-4 py-2")}
                >
                  <a href="#">
                    <span>{t.signup}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}