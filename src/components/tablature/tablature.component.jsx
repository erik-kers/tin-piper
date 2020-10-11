import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import System from "../system/system.component";

const TablatureContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Tablature = ({ systems }) => {
  return (
    <TablatureContainer>
      {systems.map((system) => {
        const { bars } = system;
        return <System bars={bars} key={uuidv4()} />;
      })}
    </TablatureContainer>
  );
};

Tablature.propTypes = {
  systems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tablature;
