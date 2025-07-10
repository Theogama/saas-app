import React from 'react'
import {PricingTable} from "@clerk/nextjs";

const Subscriptions = () => {
  return (
    <main>
      <h1 className="flex flex-col items-center justify-center ">Choose Your Learning Journey</h1>
      <p className='flex flex-col items-center justify-center mb-10'>Start free, upgrade anytime. Unlock smarter Conversations, deeper insights, and unlimited potential with a plan that fits your goals.</p>
      <PricingTable />
    </main>
  )
}

export default Subscriptions