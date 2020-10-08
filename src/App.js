import React from "react";
import "./App.css";
import Song from "./components/song/song.component";
import { songs } from "./data";

const song = songs[0];

function App() {
  const { title, author, description, keySignature, time, systems } = song;

  return (
    <div className="App">
      <Song
        title={title}
        author={author}
        description={description}
        keySignature={keySignature}
        time={time}
        systems={systems}
      />
    </div>
  );
}

export default App;
