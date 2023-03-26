import styled from "styled-components";

export const StyledUserUpdate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .input-group {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
  }
  .button-group {
    display: flex;
    flex-direction: row;
    width: 30%;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
  }

  .input-wrapper label {
    font-weight: bold;
  }

  .input-wrapper input {
    padding: 5px;
    font-size: 1.2rem;
  }

  button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }
`;
