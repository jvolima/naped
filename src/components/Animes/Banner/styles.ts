import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6rem;
  background-image: url(/bannerSearchAnimes.svg);
  height: 300px;
  position: relative;
  padding: 0 2.5rem;

  &::after {
    content: "";  
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    background-image: linear-gradient(0.01deg, #13131F 0.01%, rgba(19, 19, 31, 0) 99.99%);
    transform: rotate(90deg);
  }

  h1 {
    position: absolute;
    z-index: 2;
    margin-top: 5.2rem;
    color: var(--white);
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.5rem
  }

  p {
    max-width: 492px;
    color: var(--white-200);
    font-weight: 500;
    position: absolute;
    z-index: 2;
    font-size: 1.25rem;
    line-height: 2rem;
    margin-top: 9.2rem
  }
`