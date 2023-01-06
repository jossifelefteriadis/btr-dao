import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../public/assets/icons/next.png";

export default function Community() {
  return (
    <section className="w-full text-center bg-white pt-40">
      <section className="max-w-[1240px] h-96 mx-auto p-2 flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1>Join the BTR Community</h1>
      </section>
      <section className="max-w-[1240px] m-auto mt-10 pb-20 md:grid grid-cols-12 gap-8">
        <section className="h-24 flex items-center justify-between p-6 col-start-2 col-span-4 border-2 rounded border-gray-900 text-gray-900">
          <p>Link to youtube</p>
          <Image src={arrow} alt="arrow" width="25" height="25" />
        </section>
        <section className="h-24 flex items-center justify-between p-6 col-start-8 col-span-4 border-2 rounded border-gray-900 text-gray-900">
          <p>Link to blog</p>
          <Image src={arrow} alt="arrow" width="25" height="25" />
        </section>
        <section className="h-24 flex items-center justify-between p-6 col-start-2 col-span-4 border-2 rounded border-gray-900 text-gray-900">
          <p>Link to telegram</p>
          <Image src={arrow} alt="arrow" width="25" height="25" />
        </section>
        <section className="h-24 flex items-center justify-between p-6 col-start-8 col-span-4 border-2 rounded border-gray-900 text-gray-900">
          <p>
            <Link href="https://biggerthanrace.com/" target="_blank">
              Link to website
            </Link>
          </p>
          <Image src={arrow} alt="arrow" width="25" height="25" />
        </section>
        <section className="h-24 flex items-center justify-between p-6 col-start-2 col-span-4 border-2 rounded border-gray-900 text-gray-900">
          <p>Resources/Guides</p>
          <Image src={arrow} alt="arrow" width="25" height="25" />
        </section>
      </section>
    </section>
  );
}
