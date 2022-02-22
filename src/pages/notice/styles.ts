import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 5.625rem auto 0;
  display: flex;
  flex-direction: column;

  .noticeContent {
    h1 {
      font-size: 2.25rem;
      font-weight: 400;
      font-family: "Lexend Deca", sans-serif;
      line-height: 3.5rem;
      color: var(--white);
    }

    time {
      font-size: 1.125rem;
      line-height: 3.5rem;
      color: var(--white-200);
      display: block;
      margin-bottom: 1rem;
    }

    article {
      margin-top: 1.25rem;

      h2 {
        margin-top: 2.5rem;
        font-size: 1.8rem;
        color: var(--white);
      }

      .content {
        p, a, span, ul, strong {
          font-size: 1.25rem;
          color: var(--white-200);
          line-height: 2.5rem;
          font-weight: normal;
          margin: 2.75rem 0;
        }

        a {
          text-decoration: none;
        }

        strong {
          font-weight: bold;
        }

        ul {
          padding-left: 1.5rem;

          li {
            margin: 0.5rem 0;
          }
        }
      }
    }
  }
`