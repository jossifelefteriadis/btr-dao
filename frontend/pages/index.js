import Head from "next/head";
import Main from "../components/main";
// import About from "../components/about";
import Description from "../components/description";

import BackgroundImage from "../public/assets/background.jpg";

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
