import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import MenuSlider from "./menuslider";

const Menu: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-full bg-pea-bg">
      <div className="font-roadstore text-5xl my-10">Menu</div>
      <div className="w-full h-full max-h-screen overflow-hidden mt-8">
        <MenuSlider />
      </div>
    </div>
  );
};

export default Menu;
