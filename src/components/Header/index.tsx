import Link from "next/link";
import { Menu } from "../Menu";
import { Container } from "./styles";


export function Header() {
  return (
    <Container>
      <div>
        <h1>Naped</h1>
      </div>
      <div>
        <Menu />
      </div>
    </Container>
  )
}