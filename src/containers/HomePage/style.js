import styled from "styled-components";

const Main = styled.main``;
const Features = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

export { Main, Features };
