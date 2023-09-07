import { Web3Button } from "@web3modal/react"
import Image from "next/image"
import { useState } from "react";
import Link from "next/link"

export default function Header() {
  const [nav, setNav] = useState([
    {
      name: "Home",
      href: "/",
    },
    {
      name: "WhitePaper",
      href: "/",
    }
  ]);
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Image src="/logo.png" width={60} height={50} alt="logo" />
      <ul className="flex justify-center gap-4 text-sm text-white">
        {nav.map((el, index) => (
          <Link key={index} href={el.href}>
            <li>{el.name}</li>
          </Link>
        ))}
      </ul>
      <i></i>
      {/* <Web3Button /> */}
    </header>
  );
}
