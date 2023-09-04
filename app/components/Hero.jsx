import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageHero from "../../public/images/hero.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section Start */}
      <section className="pt-[167px] px-[25px] mx-auto lg:px-44">
        <div className="flex flex-col gap-12 justify-center items-center md:flex md:flex-row lg:flex-row lg:gap-[75px]">
          <div className="flex flex-col gap-6 text-center md:text-start lg:text-start">
            <h1 className="font-bold text-[40px] lg:text-[64px] leading-[100%]">
              Building digital products, brands & experience
            </h1>
            <p className="text-base lg:text-lg leading-[27,5%]">
              Digital Agency is your online team mangement tool that easy and
              prompt
            </p>
            <Link href="/">
              <button className="uppercase bg-brand text-white text-sm lg:text-base font-semibold rounded-lg py-[10px] px-6 lg:px-8">
                Contact Us
              </button>
            </Link>
          </div>
          <Image
            src={imageHero}
            alt="Hero"
            className="lg:w-[450px] lg:h-[450px] lg:object-cover"
          />
        </div>
      </section>
      {/* Hero Section End */}
    </>
  );
};

export default Hero;
