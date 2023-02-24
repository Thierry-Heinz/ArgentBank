import { StyledHomePage } from "./style";

// Importing components

import { Hero, Feature } from "../../components/Marketing";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Hero />
      <Feature />
    </StyledHomePage>
  );
};
