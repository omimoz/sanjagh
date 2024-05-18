import { fetchSingleService } from "@/src/data/Api";
import Layout from "@/src/layout";

function Service({ zoneId, serviceId, service }) {
  return (
    <Layout navText={service.serviceId}>
      <div className="flex items-center flex-col justify-center h-screen w-screen">
        {service.text}
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ query }) {
  if (query.zoneId) {
    const { zoneId, serviceId } = query;
    const service = await fetchSingleService({ zoneId, serviceId });
    return {
      props: {
        zoneId,
        serviceId,
        service,
      },
    };
  } else
    return {
      props: {},
    };
}

export default Service;
