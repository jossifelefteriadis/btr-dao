import React from "react";
import Image from "next/image";
import Link from "next/link";

import youtube from "../public/assets/icons/youtube.png";
import blog from "../public/assets/icons/blog.png";
import website from "../public/assets/icons/code.png";
import telegram from "../public/assets/icons/telegram.png";

export default function JoinTheCommunity() {
  return (
    <section className="bg-neutral-100 py-20">
      {/* bg-[#f9fafb] */}
      <section className="max-w-screen-xl bg-black mx-auto lg:py-16 lg:px-6 flex flex-col items-center text-lg">
        {/* <section className="max-w-[1240px] h-96 mx-auto p-2 flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> */}
        <h2>Join the community</h2>
        <p className="pt-6 text-center">
          Learn more about BTR, watch the youtube videos to get more crypto
          <br />
          knowledge, chat with the team, and others in the community.
        </p>
        <section className="flex items-center justify-evenly w-4/6 pt-14">
          <Link
            href="https://www.youtube.com/c/BiggerThanRace"
            target="_blank"
            // className="h-24 flex items-center p-6 col-start-2 col-span-5 border-2 rounded border-gray-700 text-gray-900 hover:shadow-lg"
          >
            <section className="flex flex-col items-center justify-evenly h-24">
              <Image src={youtube} alt="youtube" width="35" height="35" />
              <p>Youtube</p>
            </section>
          </Link>
          <Link
            href="https://biggerthanrace.com/blog"
            target="_blank"
            // className="h-24 flex items-center p-6 col-start-2 col-span-5 border-2 rounded border-gray-700 text-gray-900 hover:shadow-lg"
          >
            <section className="flex flex-col items-center justify-evenly h-24">
              <Image src={blog} alt="blog" width="35" height="35" />
              <p>Blog</p>
            </section>
          </Link>
          <Link
            href="https://www.patreon.com/BiggerThanRace/"
            target="_blank"
            // className="h-24 flex items-center p-6 col-start-2 col-span-5 border-2 rounded border-gray-700 text-gray-900 hover:shadow-lg"
          >
            <section className="flex flex-col items-center justify-evenly h-24">
              <Image src={telegram} alt="telegram" width="35" height="35" />
              <p>Telegram</p>
            </section>
          </Link>
          <Link
            href="https://biggerthanrace.com/"
            target="_blank"
            // className="h-24 flex items-center p-6 col-start-2 col-span-5 border-2 rounded border-gray-700 text-gray-900 hover:shadow-lg"
          >
            <section className="flex flex-col items-center justify-evenly h-24">
              <Image src={website} alt="website" width="35" height="35" />
              <p>Website</p>
            </section>
          </Link>
        </section>
      </section>
    </section>
  );
}
