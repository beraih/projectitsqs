import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Mail } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">NEWS</h1>
      </div>
      {/* Featured News - Only one fixed announcement */}
      <Card className="overflow-hidden">
        <div className="md:grid md:grid-cols-2">
          <div className="relative aspect-video md:aspect-auto md:h-full">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="IT-ISQS Erasmus Project Kicks Off"
              fill
              className="object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-primary">Announcement</Badge>
          </div>
          <div className="p-6 md:p-8">
            <CardHeader className="p-0 pb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>March 2025</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl">IT-ISQS Erasmus Project Kicks Off!</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pb-6">
              <p className="mb-4">
                The IT-ISQS Erasmus Project has officially started! Our community website is now live, bringing together
                students, educators, and researchers for enhanced collaboration.
              </p>
              <p className="mb-4">
                This initiative aims to create a knowledge-sharing ecosystem where IT and ISQS professionals can learn,
                collaborate, and grow together. The platform offers courses, webinars, discussion forums, and research
                collaboration opportunities.
              </p>
              <p>
                Our mission is to bridge the gap between academic knowledge and industry practice by providing a space
                where theory meets application. We invite you to explore our resources, join discussions, and contribute
                to this growing community of IT and ISQS enthusiasts.
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
      {/* News Grid */}
      {/*
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>April 2025</span>
              </div>
              <CardTitle>New Course: "AI & Machine Learning for Beginners"</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="AI & Machine Learning Course"
                  width={350}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="line-clamp-3">
                A brand-new course on AI & Machine Learning is now available. Learn the fundamentals of artificial
                intelligence from top instructors and start your journey in this exciting field!
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/courses/ai-machine-learning">View Course</Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>May 2025</span>
              </div>
              <CardTitle>Upcoming Webinar: "The Future of Cybersecurity"</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Cybersecurity Webinar"
                  width={350}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="line-clamp-3">
                Join us for an exclusive live webinar on cybersecurity trends and challenges with industry experts.
                Don't miss this chance to gain insights and ask your questions!
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/webinars/future-cybersecurity">Register Now</Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>March 2025</span>
              </div>
              <CardTitle>Community Forum is Now Open!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Community Forum"
                  width={350}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="line-clamp-3">
                Our discussion forums are now live! Connect with fellow students, ask questions, and participate in
                knowledge-sharing discussions. Let's build a strong IT-ISQS community together!
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/forums">Visit Forums</Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>April 2025</span>
              </div>
              <CardTitle>Research Collaboration Portal Launched!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Research Collaboration Portal"
                  width={350}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="line-clamp-3">
                Need a partner for your research project? Our Collaboration Portal is here! Find like-minded individuals
                and work together on innovative IT & ISQS projects.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/collaboration">Explore Portal</Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>March 2025</span>
              </div>
              <CardTitle>IT-ISQS Partners with Leading Tech Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Tech Partnerships"
                  width={350}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="line-clamp-3">
                We're excited to announce new partnerships with leading technology companies to provide our community
                with exclusive resources, internship opportunities, and industry insights.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/news/partnerships">Read More</Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4" />
                <span>February 2025</span>
              </div>
              <CardTitle>IT-ISQS Annual Conference Announced</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Annual Conference"
                  width={350}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="line-clamp-3">
                Mark your calendars! The IT-ISQS Annual Conference will take place on June 15-17, 2025. Join us for
                keynote speeches, workshops, and networking opportunities.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/conference">Learn More</Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/news/archive">
              View News Archive
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      /*
      <div className="mt-16 bg-muted/50 rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest news, course releases, and upcoming webinars.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Your email address" className="sm:flex-1" />
            <Button type="submit">
              <Mail className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </form>
        </div>
      </div>
      */
    </div>
  )
}
