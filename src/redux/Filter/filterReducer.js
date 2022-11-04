import { createAction, createReducer } from '@reduxjs/toolkit';

export const changeFilter = createAction('filterReducer/changeFilter');
const filterReducer = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});
export default filterReducer;
