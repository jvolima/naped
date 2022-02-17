import type { NextPage } from 'next'
import { MainImages } from '../components/MainImages'
import { Title } from '../components/Title'
import { Container } from './home'

const Home: NextPage = () => {
  return (
    <Container>
      <Title />
      <MainImages />
    </Container>
  )
}

export default Home
