import type { NextPage } from 'next'
import { Contents } from '../components/Contents'
import { MainImages } from '../components/MainImages'
import { Notices } from '../components/Notices'
import { Title } from '../components/Title'
import { Container } from './home'

const Home: NextPage = () => {
  return (
    <Container>
      <Title />
      <MainImages />
      <Contents />
      <Notices />
    </Container>
  )
}

export default Home
