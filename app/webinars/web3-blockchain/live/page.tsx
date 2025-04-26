import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function LiveWebinarPage() {
  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/webinars">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Webinars
          </Link>
        </Button>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">The Future of Web3 & Blockchain</h1>
          <Badge className="bg-red-500">LIVE</Badge>
        </div>
        <p className="text-muted-foreground mt-2">Live Webinar with Daniel Brown</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-muted/50 w-full rounded-lg p-8 mb-6">
                  <h2 className="text-2xl font-bold mb-4">Join via Google Meet</h2>
                  <p className="mb-6">
                    This webinar is being hosted on Google Meet. Click the button below to join the live session.
                  </p>
                  <Button className="gap-2" asChild>
                    <a href="https://meet.google.com/example-meeting-id" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Join Google Meet Session
                    </a>
                  </Button>
                </div>
                <div className="text-muted-foreground">
                  <p>
                    Having trouble? Make sure you're logged into your Google account and have a stable internet
                    connection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Webinar Details</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Explore the evolving landscape of Web3 technologies and blockchain applications with industry expert
                  Daniel Brown. This webinar will cover the latest developments in blockchain technology and its
                  potential to reshape various industries.
                </p>

                <h3 className="text-lg font-bold mb-2">Key Topics:</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Current state of Web3 and blockchain technology</li>
                  <li>Emerging trends and innovations</li>
                  <li>Real-world applications across industries</li>
                  <li>Challenges and opportunities in the blockchain space</li>
                  <li>Future predictions and roadmap</li>
                </ul>

                <p className="mb-4">
                  This webinar includes a Q&A session where participants can ask questions directly to the speaker.
                </p>

                <div className="bg-muted/50 p-4 rounded-md mt-6">
                  <h3 className="text-lg font-bold mb-2">Materials</h3>
                  <p>
                    Presentation slides, code examples, and additional resources will be shared with participants after
                    the webinar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">About the Speaker</h3>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Daniel Brown" />
                  <AvatarFallback>DB</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">Daniel Brown</h4>
                  <p className="text-sm text-muted-foreground">Blockchain Strategist & Web3 Consultant</p>
                </div>
              </div>
              <p className="text-sm mb-6">
                Daniel Brown is a leading expert in blockchain technology and Web3 applications. With a background in
                distributed systems and cryptography, he has advised numerous startups and enterprises on blockchain
                implementation strategies. He is the author of "Web3 Revolution: Rebuilding the Internet with
                Blockchain" and a frequent speaker at technology conferences worldwide.
              </p>

              <h3 className="text-lg font-bold mb-4">Webinar Details</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="font-medium min-w-[100px]">Topic:</div>
                  <div>The Future of Web3 & Blockchain Technologies</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="font-medium min-w-[100px]">Duration:</div>
                  <div>120 minutes (90 min presentation + 30 min Q&A)</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="font-medium min-w-[100px]">Materials:</div>
                  <div>Presentation slides and code examples will be shared after the session</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Upcoming Webinars</h3>
                <div className="space-y-3">
                  <Link href="/webinars" className="block hover:bg-muted/50 p-2 rounded-md transition-colors">
                    <div className="font-medium">AI in Modern Business</div>
                    <div className="text-sm text-muted-foreground">April 02, 2025</div>
                  </Link>
                  <Link href="/webinars" className="block hover:bg-muted/50 p-2 rounded-md transition-colors">
                    <div className="font-medium">Cloud Security Best Practices</div>
                    <div className="text-sm text-muted-foreground">March 31, 2025</div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
