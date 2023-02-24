import { StyledIconButton } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = ({ faIcon, textBtn }) => {
  return (
    <StyledIconButton>
      <FontAwesomeIcon icon={faIcon} />
      {textBtn}
    </StyledIconButton>
  );
};

export default ButtonIcon;
