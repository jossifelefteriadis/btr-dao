import React from "react";
import Image from "next/image";

import Dao from "../public/assets/icons/dao.png";
import No from "../public/assets/icons/no.png";
import Yes from "../public/assets/icons/yes.png";
import Proposal from "../public/assets/icons/proposal.png";
import Treasury from "../public/assets/icons/treasury.png";
import DescriptionImg from "../public/assets/icons/description.png";

export default function Description() {
  return (
    <section className="w-full md:h-screen p-2 flex flex-col items-center py-16">
      <h1>A smarter DAO</h1>
      {/* <section className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <section className="flex flex-col justify-evenly items-center h-screen">
          <section className="flex flex-col justify-center items-center">
            <Image src={Proposal} alt="Proposal" width="110" height="110" />
            <p className="pt-2">Proposal</p>
          </section>
          <section className="flex flex-col justify-center items-center">
            <Image src={Yes} alt="Yes" width="110" height="110" />
            <p className="pt-2">Yes</p>
          </section>
          <section className="flex flex-col justify-center items-center">
            <Image src={No} alt="No" width="110" height="110" />
            <p className="pt-2">No</p>
          </section>
        </section>
        <section className="flex justify-center items-center">
          <Image src={Dao} alt="Dao image" width="350" height="350" />
          </section>
        </section> */}
      <section className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <section>
          <Image
            src={DescriptionImg}
            alt="Dao image"
            width="600"
            height="525"
          />
        </section>
        <section className="flex flex-col justify-center items-center px-2">
          <h2 className="uppercase">The Investment Club of BTR</h2>
          <h3 className="pt-2">( how does this work? )</h3>
          <ul className="pt-8">
            <li>
              1. Everyone with a BTR NFT will be able to create a proposal
            </li>
            <li>
              1. Everyone with a BTR NFT will be able to create a proposal
            </li>
            <li>
              3. If a proposal gets more than 51% yes-votes, the investment
              happens
            </li>
          </ul>
          <br />
          <p>
            The BTR DAO has the capacity to reach new heights as an investment
            club.
            <br />
            <br />
            The DAO along with its treasury will be managed by the collective
            responsibility of all DAO members, which also are members of the BTR
            community.
          </p>
          <p className="py-4">
            A DAO&apos;s greatest asset is the collective intelligence of its
            members
          </p>
          <p>
            Thankfully the BTR community brings knowledge and exposure to many
            things within blockchain which leads to a diverse community across
            multiple levels.
          </p>
          {/* <p>
            When proposals are submitted for voting, they go through Brando and
            SparksFlames first. In order for a proposal to reach the DAO
            community for voting, both Brando and SparksFlames need to approve
            it.
            <br />
            <br />
            This is in order to prevent spam. If the community has shown
            interest in specific proposals or present something that isn't spam,
            nor Brando or SparksFlames have the intentions to prevent the DAO to
            vote on it.
          </p> */}
        </section>
      </section>
    </section>
  );
}
