// File for saving contents to use late for render

import { TFaq } from "@/app/types";
import catAnima from "@compo/lottie/catAnim.json";
import { ChartLineIcon, CrownIcon, DesktopIcon, EnvelopeIcon, InstagramLogoIcon, LaptopIcon, LineSegmentsIcon, MagicWandIcon, PulseIcon, ShoppingBagIcon } from "@phosphor-icons/react/dist/ssr";

type TProcessPoint = { url: string, head: string, body: string }

export const logosAnimate = [1, 2, 3, 4, 5, 6];
export const processPoints: TProcessPoint[] = [
  {
    url: '',
    head: 'Discovery and Strategy',
    body: 'We align on strategy before moving a single pixel, ensuring your design is a high-converting business tool'
  },
  {
    url: '',
    head: 'Collaborative Design',
    body: 'Experience your site through high-fidelity prototypes that prioritize seamless UI and intuitive user journeys'
  },
  {
    url: '',
    head: 'Development and Launch',
    body: 'We turn designs into fast, SEO-optimized websites using modern frameworks, ensuring a seamless launch after rigorous testing.'
  }
]



export const skewTicker1 = [
  '/assets/moving1/pic1.jpeg',
  '/assets/moving1/pic2.jpeg',
  '/assets/moving1/pic3.jpeg',
  '/assets/moving1/pic4.jpeg',
];

export const skewTicker2 = [
  '/assets/moving2/pic1.jpeg',
  '/assets/moving2/pic2.jpeg',
  '/assets/moving2/pic3.jpeg',
  '/assets/moving2/pic4.jpeg',
];

export const featuresContent = [
  {
    lottieUrl: catAnima,
    head: "Pixel Perfect Design",
    body: "We just don't make design according to your vision we help you to see that vision also"
  },
  {
    lottieUrl: catAnima,
    head: " High Performance Site",
    body: "High performance site build with  quality code and frame work. With AI augmentation"
  },
  {
    lottieUrl: catAnima,
    head: "Affordable Rate",
    body: "Premium design and development services tailored to fit your business budget."
  },
  {
    lottieUrl: catAnima,
    head: "SEO Optimization",
    body: "Built from the ground up to rank higher and get your brand discovered"
  },
  {
    lottieUrl: catAnima,
    head: "Client based features",
    body: "Custom functionality built specifically to solve your unique business challenges"
  },
  {
    lottieUrl: catAnima,
    head: "Secure site",
    body: "Industry-standard security protocols to keep your data and your users safe"
  },
]

export const toolsTicker1 = [
  {
    icon: <ShoppingBagIcon />,
    name: "Web App"
  },
  {
    icon: <LineSegmentsIcon />,
    name: "Design",
  },
  {
    icon: <LaptopIcon />,
    name: "Websites",
  },
  {
    icon: <DesktopIcon />,
    name: "Landing Pages",
  },
  {
    icon: <MagicWandIcon />,
    name: "Logos",
  },
];

export const toolsTicker2 = [
  {
    icon: <InstagramLogoIcon />,
    name: "SEO"
  },
  {
    icon: <ChartLineIcon />,
    name: "Web Optimization",
  },
  {
    icon: <EnvelopeIcon />,
    name: "NextJs",
  },
  {
    icon: <CrownIcon />,
    name: "NodeJs",
  },
  {
    icon: <PulseIcon />,
    name: "NextJs",
  },
];

export const faqs: TFaq[] = [
  {
    head: "What services does Groundnut Agency provide?",
    body: "We are a \"design and build\" IT agency. This means we handle the entire lifecycle of your project—from the initial UI/UX design in Figma to the final custom development and launch. Whether you need a high-converting landing page or a complex web application, we provide the strategy, the look, and the code."
  },
  {
    head: "Who is your typical client?",
    body: "We build for everyone. Our clients range from local small business owners looking for their first professional digital presence to tech startups needing high-performance, scalable web systems. If you have a vision, we have the technical engine to build it."
  },
  {
    head: "I already have a design. Can you just build it?",
    body: "Absolutely. We often partner with independent designers and marketing firms to act as their dedicated development team. We specialize in turning static designs into pixel-perfect, responsive, and lightning-fast websites."
  },
  {
    head: "How long does a typical project take?",
    body: "Landing Pages: 1–2 weeks. Standard Business Sites: 3–5 weeks. Custom Web Apps: 8+ weeks. We provide a clear project roadmap during our kickoff meeting so you always know exactly where we are."
  },
  {
    head: "What \"stack\" or technologies do you use?",
    body: "We don't believe in \"one size fits all.\" We choose the best tool for your specific goals—whether that is Next.js and Tailwind CSS for high-performance apps, or platforms like Framer for design-heavy brand sites that need to be launched quickly."
  },
  {
    head: "How much does a website cost?",
    body: "Because every project is custom, we offer three main engagement tiers: The Starter, The Professional, and The Enterprise. Once we have a 15-minute discovery call to understand your needs, we'll provide a fixed-price proposal—no hidden hourly surprises."
  }
]



