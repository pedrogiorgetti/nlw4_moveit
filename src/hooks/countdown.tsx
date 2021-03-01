import { create } from 'domain'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import challenges from '../../challenges.json';
import { ChallengeContext } from './challenge';

interface ICountdownProviderProps {
  children: ReactNode;
}

interface ICountdownContextData {
  minutes: number;
  seconds: number;
  hasFinish: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as ICountdownContextData);

export function CountdownProvider({children}: ICountdownProviderProps) {

  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasFinish, setHasFinish] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinish(false);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time=== 0) {
      setHasFinish(true);
      setIsActive(false);
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{
      minutes, 
      seconds,
      hasFinish,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}