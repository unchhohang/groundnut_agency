// type props = { text: string }

type props = {text?: string};

export default function CTABtn({text = 'Book a call'}: props) {
  return (
    <div className="bg-cta  border-solid rounded-full px-4 py-2 text-white">{text}</div>
  );
}
