import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactsReducer = createReducer([], {
//   [addContact]: (state, action) => [action.payload, ...state],
//   [deleteContact]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
