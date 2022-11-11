import { Formik, Field, Form } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useCreateUserMutation } from 'redux/userApi/userApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCredentials } from 'redux/authSlice/authSlice';
const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function AuthFormSignup() {
  const dispatch = useDispatch();
  const [createUser, { data, isSuccess }] = useCreateUserMutation();
  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    try {
      await createUser({ name, email, password });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      console.log('useCreateUserMutation', data);
      dispatch(setCredentials({ user: data.user, token: data.token }));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box border="1px" p={6} rounded="md" w={400}>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          {({ errors, touched }) => (
            <Form>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={value => {
                      let error;

                      if (value.length < 5) {
                        error = 'Password must contain at least 6 characters';
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Signup
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
