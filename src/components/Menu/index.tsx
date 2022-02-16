import Link from "next/link";
import { Container } from "./styles";

export function Menu() {
  return (
    <Container>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/series">
        <a>Séries</a>
      </Link>
      <Link href="/filmes">
        <a>Filmes</a>
      </Link>
      <Link href="/animes">
        <a>Animes</a>
      </Link>
      <Link href="/games">
        <a>Games</a>
      </Link>
      <button type="button">
        Minha conta
      </button>
    </Container>
  )
}