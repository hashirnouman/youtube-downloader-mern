import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const SignupPage = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);
    console.log(user);
  };
  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    console.log(user);
  };
  const Input = styled.input`
    border: 0;
    display: block;
    min-width: 200%;
    border-radius: 5px;
    padding: 8px;
    background-color: white;
    &:focus {
      outline: none;
    }
    @media screen and (min-width: 320px) and (max-width: 480px) {
      font-size: 10px;
      width: 90%;
      padding: 5px;
      & > div {
        border: 3px solid;
        border-color: ${(props: { theme: { colors: { border: any } } }) =>
          props.theme.colors.border};
        vertical-align: middle;
      }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      font-size: 12px;
      width: 90%;
    }
  `;
  const Button = styled.button`
    background: blue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-weight: 900;
    cursor: pointer;
    gap: 0.5em;
  `;
  return (
    <div style={{ marginTop: "200px", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            name="username"
            placeholder="enter username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button type="submit"> login</Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
