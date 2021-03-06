import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Offers from "../components/Offers";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Design Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Offers />
      <Pricing />
      <footer className="mt-20 mb-10  max-w-screen-2xl m-auto">
        Made by Harsimran
      </footer>
    </>
  );
}
