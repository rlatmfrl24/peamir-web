import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import { motion } from "framer-motion";

const TopMenu: NextPage<{ setPage: Dispatch<SetStateAction<number>> }> = ({
  setPage,
}) => {
  return (
    <div
      id="top-menu"
      className="h-fit w-full flex flex-col sm:flex-row items-center px-10 py-4 bg-bacon"
    >
      <div className="font-roadstore text-3xl sm:mr-16">PEAMIR</div>
      <div
        id="top-menu-button-box"
        className="flex-row gap-8 font-roadstore mt-2 sm:mt-0 hidden sm:flex"
      >
        <div className="hover:underline" onClick={() => setPage(0)}>
          <Link href={"/"}>About</Link>
        </div>
        <div className="hover:underline" onClick={() => setPage(1)}>
          <Link href={"/"}>Menu</Link>
        </div>
        <div className="hover:underline" onClick={() => setPage(2)}>
          <Link href={"/"}>Location</Link>
        </div>
      </div>
    </div>
  );
};

const Main: NextPage<{ setPage: Dispatch<SetStateAction<number>> }> = ({
  setPage,
}) => {
  return (
    <div className="flex flex-col h-full">
      <TopMenu setPage={setPage} />
      <div className="flex flex-1 justify-center bg-pea-bg">
        <div className="h-full sm:mx-12 gap-12 py-24 sm:py-5 lg:pl-24 sm:flex flex-row items-center sm:flex-1">
          <div
            id="about-description"
            className="flex sm:w-fit justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 0.5,
                },
              }}
            >
              <div className="font-poppins font-bold text-6xl">
                <span className="font-roadstore">
                  CENTERAL
                  <br />
                  AMERICAN
                  <br />
                  DINER
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div
            id="about-image"
            className="relative w-full h-full items-center invisible sm:visible"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 1.5,
                delay: 1,
              },
            }}
          >
            <Image
              src="/assets/images/cook.svg"
              width={200}
              height={150}
              layout="fill"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
