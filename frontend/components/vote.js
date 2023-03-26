import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { AlertTriangle } from "@web3uikit/icons";

export default function Vote() {
  const { isConnected } = useAccount();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [isConnected]);

  return (
    <section className="py-28">
      {!isLoggedIn ? (
        <section className="min-h-screen flex flex-col items-center mt-8">
          <section className="w-2/6 flex justify-between items-center">
            <AlertTriangle fontSize="80px" className="text-red-600" />
            <section className="w-84 h-56 flex flex-col justify-center text-2xl text-center">
              <p className="mb-1">
                THIS IS A{" "}
                <span className="border-b-2 border-red-600">
                  RESTRICTED AREA
                </span>
              </p>
              <p>
                FOR <span className="text-pink-600">BTR DAO</span> MEMBERS ONLY
              </p>
            </section>
            <AlertTriangle fontSize="80px" className="text-red-600" />
          </section>
          <section className="flex flex-col justify-evenly items-center h-20 mt-16 text-xl tracking-wide">
            <p>CONNECT YOUR WALLET IF YOU ARE A BTR DAO MEMBER</p>
            <p>
              NOT A MEMBER?{" "}
              <a
                href="https://www.patreon.com/BiggerThanRace/"
                target="_blank"
                className="px-2 py-1 text-black font-semibold bg-pink-600 hover:bg-black hover:text-pink-600 cursor-pointer"
              >
                JOIN THE BTR COMMUNITY
              </a>
            </p>
          </section>
        </section>
      ) : (
        <section className="flex justify-center pb-2 px-10 border-b border-gray-500">
          <section className="w-1/3 flex content-center justify-evenly">
            <p className="cursor-pointer hover:text-pink-600 text-lg">
              <Link href="/#">Proposals</Link>
            </p>
            <p className="cursor-pointer hover:text-pink-600 text-lg">
              <Link href="/#">Create Proposal</Link>
            </p>
            <p className="cursor-pointer hover:text-pink-600 text-lg">
              <Link href="/#">Transparency</Link>
            </p>
            <p className="cursor-pointer hover:text-pink-600 text-lg">
              <Link href="/#">Guide</Link>
            </p>
          </section>
        </section>
      )}
      <section className="flex flex-col items-center bg-white pt-8">
        <section className="w-2/3">
          <section className="flex justify-evenly w-full">
            <section className="w-80 h-28 bg-waves bg-blue-900 flex flex-col justify-evenly pl-4 pb-4 border rounded-md border-gray-200 text-gray-900 shadow-lg">
              <p className="text-gray-100 text-lg">Proposals</p>
              <p className="text-white text-lg font-semibold">
                9 active proposals
              </p>
            </section>
            <section className="w-80 h-28 flex flex-col justify-evenly pl-4 pb-4 border rounded-md border-gray-200 text-gray-900 shadow-lg">
              <p className="text-gray-600 text-lg">Participation</p>
              <p className="text-lg font-semibold">862 votes this month</p>
            </section>
            <section className="w-80 h-28 flex flex-col justify-evenly pl-4 pb-4 border rounded-md border-gray-200 text-gray-900 shadow-lg">
              <p className="text-gray-600 text-lg">Treasury</p>
              <p className="text-lg font-semibold">$832,000</p>
            </section>
          </section>
        </section>
        <section>Create proposal</section>
        <section>Transparency</section>
        <section>Guide</section>
      </section>
    </section>
  );
}
