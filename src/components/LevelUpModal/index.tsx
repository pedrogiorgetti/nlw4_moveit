import React, { useContext } from 'react';
import { ChallengeContext } from '../../hooks/challenge';

import { Overlay, Container, Header, Strong, P, Button, Icon } from './styles';

const LevelUpModal: React.FC = () => {

  const {level, closeLevelUpModal} = useContext(ChallengeContext);

  return (
    <Overlay>

      <Container>
        <Header>{level}</Header>
        <Strong>Parabéns</Strong>
        <P>Você alcançou um novo level.</P>

        <Button onClick={closeLevelUpModal}>
          <Icon src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </Container>
    </Overlay>
  );
}

export default LevelUpModal;