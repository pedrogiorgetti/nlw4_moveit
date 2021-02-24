import Head from 'next/head'
import ComplentedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import ProfileBar from '../components/ProfileBar';


import { Container, Section, Content, } from './styles';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Move It</title>
      </Head>
      <ExperienceBar />

      <Section>
        <Content>
          <ProfileBar />
          <ComplentedChallenges />
          <Countdown />
        </Content>
        <Content>
          
        </Content>
      </Section>
    </Container>
  )
}
