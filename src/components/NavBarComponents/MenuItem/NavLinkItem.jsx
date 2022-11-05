import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  display: inline-flex;
  padding: ${p => p.theme.space[1]};
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.dark};
  &.active {
    background-color: ${({ theme }) => theme.colors.blue[500]};
    color: ${({ theme }) => theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.dark};
  }
`;
