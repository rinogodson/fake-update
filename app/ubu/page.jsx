import React from "react";
import "./style.css";
import UbuntuLoader from "../components/ubuntuLoader";
function Page() {
  return (
    <div className="ubuntu">
      <img className="ubuntu-logo" src="ubuntu.png" alt="" />
      <UbuntuLoader/>
      {/* #FC3E04 */}
    </div>
  );
}

export default Page;
