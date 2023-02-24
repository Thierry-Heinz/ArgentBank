import { StyledCTA } from "./style";

const CTA = ({ title, text }) => {
  return (
    <StyledCTA>
      <h2>{title}</h2>
      <p>{text}</p>
    </StyledCTA>
  );
};

export default CTA;
