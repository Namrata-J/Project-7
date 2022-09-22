import "./styles.css";
import React, { useState } from "react";

var genre = ["Lo-fi", "Oldies", "Punjabi", "Evergreen", "Soft-Rock"];
var lofiSongs = {
  "🎧 Kuch Is Tarah(Vincent Boral)": "Ratings:4.5/5",
  "🎧 Mere Samne Wali Khidki Mein(joyvegas)": "Ratings:4/5",
  "🎧 Saibo(Lofi Flip)": "Ratings:4/5",
  "🎧 Tum HO(J-MAN Lofi)": "Ratings:3.5/5",
  "🎧 You Are The One(Airr)": "Ratings:4/5"
};
var oldSongs = {
  "🎧 Bade Ache Lagte Hai": "Rating:4/5",
  "🎧 Kisi Ki Muskurahaton Pe": "Rating:4.5/5",
  "🎧 Kahin Door Jab Din Dhal Jaaye": "Rating:4/5",
  "🎧 Pyar Humein Kis Mod Pe": "Rating:4.5/5"
};
var punjabiSongs = {
  "🎧 Roi Na": "Rating:4.5/5",
  "🎧 Sohnea Feat. Milling Gaba": "Rating:4.5/5",
  "🎧 Photo Feat. Karan Sehmbi": "Rating:4/5",
  "🎧 Jaani Tere Naa Feat. Sunanda Sharma": "Rating:4/5"
};
var evergreenSongs = {
  "🎧 Hosanna": "Rating:4.5/5",
  "🎧 Yakeen": "Rating:4.5/5",
  "🎧 Gal Mithi": "Rating:4.5/5",
  "🎧 Kahin To": "Rating:4.5/5",
  "🎧 Aye Khuda Mujhko Bata": "Rating:4.5/5",
  "🎧 Waka Waka": "Rating:4.5/5"
};
var softrockSongs = {
  "🎧 Something Just Like This": "Rating:4.5/5",
  "🎧 Bailando": "Rating:4/5",
  "🎧 Lily": "Rating:4/5",
  "🎧 Feel Me": "Rating:4/5",
  "🎧 August Diaries": "Ratings:4.5/5"
};
var listWEKnow = [];
var list;
export default function App() {
  var [display, setDisplay] = useState({});
  function chooseClickHandler(item) {
    if (item === "Lo-fi") {
      list = lofiSongs;
      listWEKnow = Object.keys(list);
      display = list;
      setDisplay(display);
    }
    if (item === "Oldies") {
      list = oldSongs;
      listWEKnow = Object.keys(list);
      display = list;
      setDisplay(display);
    }
    if (item === "Punjabi") {
      list = punjabiSongs;
      listWEKnow = Object.keys(list);
      display = list;
      setDisplay(display);
    }
    if (item === "Evergreen") {
      list = evergreenSongs;
      listWEKnow = Object.keys(list);
      display = list;
      setDisplay(display);
    }
    if (item === "Soft-Rock") {
      list = softrockSongs;
      listWEKnow = Object.keys(list);
      display = list;
      setDisplay(display);
    }
  }
  return (
    <div className="App">
      <img
        className="bg-image"
        src="https://guitar.com/wp-content/uploads/2021/09/Gadgets-BOSS-GS-1@1400x1050.jpg"
        alt="guitar"
      />
      <h1>
        <span>Symphonize</span>
      </h1>
      <p>
        Check out my collection of top musics.Select a genre to get started:-)
      </p>
      <ul className="genres-container">
        {genre.map(function (item) {
          return (
            <li key={item} onClick={() => chooseClickHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
      <hr />
      <ul className="list-container">
        {listWEKnow.map(function (listitem) {
          return (
            <li>
              {listitem}
              <div>
                <p style={{ fontSize: "0.8rem" }}>{display[listitem]}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
