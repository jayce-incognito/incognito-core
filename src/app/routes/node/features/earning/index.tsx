import * as React from "react";
import styled from "styled-components";

interface IProps {}

const Styled = styled.div`
    &.earning {

    }
`;

const Earning = (props: IProps) => {
  return <Styled className="earning-container node-child">

  </Styled>;
};

export default React.memo(Earning);
