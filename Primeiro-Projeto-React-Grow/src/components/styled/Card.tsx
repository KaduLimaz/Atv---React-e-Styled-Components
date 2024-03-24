import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* gap: 6px; */
  width: 100%;

  /* border: solid black; */
  h1 {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: bolder;
    line-height: 1.2;
  }

  p {
    text-align: left;
    font-size: 1.2rem;
    padding: 0 6rem;
  }
`;
