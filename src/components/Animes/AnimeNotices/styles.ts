import styled from "styled-components";

export const Container = styled.main`
  margin-top: 6.25rem;
  max-width: 1120px;
  
  .containerGrid {
    display: grid;
    gap: 3.25rem;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr))
  }

  .pageChanger {
    margin-top: 3.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .pageNumber {
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gray-200);
      margin-right: 0.5rem;
      border: 0;
      border-radius: 3px;

      .blockClick {
        color: #545454;
      }

      span {
        font-size: 1.125rem;
        line-height: 1.25rem;
        font-weight: 600;
        color: var(--white-200);
      }
    }

    .currentPage {
      border: 1px solid var(--purple-light);

      span {
        color: var(--purple-light);
      }
    }
  }
`