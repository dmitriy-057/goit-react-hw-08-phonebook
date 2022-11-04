import { Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/Filter/filterSlice';
export default function ContactsInput() {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  return (
    <Input
      mb={4}
      borderColor="blue.200"
      w={[300, 400, 500]}
      onChange={handleChange}
      id="filter"
      name="filter"
      type="text"
      value={filter}
      variant="outline"
      placeholder="Filter"
    />
  );
}
