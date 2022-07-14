import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const TopMenu: NextPage = () => {
  return (
    <div
      id="top-menu"
      className="h-fit w-full flex flex-col sm:flex-row items-center px-10 py-4 bg-bacon"
    >
      <div className="font-roadstore text-3xl sm:mr-16">PEAMIR</div>
      <div
        id="top-menu-button-box"
        className="flex flex-row gap-8 font-poppins font-bold mt-2 sm:mt-0"
      >
        <div className="hover:underline">
          <Link href={"/"}>About</Link>
        </div>
        <div className="hover:underline">
          <Link href={"/"}>Menu</Link>
        </div>
        <div className="hover:underline">
          <Link href={"/"}>Location</Link>
        </div>
        <div className="hover:underline">
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

const Main: NextPage = () => {
  return (
    <div className="h-full flex flex-col">
      <TopMenu />
      <div className="flex-1 bg-pea-bg">
        <div className="w-full h-full mx-12 gap-12 lg:pl-24 flex flex-row">
          <div
            id="about-description"
            className="flex w-full sm:w-fit justify-center items-center"
          >
            <div className="font-poppins font-bold text-6xl">
              <span className="w-full font-roadstore">
                CENTER
                <br />
                AMERICAN
                <br />
                DINNER
              </span>
            </div>
          </div>
          <div
            id="about-image"
            className="relative flex-1 items-center invisible sm:visible"
          >
            <Image
              src="/assets/images/cook.svg"
              width={200}
              height={200}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
