import { create } from 'domain'
import { createContext, ReactNode, useState } from 'react'

import challenges from '../../challenges.json';

interface IChallengeProviderProps {
  children: ReactNode;
}

interface IChallengeData {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface IChallengeContextData {
  activeChallenge: IChallengeData;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengeContext = createContext({} as IChallengeContextData);

export function ChallengeProvider({children}: IChallengeProviderProps) {

  const [level, setLevel] = useState<number>(1);
  const [currentExperience, setCurrentExperience] = useState<number>(0)
  const [challengesCompleted, setChallengesCompleted] = useState<number>(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level +1) * 4 ,2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengeContext.Provider value={{
      level, 
      currentExperience, 
      challengesCompleted, 
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel
    }}>
      {children}
    </ChallengeContext.Provider>
  )
}