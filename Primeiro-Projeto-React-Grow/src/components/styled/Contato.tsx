import styled from "styled-components";
import img from "../../assets/01.jpeg";

export const Contato = styled.div`
  height: 30vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    ${`url(${img})`};

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;
    text-align: center;

    h1 {
      font-size: calc(1.375rem + 1.5vw);
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: bolder;
      line-height: 1.2;
    }
  }
`;
