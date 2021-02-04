import React, { ReactElement } from 'react';
import styled from 'styled-components';

export type AmazingCircleProps = {
  size?: 'sm' | 'md' | 'lg';
};

const sizeToScale = (size: AmazingCircleProps['size']) => {
  switch (size) {
    case 'sm':
      return 0.5;
    case 'md':
      return 2;
    case 'lg':
      return 10;
    default:
      return 1;
  }
};

const Circle = styled.div<AmazingCircleProps>`
  border-radius: 50%;
  background-color: orange;
  width: 100px;
  height: 100px;
  transform: ${p => `scale(${sizeToScale(p.size)})`};
`;

export function AmazingCircle({ size }: AmazingCircleProps): ReactElement {
  return <Circle size={size} />;
}
