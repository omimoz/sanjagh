import StaticSearchButton from '@/src/components/StaticSearchButton'
import React from 'react'

function Home() {
  return (
    <>
      <h1 className="sm:hidden m-4 mt-10 text-center font-bold">
        میتوانید خدمات مختلف را در شهر مورد نظر خود جستجو کنید
      </h1>
      <div className='flex sm:hidden w-full px-3 py-4 overflow-hidden'>
        <StaticSearchButton />
      </div>
    </>
  )
}

export default Home
