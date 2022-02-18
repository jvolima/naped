import { Container } from "./styles";
import Image from "next/image"
import { ScrollCard } from "../ScrollCard";

export function ScrollList() {
  return (
    <Container>
      <ScrollCard />
      <ScrollCard />
      <ScrollCard />
      <ScrollCard />
      <ScrollCard />
      <ScrollCard />
      <ScrollCard />  
    </Container>
  )
}