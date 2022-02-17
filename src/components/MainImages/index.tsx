import Image from "next/image";
import { Container } from "./styles";

export function MainImages() {
  return (
    <Container>
      <div className="bigImage">
        
        <div>
          <span>Lorem</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
      </div>
      <div>
        <div className="smallImage1">
          <div>
            <span>Lorem</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>
        <div className="smallImage2">
          <div>
            <span>Lorem</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p>
        </div>
      </div>
    </Container>
  )
}