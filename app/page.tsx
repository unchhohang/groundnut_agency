import CTABtn from "@compo/CTA.btn";
import Image from "next/image";
import {
  StarIcon, ShoppingBagIcon, LineSegmentIcon, LaptopIcon, DesktopIcon,
  MagicWandIcon, InstagramLogoIcon, ChartLineIcon, EnvelopeIcon,
  CrownIcon, PulseIcon
} from "@phosphor-icons/react/ssr";
import RefreshIcon from "@compo/icons/svgs/RefreshIcon";
import catAnima from "@compo/lottie/catAnim.json";
import LottieIcon from "@compo/lottie/LottieIcon";
import { PhoneIcon } from "@phosphor-icons/react";
import Nav from "@compo/Nav";
import { processPoints, skewTicker1, skewTicker2 } from "@/app/contents";


export default function Home() {

  return (
    <div className="min-h-screen justify-center font-sans dark:bg-black
     items-center">

      <div className="hidden md:block">
        <Nav />
      </div>

      <div className="flex flex-col items-center px-10 gap-5 mb-18" >
        <div className=" font-medium text-7xl text-center tracking-tighter leading-20
        text-white">We design your vision and build it to reality</div>
        <div>Building cool stuffs</div>
        <CTABtn />
      </div>

      <div className="relative">
        <video className="w-full h-auto " preload="none" autoPlay loop muted>
          <source src="/assets/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Image src={'/assets/golden_logo_bg_rm.png'} alt="Golden logo " width={200} height={200}
          className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="m-5">
        <div className="text-center">Our clients:</div>
        <div className=" overflow-hidden w-full  flex justify-center my-2">
          <Image src={'/assets/testi/ST_logo.jpg'} width={100} height={100} alt="Sacred Treaks logo" />

          {/* 
            <div className="flex  gap-1  animate-scroll-left ">

            {
              logosAnimate.map((_, i) => <Image src={'/assets/loqo_logo_bg_rm.jpeg'} width={600} height={600}/>) 
            }
          </div>
          <div className="flex  gap-1  animate-scroll">
            {
              logosAnimate.map((_, i) => <Image src={'/assets/loqo_logo_bg_rm.jpeg'} width={600} height={600}/>) 
            }
          </div>
          */}
        </div>
      </div>

      <div className="m-5 my-10 relative bg-secondary rounded-xl">
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

      <div className="process-section rounded-4xl bg-secondary m-5 inset-shadow-top flex flex-col items-center
         px-5   ">
        <div className="rounded-full border border-solid border-gray-50/10 text-white text-body-xxs
              font-medium p-1 px-3 mt-10 m-2">Process</div>
        <div className=" text-white text-4xl font-medium text-center tracking-tight">Your designs,</div>
        <div className="font-instru italic text-white text-4xl font-medium text-center tracking-tight">effortlessly.</div>
        <div className="text-center my-3">Begin your design journey in three effortless steps</div>
        <div className="flex flex-col items-center gap-2">
          {
            processPoints.map((_, i) =>
              <div key={i} className="flex flex-col items-center">
                <LottieIcon animationData={catAnima} loop={true} />
                <div className="text-2xl  font-medium tracking-tight text-white px-10 text-center">{_.head}</div>
                <div className="text-center text-sm px-10 mt-1">{_.body}</div>
              </div>)
          }
        </div>
        <div className="my-10 mb-15">
          <CTABtn text="Book a 15-min call" />
        </div>
      </div>

      <div className="carousal-products flex flex-col gap-8">
        <div className="[transform:perspective(1200px)_skewX(4deg)_skewY(4deg)]">
          <div className="w-full  overflow-hidden flex mask-l-from-80% mask-l-to-100%
          mask-r-from-80% mask-r-to-100%">
            <div className="flex p-2 gap-2 animate-scroll-left" >
              {
                skewTicker1.map((x, i) =>
                  <Image key={i} src={x} width={300} height={150} alt="moving pic 1"
                    className="shrink-0 "
                    style={{ borderRadius: '24px' }}
                  />)
              }
            </div>
            <div className="flex p-2 gap-2 animate-scroll-left -translate-x-[200%] " >
              {
                skewTicker1.map((x, i) =>
                  <Image key={i} src={x} width={300} height={150} alt="moving pic 1"
                    className="shrink-0 "
                    style={{ borderRadius: '24px' }}
                  />)
              }
            </div>
          </div>

          <div className="w-full overflow-hidden flex mask-l-from-80% mask-l-to-100%
          mask-r-from-80% mask-r-to-100% " >
            <div className="flex p-2 gap-2  animate-scroll-right" >
              {
                skewTicker2.map((x, i) =>
                  <Image key={i} src={x} width={300} height={150} alt="moving pic 1"
                    className="shrink-0 "
                    style={{ borderRadius: '24px' }}
                  />)
              }
            </div>
            <div className="flex p-2 gap-2  animate-scroll-right" >
              {
                skewTicker2.map((x, i) =>
                  <Image key={i} src={x} width={300} height={150} alt="moving pic 1"
                    className="shrink-0 "
                    style={{ borderRadius: '24px' }}
                  />)
              }
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>Why choose Us</div>
        <div>We speak both design and code</div>
        <div>We bridge the gap between design and code. By handling both, we eliminate the 'lost in translation' moments that cost time and money, ensuring your pixel-perfect vision performs as beautifully as it looks.</div>
      </div>

      <div>
        <Image src={'/assets/why_choose_us.jpeg'} width={500} height={500} alt="Why choose us lady picture" />
        <div className="flex">
          <StarIcon weight="fill" />
          <StarIcon weight="fill" />
          <StarIcon weight="fill" />
          <StarIcon weight="fill" />
          <StarIcon weight="fill" />
        </div>
        <div>Getting design done was such a pain. I am so glad we found Groundnut agency, the work is incredible and the process is refreshingly painless.</div>
        <div>Jenny London</div>
        <div>Founder of Kinect</div>

        <div>
          <div>
            <div>The Design-to-Dev Bridge</div>
            <div>We handle both design and code to eliminate "lost in translation" moments. This ensures your pixel-perfect vision is exactly what we deliver in the final build.</div>
          </div>
          <div>
            <div>Built for Performance</div>
            <div>A beautiful site must be fast and easy to find. We prioritize speed and SEO from day one, building high-performance websites that turn visitors into customers.</div>
          </div>
        </div>
        <div>
          <div>Strategy-Led Results</div>
          <div>We build what your business needs, not just what you ask for. Every decision is rooted in your goals to ensure your site grows with you.</div>
        </div>
      </div>

      <div>Features</div>
      <div>Reasons you will love us.</div>
      <div>
        <div>
          <LottieIcon animationData={catAnima} loop={true} />
          <div>Pixel Perfect Design</div>
          <div>We just don't make design according to your vision we help you to see that vision also</div>
        </div>
        <div>
          <LottieIcon animationData={catAnima} loop={true} />
          <div>High Performance Site</div>
          <div>High performance site build with  quality code and frame work. With AI augmentation</div>
        </div>
        <div>
          <LottieIcon animationData={catAnima} loop={true} />
          <div>Affordable Rate</div>
          <div>Premium design and development services tailored to fit your business budget.</div>
        </div>
        <div>
          <LottieIcon animationData={catAnima} loop={true} />
          <div>SEO Optimization</div>
          <div>Built from the ground up to rank higher and get your brand discovered</div>
        </div>
        <div>
          <LottieIcon animationData={catAnima} loop={true} />
          <div>Client based features</div>
          <div>Custom functionality built specifically to solve your unique business challenges</div>
        </div>
        <div>
          <LottieIcon animationData={catAnima} loop={true} />
          <div>Secure site</div>
          <div>Industry-standard security protocols to keep your data and your users safe</div>
        </div>
        <CTABtn text="Book a 15-min call" />
      </div>

      <div>
        <div>Tools</div>
        <div>All your Project needs.</div>
        <div>We use various tools to make your Project to top quality</div>
        <div>
          <div className="">
            <div className="flex"><ShoppingBagIcon /> Web App</div>
            <div className="flex"><LineSegmentIcon /> Design</div>
            <div className="flex"><LaptopIcon /> Websites</div>
            <div className="flex"><DesktopIcon /> Landing Pages</div>
            <div className="flex"><MagicWandIcon /> Logos</div>
          </div>
          <div className="">
            <div className="flex"><InstagramLogoIcon /> SEO</div>
            <div className="flex"><ChartLineIcon /> Web Optimization</div>
            <div className="flex"><EnvelopeIcon /> NextJs</div>
            <div className="flex"><CrownIcon /> NodeJs</div>
            <div className="flex"><PulseIcon /> NextJs</div>
          </div>
        </div>
      </div>

      <div>
        <div>Pricing</div>
        <div>Pricing that is in your Budget</div>
        <CTABtn text="Book a 15-min call" />
        <div>Designs trusted by companies like:</div>
        <div></div>
        <div className="">
          <Image src={'/assets/loqo_logo_bg_rm.jpeg'} width={200} height={150} alt="moving logos" />
          <Image src={'/assets/loqo_logo_bg_rm.jpeg'} width={200} height={150} alt="moving logos" />
          <Image src={'/assets/loqo_logo_bg_rm.jpeg'} width={200} height={150} alt="moving logos" />
          <Image src={'/assets/loqo_logo_bg_rm.jpeg'} width={200} height={150} alt="moving logos" />
          <Image src={'/assets/loqo_logo_bg_rm.jpeg'} width={200} height={150} alt="moving logos" />
        </div>
      </div>

      <div>
        <div>
          <div>What services does Groundnut Agency provide?</div>
          <div>We are a "design and build" IT agency. This means we handle the entire lifecycle of your project—from the initial UI/UX design in Figma to the final custom development and launch. Whether you need a high-converting landing page or a complex web application, we provide the strategy, the look, and the code.</div>
        </div>
        <div>
          <div>Who is your typical client?</div>
          <div>We build for everyone. Our clients range from local small business owners looking for their first professional digital presence to tech startups needing high-performance, scalable web systems. If you have a vision, we have the technical engine to build it.</div>
        </div>
        <div>
          <div>I already have a design. Can you just build it?</div>
          <div>Absolutely. We often partner with independent designers and marketing firms to act as their dedicated development team. We specialize in turning static designs into pixel-perfect, responsive, and lightning-fast websites.</div>
        </div>
        <div>
          <div>How long does a typical project take?</div>
          <div>Landing Pages: 1–2 weeks.  Standard Business Sites: 3–5 weeks.  Custom Web Apps: 8+ weeks. We provide a clear project roadmap during our kickoff meeting so you always know exactly where we are.</div>
        </div>
        <div>
          <div>
            What "stack" or technologies do you use?
          </div>
          <div>
            We don't believe in "one size fits all." We choose the best tool for your specific goals—whether that is Next.js and Tailwind CSS for high-performance apps, or platforms like Framer for design-heavy brand sites that need to be launched quickly.
          </div>
        </div>
        <div>
          <div>How much does a website cost?</div>
          <div>Because every project is custom, we offer three main engagement tiers: The Starter, The Professional, and The Enterprise. Once we have a 15-minute discovery call to understand your needs, we’ll provide a fixed-price proposal—no hidden hourly surprises.</div>
        </div>
      </div>
    </div >
  );
}
