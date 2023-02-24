import { StyledHero } from "./style";
import { CTA } from "./../CTA";

const Hero = ({ bImg, title, text }) => {
  return (
    <StyledHero backgroundImage={bImg}>
      <CTA title={title} text={text} />
    </StyledHero>
  );
};

export default Hero;
