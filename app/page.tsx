import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline/next";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col ">
      
      
      {/* Use the unified Navbar component */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
        <Image  className="absolute top-0 left-0 -z-20 " src="/gradiant.png" alt="Gradient-img" height={15000} width={10000} />
        {/* Hero section */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex gap-8 md:gap-12 items-center px-10">
              <div className="space-y-6 text-center lg:text-left">
                <div className="ml-9">
                  <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-blue-300 to-blue-700
                  shadow-[0_0_15px_rgba(37,99,235,0.5)] rounded-full">
                    <div className="absolute inset-[3px] bg-blue-100 rounded-full flex items-center justify-center">
                      INTRODUCING
                      </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-900 leading-tight">
                    STORE YOUR <span className="text-primary">IMAGES</span> <br />WITH
                    EASE
                  </h1>
                  <p className="text-lg md:text-xl text-blue-600 lg:text-2xl font-semibold">
                    Simple. Secure. Fast.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 justify-center absolute lg:justify-start ml-9">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button size="lg" variant="solid" color="primary" className="rounded-sm z-20">
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button size="lg" variant="flat" color="primary" className="rounded-sm z-20">
                        Sign In
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        variant="solid"
                        color="primary"
                        endContent={<ArrowRight className="h-4 w-4" />}
                        className="rounded-sm"
                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
              </div>

              
                
                  
                  
                    <Spline className="absolute lg:top-0 top-[-20%] w-[100%] bottom-0 z-10 sm:left-[-2%] h-full"
        scene="https://prod.spline.design/KCUoUCOE1ZQd1VU9/scene.splinecode" 
      />
                 
               
              
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                What You Get
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="border border-blue-200 bg-blue-50 shadow-sm hover:shadow-md transition-shadow rounded-sm">
                <CardBody className="p-6 text-center">
                  <CloudUpload className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary " />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-900">
                    Quick Uploads
                  </h3>
                  <p className="text-blue-600">Drag, drop, done.</p>
                </CardBody>
              </Card>

              <Card className="border border-blue-200 bg-blue-50 shadow-sm hover:shadow-md transition-shadow rounded-sm">
                <CardBody className="p-6 text-center">
                  <Folder className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-900">
                    Smart Organization
                  </h3>
                  <p className="text-blue-600">
                    Keep it tidy, find it fast.
                  </p>
                </CardBody>
              </Card>

              <Card className="border border-blue-200 bg-blue-50 shadow-sm hover:shadow-md transition-shadow rounded-sm sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 max-w-md sm:max-w-full">
                <CardBody className="p-6 text-center">
                  <Shield className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-900">
                    Locked Down
                  </h3>
                  <p className="text-blue-600">
                    Your images, your eyes only.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-12 md:py-20 px-4 md:px-6 ">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
              Ready?
            </h2>
            <SignedOut>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    variant="solid"
                    color="primary"
                    endContent={<ArrowRight className="h-4 w-4" />}
                    className="rounded-sm"
                  >
                    Let&apos;s Go
                  </Button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="solid"
                  color="primary"
                  endContent={<ArrowRight className="h-4 w-4" />}
                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </section>
      </main>

      {/* Simple footer */}
      <footer className="bg-blue-50 border-t border-blue-200 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <CloudUpload className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold">DropBox</h2>
            </div>
            <p className="text-blue-500 text-sm">
              &copy; {new Date().getFullYear()} DropBox
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}