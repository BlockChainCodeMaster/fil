

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <div className="text-center w-10/12 sm:w-7/12 m-auto">
        <h1 className="font-[Mona] text-5xl sm:text-6xl uppercase text-[#5E68E5] font-medium pt-10 sm:pt-36">
          Staking and Mining
        </h1>
        <h1 className="font-[Mona] text-5xl sm:text-6xl uppercase text-white font-medium">
          in the Web3 Era with FLSD
        </h1>
        <p className="text-[#8897AB] pt-10">
          As a trailblazer in Filecoin liquidity solutions, FLSD is redefining
          how storage providers can amplify their mining rewards.
        </p>
        <button className="bg-[#5E68E5] px-5 py-2 rounded-md cursor-pointer my-10">
          Download Our WhitePaper
        </button>
        <h2 className=" text-2xl text-white font-medium pt-10">
          Seamless Services for the Filecoin Ecosystem
        </h2>
        <p className="text-[#8897AB] pt-2">
          With FLSD, manage your collateral effortlessly and securely. Get
          instant, liquid stTokens and enjoy seamless transactions with
          centralized/decentralized platforms.
        </p>
      </div>
      <div className="w-10/12 sm:w-7/12 m-auto">
        <h1 className="text-center text-2xl text-white font-normal pt-10 pb-10">
          How Does <i className=" not-italic text-[#5E68E5]">FLSD works?</i>
        </h1>
        <div className="w-12/12 flex sm:flex-wrap sm:flex-row flex-col">
          <div className="sm:w-8/12 w-full sm:p-2">
            <div className="  w-full p-2">
              <div className=" py-6 px-4 rounded-md bg-gradient-to-tl from-[#5529A4] to-[#0F1629] sm:h-36">
                <h1 className=" text-xl relative text-white">
                  Choose
                  <i className="absolute left-0 -bottom-2 w-14 h-1 bg-[#5E68E5]"></i>
                </h1>
                <p className="text-[#8897AB] pt-2 relative mt-4 text-sm">
                  Opt for a staking ratio that aligns with your financial goals.
                  Deposit your Filecoin (FIL) to mint your desired quantity of
                  $sFIL tokens.
                </p>
              </div>
            </div>
            <div className="  w-full p-2">
              <div className=" py-6 px-4 rounded-md bg-gradient-to-tl from-[#0F7DB0] to-[#0F1629] sm:h-36">
                <h1 className=" text-xl relative text-white">
                  Earn
                  <i className="absolute left-0 -bottom-2 w-14 h-1 bg-[#5E68E5]"></i>
                </h1>
                <p className="text-[#8897AB] pt-2 relative mt-4  text-sm">
                  Elevate your $sFIL earnings by proactively staking your $sFIL
                  tokens in the vault, or by participating in the stability pool
                  within the decentralized finance (DeFi) ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className=" sm:w-4/12 w-full p-2">
            <div className="  py-6 px-4 rounded-md bg-gradient-to-tl from-[#393FD8] to-[#0F1629] sm:h-80">
              <h1 className=" text-xl relative text-white">
                Freedom
                <i className="absolute left-0 -bottom-2 w-14 h-1 bg-[#5E68E5]"></i>
              </h1>
              <p className="text-[#8897AB] pt-2 relative mt-4 text-sm">
                We&apos;re committed to enabling the withdrawal of FIL tokens.
                We&apos;re actively working on a sustainable and reliable
                mechanism to ensure you can access your assets anytime you
                choose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 sm:w-7/12 m-auto flex flex-col sm:flex-row pt-10">
        <div className="w-full sm:w-6/12 mr-24">
          <h1 className="text-2xl text-white font-normal pt-10 pb-10">
            Where Do Your Earnings{" "}
            <i className=" not-italic text-[#5E68E5]">Come From?</i>
          </h1>
          <p className="text-[#8897AB] pt-2">
            Your rewards are sourced directly from the Filecoin network. The
            network utilizes FIL tokens from storage providers like you as
            collateral, and allocates a portion of its block rewards to be your
            earnings.
          </p>
        </div>
        <img src="/earn.png" alt="earn" width={401} height={252} />
      </div>
    </main>
  );
}
