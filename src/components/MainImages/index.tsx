import Image from "next/image";
import { Container } from "./styles";

export function MainImages() {
  return (
    <Container>
      <Image src="/bannerSeries.svg" alt="Banner series" width="761" height="350"/>
      <div>
        <div className="firstImage">
          <Image src="/bannerAnimes.svg" alt="Banner animes" width="338" height="165"/>
        </div>
        <div>
          <Image src="/bannerGames.svg" alt="Banner games" width="338" height="165"/>
        </div>
      </div>
    </Container>
  )
}