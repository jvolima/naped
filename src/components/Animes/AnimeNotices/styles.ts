import styled from "styled-components";

export const Container = styled.main`
  margin-top: 6.25rem;
  max-width: 1120px;
  
  .containerGrid {
    display: grid;
    gap: 3.25rem;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr))
  }
`