import React from "react";
import { memesData } from "./data";

function Content() {
  const [meme, setMeme] = React.useState({
    toptext: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allmemeImages, setAllmemeImages] = React.useState(memesData);

  function randomSelector() {
    const memesArray = allmemeImages.data.memes;
    let index = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[index].url;
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }

  return (
    <div className="content-container">
      {/*     
         <div className='input-container'>
        <input type='text' className='input' placeholder='Top text'></input>
        <input type='text' className='input' placeholder='Bottom text'></input> 
        </div>  
  */}

      <div className="button-container">
        <button onClick={randomSelector}>Get a new meme image</button>
      </div>
      <div className="img-container">
        <img src={meme.randomImage} alt="pic"></img>
      </div>
    </div>
  );
}

export default Content;
