import React, { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../../hooks/challenge';

import { Container, TimerContainer, Timer, Time, TimerSeparator, Button } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasFinish, setHasFinish] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
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
    <Container>
      <TimerContainer>

      <Timer>
        <Time>{minuteLeft}</Time>
        <Time>{minuteRight}</Time>
      </Timer>
      <TimerSeparator>:</TimerSeparator>
      <Timer>
        <Time>{secondLeft}</Time>
        <Time>{secondRight}</Time>
      </Timer>
      </TimerContainer>
      
      {hasFinish ? (
        <Button disabled>
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button buttonActive onClick={resetCountdown}>
              Abandonar ciclo
            </Button>
          ) : (
            <Button onClick={startCountdown}>
              Iniciar ciclo
            </Button>
          )}
        </>
      )}

      

      

      
    </Container>
  );
}

export default Countdown;