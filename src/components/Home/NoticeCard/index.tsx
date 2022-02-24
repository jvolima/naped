import { Container } from "./styles";

interface NoticeCardProps {
  image: string;
  title: string;
  description: string;
}

export function NoticeCard({ image, title, description }: NoticeCardProps) {
  return (
    <Container>
      <div className="cardImage">
        <img src={image} width="338px" height="250px" alt="notice" />
        <div>
          <span>{title}</span>
        </div>
      </div>
      <p>{description}</p>
    </Container>
  )
}