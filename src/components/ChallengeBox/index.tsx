import React, { useContext } from 'react';
import { ChallengeContext } from '../../hooks/challenge';
import { CountdownContext } from '../../hooks/countdown';

import { Container, Active, Header, Main, Description, Footer, Button, NotActive, Strong, P, Image } from './styles';

const ChallengeBox: React.FC = () => {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const {startCountdown, resetCountdown} = useContext(CountdownContext);

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }


  return (
    <Container>
      {activeChallenge ? (
        <Active>
          <Header>Ganhe {activeChallenge.amount} xp</Header>
          <Main>
            <Image active src={`icons/${activeChallenge.type}.svg`} />
            <Strong active>Novo desafio</Strong>
            <Description>{activeChallenge.description}</Description>
          </Main>

          <Footer>
            <Button failedButton onClick={handleChallengeFailed}>Falhei</Button>
            <Button onClick={handleChallengeSucceded}>Completei</Button>
          </Footer>
        </Active> 
      ) : (

      <NotActive>
        <Strong>Finalize um ciclo para receber um desafio</Strong>
        <P>
          <Image src="icons/level-up.svg" />
          Avance de level completando desafios.
        </P>
      </NotActive>
      )}
    </Container>
  );
}

export default ChallengeBox;
