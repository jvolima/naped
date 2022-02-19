import type { NextPage } from 'next'
import Head from 'next/head'
import { Contents } from '../components/Home/Contents'
import { MainImages } from '../components/Home/MainImages'
import { Notices } from '../components/Home/Notices'
import { Title } from '../components/Home/Title'
import { Container } from './styles/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | Naped</title>
      </Head>
      <Container>
        <Title />
        <MainImages />
        <Contents />
        <Notices />
      </Container>
    </>
  )
}

export default Home
