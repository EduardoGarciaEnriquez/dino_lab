import Link from "next/link";
import Image from "next/image";

import Carousel from "./components/ui/carousel";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 dark:border-gray-800">
        <Link
          className="flex items-center space-x-2 text-xl font-medium"
          href="#"
        >
          <SquareIcon className="w-6 h-6" />
          <span className="sr-only">Home</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          <Link
            className="text-gray-900 hover:underline dark:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-900 hover:underline dark:text-gray-50"
            href="#"
          >
            Catalog
          </Link>
          <Link
            className="text-gray-900 hover:underline dark:text-gray-50"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-gray-900 hover:underline dark:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="text-sm font-medium underline hover:no-underline"
            href="#"
          >
            Sign in
          </Link>
          <Link
            className="text-sm font-medium underline hover:no-underline"
            href="#"
          >
            Sign up
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src="/placeholder.svg"
                width={550}
                height={310}
                layout="responsive"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Your Catalog
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Beautifully designed and crafted products for your
                    lifestyle. Discover the perfect items to enhance your home,
                    office, and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Services
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let us take care of you. We offer a range of services designed
                  to make your life easier and more enjoyable. From expert
                  consultations to personalized recommendations, we're here to
                  help.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <CalendarCheckIcon className="w-6 h-6" />
                  <h3 className="font-semibold">Personalized Experiences</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Let us curate the perfect day for you with exclusive access
                    and tailored recommendations.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <CalendarCheckIcon className="w-6 h-6" />
                  <h3 className="font-semibold">Expert Consultations</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Gain insights from our team of experts to elevate your
                    knowledge and skills.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <CalendarCheckIcon className="w-6 h-6" />
                  <h3 className="font-semibold">Wellness Workshops</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Participate in our wellness workshops to recharge your mind
                    and body.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <CalendarCheckIcon className="w-6 h-6" />
                  <h3 className="font-semibold">Exclusive Access</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Unlock special perks and privileges with our exclusive
                    access membership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 py-4 sm:gap-4 text-sm">
        <div className="flex items-center justify-center space-x-2 text-xs">
          <span className="text-gray-500 dark:text-gray-400">Made with</span>
          <HeartIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-500 dark:text-gray-400">by Acme Inc.</span>
        </div>
      </footer>
    </div>
  );
}

function CalendarCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}
