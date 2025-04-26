"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X, LogOut, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { useUser } from "@/components/user-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Forums", href: "/forums" },
  { name: "Webinars / Live Sessions", href: "/webinars" },
  { name: "Profile", href: "/profile" },
  { name: "Contact Us", href: "/contact" },
  { name: "News", href: "/news" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, role, logout } = useUser()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="bg-background border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              IT-ISQS
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors",
                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Show Create button for instructors */}
          {isAuthenticated && role === "instructor" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <Plus className="h-4 w-4" /> Create
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push("/instructor/create-course")}>
                  Create Course
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/instructor/create-webinar")}>
                  Create Webinar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-[150px] pl-8 rounded-full bg-muted/50 h-9" />
            </div>
            <ModeToggle />
          </div>
          <div className="flex items-center gap-2 ml-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">My Account ({role})</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/profile")}>Profile</DropdownMenuItem>
                  {role === "student" && (
                    <DropdownMenuItem onClick={() => router.push("/my-courses")}>My Courses</DropdownMenuItem>
                  )}
                  {role === "instructor" && (
                    <>
                      <DropdownMenuItem onClick={() => router.push("/instructor/my-courses")}>
                        My Courses
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/instructor/my-webinars")}>
                        My Webinars
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                    <LogOut className="mr-2 h-4 w-4" /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link href="/log-in">Log in</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IT-ISQS
              </span>
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7",
                      pathname === item.href ? "bg-primary/10 text-primary" : "hover:bg-muted",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Show Create options for instructors */}
                {isAuthenticated && role === "instructor" && (
                  <>
                    <div className="pt-2 pb-1 px-3 text-sm font-semibold text-muted-foreground">Instructor Actions</div>
                    <Link
                      href="/instructor/create-course"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Create Course
                    </Link>
                    <Link
                      href="/instructor/create-webinar"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Create Webinar
                    </Link>
                  </>
                )}
              </div>
              <div className="py-6">
                <div className="relative mb-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search..." className="w-full pl-8 rounded-full bg-muted/50" />
                </div>
                <div className="flex flex-col gap-2">
                  {isAuthenticated ? (
                    <>
                      <div className="text-sm mb-2">
                        Signed in as: <span className="font-semibold">{role}</span>
                      </div>
                      <Button variant="outline" asChild className="w-full" onClick={() => router.push("/profile")}>
                        <Link href="/profile">My Profile</Link>
                      </Button>
                      <Button variant="destructive" className="w-full" onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" /> Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/sign-in">Sign in</Link>
                      </Button>
                      <Button asChild className="w-full">
                        <Link href="/log-in">Log in</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
