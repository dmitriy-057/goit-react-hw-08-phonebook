import { Formik, Field, Form } from 'formik';

import Loader from 'components/Loader';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from 'redux/contactsApi/contactsApi';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  phone: '',
};

export default function FormAddContact() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();
  console.log(isLoading);

  const onSubmit = async ({ name, phone }, { resetForm }) => {
    try {
      if (isDuplicate(name, phone)) {
        resetForm();
        return toast(`Contact ${name + ' :' + phone} already exists`);
      }
      await addContact({ name, phone, id: nanoid() });
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };
  const isDuplicate = (name, phone) => {
    return contacts.find(
      contact => contact.name === name && contact.phone === phone
    );
  };

  return (
    <Flex align="center" justify="center" h="50vh">
      <Box border="1px" p={6} rounded="md" w={364}>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          <Form>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="email">Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  variant="outline"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email">Number</FormLabel>
                <Field
                  as={Input}
                  id="phone"
                  name="phone"
                  type="tel"
                  variant="outline"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </FormControl>
              <Box display="flex" alignItems="center">
                <Button type="submit">Add to Contact</Button>
                {isLoading && <Loader height={20} width={20} />}
              </Box>
            </VStack>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
}
