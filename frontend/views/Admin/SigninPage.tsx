import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "./components/FormComponents";
import { useRouter } from "next/router";
type Props = {};

const SigninPage = (props: Props) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credentials = { username, password };
    try {
      const user = await axios.post("/api/auth/login", credentials);

      if (user.status == 200) {
        const obj: any = {
          token: user.data.token,
        };
        const data = JSON.stringify(obj);
        localStorage.setItem("token", data);

        router.push("/admin");
      }
    } catch (e) {}
  };
  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    console.log(user);
  };

  return (
    <div style={{ marginTop: "200px", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            name="username"
            placeholder="enter username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="enter password"
            required
            value={password}
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

export default SigninPage;
