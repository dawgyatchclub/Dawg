import img41 from "../../assets/41.png";
import img44 from "../../assets/44.png";
import img78 from "../../assets/78.png";
import img35 from "../../assets/35.png";
import cowboy from "../../assets/Cowboy.png";
import major from "../../assets/#Major.png";
import cyborg from "../../assets/#Cyborg.png";
import zombie from "../../assets/#3DZombie.png";
import robe from "../../assets/#Robe.png";

function Nft() {
  return (
    <div className="flex flex-col items-center justify-center bg-jet-black">
      <div className="container mx-auto ">
        <h2
          className="text-4xl md:text-5xl font-bold mt-20 md:mb-6 md:mt-24 text-center bg-clip-text text-transparent bg-heading-gradient"
          data-aos="fade-down"
        >
          NFT
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="flex flex-col justify-center rounded-xl py-8 px-6"
            data-aos="fade-right"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan italic">
              WELCOME TO DAWG YACHT CLUB
            </h3>
            <p className="text-base mb-6 ">
              Dawg Yacht Club NFTs are the latest addition to the world of
              digital collectibles, embodying a certain fearlessness and an
              unbreakable spirit that has inspired generations to aim for the
              top and never give up.
            </p>
            <p>
              DYC is a collection of 50,000 dawgs NFTs —
              <span className="text-cyan">unique digital collectibles </span>
              living on the Binance Smart Chain. Each Alpha Dawg NFT represents
              a unique aspect of this spirit, capturing the essence of a
              powerful, yet humble creature that has mastered the art of
              survival. These NFTs are not just digital tokens, but rather an
              embodiment of a culture that celebrates the indomitable spirit of
              those who rise to the top.
            </p>
          </div>
          <div
            className="grid grid-cols-2 justify-items-center gap-4 p-8 lg:px-20 md:py-5"
            data-aos="flip-left"
          >
            <img src={img78} className="w-full h-auto  rounded-xl"></img>
            <img src={img44} className="w-full h-auto  rounded-xl"></img>
            <img src={img35} className="w-full h-auto  rounded-xl"></img>
            <img src={img41} className="w-full h-auto  rounded-xl"></img>
          </div>
        </div>

        <div className="py-8 px-6" data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan italic">
            FAIR DISTRIBUTION
          </h3>
          <p className="text-base mb-6 ">
            Dawg Yacht Club NFTs are the latest addition to the world of digital
            collectibles, embodying a certain fearlessness and an unbreakable
            spirit that has inspired generations to aim for the top and never
            give up.
          </p>
        </div>
        <div className=" bg-cyan mx-6" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row justify-between items-center p-10">
            <h3 className="text-2xl text-black font-semibold md:w-2/6 item">
              BUY A DAWG
            </h3>
            <p className="text-black p-4 text-center">
              There are no bonding curves here. Buying a Dawg NFT costs 0.08
              ETH. There are no price tiers; DYC membership costs the same for
              everyone.
            </p>
            <a className="md:w-2/6 bg-black text-cyan text-center p-3">
              BUY A DAWG ON OPENSEA
            </a>
          </div>
        </div>
        <div className="py-8 mt-10 px-6" data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan italic">
            THE SPEC
          </h3>
          <div></div>
          <div className="grid grid-cols-5 gap-5 max-w-4xl mx-auto mb-8">
            <img src={cowboy} className="w-28 h-auto"></img>
            <img src={major} className="w-28 h-auto"></img>
            <img src={cyborg} className="w-28 h-auto"></img>
            <img src={zombie} className="w-28 h-auto"></img>
            <img src={robe} className="w-28 h-auto"></img>
          </div>
          <p className="text-base mb-6 ">
            Each Dawg is unique and programmatically generated from over 130
            possible traits, including expression, headwear, clothing, and more.
            All dawgs are dope, but some are rarer than others.The apes are
            stored as ERC-721 tokens on the Ethereum blockchain and hosted on
            IPFS. (See Record and Proof.) Purchasing an ape costs 0.08 ETH.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nft;
