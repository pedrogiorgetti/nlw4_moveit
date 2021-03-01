import { GetServerSideProps } from 'next';
import Head from 'next/head'
import ChallengeBox from '../components/ChallengeBox';
import ComplentedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import ProfileBar from '../components/ProfileBar';
import { ChallengeProvider } from '../hooks/challenge';
import { CountdownProvider } from '../hooks/countdown';


import { Container, Section, Content, } from './styles';

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: IHomeProps) {

  return (
    <ChallengeProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <CountdownProvider>
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
              <ChallengeBox />
            </Content>
          </Section>
        </Container>
      </CountdownProvider>
    </ChallengeProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}