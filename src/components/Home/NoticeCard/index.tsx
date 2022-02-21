import { Container } from "./styles";

interface NoticeCardProps {
  image: string;
  title: string;
  description: string;
}

export function NoticeCard({ image, title, description }: NoticeCardProps) {
  return (
    <Container image={image}>
      <div>
        <span>{title}</span>
      </div>
      <p>{description}</p>
    </Container>
  )
}