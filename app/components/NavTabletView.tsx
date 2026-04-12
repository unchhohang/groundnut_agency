'use client';
import CTABtn from "@compo/CTA.btn";
import { ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

export default function NavTabletView() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="">
      <div className="flex justify-between px-5 " >
        <Image src={"/assets/logo.jpeg"} width={100} height={100} alt={"Logo Image"} />
        {
          isOpen ?
            <XIcon size={42} onClick={() => setIsOpen(false)} />
            :
            <ListIcon size={42} onClick={() => setIsOpen(true)} />
        }
      </div>

      <div className={`
        absolute w-full bg-black/80 m-0
        nav-drop list-none flex flex-col gap-2 p-5 text-body-xxs transition-all duration-300 ease-in-out 
        ${isOpen ? "max-h-60 opacity-100 " : "max-h-0 opacity-0 mt-0"}
        `}>
        <div className="cursor-pointer"><a href="#features">Features</a></div>
        <div className="cursor-pointer"><a href="#pricing">Pricing</a></div>
        <div className="mt-10 "><CTABtn /></div>
      </div>
    </div >
  );
}
