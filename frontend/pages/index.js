import Head from "next/head";
import Main from "../components/main";
import Description from "../components/description";


export default function Home() {
  return (
    <section>
      <Head>
        <title>BTR DAO</title>
      </Head>
      <Main />
      <Description />
      <p>Testimonial section</p>
    </section>
  );
}
