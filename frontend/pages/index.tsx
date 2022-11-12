import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import Form from "../components/Form";
import Pitch from "../components/Pitch";
import Steps from "../components/Steps";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
      <Pitch />
      <Steps />
      <Features />
    </div>
  );
}
