import styled from '@emotion/styled';
import { layout, flexbox, space } from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  layout,
  flexbox
);

export default Box;
