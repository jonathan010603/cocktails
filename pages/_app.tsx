import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/layouts/Header';
import { SelectedMealCtxWrapper } from '../context/selectedMealCtx';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SelectedMealCtxWrapper>
      <Header />
      <Component {...pageProps} />
    </SelectedMealCtxWrapper>
  );
}
