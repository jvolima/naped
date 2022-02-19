import { Container } from "./styles";
import Image from "next/image"

export function SearchBar() {
  return (
    <Container>
      <input placeholder="Quer ajuda na procura? Pesquise aqui" />
      <button type="button">
        <Image src="/search.svg" width="30px" height="30px" alt="Search icon"/>
      </button>
    </Container>
  ) 
}