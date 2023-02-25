import { StyledCTA } from "./style";

const CTA = ({ title, text }) => {
  return (
    <StyledCTA>
      <h2>
        <span className="content">{title.line1}</span>
        <span className="content">{title.line2}</span>
        <span className="content">{title.line3}</span>
      </h2>
      <p>{text}</p>
    </StyledCTA>
  );
};

export default CTA;
