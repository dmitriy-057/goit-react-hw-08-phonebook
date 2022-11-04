// import { List } from './ContactList.styled';
import { List } from '@chakra-ui/react';
import ContactsListItem from './ContactsListItem/ContactsListItem';
// import Loader from 'components/Loader';
import { useGetContactsQuery } from 'redux/contactsApi/contactsApi';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const { data: contacts = [] } = useGetContactsQuery();
  // console.log(result);

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
