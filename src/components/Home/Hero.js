import twitter from "../../assets/twitter.svg";
import opensea from "../../assets/opensea.svg";
import cmc from "../../assets/cmc.svg";
import coingecko from "../../assets/coingecko.svg";
import bsc from "../../assets/bsc.svg";
import dawgHero from "../../assets/dawgHero.png";
function Hero() {
  return (
    <div className="bg-jet-black">
      <div className="mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between mt-10 container">
        <div className="lg:w-1/2">
          <h1
            className="text-3xl md:text-4xl font-extrabold  text-gray-100 sm:text-5xl  leading-tight italic"
            data-aos="fade-up"
          >
            <span className="bg-clip-text text-transparent bg-heading-gradient">
              DAWG"
            </span>
            <br />
            IT'S MORE THAN JUST A CYRPTO. <br />
            IT'S A LIFESTYLE.
          </h1>
          <div className="mt-6" data-aos="fade-left">
            <a
              href="#"
              className="inline-flex items-center px-7 py-2 md:px-8 py:3 border border-transparent text-base md:text-lg font-bold rounded-full shadow-sm text-black bg-button-gradient hover:bg-button-hover hover:scale-105"
            >
              Join Telegram
            </a>
          </div>
          <div
            className="inline-grid grid-cols-5 gap-2 mt-20"
            data-aos="fade-left"
          >
            <a>
              <img src={twitter} className="h-16 w-16 md:h-20  md:w-20" />
            </a>
            <a>
              <img src={opensea} className="h-16 md:h-20 w-16 md:w-20" />
            </a>
            <a>
              <img src={cmc} className="h-16 md:h-20 w-16 md:w-20" />
            </a>
            <a>
              <img src={bsc} className="h-16 md:h-20 w-16 md:w-20" />
            </a>
            <a>
              <img src={coingecko} className="h-16 md:h-20 w-16 md:w-20" />
            </a>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2" data-aos="fade-down-left">
          <img
            className="w-full h-auto lg:max-w-md"
            src={dawgHero}
            alt="Random Unsplash Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
