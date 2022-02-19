import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.875rem;
    color: var(--purple-light);
  }

  p {
    margin-top: 1rem;
    max-width: 31.25rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: var(--white-200);
    text-align: center;
    margin-bottom: 2.5rem;
  }
`