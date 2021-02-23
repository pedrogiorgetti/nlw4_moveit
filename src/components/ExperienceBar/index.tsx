import React from 'react';

import { Header,Container, Span, ProgressBar, CurrentProgress } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Header>
      <Span>0 xp</Span>
      <Container>
        <ProgressBar style={{width: '50%'}} />
        <CurrentProgress style={{left: '50%'}}>
          300 xp
        </CurrentProgress>
      </Container>
      <Span>600 xp</Span>
    </Header>
  );
}

export default ExperienceBar;