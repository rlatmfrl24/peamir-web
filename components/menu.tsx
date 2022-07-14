import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import SimpleSlider from "./slick";

const Menu: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-full bg-pea-bg">
      <div className="font-roadstore text-5xl my-10">Menu</div>
      <div className="w-full">
        <SimpleSlider />
      </div>

      {/* <div className="w-full h-full overflow-auto">
        <div className="h-full flex gap-5 overflow-visible">


          <MenuCard
            link="/assets/images/image_placeholder.jpg"
            name="Peamir Signarture Sandwich"
            price="39,000"
          />
          <MenuCard
            link="/assets/images/image_placeholder.jpg"
            name="Peamir Signarture Sandwich"
            price="39,000"
          />
          <MenuCard
            link="/assets/images/image_placeholder.jpg"
            name="Peamir Signarture Sandwich"
            price="39,000"
          />
          <MenuCard
            link="/assets/images/image_placeholder.jpg"
            name="Peamir Signarture Sandwich"
            price="39,000"
          />
          <MenuCard
            link="/assets/images/image_placeholder.jpg"
            name="Peamir Signarture Sandwich"
            price="39,000"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Menu;
