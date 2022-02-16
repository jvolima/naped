import Link from "next/link";
import { Menu } from "../Menu";
import { Container } from "./styles";


export function Header() {
  return (
    <Container>
      <div>
        <h2>Naped</h2>
      </div>
      <div>
        <Menu />
      </div>
    </Container>
  )
}