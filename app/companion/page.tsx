
import {getAllCompanions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectsFilters from "@/components/SubjectsFilters";


const companionsLibrary = async ({searchParams} : SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({ subject, topic})

  console.log(companions);
  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <div className='flex gap-4'>
            <SearchInput/>
            <SubjectsFilters/>
        </div>
      </section>
      <section className='companions-grid pb-20'>
          {companions?.map((companion) => (
              <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)}/>
          ))}
      </section>
    </main>
  )
}

export default companionsLibrary