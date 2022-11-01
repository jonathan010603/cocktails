import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextWrapper } from '../contexts/globalctx'
import { MealContextWrapper } from '../contexts/mealPagectx';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <MealContextWrapper>
        <Component {...pageProps} />
      </MealContextWrapper>
    </ContextWrapper>
  );
}

export default MyApp
