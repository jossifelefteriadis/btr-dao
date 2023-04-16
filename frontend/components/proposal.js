import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { AlertTriangle, Checkmark, CrossCircle } from "@web3uikit/icons";

export default function Proposal() {
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
                FOR <span className="text-pink-600">BTR INVESTMENT CLUB</span>{" "}
                MEMBERS ONLY
              </p>
            </section>
            <AlertTriangle fontSize="80px" className="text-red-600" />
          </section>
          <section className="flex flex-col justify-evenly items-center h-20 mt-16 text-xl tracking-wide">
            <p>CONNECT YOUR WALLET IF YOU ARE A BTR INVESTMENT CLUB MEMBER</p>
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
        <section className="min-h-screen flex justify-center mt-28 px-10">
          <section className="w-4/6 flex flex-col items-center">
            <h2 className="mb-8">Should BTR Investment Club Take Over?</h2>
            <section className="w-2/3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. 1
            </section>
          </section>
          <section>
            <section className="w-60 h-60 flex flex-col items-center p-4 pb-20 text-sm border border-gray-600 rounded-xl uppercase">
              <section className="w-full flex justify-between py-2">
                <span>CREATED BY: </span>
                <span>0x123456789</span>
              </section>
              <section className="w-full flex justify-between py-2">
                <span>CREATED AT: </span>
                <span>2023-01-01</span>
              </section>
              <section className="w-full flex justify-between py-2">
                <span>ENDS AT: </span>
                <span>2023-01-31</span>
              </section>
              <section className="w-full flex justify-between py-2">
                <span>AMOUNT OF VOTES: </span>
                <span>16</span>
                {/* Add progress bar with colors green/red */}
              </section>
            </section>
          </section>
        </section>
      )}
    </section>
  );
}
