import type { NextPage } from 'next'
import { Contents } from '../components/Contents'
import { MainImages } from '../components/MainImages'
import { Title } from '../components/Title'
import { Container } from './home'

const Home: NextPage = () => {
  return (
    <Container>
      <Title />
      <MainImages />
      <Contents />
    </Container>
  )
}

export default Home
