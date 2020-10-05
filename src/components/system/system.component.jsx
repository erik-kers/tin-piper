import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Bar from "../bar/bar.component";

const SystemContainer = styled.section`
  display: flex;
  width: auto;
  flex-direction: row;
`;

const System = (bars) => {
  return (
    <SystemContainer>
      {bars.bars.map((bar) => (
        <Bar notes={bar.notes} key={uuidv4()} />
      ))}
    </SystemContainer>
  );
};

export default System;
