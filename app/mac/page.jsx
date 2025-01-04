import React from "react";
import './style.css'
function Page() {
  const percentage = 20;
  return (
  <div className="mac">
    <img className="apple-logo" src="apple.svg" alt="" />
    <div style={{background:`linear-gradient(to right, #fff ${percentage}%, #808080 ${percentage}%)`}} className="progress"></div>
  </div>
  )
}

export default Page;
