import styled from "styled-components";

export const Container = styled.nav`
  a {
    font-weight: 500;
    font-size: 1rem;
    color: var(--white);
    line-height: 1.125rem;
    text-decoration: none;

    & + a {
      margin-left: 3.75rem
    }
  }

  button {
    margin-left: 5rem;
    background: transparent;
    height: 2rem;
    width: 8rem;
    border-radius: 2rem;
    border: 1px solid var(--purple-light);

    color: var(--white);
    font-size: 0.875rem;
    line-height: 1rem;
  }
`