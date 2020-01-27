import * as React from 'react';
import styled from 'styled-components';
import { II18n, translateSelector } from 'src/i18n';
import { useSelector } from 'react-redux';

interface IProps {}

const Styled = styled.div`
  &.benefit-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70% !important;
    .benefit {
      display: flex;
      align-items: flex-start;
    }
    .benefit .icon {
      width: 50px;
      height: 50px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .benefit .content {
      padding-left: 20px;
    }
    .benefit .content .label {
      margin-top: 5px;
      margin-bottom: 5px;
      font-family: Colfax-Book;
      color: #111;
    }
    .benefit .content .desc {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const Benefits = (props: IProps) => {
  const { node }: II18n = useSelector(translateSelector);
  const { benefitContainer } = node;
  return (
    <Styled className='benefit-container node-child'>
      {benefitContainer.map(
        (
          item: {
            icon: string;
            content: {
              title: string;
              desc: string;
            };
          },
          key: number | string
        ) => (
          <div className='benefit' key={key}>
            <div className='icon'>
              <img src={item.icon} alt='' />
            </div>
            <div className='content'>
              <p className='label'>{item.content.title}</p>
              <p
                className='desc'
                dangerouslySetInnerHTML={{
                  __html: item.content.desc
                }}
              ></p>
            </div>
          </div>
        )
      )}
    </Styled>
  );
};

export default React.memo(Benefits);
