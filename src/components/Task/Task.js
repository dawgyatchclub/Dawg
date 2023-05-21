import dawg from "../../assets/4.png";
import { useState, useEffect } from "react";
import { useMetamask, ConnectWallet, useAddress } from "@thirdweb-dev/react";
import supabase from "../../supabase";

const referredBy = new URLSearchParams(window.location.search).get("ref");

function Task({ referrals, setReferrals }) {
  const address = useAddress();
  const connectMetamask = useMetamask();
  const [formData, setFormData] = useState({
    twitterHandle: "",
    retweetLink: "",
    discordUsername: "",
  });
  const [formErrors, setFormErrors] = useState({
    twitterHandle: "",
    retweetLink: "",
    discordUsername: "",
  });
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateForm() {
    let errors = {};

    if (!formData.twitterHandle) {
      errors.twitterHandle = "Enter a valid twitter handle @username";
    }
    if (!formData.retweetLink) {
      errors.retweetLink = "Enter a valid retweet link";
    }
    if (!formData.discordUsername) {
      errors.discordUsername = "Enter a valid Discord username";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleDataSubmit() {
    if (address && !taskCompleted) {
      setSubmitting(true);
      const { data: newReferral, error } = await supabase
        .from("referrals")
        .insert([
          {
            address: address,
            referredBy: referredBy,
            twitterHandle: formData.twitterHandle,
            retweetLink: formData.retweetLink,
            discordUsername: formData.discordUsername,
          },
        ])
        .select();

      if (!error) setReferrals((referrals) => [newReferral[0], ...referrals]);
      setSubmitting(false);
    }
  }

  async function addReferralPoints() {
    if (address && !taskCompleted) {
      const referrerAddress = localStorage.getItem("referralAddress");

      if (referrerAddress) {
        //Add points to referrer
        const { data: refBy, error } = await supabase
          .from("referrals")
          .select("*")
          .eq("address", referrerAddress);

        if (error) {
          console.log("there is an error:", error);
        }
        if (refBy) {
          const { data: addPoints, error } = await supabase
            .from("referrals")
            .update({ points: refBy[0].points + 10 })
            .eq("address", referrerAddress);

          if (error) {
            console.log("there is an error:", error);
          }
          if (addPoints) {
            console.log("points added successfully");
          }
        }
      }
    }
  }

  const handleMarkAsCompleted = function (e) {
    e.preventDefault();
    if (!validateForm()) return;

    handleDataSubmit();
    addReferralPoints();

    setFormData({
      twitterHandle: "",
      retweetLink: "",
      discordUsername: "",
    });
    setTaskCompleted(true);
  };

  //Check if the user has completed the task by searching for their wallet address in the "referrals" table in the database.
  useEffect(() => {
    if (referrals.find((referral) => referral.address === address)) {
      setTaskCompleted(true);
    } else {
      setTaskCompleted(false);
    }
    if (referredBy && !localStorage.getItem("referralAddress") && address) {
      localStorage.setItem("referralAddress", referredBy);
    }
  }, [referrals, address]);

  return (
    <div className="container mx-auto my-16  p-10 md:p-0">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-16 md:mb-0 flex justify-center items-center">
          <img
            src={dawg}
            alt="Task"
            className="max-h-96 max-w-96 rounded-full mr-4 items-center justify-center"
          />
        </div>

        <div className="md:w-1/2">
          <form className="flex flex-col border border-gray-300 p-6 rounded-lg">
            <label className="text-lg font-bold mb-2  text-blue-600 underline">
              <a href="https:twitter.com" target="_blanck">
                Follow on Twitter
              </a>
            </label>
            <input
              className="text-black px-4 py-4 border border-gray-300 rounded-lg mb-4"
              type="text"
              placeholder="@username"
              name="twitterHandle"
              value={formData.twitterHandle}
              onChange={handleInputChange}
            />
            {formErrors.twitterHandle && (
              <p className="text-red-500 text-sm mb-2">
                {formErrors.twitterHandle}
              </p>
            )}

            <label className="text-lg font-bold mb-2  text-blue-600 underline">
              <a href="https:twitter.com" target="_blanck">
                Retweet
              </a>
            </label>
            <input
              className="text-black px-4 py-4 border border-gray-300 rounded-lg mb-4"
              type="text"
              placeholder="Retweet link"
              name="retweetLink"
              value={formData.retweetLink}
              onChange={handleInputChange}
            />
            {formErrors.retweetLink && (
              <p className="text-red-500 text-sm mb-2">
                {formErrors.retweetLink}
              </p>
            )}

            <label className="text-lg font-bold mb-2  text-blue-600 underline">
              Join Discord
            </label>
            <input
              className="text-black px-4 py-4 border border-gray-300 rounded-lg mb-4"
              type="text"
              placeholder="Discord username#1234"
              name="discordUsername"
              value={formData.discordUsername}
              onChange={handleInputChange}
            />
            {formErrors.discordUsername && (
              <p className="text-red-500 text-sm mb-2">
                {formErrors.discordUsername}
              </p>
            )}

            {address && (
              <button
                className={`px-4  bg-button-gradient text-black font-bold rounded-lg hover:bg-button-hover focus:outline-none py-5 ${
                  taskCompleted ? "!bg-button-hover" : null
                }`}
                type="button"
                onClick={handleMarkAsCompleted}
                disabled={taskCompleted}
              >
                {submitting
                  ? "submitting..."
                  : taskCompleted
                  ? "Task Submitted"
                  : "Submit Task"}
              </button>
            )}

            {!address && (
              <ConnectWallet
                className="!px-4  !bg-button-gradient !text-black !font-bold !rounded-lg !hover:bg-button-hover !focus:outline-none !py-5"
                onClick={connectMetamask}
              >
                Connect Wallet
              </ConnectWallet>
            )}
          </form>
        </div>
      </div>
      <p className="mt-10 text-xl font-extralight">
        NOTE: Make sure to complete all task, we will check before distributing
        rewards
      </p>
    </div>
  );
}

export default Task;
