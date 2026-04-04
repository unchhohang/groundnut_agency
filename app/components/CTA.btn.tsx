// type props = { text: string }

type props = { text?: string, textSize?: 'big' | 'normal' };

export default function CTABtn({ text = 'Book a call', textSize = 'normal' }: props) {
  return (
    <div className={`bg-cta  border-solid rounded-full ${textSize === 'big' ? 'px-6' : 'px-4'} ${textSize === 'big' ? 'py-4': 'py-2'} text-white 
    ${textSize === 'big' ? 'text-lg' : 'text-body-xxs'}`} >
      {text}
    </div >
  );
}
