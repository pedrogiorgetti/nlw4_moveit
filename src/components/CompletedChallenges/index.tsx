import React, { useContext } from 'react';
import { ChallengeContext } from '../../hooks/challenge';

import { Container, Span } from './styles';

const ComplentedChallenges: React.FC = () => {
  const {challengesCompleted} = useContext(ChallengeContext)

  return (
    <Container>
      <Span>Desafios completos</Span>
      <Span>{challengesCompleted}</Span>
    </Container>
  );
}

export default ComplentedChallenges;