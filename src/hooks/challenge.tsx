import { create } from 'domain'
import { createContext, ReactNode, useEffect, useState } from 'react'

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
  completeChallenge: () => void;
}

export const ChallengeContext = createContext({} as IChallengeContextData);

export function ChallengeProvider({children}: IChallengeProviderProps) {

  const [level, setLevel] = useState<number>(1);
  const [currentExperience, setCurrentExperience] = useState<number>(0)
  const [challengesCompleted, setChallengesCompleted] = useState<number>(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level +1) * 4 ,2);


  useEffect(() => {
    Notification.requestPermission();
  }, []);


  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio', 
      {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const {amount} = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;

      levelUp();
      
      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengesCompleted(challengesCompleted + 1);
    }
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
      experienceToNextLevel,
      completeChallenge,
    }}>
      {children}
    </ChallengeContext.Provider>
  )
}