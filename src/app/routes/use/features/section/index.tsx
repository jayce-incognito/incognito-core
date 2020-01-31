import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { II18n, translateSelector } from 'src/i18n';

interface IProps {}

const Styled = styled.div`
  &.section-container {
    .child-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      :nth-child(2n){
        .content {
          order: 1;
        }
      }
    }
    .content {
      flex: 1 0 auto;
      max-width: 40%;
    }
    h1.title {
      color: #000;
      font-size: 32px;
      line-height: 44px;
      font-family: Colfax-Book;
      margin: 20px 0;
    }
    p.desc {
      font-size: 16px;
      line-height: 25px;
      color: #4a5656;
    }
    .image-container {
      flex: 1 0 auto;
      max-width: 50%;
    }
    .image-container > img {
      width: 100%;
      height: 100%;
      max-height: 400px;
    }
  }
`;

const Section = (props: IProps) => {
  const { use }: II18n = useSelector(translateSelector);
  const { sectionContainer } = use;
  return (
    <Styled className='section-container container'>
      {sectionContainer.map(
        (
          item: {
            title: string;
            desc: string;
            src: string;
          },
          key: string | number
        ) => (
          <div className='child-container' key={key}>
            <div className='content'>
              <h1 className='title'>{item.title}</h1>
              <p className='desc'>{item.desc}</p>
            </div>
            <div className='image-container'>
              <img src={item.src} alt='' />
            </div>
          </div>
        )
      )}
    </Styled>
  );
};

export default React.memo(Section);
