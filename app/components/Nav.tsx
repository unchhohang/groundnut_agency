import CTABtn from "@compo/CTA.btn";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="nav-bar flex gap-6 justify-center items-center text-body-xxs font-medium" >
      <Image src={"/assets/logo.jpeg"} width={100} height={100} alt={"Logo Image"} />
      <span className="cursor-pointer" ><a href="#features">Features</a></span>
      <span><a href="#pricing">Pricing</a></span>
      <div className="flex gap-6"></div>
      <CTABtn />
    </div>
  );
}
