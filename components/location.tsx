import { NextPage } from "next";

const Location: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-full bg-pea-bg">
      <div className="font-roadstore text-5xl my-10">Location</div>
      <div className="flex-1 flex gap-10">
        <div>
          <iframe
            className="rounded-3xl shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.097649623728!2d127.10797011513887!3d37.50561497980925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca59c22173a71%3A0xbaf7e818798b52de!2s22%20Songpa-daero%2042-gil%2C%20Songpa-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1657691853703!5m2!1sen!2skr"
            width="450"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <div
            id="address-box"
            className="bg-white p-4 rounded-lg shadow-xl font-poppins"
          >
            <div className="font-roadstore">PEAMIR</div>
            <div
              id="address-divider"
              className="my-2 w-8 border-bacon border-solid border-t-4 rounded-full"
            ></div>
            <div>서울특별시 송파구 송파대로 42길 22</div>
            <br />
            <div className="font-bold">(02) 412-1924</div>
            <br />
            <p>
              <span className="font-light text-sm">Hours:</span>
              <br />
              Mon-Fri:<span className="font-bold"> 11:00 AM - 10:00 PM</span>
              <br />
              Sat-Sun:<span className="font-bold"> 11:00 AM - 10:00 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
