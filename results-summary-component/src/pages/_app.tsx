import '@/styles/globals.css'

import { Hanken_Grotesk } from "next/font/google";
import type { AppProps } from 'next/app'

const HankenGrotesk = Hanken_Grotesk({ subsets: ['latin'], style: ['normal'], weight: ['500', '700', '800'] })
export default function App({ Component, pageProps }: AppProps) {
  return (<main className={HankenGrotesk.className}><Component {...pageProps} /></main>)
}
