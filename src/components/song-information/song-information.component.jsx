import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SongInfoContainer = styled.section`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Author = styled.h2`
  color: grey;
`;

const KeyAndTime = styled.span`
  display: block;
  margin: 20px 0px;
  font-size: 14px;
`;

const Description = styled.section`
  font-size: 14px;
`;

const SongInformation = ({
  title,
  author,
  keySignature,
  time,
  description,
}) => {
  return (
    <SongInfoContainer>
      <Title>{title}</Title> <Author>{author}</Author>
      <KeyAndTime>
        Key: {keySignature} Time: {time}
      </KeyAndTime>
      <Description>{description}</Description>
    </SongInfoContainer>
  );
};

SongInformation.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  keySignature: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SongInformation;
