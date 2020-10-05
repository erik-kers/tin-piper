import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import System from "../system/system.component";

const SongContainer = styled.section`
  height: 100%;
  width: 100%;
`;

const Song = (song) => {
  const { title, systems } = song.song;
  return (
    <SongContainer>
      <h1>{title}</h1>
      {systems.map((system) => (
        <System bars={system.bars} key={uuidv4()} />
      ))}
    </SongContainer>
  );
};

export default Song;
