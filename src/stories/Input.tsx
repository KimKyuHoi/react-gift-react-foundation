import styled, { css } from 'styled-components';

export interface IInputProps {
  disabled?: boolean;
  size?: 'large' | 'small' | 'responsive';
  invalid?: boolean;
}

const inputSizeStyles = {
  small: css`
    font-size: 14px;
    padding: 8px 12px;
  `,
  large: css`
    font-size: 18px;
    padding: 12px 20px;
  `,
  responsive: css`
    font-size: 16px;
    padding: 10px 16px;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px 12px;
    }
  `,
};

const inputInvalidStyles = css`
  border: 1px solid red;
`;

const InputStyles = styled.input<IInputProps>`
  font-family: 'Arial', sans-serif;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease;

  ${({ size = 'small' }) => inputSizeStyles[size]}
  ${({ invalid }) => invalid && inputInvalidStyles}


  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f0f0f0;
      color: #999;
      cursor: not-allowed;
    `}
`;

export const Input = ({
  disabled = false,
  size = 'large',
  invalid = false,
  ...props
}: IInputProps) => {
  return (
    <InputStyles disabled={disabled} size={size} invalid={invalid} {...props} />
  );
};
