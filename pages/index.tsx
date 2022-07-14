import type { NextPage } from "next";
import ReactPageScroller from "react-page-scroller";
import Main from "../components/main";
import Location from "../components/location";
import Menu from "../components/menu";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(!isMobile);
  }, []);

  return isBrowser ? (
    <ReactPageScroller>
      <Main />
      <Menu />
      <Location />
      <>4</>
    </ReactPageScroller>
  ) : (
    <div>
      <Main />
      <Menu />
      <Location />
      <>4</>
    </div>
  );
};

export default Home;
