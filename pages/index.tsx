import { Inter } from 'next/font/google'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <div className="text-center w-10/12 sm:w-7/12 m-auto">
        <h1 className=" text-5xl sm:text-6xl text-[#5E68E5] font-medium pt-10 sm:pt-36">
          STAKING AND
        </h1>
        <h1 className="text-5xl sm:text-6xl text-white font-medium">
          MINING ON WEB3
        </h1>
        <p className="text-[#8897AB] pt-10">
          FLSD is a leading liquidity FILECOIN staking tool builder. Its toolkit
          fundamentally changes how storage providers earn block rewards from
          mining.
        </p>
        <button className="bg-[#5E68E5] px-5 py-2 rounded-md cursor-pointer my-10">
          Download WhitePaper
        </button>
        <h2 className=" text-2xl text-white font-medium pt-10">
          Applications and services for the Filecoin ecosystem.
        </h2>
        <p className="text-[#8897AB] pt-2">
          FLSD allows pledgers to easily and securely manage collateral, receive
          liquid stTokens, and synchronize transactions with centralized
          platforms.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12 m-auto">
        <h1 className="text-center text-2xl text-white font-normal pt-10 pb-10">
          How FLSD <i className=" not-italic text-[#5E68E5]">works?</i>
        </h1>
        <div className="w-12/12 flex sm:flex-wrap sm:flex-row flex-col">
          <div className=" sm:w-8/12 w-full p-2">
            <div className=" py-6 px-4 rounded-md bg-gradient-to-tl from-[#5529A4] to-[#0F1629] sm:h-32">
              <h1 className=" text-xl relative">
                Choose
                <i className="absolute left-0 -bottom-2 w-14 h-1 bg-[#5E68E5]"></i>
              </h1>
              <p className="text-[#8897AB] pt-2 relative mt-4  text-sm">
                Select your preferred staking ratio and deposit FIL as
                collateral to mint the desired amount of $FLSD.
              </p>
            </div>
          </div>
          <div className=" sm:w-4/12 w-fullp-2">
            <div className="  py-6 px-4 rounded-md bg-gradient-to-tl from-[#393FD8] to-[#0F1629]">
              <h1 className=" text-xl relative">
                Freedom
                <i className="absolute left-0 -bottom-2 w-14 h-1 bg-[#5E68E5]"></i>
              </h1>
              <p className="text-[#8897AB] pt-2 relative mt-4 text-sm">
                We utilize a rate model determined by market supply and demand.
                Optimal utilization controls the amount of FIL available in the
                staking pool, ensuring it is not entirely borrowed, thus
                preserving liquidity. You can unlock your tokens at any time as
                long as there is available liquidity in the locked pool, with no
                time limit.
              </p>
            </div>
          </div>
          <div className=" sm:w-8/12 w-full p-2 sm:-mt-36">
            <div className=" py-6 px-4 rounded-md bg-gradient-to-tl from-[#0F7DB0] to-[#0F1629] sm:h-30">
              <h1 className=" text-xl relative">
                Earn
                <i className="absolute left-0 -bottom-2 w-14 h-1 bg-[#5E68E5]"></i>
              </h1>
              <p className="text-[#8897AB] pt-2 relative mt-4  text-sm">
                Earn $FLSD by actively maintaining loans or depositing funds
                into the stability pool within DeFi. Lock these $FLSD tokens to
                increase your daily bonus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 sm:w-7/12 m-auto flex flex-col sm:flex-row pt-10">
        <div className="w-full sm:w-6/12 mr-24">
          <h1 className="text-2xl text-white font-normal pt-10 pb-10">
            Where do my earnings{" "}
            <i className=" not-italic text-[#5E68E5]">come from?</i>
          </h1>
          <p className="text-[#8897AB] pt-2">
            Your earnings are generated from the Filecoin network, which borrows
            FIL tokens from storage providers as collateral. A portion of the
            Filecoin network&apos;s block rewards is allocated as your income.
          </p>
        </div>
        <Image src="/earn.png" alt="earn" width={401} height={252} />
      </div>
    </main>
  );
}
