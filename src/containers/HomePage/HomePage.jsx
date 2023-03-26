import { Main, Features } from "./style";
import { selectCurrentToken } from "../../features/auth/authSlice";

import chatIcon from "../../assets/icon-chat.png";
import moneyIcon from "../../assets/icon-money.png";
import securityIcon from "../../assets/icon-security.png";

// Importing components

import { Hero, Feature } from "../../components/Marketing";
import { useSelector } from "react-redux";

const HomePage = () => {
  const token = useSelector(selectCurrentToken);
  console.log(token);
  return (
    <Main>
      <Hero
        srOnly="Promoted Content"
        title={{
          line1: "No fees.",
          line2: "No minimum deposit.",
          line3: "High interest rates.",
        }}
        text="Open a savings account with Argent Bank today!"
      />
      <Features>
        <h2 className="sr-only">Features</h2>
        <Feature
          icon={chatIcon}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          icon={moneyIcon}
          alt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          icon={securityIcon}
          alt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </Features>
    </Main>
  );
};

export default HomePage;
