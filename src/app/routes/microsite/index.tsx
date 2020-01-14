import * as React from "react";
import styled from "styled-components";

interface IProps {}

const Styled = styled.div``;

const Microsite = (props: IProps) => {
  return <Styled className="microsite">
      This is page microsite
  </Styled>;
};

export default Microsite;
