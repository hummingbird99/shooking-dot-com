'use client';

import { LiaShoppingBagSolid } from "react-icons/lia";
import Link from "next/link";
import useSneakerButtonState from "@/shared/button/model/useSneakerButtonState";

export default function Header() {
  const {counter} = useSneakerButtonState();

  return (
    <header className="grid justify-items-end w-[430px] h-[70px] bg-black mb-8">
      <Link hrefLang="en" href="/cart" className="mx-5 relative flex justify-center items-center">
        <LiaShoppingBagSolid className="text-white text-[32px]" />
        <div className="bg-white text-[10px] w-[18px] h-[18px] rounded-full flex justify-center items-center absolute mt-5 ml-4">{counter}</div>
      </Link>
    </header>
    )
};