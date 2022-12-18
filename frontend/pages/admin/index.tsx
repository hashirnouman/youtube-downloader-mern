import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
    <>
      {show ? (
        <div>
          <h1>hello</h1>
        </div>
      ) : null}
    </>
  );
};

export default Home;
