import React from "react";
import Image from "next/image";
import Proposal from "../public/assets/icons/proposal.png";
import YesVote from "../public/assets/icons/yes.png";
import NoVote from "../public/assets/icons/no.png";

export default function Explainer() {
  return (
    // <p>Have an NFT to create proposals - visa nft bild</p>
    //   <p>Have an NFT to vote on proposals - visa nft bild</p>
    //   <p>OVer 51% proposals - 6 rutor där 4 är gröna</p>
    <section className="pb-20">
      <section className="text-white pt-10 grid rid-cols-1 md:grid-cols-3 gap-3">
        <section className="flex flex-col items-center pb-10">
          <Image src={Proposal} alt="Proposal" width="110" height="110" />
          <p className="pt-2 text-2xl">Have an NFT to create proposals</p>
          <p className="pt-4 w-2/3 text-lg text-center">
            Only the BTR DAO members can create proposals
          </p>
        </section>
        <section className="flex flex-col items-center pb-10">
          <Image src={YesVote} alt="Yes Vote" width="110" height="110" />
          <p className="pt-2 text-2xl">Have an NFT to vote on proposals</p>
          <p className="pt-4 w-2/3 text-lg text-center">
            The BTR DAO member govern the DAOs investments
          </p>
        </section>
        <section className="flex flex-col items-center pb-10">
          <Image src={NoVote} alt="No Vote" width="110" height="110" />
          <p className="pt-2 text-2xl">Over 51% proposals</p>
          <p className="pt-4 w-2/3 text-lg text-center">
            Complete transparency and community driven decisions on each
            proposal
          </p>
        </section>
      </section>
    </section>
  );
}
