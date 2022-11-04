import { List } from '@chakra-ui/react';
import { ContactsListItem } from 'components/allComponents';
import { useGetContactsQuery } from 'redux/contactsApi/contactsApi';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const { data: contacts = [] } = useGetContactsQuery();

  const filter = useSelector(({ filter }) => filter);
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        phone.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List display="flex" flexDirection="column" rowGap={3}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactsListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
}
