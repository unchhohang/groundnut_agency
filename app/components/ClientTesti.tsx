import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function ClientTesti() {
  return (
    <div>
      <div className="client-testi-phone m-5 my-10 relative bg-secondary rounded-xl tablet:hidden">
        <div className="">
          <Image src={'/assets/testi/Rishav.jpeg'}
            className=" mask-b-from-27%  mask-b-to-89%  w-full h-auto rounded-xl"
            width={'1000'}
            height={'800'}
            alt="Sacred Treaks testomonial" />
        </div>
        <div className="relative bottom-30 ">
          <div className="flex flex-col gap-4 p-5">
            <div className="flex">
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
            </div>
            <div className="">
              Working with Groundnut Agency was a breath of fresh air. We’ve worked with designers who don't understand code and developers who don't 'get' design, but Groundnut bridges that gap perfectly. They took our rough concept and turned it into a high-performance site that looks stunning and functions flawlessly. The transition from our initial Figma sketches to the live site was seamless. Truly a top-tier partner for any business looking to level up their digital presence
            </div>
            <div>
              <div className="text-white font-medium">Rishav Acharya</div>
              <div>CEO of SacredTreaks</div>
            </div>
          </div>
        </div>
      </div>

      <div className="client-testi-tablet relative  m-5 my-10 bg-secondary rounded-xl max-tablet:hidden
            lg:hidden flex 
          ">
        <div className="absolute top-[50%] -translate-y-[50%]">
          <div className="flex flex-col gap-2 max-w-[60%] p-5 ">
            <div className="flex">
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
            </div>
            <div className="text-body-xxs">
              Working with Groundnut Agency was a breath of fresh air. We’ve worked with designers who don't understand code and developers who don't 'get' design, but Groundnut bridges that gap perfectly. They took our rough concept and turned it into a high-performance site that looks stunning and functions flawlessly. The transition from our initial Figma sketches to the live site was seamless. Truly a top-tier partner for any business looking to level up their digital presence
            </div>
            <div>
              <div className="text-white font-medium">Rishav Acharya</div>
              <div>CEO of SacredTreaks</div>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1">
          <Image src={'/assets/testi/Rishav.jpeg'}
            className=" mask-l-from-20%  mask-l-to-80%  w-full h-auto rounded-xl shrink-0"
            width={500}
            height={500}
            alt="Sacred Treaks testomonial" />
        </div>
      </div>


      <div className="client-testi-lg relative m-5 my-10 bg-secondary rounded-xl hidden 
            lg:flex
          ">
        <div className="absolute top-[50%] -translate-y-[50%]">
          <div className="flex flex-col gap-4 max-w-[60%] p-5 ">
            <div className="flex">
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
              <StarIcon weight="fill" color="#ffffff" />
            </div>
            <div className="">
              Working with Groundnut Agency was a breath of fresh air. We’ve worked with designers who don't understand code and developers who don't 'get' design, but Groundnut bridges that gap perfectly. They took our rough concept and turned it into a high-performance site that looks stunning and functions flawlessly. The transition from our initial Figma sketches to the live site was seamless. Truly a top-tier partner for any business looking to level up their digital presence
            </div>
            <div>
              <div className="text-white font-medium">Rishav Acharya</div>
              <div>CEO of SacredTreaks</div>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1">
          <Image src={'/assets/testi/Rishav.jpeg'}
            className=" mask-l-from-20%  mask-l-to-80%  w-full h-auto rounded-xl shrink-0"
            width={500}
            height={500}
            alt="Sacred Treaks testomonial" />
        </div>
      </div>
    </div>
  );
}
