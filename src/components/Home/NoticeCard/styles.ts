import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .cardImage {
    width: 338px;
    height: 250px;
    position: relative;
    margin: 0;
    padding: 0;

    &::after {
      content: "";  
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);;
    }

    div {
      margin: 0.625rem;
      top: 0px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--purple-light);
      max-width: 6.375rem;
      min-width: 4.375rem;
      padding: 0 0.5rem;
      height: 20px;
      border-radius: 3px;

      span {
        color: var(--white);
        font-size: 0.75rem;
        font-family: "Lexend Deca", sans-serif;
        line-height: 1rem;
      }
    }
  }

  p {
    margin: 0.625rem;
    top: 25px;
    position: absolute;
    z-index: 2;
    font-family: "Lexend Deca", sans-serif;
    color: var(--white);
    line-height: 1.25rem;
    font-size: 0.8125rem;
    margin-top: 9.375rem;
  }
`