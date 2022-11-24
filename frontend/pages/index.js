import Head from "next/head";
import Main from "../components/main";
import Description from "../components/description";
import Testimonial from "../components/testimonial";
import Values from "../components/values";
import Footer from "../components/footer";

export default function Home() {
  return (
    <section>
      <Head>
        <title>BTR DAO</title>
      </Head>
      <Main />
      <Description />
      <Testimonial />
      <Values />
      <Footer />
    </section>
  );
}
