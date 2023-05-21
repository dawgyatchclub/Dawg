import logo from "../../assets/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";

function NavTask() {
  return (
    <nav className="bg-cyan h-24">
      <div className="flex justify-between items-center container mx-auto h-24">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-42 h-28 px-4 sm:px-6 lg:px-8"
          />
        </a>

        <ConnectWallet className="h-28 px-4 !sm:px-6 lg:px-8" />
      </div>
    </nav>
  );
}

export default NavTask;
