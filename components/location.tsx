import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageTitle } from "./common";
import { motion } from "framer-motion";

const Location: NextPage = () => {
  return (
    <div className="h-full flex flex-1 flex-col">
      <div className="flex flex-col flex-1 items-center bg-pea-bg p-12">
        <PageTitle title="Location" />
        <div className="w-full h-full container flex flex-col sm:flex-row gap-10">
          <GoogleMapCard />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1.5,
                delay: 0.5,
              },
            }}
          >
            <LocationCard />
            <InstagramCard />
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const LocationCard: NextPage = () => {
  return (
    <div
      id="address-box"
      className="bg-white p-4 rounded-lg shadow-xl font-poppins"
    >
      <div className="font-roadstore">PEAMIR</div>
      <div
        id="address-divider"
        className="my-2 w-8 border-bacon border-solid border-t-4 rounded-full"
      ></div>
      <div>서울특별시 송파구 송파대로 42길 22</div>
      <br />
      <div className="font-bold">(02) 412-1924</div>
      <br />
      <p>
        <span className="font-light text-sm">Hours:</span>
        <br />
        Mon-Fri:<span className="font-bold"> 11:00 AM - 10:00 PM</span>
        <br />
        Sat-Sun:<span className="font-bold"> 11:00 AM - 10:00 PM</span>
      </p>
    </div>
  );
};

const GoogleMapCard: NextPage = () => {
  return (
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
      className="flex-1"
    >
      <iframe
        className="w-full h-full rounded-3xl shadow-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.097649623728!2d127.10797011513887!3d37.50561497980925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca59c22173a71%3A0xbaf7e818798b52de!2s22%20Songpa-daero%2042-gil%2C%20Songpa-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1657691853703!5m2!1sen!2skr"
        width="360"
        height="360"
        loading="lazy"
      ></iframe>
    </motion.div>
  );
};

const InstagramCard: NextPage = () => {
  return (
    <Link href="https://www.instagram.com/peamir_diner/">
      <div className="bg-white p-4 mt-5 font-roadstore shadow-xl rounded-lg cursor-pointer flex items-center gap-5">
        <Image src="/assets/images/instagram.png" width={32} height={32} />
        Instagram
      </div>
    </Link>
  );
};

const Footer: NextPage = () => {
  return (
    <div
      id="footer"
      className="bg-pea-blue h-20 px-12 flex flex-row justify-between items-center font-poppins font-black"
    >
      <Image
        className="rounded-full"
        src="/assets/images/logo.png"
        width={48}
        height={48}
      />
      <span className="flex-1 flex justify-center text-sm sm:text-lg ml-5 sm:ml-0">
        Copyright © 2022 Peamir. All rights reserved
      </span>
    </div>
  );
};

export default Location;
