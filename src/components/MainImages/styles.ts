import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 5rem auto 0;

  display: grid;
  gap: 1.25rem;
  grid-template-columns: 761px 338px 338px;

  @media (max-width: 1160px) {
    display: flex;
    flex-direction: column;
    
    .smallImages {
      display: flex;
      flex-direction: row;

      .smallImage2 {
        margin-top: 0rem;
        margin-left: 2rem;
      }
    }
  }

  @media (max-width: 600px) {
    .smallImages {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .smallImage2 {
        margin-top: 2rem;
        margin-left: 0rem;
      }
    }
  }

  .bigImage {
    max-width: 761px;
    width: 100%;
    position: relative;
    background-image: url(/bannerSeries.svg);
    height: 350px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);
    }

    div {
      border-radius: 3px;
      margin: 1rem 2rem 0;
      width: 5rem;
      height: 1.5rem;
      background: var(--purple-light);
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-family: "Lexend Deca", sans-serif;
        font-size: 0.875rem;
        color: var(--white);
        line-height: 1rem;
      }
    }

    p {
      position: absolute;
      z-index: 2;
      margin: 11.875rem 2rem 0;
      font-size: 1.5rem;
      line-height: 2.125rem;
      color: var(--white);
      font-family: "Lexend Deca", sans-serif;
    }
  }

  div {
    .smallImage1 {
      max-width: 338px;
      width: 100%;
      background-image: url(/bannerAnimes.svg);
      padding: 0.7rem;
      position: relative;
      height: 165px;

      &::after {
        content: "";  
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.375rem;
        height: 1.25rem;
        background: var(--purple-light);
        border-radius: 3px;

        span {
          font-family: "Lexend Deca", sans-serif;
          font-size: 0.75rem;
          color: var(--white);
          line-height: 1rem;
        }
      }

      p {
        margin-top: 4.125rem;
        position: absolute;
        z-index: 2;
        font-size: 0.8125rem;
        line-height: 1.25rem;
        color: var(--white);
      }
    }

    .smallImage2 {
      max-width: 338px;
      width: 100%;
      padding: 0.7rem;
      background-image: url(/bannerGames.svg);
      position: relative;
      height: 165px;
      margin-top: 1.25rem;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%);
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.375rem;
        height: 1.25rem;
        background: var(--purple-light);
        border-radius: 3px;
        
        span {
          font-family: "Lexend Deca", sans-serif;
          font-size: 0.75rem;
          color: var(--white);
          line-height: 1rem;
        }
      }

      p {
        margin-top: 4.125rem;
        position: absolute;
        z-index: 2;
        font-size: 0.8125rem;
        line-height: 1.25rem;
        color: var(--white);
      }
    }
  }
`