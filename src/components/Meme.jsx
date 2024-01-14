import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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

      <img src={meme.randomImage} className="meme-image" />
    </div>
  );
}
