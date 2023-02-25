import styled from "styled-components";

export const StyledCTA = styled.div`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  h2 {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    .content {
      display: block;
    }
  }
  p {
    margin-bottom: 0;
    font-size: 0.9rem;
  }

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;

    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
