import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SigninPage from "../views/Admin/SigninPage";
import { useRouter } from "next/router";
type Props = {};
import Head from "next/head";
const Signup = (props: Props) => {
  const [allow, setAllow] = useState(true);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title> sign in</title>
      </Head>
      {allow ? <SigninPage /> : null}
    </div>
  );
};

export default Signup;
