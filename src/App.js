import React from "react";
import "./App.css";
import Song from "./components/song/song.component";
import songs from "./data";

function App() {
  return (
    <div className="App">
      <Song song={songs[0]} />
    </div>
  );
}

export default App;
