import React, { useContext } from 'react';
import { ChallengeContext } from '../../hooks/challenge';

import { Container, Avatar, Content, Name, Level, Icon } from './styles';

const ProfileBar: React.FC = () => {

  const {level} = useContext(ChallengeContext);


  return (
    <Container>
      <Avatar  src="https://github.com/pedrogiorgetti" />

      <Content>

      <Name>Pedro Giorgetti</Name>
      <Level>
        <Icon src="icons/level.svg" />
        Level {level}
      </Level>
      </Content>
    </Container>
  );
}

export default ProfileBar;