import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../App";

import "./pictures.css";
import {
  img1Thumbnail,
  img2Thumbnail,
  img3Thumbnail,
  img4Thumbnail,
  img1,
  img2,
  img3,
  img4,
  iconNext,
  iconClose,
} from "./imports";

const Pictures = (props) => {
  const pics = [img1, img2, img3, img4];
  const [mainPic, setMainPic] = useState(0);
  const { showInspect, setShowInspect } = useContext(AppContext);

  function nextPic(dir) {
    if (dir == 1) {
      if (mainPic == pics.length - 1) setMainPic(0);
      else setMainPic(mainPic + 1);
    } else {
      if (mainPic == 0) setMainPic(3);
      else setMainPic(mainPic - 1);
    }
  }

  return (
    <div className="Main-pictures">
      {props.inspect && (
        <div className="Main-pictures-close">
          <img src={iconClose} onClick={() => setShowInspect(!showInspect)} />
        </div>
      )}
      <div className="Main-pictures-large">
        <img src={pics[mainPic]} onClick={() => setShowInspect(!showInspect)} />
        <div className="Main-pictures-large-buttons-mobile">
          <div className="Main-pictures-large-buttons">
            <img src={iconNext} className="mirror" onClick={() => nextPic(-1)} />
            <img src={iconNext} onClick={() => nextPic(1)} />
          </div>
        </div>
        {props.inspect && (
          <div className="Main-pictures-large-buttons">
            <img src={iconNext} className="mirror" onClick={() => nextPic(-1)} />
            <img src={iconNext} onClick={() => nextPic(1)} />
          </div>
        )}
      </div>
      <div className="Main-pictures-small">
        <div className={mainPic == 0 ? "Main-pictures-small-selected" : "Main-pictures-small-img"}>
          <img src={img1Thumbnail} onClick={() => setMainPic(0)} />
        </div>
        <div className={mainPic == 1 ? "Main-pictures-small-selected" : "Main-pictures-small-img"}>
          <img src={img2Thumbnail} onClick={() => setMainPic(1)} />
        </div>
        <div className={mainPic == 2 ? "Main-pictures-small-selected" : "Main-pictures-small-img"}>
          <img src={img3Thumbnail} onClick={() => setMainPic(2)} />
        </div>
        <div className={mainPic == 3 ? "Main-pictures-small-selected" : "Main-pictures-small-img"}>
          <img src={img4Thumbnail} onClick={() => setMainPic(3)} />
        </div>
      </div>
    </div>
  );
};

export default Pictures;
