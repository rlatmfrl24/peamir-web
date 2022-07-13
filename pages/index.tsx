import type { NextPage } from "next";
import ReactPageScroller from "react-page-scroller";
import Main from "../components/main";
import Location from "../components/location";

const Home: NextPage = () => {
  return (
    <ReactPageScroller>
      <Main />
      <>2</>
      <Location />
      <>4</>
    </ReactPageScroller>
  );
};

export default Home;
