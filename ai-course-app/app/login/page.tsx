import { signIn } from "@/auth"
import EmailAuthForm from "@/components/EmailAuthForm"
import WaitroseAuthForm from "@/components/WaitroseAuthForm"
import TechPartnerAuthForm from "@/components/TechPartnerAuthForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction to AI Course - Login",
  description: "30-day AI onboarding course. Learn AI fundamentals, prompt engineering, and real-world applications. Earn your certificate upon completion.",
  openGraph: {
    title: "Introduction to AI Course - Earn Your Certificate",
    description: "🎓 Complete the 30-day Introduction to AI course and earn your certificate! Learn AI fundamentals, prompt engineering, and real-world applications.",
    url: "/login",
    siteName: "Introduction to AI Course",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Introduction to AI Course - Earn Your Certificate",
    description: "🎓 Complete the 30-day Introduction to AI course and earn your certificate!",
  },
}

export default function LoginPage() {
  // JSON-LD Structured Data for SEO
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Introduction to AI",
    "description": "A comprehensive 30-day course designed for complete beginners who want to understand and use AI tools effectively. Learn ChatGPT, Claude, Midjourney, DALL-E, and more.",
    "provider": {
      "@type": "Organization",
      "name": "Wacky Works Digital",
      "url": "https://wearewacky.com",
      "logo": "https://courses.wearewacky.com/logo.png"
    },
    "instructor": {
      "@type": "Person",
      "name": "Szabolcs Deak",
      "jobTitle": "Founder & AI Educator",
      "url": "https://www.linkedin.com/in/szabolcs-deak-a0731350/",
      "worksFor": {
        "@type": "Organization",
        "name": "Wacky Works Digital"
      }
    },
    "educationalLevel": "Beginner",
    "coursePrerequisites": "No prior experience required",
    "numberOfCredits": "30 days",
    "datePublished": "2025-12-03",
    "dateModified": "2025-12-15",
    "inLanguage": "en",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT30M per day"
    },
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://courses.wearewacky.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wacky Works Digital",
    "url": "https://wearewacky.com",
    "logo": "https://courses.wearewacky.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/wackyworksdigital/",
      "https://www.facebook.com/wackyworksdigital/",
      "https://www.threads.com/@wackyworksdigital",
      "https://x.com/wackywdigital",
      "https://uk.pinterest.com/wackyworksdigital/",
      "https://www.linkedin.com/company/109555093/",
      "https://www.tiktok.com/@wackyworksdigital",
      "https://www.youtube.com/channel/UCg5R_EIt0Li5gI2gyZi6ajw",
      "https://www.reddit.com/user/wackyworksdigital/",
      "https://www.twitch.tv/wackyworksdigital",
      "https://github.com/wackyworksdigital",
      "https://medium.com/@wackyworksdigital"
    ],
    "founder": {
      "@type": "Person",
      "name": "Szabolcs Deak",
      "url": "https://www.linkedin.com/in/szabolcs-deak-a0731350/"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@wearewacky.com",
      "contactType": "customer service"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need coding experience for this AI course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! This course is designed for complete beginners. No coding or technical background required."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to complete the course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The course is structured over 30 days, with bite-sized lessons you can complete in about 30 minutes per day."
        }
      },
      {
        "@type": "Question",
        "name": "Do I get a certificate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Upon completing all 30 days, you receive an official certificate that can be shared on LinkedIn and other platforms."
        }
      },
      {
        "@type": "Question",
        "name": "What AI tools will I learn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll learn ChatGPT, Claude, Gemini, Microsoft Copilot, Midjourney, DALL-E, Runway, ElevenLabs, Suno, and more."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex min-h-screen w-full">
        <div className="flex h-full min-h-screen grow">
          <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
            {/* Left Side - Hero Section with Warm Background */}
            <div className="relative flex flex-col items-start justify-center p-8 md:p-12 lg:p-16">
              <main className="z-10 flex flex-col items-start text-left">
                <h1 className="text-text-primary tracking-tight text-5xl font-black leading-tight pb-4">
                  Introduction to AI
                </h1>
                <p className="text-text-secondary text-xl font-medium leading-relaxed max-w-md">
                  Master AI fundamentals on your schedule.<br />
                  Get exclusive discounts on premium AI apps.
                </p>
              </main>
            </div>

            {/* Right Side - Login Forms with Glass Cards */}
            <div className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 overflow-y-auto">
              <div className="flex w-full max-w-md flex-col items-center gap-6">

                {/* General Access Card - Blue Frosted Glass */}
                <div className="w-full glass-blue rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-text-primary">General Access</h2>
                  </div>

                  <form
                    action={async () => {
                      "use server"
                      await signIn("google", { redirectTo: "/dashboard" })
                    }}
                    className="w-full mb-4"
                  >
                    <button
                      type="submit"
                      className="btn-neumorphic flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-bold text-text-primary"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12V14.4H18.37C18.16 15.82 17.38 16.99 16.29 17.75V20.27H19.95C21.69 18.67 22.56 15.85 22.56 12.25Z"></path>
                        <path d="M12 23C14.97 23 17.47 22.02 19.29 20.47L15.65 17.75C14.65 18.44 13.43 18.83 12 18.83C9.31 18.83 7.02 17.05 6.13 14.71H2.38V17.52C4.1 20.83 7.79 23 12 23Z"></path>
                        <path d="M6.13 14.71C5.88 13.98 5.75 13.24 5.75 12.47C5.75 11.7 5.88 10.95 6.13 10.22V7.41H2.38C1.53 9.07 1 10.72 1 12.47C1 14.22 1.53 15.87 2.38 17.52L6.13 14.71Z"></path>
                        <path d="M12 5.17C13.56 5.17 14.91 5.72 15.99 6.74L19.36 3.37C17.47 1.68 14.97 1 12 1C7.79 1 4.1 3.17 2.38 6.48L6.13 9.29C7.02 6.95 9.31 5.17 12 5.17Z"></path>
                      </svg>
                      <span>Continue with Google</span>
                    </button>
                  </form>

                  <EmailAuthForm />
                </div>

                {/* John Lewis & Waitrose Partners - Sage Green Glass */}
                <div className="w-full glass-sage rounded-3xl p-8">
                  <h2 className="text-lg font-bold text-text-primary mb-4">Partner Benefits</h2>
                  <WaitroseAuthForm />
                  <p className="text-xs text-text-secondary text-center font-medium mt-3">
                    Special pricing for our retail partners
                  </p>
                </div>

                {/* Enterprise Access - Lavender Glass */}
                <div className="w-full glass-lavender rounded-3xl p-8">
                  <h2 className="text-lg font-bold text-text-primary mb-4">Enterprise Access</h2>
                  <TechPartnerAuthForm />
                </div>

                {/* Footer - Terms & Privacy (no version number) */}
                <div className="text-center text-xs text-text-secondary mt-4">
                  <p className="mb-2">By continuing, you agree to our</p>
                  <div className="flex items-center justify-center gap-3">
                    <a className="font-semibold text-text-primary hover:text-sage-green transition-colors" href="/terms">Terms of Service</a>
                    <span className="text-text-tertiary">·</span>
                    <a className="font-semibold text-text-primary hover:text-sage-green transition-colors" href="/privacy">Privacy Policy</a>
                  </div>
                </div>

                {/* Main Site Link */}
                <a
                  href="https://wearewacky.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="group-hover:underline">Visit Wacky Works Digital</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
