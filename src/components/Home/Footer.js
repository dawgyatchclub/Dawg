import twitter from "../../assets/twitterDark.svg";
import discord from "../../assets/discord.svg";
import telegram from "../../assets/telegram.svg";
import logoNFT from "../../assets/logoNFT.png";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center bg-cyan">
        <div
          className="container mx-auto text-center flex flex-col items-center p-6"
          data-aos="fade-down"
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-20 md:mb-6 md:mt-24 text-center bg-clip-text text-transparent bg-heading-gradient">
            Contact
          </h2>
          <div className="grid grid-cols-3 gap-12 mt-6">
            <img
              src={twitter}
              className="w-14 h-14 hover:scale-105 active:scale-95"
            ></img>
            <img
              src={discord}
              className="w-14 h-14 hover:scale-105 active:scale-95"
            ></img>
            <img
              src={telegram}
              className="w-14 h-14 hover:scale-105 active:scale-95"
            ></img>
          </div>
          <a href="/">
            <img
              src={logoNFT}
              alt="Logo"
              className="w-36 h-36 md:w-40 md:h-40 mt-6"
            />
          </a>
          <p className="text-black max-w-3xl mb-6 text-sm mt-6">
            $DAWG is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
      <div className="bg-grey-900 p-10 flex flex-col md:flex-row items-center justify-between">
        <p className="font-extralight text-sm order-2 md:order-1 mt-5 md:mt-0">
          DawgCoin © 2023 All Rights Reserved
        </p>
        <div className="grid grid-cols-3 gap-3 text-center order-1 md:order2">
          <a href="/" className="hover:scale-105 active:scale-95">
            HOME
          </a>

          <a href="/Airdrop" className="hover:scale-105 active:scale-95">
            AIRDROP
          </a>
          <a href="#" className="hover:scale-105 active:scale-95">
            OPENSEA
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
