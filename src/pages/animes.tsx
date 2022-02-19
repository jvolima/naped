import { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Animes/Banner";
import { SearchBar } from "../components/Animes/SearchBar";
import { Container } from "./styles/animes";

const Animes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Animes | Naped</title>
      </Head>
      <Container>
        <Banner />
        <SearchBar />
      </Container>
    </>
  )
}

export default Animes