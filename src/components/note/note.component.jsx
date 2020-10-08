import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Glyph from "../glyph/glyph.component";
import { fingerings } from "../../data";

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 10px;
  height: 100px;
  margin: 0 5px;
`;

const Note = ({ note }) => {
  const setting = fingerings.D.find(
    (fingering) => fingering.note === note.note
  );
  return (
    <NoteContainer>
      {setting.fingering.map((fingering) => {
        return fingering === 1 ? (
          <Glyph filled key={uuidv4()} />
        ) : (
          <Glyph key={uuidv4()} />
        );
      })}
    </NoteContainer>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    note: PropTypes.string,
  }).isRequired,
};

export default Note;
