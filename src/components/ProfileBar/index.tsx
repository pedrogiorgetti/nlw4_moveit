import React from 'react';

import { Container, Avatar, Content, Name, Level, Icon } from './styles';

const ProfileBar: React.FC = () => {
  return (
    <Container>
      <Avatar  src="https://github.com/pedrogiorgetti" />

      <Content>

      <Name>Pedro Giorgetti</Name>
      <Level>
        <Icon src="icons/level.svg" />
        Level 1
      </Level>
      </Content>
    </Container>
  );
}

export default ProfileBar;