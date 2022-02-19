import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  input {
    height: 60px;
    max-width: 1059px;
    width: 100%;
    background: var(--gray-200);
    border: 0;
    padding: 1.125rem 1.5rem;

    color: #989898;
    font-family: "Lexend Deca", sans-serif;
    font-size: 1.25rem;
    line-height: 1.5rem;

    &:focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
    height: 60px;
    max-width: 60px;
    width: 100%;
    background: var(--gray-200);
    border: 0;
  }
`