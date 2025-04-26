import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, Clock } from "lucide-react"

export default function WebinarsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Live Webinars & Virtual Events</h1>
        <p className="text-xl text-muted-foreground">
          Join live sessions, interact with experts, and enhance your knowledge.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Upcoming Webinars */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Upcoming Webinars</h2>
          <p className="text-muted-foreground mb-6">
            When the webinar time arrives, log in to join the session via Google Meet.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>AI in Modern Business</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  April 02, 2025 - 09:07 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="AI in Modern Business"
                    width={600}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="rounded-full">
                    Business
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    AI
                  </Badge>
                </div>
                <p className="mb-4">
                  Learn how artificial intelligence is transforming modern businesses and creating new opportunities for
                  growth and innovation.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Speaker: Dr. John Smith</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Clock className="h-4 w-4" />
                  <span>Duration: 1.5 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled>
                  Join when available
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Cloud Security Best Practices</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  March 31, 2025 - 09:07 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Cloud Security Best Practices"
                    width={600}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="rounded-full">
                    Security
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    Cloud
                  </Badge>
                </div>
                <p className="mb-4">
                  Discover the latest best practices for securing cloud environments and protecting sensitive data from
                  emerging threats.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Speaker: Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Clock className="h-4 w-4" />
                  <span>Duration: 2 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled>
                  Join when available
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Ongoing Webinars */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Ongoing Webinars</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="card-hover border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Cybersecurity in FinTech</CardTitle>
                  <Badge className="bg-red-500">Live</Badge>
                </div>
                <CardDescription className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  March 20, 2025 - 08:13 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Cybersecurity in FinTech"
                    width={600}
                    height={300}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="live-indicator pl-4 text-white font-semibold">LIVE NOW</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="rounded-full">
                    FinTech
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    Security
                  </Badge>
                </div>
                <p className="mb-4">
                  Join this live session to learn about cybersecurity challenges and solutions in the financial
                  technology sector.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Speaker: Emily Carter</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default" asChild>
                  <Link href="/webinars/fintech-security/live">Join Live Session</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>The Future of Web3 & Blockchain</CardTitle>
                  <Badge className="bg-red-500">Live</Badge>
                </div>
                <CardDescription className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  March 20, 2025 - 08:57 PM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="The Future of Web3 & Blockchain"
                    width={600}
                    height={300}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="live-indicator pl-4 text-white font-semibold">LIVE NOW</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="rounded-full">
                    Blockchain
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    Web3
                  </Badge>
                </div>
                <p className="mb-4">
                  Explore the evolving landscape of Web3 technologies and blockchain applications with industry expert
                  Daniel Brown.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Speaker: Daniel Brown</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default" asChild>
                  <Link href="/webinars/web3-blockchain/live">Join Live Session</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
