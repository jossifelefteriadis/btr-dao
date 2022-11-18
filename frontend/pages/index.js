import Head from "next/head";
import Main from "../components/main";
import Description from "../components/description";
import Testimonial from "../components/testimonial";

export default function Home() {
  return (
    <section>
      <Head>
        <title>BTR DAO</title>
      </Head>
      <Main />
      <Description />
      <Testimonial />
      {/* https://www.covalenthq.com/about/careers/?jobId=Ryk1E03-txRV */}
      <p>Add core value</p>
      <p>Ownership</p>
      <p>Educational</p>
      <p>Urgency</p>
      {/* Footer */}
    </section>
  );
}
