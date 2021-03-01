import React, { useContext } from 'react';
import { ChallengeContext } from '../../hooks/challenge';

import { Container, Avatar, Content, Name, Level, Icon } from './styles';

const ProfileBar: React.FC = () => {

  const {level} = useContext(ChallengeContext);


  return (
    <Container>
      <Avatar  src="https://avatars.githubusercontent.com/u/21224517?s=460&u=d4c41cc9fcd4132bc1e903ced2b5091f2165c126&v=4" />

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