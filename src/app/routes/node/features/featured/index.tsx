import * as React from 'react';
import styled from 'styled-components';
import { II18n, translateSelector } from 'src/i18n';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getEnvs } from 'src/core/utils';

interface IProps {}

const Styled = styled.div`
  &.featured-container {
    .title {
      font-size: 24px;
      font-weight: 500;
      color: #111;
      font-family: Colfax-Book;
      text-align: center;
      ::after {
        margin: 20px auto 0;
        width: 40px;
        display: block;
        content: '';
        height: 2px;
        background-color: #25cdd6;
      }
    }
    .slick-slider {
      margin-top: 30px;
    }
    .slick-arrow {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 32px;
      height: 32px;
      ::before {
        display: none;
      }
    }
    .slick-prev {
      background-image: url(${getEnvs().SOURCE_DOMAIN}/images/icons/left-arrow.svg);
    }
    .slick-next {
      background-image: url(${getEnvs().SOURCE_DOMAIN}/images/icons/right-arrow.svg);
    }
    .slick-slide {
      > div {
        position: relative;
        padding-top: calc(100% * 9 / 16);
      }
    }
    .slick-slide .icon {
      padding: 10%;
    }
    .slick-slide .icon > img {
      width: 80%;
      height: 100%;
      margin: auto;
    }
  }
`;

const Featured = (props: IProps) => {
  const { node }: II18n = useSelector(translateSelector);
  const { sliderContents, title } = node.featuredContainer;
  const sliderConfigs = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000
  };
  return (
    <Styled className='featured-container node-child'>
      <p className='title'>{title}</p>
      <Slider {...sliderConfigs}>
        {sliderContents.map((icon: string, key: string | number) => (
          <div className='icon abs-center' key={key}>
            <img src={icon} alt='' />
          </div>
        ))}
      </Slider>
    </Styled>
  );
};

export default React.memo(Featured);
