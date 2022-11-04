import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
`;
export const Text = styled.p`
  margin-right: auto;
`;
export const Button = styled.button`
  margin-right: 3px;
  border: 1px solid black;
  padding: 3px 3px;
  border-radius: 10px;
  :hover,
  :focus {
    color: white;
    background-color: red;
  }
`;
