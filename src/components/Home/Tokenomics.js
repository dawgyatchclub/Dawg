import chart from "../../assets/Tokenomics.png";
function Tokenomics() {
  return (
    <div className="flex flex-col items-center justify-center bg-cyan">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold m-4 md:mb-6 md:mt-28 text-center bg-clip-text text-transparent bg-heading-gradient"
          data-aos="fade-down"
        >
          Tokenomics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="flex flex-col justify-center rounded-xl p-8"
            data-aos="fade-right"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Total Supply: <br /> 420,690,000,000,000
            </h3>
            <p className="text-base lg:text-lg mb-6 bg-[#1F5561] px-6 py-8 rounded-tl-xl rounded-br-xl border-4 border-white">
              No Taxes, No Honeypot, No rugs. Just vibes. We believe every good
              meme coin deserves a dope PFP. We have decided to allocate 6.9% of
              the token supply to Dawg Yacht Club NFT holders. These tokens will
              be claimable after Dawg NFT launch.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-6">
              <a className="bg-black border-2 border-white px-5 py-3 rounded-full hover:scale-105 active:scale-95">
                LIQUIDITY LOCKED
              </a>
              <a className="bg-white text-black border-2 border-black px-5 py-3 rounded-full hover:scale-105 active:scale-95">
                BUY $DAWG
              </a>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center rounded-xl p-8"
            data-aos="fade-left"
          >
            <img src={chart} alt="Tokenomics" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
