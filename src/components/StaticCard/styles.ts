import styled from "styled-components";

export const Container = styled.div`
  margin-left: 1.375rem;

  .cardImage {
    padding: 0.625rem;
    background-image: url(/cardChihiro.svg);
    width: 338px;
    height: 250px;
    position: relative;
    margin-bottom: 3rem;

    &::after {
      content: "";  
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.375rem;
      height: 1.25rem;
      background: var(--purple-light);

      span {
        color: var(--white);
        font-size: 0.75rem;
        line-height: 1rem;
        font-family: "Lexend Deca", sans-serif;
      }
    }

    p {
      position: absolute;
      z-index: 2;
      margin-top: 8.5rem;
      color: var(--white);
      font-size: 0.8125rem;
      line-height: 1.25rem;
      font-family: "Lexend Deca", sans-serif;
    }
  }
`