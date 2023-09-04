import React from "react";
import Image from "next/image";
import imageSpotify from "../../public/images/spotify.png";
import imageSlack from "../../public/images/slack.png";
import imageDropbox from "../../public/images/dropbox.png";
import imageZoom from "../../public/images/zoom.png";

const Companies = () => {
  return (
    <>
      <section className="pt-[120px] px-6 w-full">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-sm md:text-base lg:text-base font-light leading-[100%] text-[#667085]">
            Trusted by 4,000+ companies
          </h3>
          <div className="bg-card rounded-lg py-6 px-4 lg:px-6 flex flex-row gap-[30px] lg:gap-[115px] justify-center items-center">
            <Image
              src={imageSpotify}
              alt="Spotify"
              className="lg:w-[140px] lg:h-12"
            />
            <Image
              src={imageSlack}
              alt="Spotify"
              className="lg:w-[121px] lg:h-12"
            />
            <Image
              src={imageDropbox}
              alt="Spotify"
              className="lg:w-[163px] lg:h-12"
            />
            <Image
              src={imageZoom}
              alt="Spotify"
              className="lg:w-[98px] lg:h-12"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
