import { GetStaticProps, NextPage } from "next";
import Prismic from "@prismicio/client"
import Head from "next/head";
import { AnimeNotices } from "../components/Animes/AnimeNotices";
import { Banner } from "../components/Animes/Banner";
import { SearchBar } from "../components/Animes/SearchBar";
import { getPrismicClient } from "../services/prismic";
import { Container } from "./styles/animes";
import { RichText } from "prismic-dom";
import { NoticesProvider } from "../hooks/useNotices";

interface Notice {
  uid: string;
  title: string;
  description: string;
  image: string;
  last_publication_data: string;
  category?: string;
}

interface AnimesProps {
  notices: Notice[];
  next_page: string;
  prev_page: string;
}

export default function Animes({ notices, next_page, prev_page }: AnimesProps) {
  return (
    <NoticesProvider notices={notices}>
      <Head>
        <title>Animes | Naped</title>
      </Head>
      <Container>
        <Banner />
        <SearchBar />
        <AnimeNotices next_page={next_page} prev_page={prev_page} />
      </Container>
    </NoticesProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const noticesResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "notices"), Prismic.predicates.at("my.notices.category", "filmes")],
    {
      fetch: [
        "notices.title", 
        "notices.image", 
        "notices.description", 
        "notices.category"
      ],
      pageSize: 2,
    }
  )

  const notices: Notice[] = noticesResponse.results.map(notice => {
    return {
      uid: notice.uid as string,
      title: notice.data.title as string,
      description: RichText.asText(notice.data.description),
      image: notice.data.image.url as string,
      last_publication_data: notice.last_publication_date as string,
      category: notice.data.category
    }
  })

  const next_page = noticesResponse.next_page;
  const prev_page = noticesResponse.prev_page;

  return {
    props: {
      notices,
      next_page,
      prev_page
    },
    revalidate: 60 * 60 // 1 hora
  }
}
