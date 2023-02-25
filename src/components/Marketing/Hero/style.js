import styled from "styled-components";

export const StyledHero = styled.section`
  background-image: url(${(props) => props.backgroundImage});
  object-fit: cover;
  object-position: center;
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;
