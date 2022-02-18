import { Container } from "./styles";
import Image from "next/image"
import { StaticCard } from "../StaticCard";

export function StaticList() {
  return (
    <Container>
      <h2>Lorem ipsum dolor</h2>
      <div className="underline"></div>
      <div>
        <StaticCard />  
        <StaticCard /> 
        <StaticCard />  
      </div>
    </Container>
  )
}