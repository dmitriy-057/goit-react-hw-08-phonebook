// import Loader from 'components/Loader';
// import { Text, Button } from './ContactsListItem.styled';
import { ListItem, Text, Button } from '@chakra-ui/react';
import { Loader } from 'components/allComponents';
import { useRemoveContactsMutation } from 'redux/contactsApi/contactsApi';

export default function ContactsListItem({ name, phone, id }) {
  const [removeContact, { isLoading }] = useRemoveContactsMutation();
  return (
    <ListItem alignItems="center" w={[300, 400, 500]} display="flex">
      <Text mr="auto">{name + ' : ' + phone} </Text>
      {isLoading && <Loader height={17} width={17} />}
      <Button
        type="button"
        onClick={() => removeContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ListItem>
  );
}
