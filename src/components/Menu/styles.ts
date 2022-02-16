import styled from "styled-components";

export const Container = styled.nav`
  a {
    font-weight: 500;
    font-size: 1rem;
    color: var(--white);
    line-height: 1.125rem;
    text-decoration: none;
    position: relative;
    padding: 0.2rem 0;

    & + a {
      margin-left: 3.75rem
    }
  }

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background: var(--purple-light);
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  a::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
  }
        
  a:hover::after,
  a:focus::after{
    transform: scale(1);
  }

  button {
    margin-left: 5rem;
    background: transparent;
    height: 2rem;
    width: 8rem;
    border-radius: 2rem;
    border: 1px solid var(--purple-light);
    cursor: pointer;

    color: var(--white);
    font-size: 0.875rem;
    line-height: 1rem;

    transition: background 0.2s;

    &:hover {
      background: var(--purple-light);
    }
  }
`