import styled from '@emotion/styled';

import { TButtonProps } from './types';

export const SButton = styled.button<TButtonProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  background-color: aqua;

  padding: 10px 12px;
`;
