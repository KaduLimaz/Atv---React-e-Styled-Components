import styled from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;
  max-width: 50vh;
  padding: 12px;

  /* border: solid black; */

  h1 {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: bolder;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
  }
`;
