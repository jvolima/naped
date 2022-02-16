import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 1.625rem auto 0;
  padding: 0 0.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    h2 {
      font-family: "Lexend Deca", sans-serif;
      font-size: 1.5rem;
      color: var(--purple-light);
      font-weight: 400;
      line-height: 1.875rem;
    }
  }
`