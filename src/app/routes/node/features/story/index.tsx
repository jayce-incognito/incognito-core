import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { translateSelector, II18n } from 'src/i18n';
import { breakpoints } from 'src/core/utils/styled';

interface IProps {}

const Styled = styled.div`
  &.story-container {
    h1.heading {
      font-size: 32px;
      line-height: 41px;
      font-family: Colfax-Book;
      text-align: left;
      margin-top: 100px;
      margin-bottom: 50px;
      color: #111;
    }
    .group {
    }
    .group h1.title {
      margin-bottom: 30px;
      font-family: Colfax-Book;
      font-size: 24px;
      line-height: 33px;
      color: #111;
    }
    .group h3.subtitle {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.1px;
      margin-bottom: 30px;
      color: #111;
      font-family: Colfax-Book;
    }
    .group .description {
      font-size: 16px;
      line-height: 25px;
      letter-spacing: 0.1px;
      margin-bottom: 30px;
      color: #4a5656;
    }
    .group .image {
      margin-bottom: 30px;
    }
    .group .image > img {
      width: 100%;
      height: 100%;
    }
    .group .image .description {
      font-size: 14px;
      font-style: italic;
      color: #9b9e9e;
      margin-top: 5px;
      text-align: center;
      line-height: 25px;
      letter-spacing: 0.1px;
      margin-bottom: 30px;
    }
  }
`;

const Story = (props: IProps) => {
  const { node }: II18n = useSelector(translateSelector);
  const { storyContainer } = node;
  return (
    <Styled
      className='story-container node-child'
      dangerouslySetInnerHTML={{
        __html: storyContainer
      }}
    ></Styled>
  );
};

export default React.memo(Story);
