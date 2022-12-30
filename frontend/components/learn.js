import React from "react";
import Link from "next/link";

export default function Learn() {
  return (
    <section className="w-full md:h-screen p-2 flex flex-col items-center py-28">
      <section className="max-w-[1040px] m-auto text-xl">
        <p>
          We&apos;re glad you found this section and want to learn more about
          the BTR DAO.
        </p>
        <br />
        <p>
          We have tried to make it as easy as possible to understand what this
          community is all about and have therefore created a{" "}
          <span className="text-pink-600">whitepaper</span> and an{" "}
          <span className="text-pink-600">FAQ</span> section that we want to
          share with you below.
        </p>
      </section>
    </section>
  );
}
