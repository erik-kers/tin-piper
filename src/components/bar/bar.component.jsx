import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Note from "../note/note.component";

const BarContainer = styled.section`
  display: flex;
  align-items: center;
  border-right: 1px solid grey;
  flex-direction: row;
  height: 50px;
  padding: 20px;
  margin-top: 50px;
`;

const Bar = ({ notes }) => {
  return (
    <BarContainer>
      {notes.map((note) => {
        return <Note note={note} key={uuidv4()} />;
      })}
    </BarContainer>
  );
};

Bar.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Bar;
