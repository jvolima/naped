import { NoticeCard } from "../NoticeCard";
import { Container, NoticeTitle } from "./styles";

export function Notices() {
  return (
    <> 
      <NoticeTitle>
        <h3>Notícias mais recentes</h3>
        <div className="underline"></div>
      </NoticeTitle>
      <Container>
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
        <NoticeCard />
      </Container>
    </>
  )
}