import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import System from "../system/system.component";

const SongContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Song = ({ title, author, description, keySignature, time, systems }) => {
  return (
    <SongContainer>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{description}</p>
      <span>
        {keySignature} - {time}
      </span>
      {systems.map((system) => {
        const { bars } = system;
        return <System bars={bars} key={uuidv4} />;
      })}
    </SongContainer>
  );
};

Song.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keySignature: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  systems: PropTypes.array.isRequired,
};

export default Song;
