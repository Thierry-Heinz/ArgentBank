import { StyledHero } from "./style";
import CTA from "../CTA";

import backgroundImg from "../../../assets/bank-tree.jpeg";

const Hero = ({ srOnly, title, text }) => {
  return (
    <StyledHero backgroundImage={backgroundImg}>
      <h2 className="sr-only">{srOnly}</h2>
      <CTA title={title} text={text} />
    </StyledHero>
  );
};

export default Hero;
