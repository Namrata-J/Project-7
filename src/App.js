import "./styles.css";
import React, { useState } from "react";

var genre = ["Lo-fi", "Oldies", "Punjabi", "Evergreen", "Soft-Rock"];
var lofiSongs = {
  "🎧Kuch Is Tarah(Vincent Boral)": "Ratings:4.5/5",
  "🎧Mere Samne Wali Khidki Mein(joyvegas)": "Ratings:4/5",
  "🎧Saibo(Lofi Flip)": "Ratings:4/5",
  "🎧Tum HO(J-MAN Lofi)": "Ratings:3.5/5",
  "🎧You Are The One(Airr)": "Ratings:4/5"
};
var oldSongs = {
  "🎧Bade Ache Lagte Hai": "Rating:4/5",
  "🎧Kisi Ki Muskurahaton Pe": "Rating:4.5/5",
  "🎧Kahin Door Jab Din Dhal Jaaye": "Rating:4/5",
  "🎧Pyar Humein Kis Mod Pe": "Rating:4.5/5"
};
var punjabiSongs = {
  "🎧Roi Na": "Rating:4.5/5",
  "🎧Sohnea Feat. Milling Gaba": "Rating:4.5/5",
  "🎧Photo Feat. Karan Sehmbi": "Rating:4/5",
  "🎧Jaani Tere Naa Feat. Sunanda Sharma": "Rating:4/5"
};
var evergreenSongs = {
  "🎧Hosanna": "Rating:4.5/5",
  "🎧Yakeen": "Rating:4.5/5",
  "🎧Gal Mithi": "Rating:4.5/5",
  "🎧Kahin To": "Rating:4.5/5",
  "🎧Aye Khuda Mujhko Bata": "Rating:4.5/5",
  "🎧Waka Waka": "Rating:4.5/5"
};
var softrockSongs = {
  "🎧Something Just Like This": "Rating:4.5/5",
  "🎧Bailando": "Rating:4/5",
  "🎧Lily": "Rating:4/5",
  "🎧Feel Me": "Rating:4/5",
  "🎧August Diaries": "Ratings:4.5/5"
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
      <h1 style={{ paddingTop: "50px" }}>
        <img
          src={require("../images/music.png")}
          alt=""
          height="50px"
          style={{ boxShadow: "0px 0px 8px rgb(235, 70, 98)", padding: "3px" }}
        />{" "}
        <span
          style={{ color: "rgb(175, 20, 54)", textShadow: "0px 0px 4px white" }}
        >
          Symphonize
        </span>
      </h1>
      <p
        style={{
          color: "rgb(202, 178, 71)",
          fontSize: "0.8rem",
          textShadow: "0px 0px 2px rgb(202, 178, 71)"
        }}
      >
        Check out my collection of top musics.Select a genre to get started:-)
      </p>
      <ul style={{ paddingInlineStart: "0", color: "white" }}>
        {genre.map(function (item) {
          return (
            <li
              key={item}
              onClick={() => chooseClickHandler(item)}
              style={{
                display: "inline-block",
                padding: "0.5rem",
                margin: "0.6rem",
                backgroundColor: "rgb(27, 31, 37)",
                color: "rgb(175, 20, 54)",
                borderRadius: "0.5rem",
                boxShadow: "0px 0px 5px rgb(202, 178, 71)",
                cursor: "pointer",
                marginTop: "0.8rem"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <hr style={{ margin: "2.5rem" }} />
      <ul style={{ maxWidth: "400px", margin: "auto" }}>
        {listWEKnow.map(function (listitem) {
          return (
            <li
              style={{
                listStyle: "none",
                color: "white",
                padding: "1rem",
                boxShadow: "2px 2px 5px rgb(52, 145, 168)",
                marginRight: "2rem",
                marginBottom: "2rem"
              }}
            >
              {listitem}
              <div>
                <p style={{ fontSize: "0.8rem" }}>{display[listitem]}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <footer
        style={{
          height: "80px",
          backgroundColor: "rgb(49, 181, 214)",
          borderTopLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
          marginTop: "100px",
          color: "white",
          fontSize: "0.8rem",
          paddingTop: "3rem"
        }}
      >
        Made by 🤍Namrata Jain ⒸCopyright
        <p>Thankyou for visiting:-)</p>
      </footer>
    </div>
  );
}
