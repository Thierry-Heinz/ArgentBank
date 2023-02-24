import { StyledFeature } from "./style";
const Feature = ({ icon, title, text }) => {
  return (
    <StyledFeature>
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledFeature>
  );
};

export default Feature;
