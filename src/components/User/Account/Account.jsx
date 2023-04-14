import { useSelector } from "react-redux";
import { StyledAccount } from "./style.js";

const formatNumber = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

const Account = () => {
  const userAccounts = useSelector((state) => state.accounts);
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {userAccounts.map((account, i) => (
        <StyledAccount key={`${i}-${account.title}`}>
          <div className="account-content-wrapper">
            <h3 className="acccount-title">{account.title}</h3>
            <p className="account-amount">
              {formatNumber.format(account.amount)}
            </p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </StyledAccount>
      ))}
    </>
  );
};
export default Account;
