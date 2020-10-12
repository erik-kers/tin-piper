import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Glyph from "../glyph/glyph.component";
import { fingeringTables } from "../../data";

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10px;
  height: 100px;
  margin: 5px;
`;

const findCorrectFingering = (note, fingeringTable) => {
  const noteFromTable = fingeringTable.find(
    (fingering) => note.note === fingering.note
  );

  return note.octave === 1
    ? noteFromTable.firstOctave
    : noteFromTable.secondOctave;
};

const Note = ({ note }) => {
  const fingering = findCorrectFingering(note, fingeringTables.D);
  return (
    <NoteContainer>
      {fingering.map((hole) =>
        hole === 1 ? <Glyph filled key={uuidv4()} /> : <Glyph key={uuidv4()} />
      )}
      {note.octave === 2 ? "+" : ""}
    </NoteContainer>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    note: PropTypes.string,
    octave: PropTypes.number,
  }).isRequired,
};

export default Note;
