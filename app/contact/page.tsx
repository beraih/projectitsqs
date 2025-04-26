"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="container px-4 py-12 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Have a question or need support?</h1>
        <p className="text-xl text-muted-foreground">We're here to help!</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting us. We'll respond to your inquiry shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="course">Course Inquiry</SelectItem>
                        <SelectItem value="general">General Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry in detail..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
              <CardDescription>Reach out to us directly using the information below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Office Address</h3>
                  <address className="not-italic text-muted-foreground">
                    IT-ISQS Knowledge Center
                    <br />
                    123 Tech Avenue
                    <br />
                    Innovation District
                    <br />
                    10100 Digital City
                  </address>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone Number</h3>
                  <p className="text-muted-foreground">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">support@it-isqs.com</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium">Support Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">How do I reset my password?</h3>
                <p className="text-sm text-muted-foreground">
                  Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Can I get a refund for a course?</h3>
                <p className="text-sm text-muted-foreground">
                  Refunds are available within 14 days of purchase if you've completed less than 20% of the course.
                </p>
              </div>
              <div>
                <h3 className="font-medium">How do I join a live webinar?</h3>
                <p className="text-sm text-muted-foreground">
                  Register for the webinar and you'll receive a link via email 30 minutes before it starts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
