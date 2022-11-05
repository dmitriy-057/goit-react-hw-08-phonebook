import { Text } from '@chakra-ui/react';
import { NavItem } from './NavLinkItem';

export default function MenuItem({ children, isLast, to = '/' }) {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <NavItem to={to}>{children}</NavItem>
    </Text>
  );
}
