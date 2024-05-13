import Layout from "@/src/layout";

function ZoneStaticPage({ content }) {
  // Extract the data from the Response object

  return (
    <Layout>
      <h1>{content?.zoneId}</h1>
      <p>{content?.serviceId}</p>
      <p>{content?.text}</p>
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  console.log(context)
  const response = await fetch(
    `https://front-interview.darkube.app/inter/exp/direct/api/page?zoneId=${context.params.zone}&serviceId=${context.params.id}`
  );

  const content = await response.json();
  console.log(content)
  return {
    props: {
      content,
    },
  };
};

export default ZoneStaticPage;
