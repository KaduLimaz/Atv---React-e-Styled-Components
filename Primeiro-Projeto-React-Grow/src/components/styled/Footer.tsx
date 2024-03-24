import styled from "styled-components";

export const Footer = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;
    text-align: center;
    color: black;

    h1 {
      font-size: calc(1.375rem + 1.5vw);
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: bolder;
      line-height: 1.2;
    }
  }
`;
