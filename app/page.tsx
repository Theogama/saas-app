import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'


const Page = () => {
  return (
    <main>
      <h1 >Popular Compainons</h1>
      <section className='home-section'>
        <CompanionCard 
          id ="123"
          name = "Neura the Brainy Explorer"
          topic = "Neural Network of the Brain"
          subject = "Science"
          duration = {45}
          color = "#efd0ff"        
        />
        <CompanionCard 
          id ="456"
          name = "Countsy the Number Wizard"
          topic = "Derivatives & Integrals"
          subject = "Maths"
          duration = {30}
          color = "#BDE7FF"        
        /><CompanionCard 
          id ="789"
          name = "Verba the Vocabulary Builder"
          topic = "English Literature "
          subject = "Language"
          duration = {30}
          color = "#ffda6e"        
        />
      </section>

      <section className='home-section'>
        <CompanionList 
          title = "Recently competed Sessions"
          companions={recentSessions}
          classNames= " w-2/3 max-lg:w-full"
        
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page