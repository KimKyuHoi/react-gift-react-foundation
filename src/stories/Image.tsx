import styled, { css } from 'styled-components';
import AvifImg from './assets/avif-test-image.avif';

export interface IImageProps {
  radius?: 'circle' | number;
  ratio?: 'square' | 'auto' | number;
}

const ImageStyles = styled.img<IImageProps>`
  display: block;
  max-width: 100%;
  height: auto;

  ${({ radius }) =>
    radius === 'circle' &&
    `
      border-radius: 50%;
  `}

  ${({ radius }) =>
    typeof radius === 'number' &&
    css`
      border-radius: ${radius}px;
    `}

  ${({ ratio }) =>
    ratio === 'square' &&
    `
      width: 100%;
      height: 100%;
      object-fit: cover;
  `}

  ${({ ratio }) =>
    ratio === 'auto' &&
    `
      width: auto;
      height: auto;
  `}

  ${({ ratio }) =>
    typeof ratio === 'number' &&
    css`
      padding-top: ${ratio * 100}%;
    `}
`;

export const Image = ({ radius = 'circle', ratio = 'square' }: IImageProps) => {
  return <ImageStyles src={AvifImg} radius={radius} ratio={ratio} alt="" />;
};

export default Image;
