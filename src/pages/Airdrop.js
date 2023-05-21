import Header from "../components/Task/NavTask";
import Footer from "../components/Task/FooterTask";
import Task from "../components/Task/Task";
import Invite from "../components/Task/Invite";
import ReferralList from "../components/Task/ReferralList";

import supabase from "../supabase";

import { useEffect, useState } from "react";

//APP

function Airdrop() {
  const [referrals, setReferrals] = useState([]);

  //fetch referrals
  useEffect(function () {
    async function fetchReferralsList() {
      let query = supabase.from("referrals").select("*");

      const { data: referralsData, error } = await query
        .order("points", { ascending: false })
        .limit(100);

      if (!error) setReferrals(referralsData);
      else alert("There was a problem getting data");
    }

    fetchReferralsList();
  }, []);

  return (
    <>
      <Header />
      <div className="font-extrabold container mx-auto my-16 p-10 lg:p-0">
        <h3 className="text-2xl">Complete tasks and</h3>
        <h1 className="text-5xl mt-2.5 bg-clip-text text-transparent bg-heading-gradient leading-tight">
          Earn 1 Alpha Dawg NFT
        </h1>
      </div>
      <Task referrals={referrals} setReferrals={setReferrals} />
      <Invite />
      <ReferralList referrals={referrals} />
      <Footer />
    </>
  );
}

export default Airdrop;
