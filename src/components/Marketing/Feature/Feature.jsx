import { StyledFeature } from "./style";
const Feature = ({ icon, alt, title, text }) => {
  return (
    <StyledFeature>
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledFeature>
  );
};

export default Feature;
