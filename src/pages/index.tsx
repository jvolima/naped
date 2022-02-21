import type { GetStaticProps, NextPage } from 'next'
import Prismic from "@prismicio/client"
import Head from 'next/head'
import { RichText } from 'prismic-dom';
import { Contents } from '../components/Home/Contents'
import { MainImages } from '../components/Home/MainImages'
import { Notices } from '../components/Home/Notices'
import { Title } from '../components/Home/Title'
import { getPrismicClient } from '../services/prismic'
import { Container } from './styles/home'

interface Notice {
  uid: string;
  title: string;
  description: string;
  image: string;
}

interface HomeProps {
  notices: Notice[];
}

export default function Home({ notices }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | Naped</title>
      </Head>
      <Container>
        <Title />
        <MainImages />
        <Contents />
        <Notices notices={notices} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const noticesResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "notices")],
    {
      fetch: [
        "notices.title", 
        "notices.image", 
        "notices.description"
      ],
      pageSize: 6
    }
  )

  const notices: Notice[] = noticesResponse.results.map(notice => {
    return {
      uid: notice.uid as string,
      title: notice.data.title as string,
      description: RichText.asText(notice.data.description),
      image: notice.data.image.url as string
    }
  })

  return {
    props: {
      notices
    },
    revalidate: 60 * 60 // 1 hora
  }
}

