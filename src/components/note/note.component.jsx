import React from "react";
import styled from "styled-components";
import Glyph from "../glyph/glyph.component";

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 10px;
  height: 100px;
  margin: 0 20px;
`;

const Note = (notes) => {
  return (
    <NoteContainer>
      <Glyph filled />
      <Glyph filled />
      <Glyph filled />
      <Glyph />
      <Glyph />
      <Glyph />
    </NoteContainer>
  );
};

export default Note;
