import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "typeface-montserrat";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="binance-testnet">
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
