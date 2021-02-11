import React, { ReactElement } from 'react';
import styled from 'styled-components';

export type AmazingBoxProps = {
  madProp: string;
  realProp: string;
};

const Box = styled.div`
  padding: 100px;
  border: 2px solid brown;
`;

export function AmazingBox({
  madProp = 'crazy box',
  realProp,
}: AmazingBoxProps): ReactElement {
  return (
    <Box>
      Imma {madProp} yo! But I also got {realProp}!
    </Box>
  );
}
