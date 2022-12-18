import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SigninPage from "../views/Admin/SigninPage";
import { useRouter } from "next/router";
type Props = {};

const Signup = (props: Props) => {
  const [allow, setAllow] = useState(true);
  const router = useRouter();

  return <>{allow ? <SigninPage /> : null}</>;
};

export default Signup;
