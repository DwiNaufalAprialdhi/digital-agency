import React from "react";
import Hero from "./components/Hero";
import Image from "next/image";
import imageGradient1 from "../public/images/gradient1.png";
import Companies from "./components/Companies";

const Home = () => {
  return (
    <>
      <Image src={imageGradient1} alt="" className="absolute -z-50" />
      <Hero />
      <Companies />
    </>
  );
};

export default Home;
