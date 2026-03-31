
import localFont from "next/font/local";
import { Instrument_Serif } from 'next/font/google';

export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/satoshi/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-VariableItalic.woff2',
      style: 'italic',
    }
  ],
  variable: '--font-satoshi'
});

export const instru = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-instru"
})
