import type { NextPage } from 'next'
import { Title } from '../components/Title'
import { Container } from './home'

const Home: NextPage = () => {
  return (
    <Container>
      <Title />
    </Container>
  )
}

export default Home
