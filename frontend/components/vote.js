import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { AlertTriangle, Checkmark, CrossCircle } from "@web3uikit/icons";

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
    <section className="pt-28">
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
        <section className="flex justify-center pb-2 px-10 bg-black border-b border-gray-500">
          <section className="w-1/3 flex content-center justify-evenly">
            <p className="cursor-pointer hover:text-pink-600 text-lg">
              <Link href="/proposal">Proposals</Link>
            </p>
            <p className="cursor-pointer hover:text-pink-600 text-lg">
              <Link href="/#">Create Proposal</Link>
            </p>
            <p className="cursor-pointer hover:text-pink-600 text-lg">
              <Link href="/#">Transparency</Link>
            </p>
          </section>
        </section>
      )}
      <section className="flex flex-col items-center bg-white pt-8 pb-20">
        <section className="w-2/3">
          <section className="flex justify-evenly w-full">
            <section className="w-80 h-28 bg-waves bg-blue-900 flex flex-col justify-evenly pl-4 pb-4 border rounded-md border-gray-200 text-gray-900 shadow-lg">
              <p className="text-gray-100 text-lg">Proposals</p>
              <p className="text-white text-lg font-semibold">
                9 active proposals
              </p>
            </section>
            <section className="w-80 h-28 bg-waves bg-blue-900 flex flex-col justify-evenly pl-4 pb-4 border rounded-md border-gray-200 text-gray-900 shadow-lg">
              <p className="text-gray-100 text-lg">Participation</p>
              <p className="text-white text-lg font-semibold">
                862 votes this month
              </p>
            </section>
            <section className="w-80 h-28 bg-waves bg-blue-900 flex flex-col justify-evenly pl-4 pb-4 border rounded-md border-gray-200 text-gray-900 shadow-lg">
              <p className="text-gray-100 text-lg">Treasury</p>
              <p className="text-white text-lg font-semibold">$832,000</p>
            </section>
          </section>
          <section className="w-full flex flex-col items-center justify-evenly mt-6 py-2">
            <section className="flex flex-col justify-between w-4/5 h-24 my-2 px-4 py-2 rounded-md shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-300 hover:border-gray-100 hover:border">
              <span className="text-slate-900 text-3xl font-semibold">
                Invest in AGIX
              </span>
              <section className="flex justify-between text-sm">
                <section className="flex items-center">
                  <section className="flex items-center bg-green-100 px-2 mr-2 rounded-2xl">
                    <span>
                      <Checkmark
                        fontSize="13px"
                        className="fill-green-500 mr-1"
                      />
                    </span>
                    <span className="text-green-500 mr-2 font-semibold">
                      ACTIVE
                    </span>
                  </section>
                  <span className="text-slate-400 mr-2">17 VOTES</span>
                  <span className="text-slate-700">ENDS IN 23 DAYS</span>
                </section>
                <span className="text-slate-400">
                  LEADING:{" "}
                  <span className="text-slate-700 font-semibold">YES</span>
                </span>
              </section>
            </section>
            <section className="flex flex-col justify-between w-4/5 h-24 my-2 px-4 py-2 rounded-md shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-300 hover:border-gray-100 hover:border">
              <span className="text-slate-900 text-3xl font-semibold">
                Invest in XRP
              </span>
              <section className="flex justify-between text-sm">
                <section className="flex items-center">
                  <section className="flex items-center bg-green-100 px-2 mr-2 rounded-2xl">
                    <span>
                      <Checkmark
                        fontSize="13px"
                        className="fill-green-500 mr-1"
                      />
                    </span>
                    <span className="text-green-500 mr-2 font-semibold">
                      ACTIVE
                    </span>
                  </section>
                  <span className="text-slate-400 mr-2">17 VOTES</span>
                  <span className="text-slate-700">ENDS IN 23 DAYS</span>
                </section>
                <span className="text-slate-400">
                  LEADING:{" "}
                  <span className="text-slate-700 font-semibold">NO</span>
                </span>
              </section>
            </section>
            <section className="flex flex-col justify-between w-4/5 h-24 my-2 px-4 py-2 rounded-md shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-300 hover:border-gray-100 hover:border">
              <span className="text-slate-900 text-3xl font-semibold">
                Invest in XRP
              </span>
              <section className="flex justify-between text-sm">
                <section className="flex items-center">
                  <section className="flex items-center bg-red-100 px-2 mr-2 rounded-2xl">
                    <span>
                      <CrossCircle
                        fontSize="17px"
                        className="fill-red-500 mr-1"
                      />
                    </span>
                    <span className="text-red-500 mr-2 font-semibold">
                      FINISHED
                    </span>
                  </section>
                  <span className="text-slate-400 mr-2">17 VOTES</span>
                  <span className="text-slate-700">ENDED 2022-02-01</span>
                </section>
                <span className="text-slate-400">
                  LEADING:{" "}
                  <span className="text-slate-700 font-semibold">NO</span>
                </span>
              </section>
            </section>
            <section className="flex flex-col justify-between w-4/5 h-24 my-2 px-4 py-2 rounded-md shadow-md shadow-gray-200 hover:shadow-lg hover:shadow-gray-300 hover:border-gray-100 hover:border">
              <span className="text-slate-900 text-3xl font-semibold">
                Invest in XRP
              </span>
              <section className="flex justify-between text-sm">
                <section className="flex items-center">
                  <section className="flex items-center bg-red-100 px-2 mr-2 rounded-2xl">
                    <span>
                      <CrossCircle
                        fontSize="17px"
                        className="fill-red-500 mr-1"
                      />
                    </span>
                    <span className="text-red-500 mr-2 font-semibold">
                      FINISHED
                    </span>
                  </section>
                  <span className="text-slate-400 mr-2">17 VOTES</span>
                  <span className="text-slate-700">ENDED 2022-02-01</span>
                </section>
                <span className="text-slate-400">
                  LEADING:{" "}
                  <span className="text-slate-700 font-semibold">NO</span>
                </span>
              </section>
            </section>
          </section>
        </section>
        {/* TODO
        <section>Create proposal</section>
        <section>Transparency</section>
        <section>Guide</section> */}
      </section>
    </section>
  );
}
