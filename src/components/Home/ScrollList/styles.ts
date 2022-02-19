import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  max-width: 761px;
  width: 100%;
  height: 894px;

  /* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--gray-200);
}

::-webkit-scrollbar-thumb {
  background: var(--purple-light);
}
`