import React from "react";

export default function Footer() {
  return (
    <section className="h-28 bg-neutral-100 pt-10 flex justify-center">
        <section className="w-full sm:w-5/12 flex justify-evenly text-gray-900">
          <p>Whitepaper</p>
          <p> | </p>
          <p>FAQ</p>
          <p> | </p>
          <p>About</p>
          <p> | </p>
          <p>Contact</p>
          {/* <p> | </p>
          <p>Terms of Service</p>
          <p> | </p>
          <p>Privacy Policy</p> */}
        </section>
    </section>
  );
}
