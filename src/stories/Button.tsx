import styled from 'styled-components';

export interface ButtonProps {
  size?: 'large' | 'small' | 'responsive';

  theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';

  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonStyles = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({ theme }) =>
    theme === 'kakao' &&
    `
    background-color: #ffeb00;
    color: #333;
  `}
  ${({ theme }) =>
    theme === 'black' &&
    `
    background-color: #333;
    color: #fff;
  `}
  ${({ theme }) =>
    theme === 'outline' &&
    `
      border: 1px solid #333;
      background-color: transparent;
      color: #1ea7fd;
  `}
  ${({ theme }) =>
    theme === 'lightGray' &&
    `
      background-color: lightgrey;
      color: #333;
  `}
  ${({ theme }) =>
    theme === 'darkGray' &&
    `
      background-color: #a9a9a9;
      color: #fff;
  `}

  ${({ size }) =>
    size === 'small' &&
    `
      font-size: 12px;
      padding: 10px 16px;
  `}

  ${({ size }) =>
    size === 'large' &&
    `
      font-size: 16px;
      padding: 12px 24px;
  `}

  @media (max-width: 768px) {
    ${({ size }) =>
      size === 'responsive' &&
      `
      font-size: 14px;
      padding: 8px 16px;
    `}
  }
`;

export const Button = ({
  size = 'small',
  theme = 'kakao',
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyles type="button" theme={theme} size={size} {...props}>
      {children}
    </ButtonStyles>
  );
};
