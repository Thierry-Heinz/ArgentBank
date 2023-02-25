import { Link } from "react-router-dom";
import { StyledUserPage } from "./style";

const UserPage = () => {
  return (
    <StyledUserPage>
      UserPage
      <Link to="/transactions">Transactions</Link>
    </StyledUserPage>
  );
};

export default UserPage;
