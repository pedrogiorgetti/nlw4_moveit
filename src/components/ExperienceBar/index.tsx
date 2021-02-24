import React, { useContext } from 'react';
import { ChallengeContext } from '../../hooks/challenge';

import { Header,Container, Span, ProgressBar, CurrentProgress } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Header>
      <Span>0 xp</Span>
      <Container>
        <ProgressBar width={`${percentToNextLevel}%`} />
        <CurrentProgress left={`${percentToNextLevel}%`}>
          {currentExperience} xp
        </CurrentProgress>
      </Container>
      <Span>{experienceToNextLevel} xp</Span>
    </Header>
  );
}

export default ExperienceBar;