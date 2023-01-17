import Head from "next/head";
import Main from "../components/main";
import Description from "../components/description";
import Testimonial from "../components/testimonial";
import Values from "../components/values";
import JoinTheCommunity from "../components/joinTheCommunity";
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
      <JoinTheCommunity />
      <p>Have an NFT to create proposals - visa nft bild</p>
      <p>Have an NFT to vote on proposals - visa nft bild</p>
      <p>OVer 51% proposals - 6 rutor där 4 är gröna</p>
      <Footer />
    </section>
  );
}
