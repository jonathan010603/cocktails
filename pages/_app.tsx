import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextWrapper } from '../contexts/globalctx'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}

export default MyApp
