import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Bar from "../bar/bar.component";

const SystemContainer = styled.section`
  display: flex;
`;

const System = ({ bars }) => {
  return (
    <SystemContainer>
      {bars.map((bar) => {
        const { notes } = bar;
        return <Bar notes={notes} key={uuidv4()} />;
      })}
    </SystemContainer>
  );
};

System.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default System;
