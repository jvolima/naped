import { useRouter } from "next/router";
import { Container } from "./styles";

interface ScrollCardProps {
  uid: string;
  image: string;
  title: string;
  description: string;
  firstParagraph: string;
  last_publication_data: string;
}

export function ScrollCard({
    uid, 
    image, 
    title, 
    description, 
    firstParagraph,
    last_publication_data
  }: ScrollCardProps
){
  const router = useRouter();

  function handleOpenNotice() {
    router.push(`/notice/${uid}`)
  }

  const last_publication_date = new Date(last_publication_data as string).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long", 
    year: "numeric"
  }) 

  return (
    <Container>    
      <div className="cardImage">
        <img src={image} width="200px" height="151px" alt="imagem do card"/>
        <div>
          <span>{title}</span>
        </div>
      </div>
      <div className="cardTexts">
        <p>{description}</p>
        <p className="paragraph">{firstParagraph}...</p>
        <time>{last_publication_date}</time>
        <button onClick={handleOpenNotice}>Ler notícia</button>
      </div>
    </Container>
  )
}