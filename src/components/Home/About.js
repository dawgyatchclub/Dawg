import dawg from "../../assets/Dawg_about.png";

function About() {
  return (
    <div className=" bg-cyan">
      <div className="flex flex-col container mx-auto md:flex-row items-center md:justify-center gap-10 md:gap-20 ">
        <div className="md:w-1/2" data-aos="fade-right">
          <img src={dawg} alt="Dawg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold m-4 md:mb-6 md:mt-24 text-center bg-clip-text text-transparent bg-heading-gradient">
            About Us
          </h2>

          <p
            className="text-base lg:text-lg leading-7 text-black p-6 md:p-3"
            data-aos="fade-up"
          >
            Inspired by the success of other top meme and NFT projects, we have
            developed a unique concept that combines the best of both worlds.
            Our NFT collection, DAWG YACHT CLUB, represents the indomitable
            spirit of those who rise to the top, capturing the essence of a
            powerful, yet humble creature who has mastered the art of survival.
            By owning one of our NFTs, you become a part of our community of
            like-minded individuals who share a passion for excellence and a
            willingness to go the extra mile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
