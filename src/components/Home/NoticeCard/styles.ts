import styled from "styled-components";

export const Container = styled.div<{image: string}>`
  padding: 0.625rem;
  background-image: url(${props => props.image});
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
    background-image: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple-light);
    width: 4.375rem; 
    height: 20px;
    border-radius: 3px;

    span {
      color: var(--white);
      font-size: 0.75rem;
      font-family: "Lexend Deca", sans-serif;
      line-height: 1rem;
    }
  }

  p {
    position: absolute;
    z-index: 2;
    font-family: "Lexend Deca", sans-serif;
    color: var(--white);
    line-height: 1.25rem;
    font-size: 0.8125rem;
    margin-top: 9.375rem;
  }
`