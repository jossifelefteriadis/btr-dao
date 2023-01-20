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
      <section className="max-w-screen-xl bg-black mx-auto lg:py-16 lg:px-6 flex flex-col items-center">
        {/* <section className="max-w-[1240px] h-96 mx-auto p-2 flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> */}
        <p>Join the community section here</p>
        <section className="flex items-center justify-evenly w-4/6 pt-14">
          <section className="flex flex-col items-center">
            <Image
              src={youtube}
              alt="youtube"
              width="35"
              height="35"
              className="mr-4"
            />
            <p>Youtube</p>
          </section>
          <section className="flex flex-col items-center">
            <Image
              src={blog}
              alt="blog"
              width="35"
              height="35"
              className="mr-4"
            />
            <p>Blog</p>
          </section>
          <section className="flex flex-col items-center">
            <Image
              src={telegram}
              alt="telegram"
              width="35"
              height="35"
              className="mr-4"
            />
            <p>Telegram</p>
          </section>
          <section className="flex flex-col items-center">
            <Image
              src={website}
              alt="website"
              width="35"
              height="35"
              className="mr-4"
            />
            <p>Website</p>
          </section>
        </section>
      </section>
    </section>
  );
}
