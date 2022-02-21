import { Container } from "./styles";

interface NoticeCardProps {
  image: string
}

export function NoticeCard({ image }: NoticeCardProps) {
  return (
    <Container image={image}>
      <div>
        <span>Lorem</span>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
    </Container>
  )
}