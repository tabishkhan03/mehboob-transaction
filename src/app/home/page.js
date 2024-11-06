'use client'
import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { BarChart3, CheckCircle2, CreditCard, DollarSign, Menu, Star, X, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const reviews = [
    { name: "John Doe", avatar: "JD", text: "This app has revolutionized how I manage my finances. Highly recommended!" },
    { name: "Jane Smith", avatar: "JS", text: "The insights I've gained from this app have helped me save so much money!" },
    { name: "Robert Johnson", avatar: "RJ", text: "Easy to use and packed with features. It's become an essential tool for my business." },
    { name: "Emily Brown", avatar: "EB", text: "I love how intuitive the interface is. It makes tracking my expenses a breeze!" },
    { name: "Michael Lee", avatar: "ML", text: "The budgeting features have helped me stay on top of my financial goals." },
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const timer = setInterval(nextReview, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <BarChart3 className="h-6 w-6 text-blue-400" />
          <span className="ml-2 font-bold text-white">Transaction Manager</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button className="md:hidden" onClick={toggleMenu} variant="ghost" size="icon">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-14 md:top-0 left-0 md:left-auto bg-gray-800 md:bg-transparent w-full md:w-auto p-4 md:p-0 gap-2 md:gap-6 shadow-lg md:shadow-none`}>
            <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#features">Features</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#about">About</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#pricing">Pricing</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white" href="#reviews">Reviews</Link>
            <Link className="text-sm font-medium text-gray-300 hover:text-white" href="/">Try the App</Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Manage Your Transactions with Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Our transaction manager app helps you track, analyze, and optimize your financial activities.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                <Button variant="outline" size="lg" className="text-gray-300 border-gray-600 bg-gray-800">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-700">
                <CardContent className="flex flex-col items-center p-6">
                  <CreditCard className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">Easy Transaction Logging</h3>
                  <p className="text-center text-gray-300">Quickly log your transactions with our intuitive interface.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700">
                <CardContent className="flex flex-col items-center p-6">
                  <BarChart3 className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">Insightful Analytics</h3>
                  <p className="text-center text-gray-300">Gain valuable insights with our powerful analytics tools.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700">
                <CardContent className="flex flex-col items-center p-6">
                  <DollarSign className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">Budget Planning</h3>
                  <p className="text-center text-gray-300">Set and track budgets to keep your finances on track.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center">About Our App</h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Our transaction manager app was born out of a need for a simple, yet powerful tool to manage personal and business finances. We&lsquo;ve designed it with the user in mind, focusing on ease of use without compromising on features.
                </p>
              </div>
              <img
                alt="Transaction Manager App"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/image.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-700">
                <CardContent className="flex flex-col items-center p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Basic</h3>
                  <p className="text-4xl font-bold mb-4 text-blue-400">$9.99<span className="text-sm font-normal text-gray-300">/month</span></p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Basic transaction logging</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Monthly reports</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Up to 100 transactions/month</li>
                  </ul>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-700">
                <CardContent className="flex flex-col items-center p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                  <p className="text-4xl font-bold mb-4 text-blue-400">$19.99<span className="text-sm font-normal text-gray-300">/month</span></p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Advanced transaction logging</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Weekly reports</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Up to 1000 transactions/month</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Basic analytics</li>
                  </ul>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-700">
                <CardContent className="flex flex-col items-center p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                  <p className="text-4xl font-bold mb-4 text-blue-400">$49.99<span className="text-sm font-normal text-gray-300">/month</span></p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Unlimited transaction logging</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Real-time reports</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Unlimited transactions</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Advanced analytics</li>
                    <li className="flex items-center text-gray-300"><CheckCircle2 className="h-5 w-5 mr-2 text-green-500" /> Priority support</li>
                  </ul>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Choose Plan</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Customer Reviews</h2>
            <div className="relative">
              <Card className="bg-gray-800">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage alt={reviews[currentReview].name} src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback>{reviews[currentReview].avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-center text-gray-300 mb-2">{reviews[currentReview].text}</p>
                  <p className="font-bold text-white">{reviews[currentReview].name}</p>
                </CardContent>
              </Card>
              <Button variant="outline" size="icon" className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-300 border-gray-600 bg-gray-700" onClick={prevReview}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-300 border-gray-600 bg-gray-700" onClick={nextReview}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section id="try" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Try Our App</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the power of our transaction manager app firsthand. Sign up for a free trial and start optimizing your finances today.
              </p>
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Start Free Trial</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Ready to Take Control of Your Finances?</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users who have transformed their financial management with our app.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Get Started Now</Button>
                <Button variant="outline" size="lg" className="text-gray-300 border-gray-600 bg-gray-800">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2024 Transaction Manager. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}