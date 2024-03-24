import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: calc(100vh, 34px, 50px, 64px);
  color: black;
`;
