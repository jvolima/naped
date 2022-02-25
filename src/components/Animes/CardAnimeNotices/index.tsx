import Link from "next/link";
import { Container } from "./styles";

interface Notice {
  uid: string;
  image: string;
  description: string;
}

interface CardAnimeNoticesProps {
  notice: Notice;
}

export function CardAnimeNotices({ notice }: CardAnimeNoticesProps) {
  return (
    <Container>
      <Link href={`/notice/${notice.uid}`} key={notice.uid}>
        <a>
          <div>
            <img src={notice.image} width="338px" height="250px" alt="cardImage"/>
            <p>{notice.description}</p>
          </div>
        </a>
      </Link>
    </Container>
  )
}