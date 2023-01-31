import React from "react";
import Image from "next/image";
import Proposal from "../public/assets/icons/proposal.png";
import YesVote from "../public/assets/icons/yes.png";
import NoVote from "../public/assets/icons/no.png";

export default function Explainer() {
  return (
    <section className="pb-20">
      <section className="text-white pt-10 grid rid-cols-1 md:grid-cols-3 gap-3">
        <p>Have an NFT to create proposals - visa nft bild</p>
        <p>Have an NFT to vote on proposals - visa nft bild</p>
        <p>OVer 51% proposals - 6 rutor där 4 är gröna</p>
      </section>
    </section>
  );
}
