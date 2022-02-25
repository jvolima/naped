import styled from "styled-components";

export const Container = styled.div`
  a {
    text-decoration: none;
    
    div {
      width: 338px;
      height: 250px;
      position: relative;

      &::after {
        content: "";  
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(359.82deg, #13131F 0.15%, rgba(19, 19, 31, 0) 99.85%);
      }

      p {
        position: absolute;
        top: 0px;
        z-index: 2;
        margin-top: 10.25rem;
        padding: 1rem;
        color: var(--white);
        font-size: 0.8125rem;
        line-height: 1.25rem;
        font-family: "Lexend Deca", sans-serif;
      }
    }
  }
`