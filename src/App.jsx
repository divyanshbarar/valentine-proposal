import React, { useState } from "react";
import flowerBear from "./assets/flowerBear.gif";
import madBear from "./assets/madBear.gif";
import no from "./assets/no.gif"
import happyBear from "./assets/yes.gif";
import kisses from "./assets/kisses.gif";
import kissesblue from "./assets/kisses-blue.gif";
import "./App.css";

export default function App() {
  const noTexts = [
    "No",
    "Think again 😢",
    "Are you sure? 🥺",
    "Really no? 💔",
    "Pleaseeee 💕",
    "Last chance 😭",
    "You're breaking my heart 💔",
    "I'm gonna cry... 😭",
    "Okay fine… but try Yes ❤️"
  ];

  const [noIndex, setNoIndex] = useState(0);
  const [yesSize, setYesSize] = useState(1.2); // rem
  const [stage, setStage] = useState("start"); // start | no | yes

  const handleNo = () => {
    setStage("no");
    setYesSize((s) => s + 0.5);
    setNoIndex((i) => (i + 1) % noTexts.length);
  };

  const handleYes = () => {
    setStage("yes");
  };

  // Generate random floating hearts
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 20; i++) {
      const style = {
        left: Math.random() * 100 + "vw",
        animationDuration: Math.random() * 3 + 2 + "s",
        animationDelay: Math.random() * 5 + "s",
        fontSize: Math.random() * 20 + 20 + "px"
      };
      hearts.push(
        <div key={i} className="heart" style={style}>
          ❤️
        </div>
      );
    }
    return hearts;
  };

  return (
    <div className="container">
      {renderHearts()}

      {stage === "start" && (
        <div className="content-wrapper">
          <img
            src={flowerBear}
            alt="flower bear"
            className="bear-img"
          />

          <h1>Hey bbg(Charvi)!!!<br></br> Will you be my Valentine? 💖</h1>

          <div className="button-container">
            <button
              onClick={handleYes}
              className="yes-button"
              style={{
                fontSize: `${yesSize}rem`,
                padding: `${10 + (yesSize * 2)}px ${30 + (yesSize * 5)}px`
              }}
            >
              Yes 💘
            </button>

            <button
              onClick={handleNo}
              className="no-button"
            >
              {noTexts[noIndex]}
            </button>
          </div>
        </div>
      )}

      {stage === "no" && (
        <div className="content-wrapper">
          <div style={{ display: "flex", flexDirection: "row" }}> <img
            src={madBear}
            alt="mad bear"
            className="bear-img"
          />
            <img
              src={no}
              alt="no"
              className="no-img"
            />
          </div>

          <h1>Please don't say no 🥺</h1>

          <div className="button-container">
            <button
              onClick={handleYes}
              className="yes-button"
              style={{
                fontSize: `${yesSize}rem`,
                padding: `${10 + (yesSize * 2)}px ${30 + (yesSize * 5)}px`
              }}
            >
              Yes 💘
            </button>

            <button
              onClick={handleNo}
              className="no-button"
            >
              {noTexts[noIndex]}
            </button>
          </div>
        </div>
      )}

      {stage === "yes" && (
        <div className="content-wrapper">
          <img
            src={kissesblue}
            alt="kisses"
            className="kisses-img-blue"
          />
          <img
            src={happyBear}
            alt="happy bear"
            className="bear-img"
            style={{ width: '300px' }}
          />

          <img
            src={kisses}
            alt="kisses"
            className="kisses-img"
          />

          <h1>Yayyyy!! I love you sooo much 💕💋</h1>
        </div>
      )}
    </div>
  );
}
