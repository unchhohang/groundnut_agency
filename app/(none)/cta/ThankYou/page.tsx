import LottieIcon from "@compo/lottie/LottieIcon";
import celebrateLotti from "@compo/lottie/celebrate.json"

export default function ThankYou() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <div className="font-medium text-7xl text-center tracking-tighter leading-20
        text-white ">
        Thank you for your interest. We will get back to you soon
      </div>

      <div
        className={'h-screen w-screen absolute tablet:hidden'}
      >
        <LottieIcon animationData={celebrateLotti} loop={true} size={500}/>
      </div>

      <div
        className={`
          h-screen w-screen absolute hidden tablet:block left-[50%] -translate-x-[35%] lg:-translate-x-[30%]
          top-[50%] -translate-y-[50%]
          `}
      >
        <LottieIcon animationData={celebrateLotti} loop={true} size={1000}/>
      </div>
    </div>
  );
}
