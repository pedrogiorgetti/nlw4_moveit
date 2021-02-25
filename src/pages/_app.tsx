import { ChallengeProvider } from '../hooks/challenge';
import { CountdownProvider } from '../hooks/countdown';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <CountdownProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </CountdownProvider>
    </ChallengeProvider>
  )
}

export default MyApp
