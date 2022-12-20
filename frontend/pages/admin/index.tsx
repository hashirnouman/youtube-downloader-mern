import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FormSection from "../../views/Admin/FormSection";
import axios from "axios";
import Head from "next/head";
type Props = {};
const Home = (props: Props) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const check = () => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>admin</title>
      </Head>
      {show ? (
        <div>
          <h1>
            <FormSection />
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
