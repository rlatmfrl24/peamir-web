import { NextPage } from "next";
import React from "react";
import { PageTitle } from "./common";
import MenuSlider from "./menuslider";

const Menu: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-full bg-pea-bg p-12">
      <PageTitle title="Menu" />
      <div className="w-full h-full max-h-screen overflow-hidden mt-8">
        <MenuSlider />
      </div>
    </div>
  );
};

export default Menu;
