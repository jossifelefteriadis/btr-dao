import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import Logo from "../public/assets/btr.jpg";

export default function Nav() {
  return (
    <section className="bg-gray-800/90 fixed w-full h-20 shadow-xl z-[100]">
      <section className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={Logo} alt="Logo image" width="60" height="60" />
        </Link>
        <section>
          <ul className="hidden md:flex items-center mr-4 text-[#ecf0f3]">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Learn</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b flex items-center">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Community</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Vote</Link>
            </li>
            <li className="ml-10 text-sm uppercase">
              <ConnectButton />
            </li>
          </ul>
          {/* <section onClick={handleNav} className="md:hidden mr-2">
            <AiOutlineMenu size={25} />
          </section> */}
        </section>
      </section>
    </section>
  );
}
