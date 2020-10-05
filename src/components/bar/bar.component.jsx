import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Note from "../note/note.component";

const BarContainer = styled.section`
  display: flex;
  width: 600px;
  border-right: 2px solid black;
  flex-direction: row;
  margin: 20px;
`;

const Bar = (notes) => {
  return (
    <BarContainer>
      {notes.notes.map((note) => {
        return <Note note={note} key={uuidv4()} />;
      })}
    </BarContainer>
  );
};

export default Bar;
