import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 2.1875rem;

  .cardImage {
    padding: 0.625rem;
    width: 200px;
    background-image: url(/cardPain.svg);
    position: relative;

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
      width: 4rem;
      height: 1rem;
      background: var(--purple-light);
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-family: "Lexend Deca", sans-serif;
        font-size: 0.625rem;
        color: var(--white);
        line-height: 0.75rem;
      }
    }
  }

  .cardTexts {
    margin-left: 1.125rem;
    
    p {
      margin-top: 0.625rem;
      font-size: 0.6875rem;
      line-height: 1rem;
      color: var(--white-200);
      max-width: 20.625rem;

      &:first-child {
        margin-top: 0;
        max-width: 24.625rem;
        font-size: 0.8125rem;
        line-height: 1.25rem;
        color: var(--white);
        font-family: "Lexend Deca", sans-serif;
      }
    }

    time {
      color: var(--white-200);
      font-weight: 600;
      font-size: 0.625rem;
      line-height: 1.25rem;
    }

    button {
      cursor: pointer;
      margin-top: 0.5625rem;
      background-color: var(--purple-light);
      width: 6.25rem;
      height: 1.5rem;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      font-weight: 600;
      color: var(--white);
      line-height: 1.25rem;
      font-size: 0.6875rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`