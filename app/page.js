"use client";
import React, { useEffect } from "react";
import "./page.css";
import StickyCursor from "./components/StickyCursor";
import Button from "./components/Button";
function page() {
  const elementRef = React.useRef(null);
  const stickyRef = React.useRef(null);


  return (
    <div className="main-container" ref={elementRef}>
      <h1 className="title">Fake Update!!</h1>
      <StickyCursor stickyRef={stickyRef} />
      <div className="container">
        <Button
          click={() => {
            elementRef.current.requestFullscreen();
            window.location.href = "/win";
          }}
          text="Windows"
          image="win.png"
          ref={stickyRef}
        />

        <Button
          click={() => {
            elementRef.current.requestFullscreen();
            window.location.href = "/mac";
          }}
          text="MacOS/iOS"
          image="apl.png"
          ref={stickyRef}
        />

        <Button
          click={() => {
            elementRef.current.requestFullscreen();
            window.location.href = "/ubu";
          }}
          text="Ubuntu"
          image="ubu.png"
          ref={stickyRef}
        />

        {/* <Button
          click={() => {
            elementRef.current.requestFullscreen();
            window.location.href = "/and";
          }}
          text="Android"
          image="and.png"
          ref={stickyRef}
        /> */}
      </div>
    </div>
  );
}

export default page;
