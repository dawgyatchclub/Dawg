import { useState, useEffect } from "react";
import link from "../../assets/link.svg";
import { useAddress } from "@thirdweb-dev/react";
import supabase from "../../supabase";

function Invite() {
  const [referralLink, setReferralLink] = useState("");
  const [points, setPoints] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const address = useAddress();

  // Generate referral link based on the user's wallet address
  useEffect(() => {
    if (address) {
      setReferralLink(`http://localhost:3000/?ref=${address}`);
    }
    if (!address) {
      setReferralLink("");
    }
    async function fetchPoint() {
      const { data: point } = await supabase
        .from("referrals")
        .select("points")
        .eq("address", address);

      setPoints(point[0].points);
    }
    fetchPoint();
  }, [address]);

  return (
    <>
      {/* INVITE FRIEND */}
      <div className="container mx-auto bg-black/60 p-10 rounded-lg shadow-md mt-8">
        <div className="flex flex-col mb-7">
          <div className="flex justify-center items-center h-10 w-10 bg-success  rounded-lg">
            <img src={link} alt="check" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Invite Friends</h2>
        <p className="mb-4 font-extrabold">
          Total Points <span className="text-cyan">{points}</span>
        </p>
        <div className="mt-6">
          <form>
            <div className="mt-1 flex relative">
              <div className="shadow-sm w-full">
                <input
                  type="text"
                  name="email"
                  id="email"
                  defaultValue={referralLink}
                  className="block w-full py-3 pl-4 pr-10 text-cyan focus:outline-none  rounded-md bg-light-grey"
                />
              </div>

              <button
                type="button"
                className="absolute right-0 top-0 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-button-gradient hover:bg-button-hover focus:outline-none h-full"
                onClick={() => {
                  navigator.clipboard.writeText(referralLink);
                  setCopySuccess(true);
                }}
              >
                {copySuccess ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Invite;
