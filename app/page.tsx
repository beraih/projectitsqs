import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowRight, Coffee } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to IT-ISQS Knowledge Sharing Platform
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore courses, participate in discussions, and engage with the community.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/webinars">Join Webinars</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
              <Image
                src="/images/online-learning.png"
                alt="Online Learning Illustration"
                width={800}
                height={550}
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Community Highlights</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <CardTitle>Welcome & Introductions</CardTitle>
                </div>
                <CardDescription>Social Discussion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  New to the community? Introduce yourself and connect with fellow IT-ISQS members in this friendly
                  thread.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/forums/social/introduction">
                    Join Discussion
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle>Best programming languages for AI?</CardTitle>
                </div>
                <CardDescription>Academic Discussion</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">
                  Community members discuss which programming languages are most effective for AI development and
                  machine learning projects.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/forums/academic/ai-languages">
                    Join Discussion
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/forums">View All Discussions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Courses</h2>
            <p className="text-muted-foreground">
              Expand your knowledge with expert-led courses designed to enhance your skills.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="card-hover">
              <CardHeader className="pb-3">
                <div className="aspect-video relative mb-2 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Introduction to Python"
                    width={350}
                    height={200}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardTitle>Introduction to Python</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Dr. John Doe</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm">
                  Learn the fundamentals of Python programming language and start your coding journey.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/courses/introduction-to-python">View Course</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-3">
                <div className="aspect-video relative mb-2 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Web Development with React"
                    width={350}
                    height={200}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardTitle>Web Development with React</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Jane Doe</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm">
                  Master modern web development using React and build interactive user interfaces.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/courses/web-development-react">View Course</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader className="pb-3">
                <div className="aspect-video relative mb-2 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Cybersecurity Essentials"
                    width={350}
                    height={200}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardTitle>Cybersecurity Essentials</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Alex Brown</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm">
                  Learn essential cybersecurity concepts and protect your systems from threats.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/courses/cybersecurity-essentials">View Course</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
