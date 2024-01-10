import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  }

  return (
    <div className="meme-component">
      <div className="inputs-field">
        <div className="label">
          <p>Top text</p>
          <input className="meme-input" type="text" placeholder="Shut up" />
        </div>

        <div className="label">
          <p>Bottom text</p>
          <input
            className="meme-input"
            type="text"
            placeholder="And take my monkey"
          />
        </div>
      </div>
      <button onClick={getMemeImage} className="meme-btn">
        Get a new meme image
      </button>

      <img src={memeImage} className="meme-image" />
    </div>
  );
}
