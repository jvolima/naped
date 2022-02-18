import { ScrollList } from "../ScrollList";
import { StaticList } from "../StaticList";
import { Container } from "./styles";

export function Contents() {
  return (
    <Container>
      <ScrollList />
      <StaticList />
    </Container>
  )
}