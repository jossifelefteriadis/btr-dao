import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="h-28 bg-neutral-100 pt-10 flex justify-center">
      <section className="w-full sm:w-5/12 flex justify-evenly text-gray-900">
        <p>
          <Link href="/">Whitepaper</Link>
        </p>
        <p> | </p>
        <p>
          <Link href="/learn">FAQ</Link>
        </p>
        <p> | </p>
        <p>
          <Link href="/about">About</Link>
        </p>
        <p> | </p>
        <p>
          <Link href="/">Contact</Link>
        </p>
        {/* <p> | </p>
          <p>Terms of Service</p>
          <p> | </p>
          <p>Privacy Policy</p> */}
      </section>
    </section>
  );
}
