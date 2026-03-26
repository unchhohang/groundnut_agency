// type props = { text: string }

type props = {text?: string};

export default function CTABtn({text = 'Book a call'}: props) {
  return (
    <div>{text}</div>
  );
}
