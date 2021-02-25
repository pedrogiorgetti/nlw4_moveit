import React, { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../../hooks/challenge';
import { CountdownContext } from '../../hooks/countdown';

import { Container, TimerContainer, Timer, Time, TimerSeparator, Button } from './styles';


const Countdown: React.FC = () => {

  const {
    minutes, 
    seconds, 
    hasFinish, 
    isActive, 
    resetCountdown, 
    startCountdown
  } = useContext(CountdownContext)
  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  

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