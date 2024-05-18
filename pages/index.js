import React from 'react'
import Layout from "@/src/layout";
import ServicesSearch from "@/src/feature/Search/ServicesSearch";
import { fetchServices } from '@/src/data/Api';
function Home({ services, zoneId, zoneName }) {

  return (
    <>
      <Layout>
        <h1 className="sm:hidden m-4 mt-10 text-center font-bold">
          میتوانید خدمات مختلف را در شهر مورد نظر خود جستجو کنید
        </h1>
        <ServicesSearch services={services} zoneName={zoneName} zoneId={zoneId} />
      </Layout >
    </>
  )
}
export async function getServerSideProps({ query }) {
  if (query.zoneId) {
    const { zoneId, zoneName } = query

    const services = await fetchServices({zoneId})

    return {
      props: {
        services,
        zoneId,
        zoneName,
      },
    };
  } else return {
    props: {

    }
  }

}
export default Home
