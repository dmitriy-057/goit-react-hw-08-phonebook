import { Formik, Field, Form } from 'formik';

import { useLogInMutation } from 'redux/userApi/authApi';
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

const initialValues = {
  email: '',
  password: '',
};

export default function AuthFormLogin() {
  console.log(useLogInMutation());

  const [loginUser] = useLogInMutation();
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      await loginUser({ email, password });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box border="1px" p={6} rounded="md" w={400}>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          {({ errors, touched }) => (
            <Form>
              <VStack spacing={4} align="flex-start">
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
                  Login
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
