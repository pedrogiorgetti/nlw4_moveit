import { ChallengeProvider } from '../hooks/challenge';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ChallengeProvider>
  )
}

export default MyApp
