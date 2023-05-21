function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center bg-cyan">
      <div className="max-w-6xl mx-auto ">
        <h2
          className="text-4xl md:text-5xl font-bold mt-20 md:mb-6 md:mt-24 text-center bg-clip-text text-transparent bg-heading-gradient"
          data-aos="fade-up"
        >
          Roadmap
        </h2>
        <div className="flex flex-col items-center p-6">
          <ul
            className="text-base mb-6 bg-[#1F5561] px-6 py-8 rounded-tl-xl rounded-br-xl border-4 border-white"
            data-aos="flip-left"
          >
            <li>
              <span className="mr-2">Phase 1: </span>Payback our mom
            </li>
            <li>
              <span className="mr-2">Phase 2: </span>Vibe and HOLD
            </li>
            <li>
              <span className="mr-2">Phase 3: </span>Doge Takeover
            </li>
          </ul>
          <p
            className="text-black max-w-3xl text-center mb-6"
            data-aos="fade-up"
          >
            All jokes aside, here is a rough sketch of $dawg path ahead. We dont
            wan’t to give everything away on day 1, We're making this shit up
            along the way ;)
          </p>
          <div className="grid md:grid-cols-3 gap-4 px-10">
            <div
              className="text-base mb-6 bg-[#1F5561] px-6 py-8 rounded-tl-xl rounded-br-xl border-4 border-white"
              data-aos="flip-left"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">
                Phase 1
              </h3>
              <ul className="list-disc ml-4">
                <li>Launch</li>
                <li>CoinGecko/Coinmarketcap Listings</li>
                <li>1,000+ Holders</li>
                <li>Get $DAWG Trending on twitter with our memetic power</li>
              </ul>
            </div>

            <div
              className="text-base mb-6 bg-[#1F5561] px-6 py-8 rounded-tl-xl rounded-br-xl border-4 border-white"
              data-aos="flip-left"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">
                Phase 2
              </h3>
              <ul className="list-disc ml-4">
                <li>Launch</li>
                <li>CoinGecko/Coinmarketcap Listings</li>
                <li>1,000+ Holders</li>
                <li>Get $DAWG Trending on twitter with our memetic power</li>
              </ul>
            </div>
            <div
              className="text-base mb-6 bg-[#1F5561] px-6 py-8 rounded-tl-xl rounded-br-xl border-4 border-white"
              data-aos="flip-left"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">
                Phase 3
              </h3>
              <ul className="list-disc ml-4">
                <li>Launch</li>
                <li>CoinGecko/Coinmarketcap Listings</li>
                <li>1,000+ Holders</li>
                <li>Get $DAWG Trending on twitter with our memetic power</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
