"use client";
import React from "react";

function UbuntuLoader() {
  const [animNum, setAnimNum] = React.useState(0);
  const [lev, setLev] = React.useState(0);

  const [isUpdating, setIsUpdating] = React.useState(true);

  React.useEffect(()=>{
    if(animNum <= 50){
      setLev((lev==0 ? 1 : 0));
    }
  }, [animNum<=50])

  React.useEffect(()=>{
    if(animNum <= 50){
      setTimeout(()=>{
        setAnimNum(animNum+10);
      }, 1000)
    }
    else{
      setAnimNum(0)
    }
  })


  return (
    <div className="dotcont">
      <div
        className="ubudot"
        style={{ backgroundColor: (animNum<10) ? (lev == 0 ? "#fff" : "#FC3E04") : (lev == 0 ? "#FC3E04" : "#fff") }}
      ></div>
      <div
        className="ubudot"
        style={{ backgroundColor: (animNum<20) ? (lev == 0 ? "#fff" : "#FC3E04") : (lev == 0 ? "#FC3E04" : "#fff") }}
      ></div>
      <div
        className="ubudot"
        style={{ backgroundColor: (animNum<30) ? (lev == 0 ? "#fff" : "#FC3E04") : (lev == 0 ? "#FC3E04" : "#fff") }}
      ></div>
      <div
        className="ubudot"
        style={{ backgroundColor: (animNum<40) ? (lev == 0 ? "#fff" : "#FC3E04") : (lev == 0 ? "#FC3E04" : "#fff") }}
      ></div>
      <div
        className="ubudot"
        style={{ backgroundColor: (animNum<50) ? (lev == 0 ? "#fff" : "#FC3E04") : (lev == 0 ? "#FC3E04" : "#fff") }}
      ></div>
    </div>
  );
}

export default UbuntuLoader;
