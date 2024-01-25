import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemesImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesImages(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-component">
      <div className="inputs-field">
        <div className="label">
          <p>Top text</p>
          <input
            onChange={handleChange}
            name="topText"
            className="meme-input"
            type="text"
            placeholder="Top Text"
            value={meme.topText}
          />
        </div>

        <div className="label">
          <p>Bottom text</p>
          <input
            onChange={handleChange}
            name="bottomText"
            className="meme-input"
            type="text"
            placeholder="Bottom Text"
            value={meme.bottomText}
          />
        </div>
      </div>
      <button onClick={getMemeImage} className="meme-btn">
        Get a new meme image
      </button>
      <div>
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
