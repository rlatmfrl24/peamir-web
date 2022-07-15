import type { NextPage } from "next";
import ReactPageScroller from "react-page-scroller";
import Main from "../components/main";
import Location from "../components/location";
import Menu from "../components/menu";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setIsBrowser(!isMobile);
  }, []);

  return isBrowser ? (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <Main setPage={setCurrentPage} />
        <Menu />
        <Location />
      </ReactPageScroller>
      {currentPage === 2 && (
        <div className="absolute bottom-0 right-0 mr-4 mb-4">
          <button
            className="bg-pea-red font-roadstore text-black text-2xl rounded-full px-4 py-2"
            onClick={() => setCurrentPage(0)}
          >
            Go Top
          </button>
        </div>
      )}
    </>
  ) : (
    <div>
      <Main setPage={setCurrentPage} />
      <Menu />
      <Location />
    </div>
  );
};

export default Home;
