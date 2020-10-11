import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledGlyph = styled.div`
  background: ${(props) => (props.filled ? "#000000" : "#FFFFFF")};
  border-radius: 50%;
  width: 5px;
  height: 5px;
  border: 1px solid black;
  margin-bottom: 5px;
`;

const Glyph = ({ filled }) => {
  return <StyledGlyph filled={filled} />;
};

Glyph.propTypes = {
  filled: PropTypes.bool,
};

Glyph.defaultProps = {
  filled: false,
};

export default Glyph;
