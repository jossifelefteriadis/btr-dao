import React from "react";
import Image from "next/image";
import Ownership from "../public/assets/icons/ownership.png";
import Educational from "../public/assets/icons/educational.png";
import Urgency from "../public/assets/icons/urgency.png";

export default function Values() {
  return (
    <section className="pb-10">
      <p className="text-4xl text-center py-10 text-pink-600 underline underline-offset-8">
        Our core values
      </p>
      <section className="text-white pt-10 grid rid-cols-1 md:grid-cols-3 gap-3">
        <section className="flex flex-col items-center pb-10">
          <Image src={Ownership} alt="Proposal" width="110" height="110" />
          <p className="pt-2 text-2xl">Ownership</p>
          <p className="pt-4 w-2/3 text-lg text-center">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </section>
        <section className="flex flex-col items-center pb-10">
          <Image src={Educational} alt="Proposal" width="110" height="110" />
          <p className="pt-2 text-2xl">Educational</p>
          <p className="pt-4 w-2/3 text-lg text-center">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </section>
        <section className="flex flex-col items-center pb-10">
          <Image src={Urgency} alt="Proposal" width="110" height="110" />
          <p className="pt-2 text-2xl">Urgency</p>
          <p className="pt-4 w-2/3 text-lg text-center">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </section>
      </section>
    </section>
  );
}
