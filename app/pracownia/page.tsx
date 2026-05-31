import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LabPageContent } from '@/components/lab/lab-page-content'

export const metadata: Metadata = {
  title: 'Pracownia | WIWI',
  description: 'Nasza pracownia krawiecka - miejsce gdzie tradycja spotyka się z nowoczesnością. Profesjonalny sprzęt i najwyższej jakości materiały.',
}

export default function LabPage() {
  return (
    <>
      <Navigation />
      <main>
        <LabPageContent />
      </main>
      <Footer />
    </>
  )
}
