import Head from "next/head";
import AboutComp from "../components/about";

export default function About() {
  return (
    <section>
      <Head>
        <title>BTR DAO</title>
      </Head>
      <AboutComp />
    </section>
  );
}
