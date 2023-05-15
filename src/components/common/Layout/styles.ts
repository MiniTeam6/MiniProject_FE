// import theme from "../../../styles/theme";
import styled from "styled-components";

export const gridDiv = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 6rem 1fr;
  header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: end;
  }
  nav {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    transition: all 1s ease;
  }
  .content {
    align-self: center;
    justify-self: center;

    display: flex;
    flex-wrap: wrap;

    align-content: center;
    justify-content: center;

    padding: 1rem;
  }

  .mypage {
    gap: 1rem;
  }
`