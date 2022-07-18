import { NextPage } from "next";
import React from "react";
import { PageTitle } from "./common";
import MenuSlider from "./menuslider";
import { motion } from "framer-motion";

const Menu: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-full bg-pea-bg p-4 sm:p-12">
      <PageTitle title="Menu" />
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
        className="w-full h-full flex-1 overflow-hidden sm:mt-8"
      >
        <MenuSlider />
      </motion.div>
    </div>
  );
};

export default Menu;
