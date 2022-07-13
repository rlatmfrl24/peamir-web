import type { NextPage } from "next";
import ReactPageScroller from "react-page-scroller";
import Main from "../components/main";

const Home: NextPage = () => {
  return (
    <ReactPageScroller>
      <Main />
      <>2</>
      <>3</>
      <>4</>
    </ReactPageScroller>
  );
};

export default Home;
