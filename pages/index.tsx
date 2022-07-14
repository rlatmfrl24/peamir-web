import type { NextPage } from "next";
import ReactPageScroller from "react-page-scroller";
import Main from "../components/main";
import Location from "../components/location";
import Menu from "../components/menu";

const Home: NextPage = () => {
  return (
    <ReactPageScroller>
      <Main />
      <Menu />
      <Location />
      <>4</>
    </ReactPageScroller>
  );
};

export default Home;
