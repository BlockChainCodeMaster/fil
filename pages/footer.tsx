import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center flex-col">
      <div className="w-full text-center sm:text-left sm:w-7/12 m-auto flex sm:flex-row flex-col pt-10">
        <div className="sm:w-6/12 w-full mr-24">
          <h1 className="text-2xl text-white font-normal pt-10 pb-10">
            Ready to be a{" "}
            <i className=" not-italic text-[#5E68E5]">part of the future?</i>
          </h1>
          <p className="text-[#8897AB] pt-2">Join FLSD Now!</p>
        </div>
        <Image src="/join.png" alt="earn" width={401} height={252} />
      </div>
      <div className="bg-[#141C33] h-10 w-full -mt-10 relative z-10">
        <div className="w-10/12 sm:w-7/12 m-auto flex justify-between items-center h-10">
          <Image src="/footer_logo.png" width={60} height={50} alt="logo" />
          <div className="text-xs text-[#8897AB]">
            © 2023 FLSD, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
