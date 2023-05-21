import React from "react";
import logoNFT from "../../assets/logoNFT.png";
import twitter from "../../assets/twitterDark.svg";
import discord from "../../assets/discord.svg";
import telegram from "../../assets/telegram.svg";

function Footer() {
  return (
    <footer className="bg-cyan py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start justify-center">
            <img src={logoNFT} alt="logoNFT" className="h-32 w-32" />
            <p className="text-black text-sm hidden md:block">
              DawgCoin © 2023 All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center mt-4 md:mt-0">
              <a href="/" className="mr-8 hover:scale-125">
                HOME
              </a>
              <a href="#" className="mr-8 hover:scale-125">
                CLAIM
              </a>
              <a href="#" className="mr-8 hover:scale-125">
                OPENSEA
              </a>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <a href="/" className="text-gray-400 hover:scale-125 mr-4">
                <img src={twitter} />
              </a>
              <a href="/" className="text-gray-400 hover:scale-125 mr-4">
                <img src={discord} />
              </a>
              <a href="/" className="text-gray-400 hover:scale-125 mr-4">
                <img src={telegram} />
              </a>
            </div>
          </div>
          <p className="text-black text-sm md:hidden mt-4">
            DawgCoin © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
