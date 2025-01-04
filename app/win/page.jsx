import React from "react";

import "./style.css";

function Page() {
  return (
    <div className="windows">
      <img src="https://c.tenor.com/9CqTZoKN-KsAAAAC/tenor.gif" width="220" style={{marginBlockEnd: "20px"}} alt="" />
      <h1>
        You are 7% there.
        <br />
        Please keep your computer on.
      </h1>
      <h1 className="bottomText">Your computer may restart a few times.</h1>
    </div>
  );
}

export default Page;
