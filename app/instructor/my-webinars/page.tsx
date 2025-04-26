"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Plus, Edit, Trash2, Users, Calendar, Clock } from "lucide-react"
import { useUser } from "@/components/user-context"
import { Badge } from "@/components/ui/badge"

export default function MyWebinarsPage() {
  const router = useRouter()
  const { role, isAuthenticated } = useUser()

  // Redirect if not authenticated or not an instructor
  if (!isAuthenticated || role !== "instructor") {
    if (typeof window !== "undefined") {
      router.push("/log-in")
    }
    return null
  }

  // Mock data for instructor's webinars
  const webinars = [
    {
      id: 1,
      title: "AI in Modern Business",
      description: "Learn how artificial intelligence is transforming modern businesses.",
      registrations: 87,
      date: "April 02, 2025",
      time: "09:07 PM",
      status: "upcoming",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 2,
      title: "Cybersecurity in FinTech",
      description: "Join this live session to learn about cybersecurity challenges in the financial technology sector.",
      registrations: 124,
      date: "March 20, 2025",
      time: "08:13 PM",
      status: "live",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: 3,
      title: "Introduction to Blockchain",
      description: "A beginner's guide to understanding blockchain technology.",
      registrations: 56,
      date: "February 15, 2025",
      time: "10:00 AM",
      status: "completed",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "live":
        return <Badge className="bg-red-500">Live Now</Badge>
      case "upcoming":
        return <Badge className="bg-blue-500">Upcoming</Badge>
      case "completed":
        return <Badge className="bg-gray-500">Completed</Badge>
      default:
        return null
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/webinars">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Webinars
          </Link>
        </Button>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Webinars</h1>
            <p className="text-muted-foreground mt-2">Manage your webinars and live sessions</p>
          </div>
          <Button asChild>
            <Link href="/instructor/create-webinar">
              <Plus className="mr-2 h-4 w-4" /> Schedule New Webinar
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {webinars.map((webinar) => (
          <Card key={webinar.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image src={webinar.image || "/placeholder.svg"} alt={webinar.title} fill className="object-cover" />
              <div className="absolute top-2 right-2">{getStatusBadge(webinar.status)}</div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{webinar.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{webinar.description}</p>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{webinar.time}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{webinar.registrations} registrations</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant={webinar.status === "live" ? "default" : "outline"} size="sm" asChild>
                <Link href={`/instructor/webinars/${webinar.id}`}>
                  {webinar.status === "live" ? "Join Live" : "View Details"}
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
