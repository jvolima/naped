import { Container } from "./styles";

interface ScrollCardProps {
  uid: string;
  image: string;
  title: string;
  description: string;
  last_publication_data: string;
}

export function ScrollCard({
    uid, 
    image, 
    title, 
    description, 
    last_publication_data
  }: ScrollCardProps
) {
  return (
    <Container>    
      <div className="cardImage">
        <img src={image} width="200px" height="151px"/>
        <div>
          <span>{title}</span>
        </div>
      </div>
      <div className="cardTexts">
        <p>{description}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
        <time>{last_publication_data}</time>
        <button>Ler notícia</button>
      </div>
    </Container>
  )
}