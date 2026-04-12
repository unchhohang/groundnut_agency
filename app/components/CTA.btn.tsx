// type props = { text: string }

type props = { text?: string, textSize?: 'big' | 'normal' };

export default function CTABtn({ text = 'Book a call', textSize = 'normal' }: props) {
  return (
    <div className={
      `bg-cta   rounded-full text-center cursor-pointer ${textSize === 'big' ? 'px-6' : 'px-4'} ${textSize === 'big'
        ? 'py-4' : 'py-2'} text-white 
        ${textSize === 'big' ? 'text-lg' : 'text-body-xxs'}
        hover:shadow-[0_0_0_5px_rgba(98,20,217,0.33)]
        tablet:px-6 tablet:py-4
      `} >
      {text}
    </div >
  );
}
