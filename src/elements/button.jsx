import styled, { css } from 'styled-components';
import { Color } from '../tokens/colors';

// const Color = {
//   TEXT: '#ffffff',
//   BACKGROUND: '#56aaf7',
//   BACKGROUND_HOVER_OR_FOCUS: '#8fc8fd',
//   BACKGROUND_ACTIVE: '#2891f1',
//   BACKGROUND_DISABLED: '#dfdfdf'
// };

const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding: 4px 8px;
    font-size: 14px;
    line-height: 20px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 8px 16px;
    font-size: 16px;
    line-height: 22px;
  `,
};

const Button = styled.button.attrs(({ type, size }) => ({
  type: type || 'button',
  size: size || ButtonSize.MEDIUM,
}))`
  ${({ size }) => ButtonSizeToCSS[size]}

  color: ${Color.WHITE};
  background-color: ${Color.BLUE_20};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${Color.BLUE_10};
  }

  &:active {
    background-color: ${Color.BLUE_30};
  }

  &:disabled {
    background-color: ${Color.GRAY_20};
    cursor: not-allowed;
  }
`;

export default Button;

export { ButtonSize };
