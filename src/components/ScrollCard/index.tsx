import { Container } from "./styles";

export function ScrollCard() {
  return (
    <Container>
      <div className="cardImage">
        <div>
          <span>Lorem</span>
        </div>
      </div>
      <div className="cardTexts">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
        <time>00/00/0000</time>
        <button>Ler notícia</button>
      </div>
    </Container>
  )
}