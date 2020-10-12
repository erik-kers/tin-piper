import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tablature from "../tablature/tablature.component";
import SongInformation from "../song-information/song-information.component";

const SongContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 60vw;
  margin: 50px;
`;

const Song = ({ title, author, description, keySignature, time, systems }) => {
  return (
    <SongContainer>
      <SongInformation
        title={title}
        author={author}
        keySignature={keySignature}
        time={time}
        description={description}
      />
      <Tablature systems={systems} />
    </SongContainer>
  );
};

Song.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keySignature: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  systems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Song;
