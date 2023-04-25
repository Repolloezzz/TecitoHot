import '@/styles/globals.css';
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app';
// Contextos globales
import { ContextProvider } from '@/context/Absolute';
import { ThemeContextProvider } from '@/context/ThemeContent';
require('moment/locale/es.js');
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ContextProvider>
  );
}
