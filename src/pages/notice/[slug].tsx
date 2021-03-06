import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Prismic from "@prismicio/client"
import Head from "next/head";
import { Notices } from "../../components/Home/Notices";
import { getPrismicClient } from "../../services/prismic";
import { Container } from "./styles";
import { RichText } from "prismic-dom";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import { NoticesProvider, useNotices } from "../../hooks/useNotices";

interface Content {
  heading: {
    text: string;
  }[];
  body: {
    text: string;
  }[]
}

interface Notice {
  uid: string;
  title: string;
  description: string;
  image: string;
  firstParagraph: string;
  last_publication_data: string;
}

interface SelectedNotice extends Notice {
  content: {
    heading: {
      text: string;
    }[];
    body: {
      text: string;
    }[]
  }[]
}

interface NoticeProps {
  notices: Notice[];
  notice: SelectedNotice
}

export default function Notice({ notices, notice }: NoticeProps) {
  return (
    <NoticesProvider notices={notices}>
      <Head>
        <title>{notice.title} | Naped</title>
      </Head>
      <Container>
        <div className="noticeContent">
          <h1>{notice.title}</h1>
          <time>{notice.last_publication_data}</time>
          <img src={notice.image} width="1120px" height="400px" alt="banner" />
          {
            notice.content.map(content => (
              <article key={Math.random()}>
                <h2>{RichText.asText(content.heading)}</h2>
                <div
                  className="content"   
                  dangerouslySetInnerHTML={{ __html: RichText.asHtml(content.body) }}
                />
              </article>
            ))
          }
        </div>
        <Notices />
      </Container>
    </NoticesProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const noticesResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "notices")],
    {
      fetch: [
        "notices.title", 
        "notices.image", 
        "notices.description", 
        "notices.content"
      ],
      pageSize: 100
    }
  )

  const notices: Notice[] = noticesResponse.results.map(notice => {
    return {
      uid: notice.uid as string,
      title: notice.data.title as string,
      description: RichText.asText(notice.data.description),
      image: notice.data.image.url as string,
      firstParagraph: notice.data.content[0].body[0].text,
      last_publication_data: notice.last_publication_date as string
    }
  })

  const { slug } = context.params as ParsedUrlQuery

  const response = await prismic.getByUID('notices', String(slug), {})

  const notice: SelectedNotice = {
    uid: response.uid as string,
    title: response.data.title,
    description: response.data.description,
    image: response.data.banner.url,
    firstParagraph: response.data.content[0].body[0],
    content: response.data.content.map((content: Content) => {
      return {
        heading: [...content.heading],
        body: [...content.body]
      }
    }),
    last_publication_data: new Date(response.last_publication_date as string).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long", 
      year: "numeric"
    }) 
  }

  return {
    props: {
      notices,
      notice
    },
    revalidate: 60 * 60 // 1 hora
  }
}