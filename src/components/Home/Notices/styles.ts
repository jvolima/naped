import styled from "styled-components";

export const NoticeTitle = styled.div`
  margin-top: 4rem;

  h3 {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.25rem;
    color: var(--white);
  }

  .underline {
    margin-top: 0.75rem;
    background: var(--purple-light);
    width: 15.625rem;
    height: 3px;
    margin-bottom: 2.5rem;
  }
`

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 3.25rem
`