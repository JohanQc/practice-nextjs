import Head from "next/head";
import { Header, AboutUs, WhatsAppFixed } from "../components";

import { PHONE_NUMBER } from "../config";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="">
        <AboutUs />
      </main>
      <footer></footer>
      <WhatsAppFixed number={PHONE_NUMBER} />
    </div>
  );
}
