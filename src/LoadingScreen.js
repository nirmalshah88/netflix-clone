import React from "react";

import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div
      className="loadingScreen__container"
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <img
        className="loadingScreen__image"
        src="netflix-loading.jpeg"
        alt="Netflix Loading Screen"
      />
    </div>
  );
}

export default LoadingScreen;
