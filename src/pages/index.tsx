import Head from 'next/head'
import ExperienceBar from '../components/ExperienceBar';


import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <ExperienceBar />
    </Container>
  )
}
