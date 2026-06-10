import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CoursesHero } from '@/components/kursy/courses-hero'
import { CoursesFeatures } from '@/components/kursy/courses-features'
import { CoursesList } from '@/components/kursy/courses-list'
import { CoursesContact } from '@/components/kursy/courses-contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kursy Szycia | Wiwi Tailor',
  description: 'Naucz się szyć z nami! Kursy krawieckie dla początkujących i zaawansowanych.',
}

export default function KursyPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-teal-600/30">
      <Navigation />
      <main className="pt-20 lg:pt-24 bg-white">
        <CoursesHero />
        <CoursesFeatures />
        <CoursesList />
        <CoursesContact />
      </main>
      <Footer />
    </div>
  )
}
