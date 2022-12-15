import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SignupPage from "../views/Admin/SignupPage";
import { useRouter } from "next/router";
type Props = {};

const Signup = (props: Props) => {
  const [allow, setAllow] = useState(true);
  const router = useRouter();
  const redirect = () => {
    const { string } = router.query;
    if (string != "d") {
      setAllow(false);
    } else {
      setAllow(true);
    }
  };
  useEffect(() => {
    redirect();
  }, []);
  return <>{allow ? <SignupPage /> : null}</>;
};

export default Signup;
