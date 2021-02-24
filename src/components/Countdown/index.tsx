import React, { useEffect, useState } from 'react';

import { Container, TimerContainer, Timer, Time, TimerSeparator, Button } from './styles';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time])

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

      <Button onClick={startCountdown}>Iniciar um ciclo</Button>
    </Container>
  );
}

export default Countdown;