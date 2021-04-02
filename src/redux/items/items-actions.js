import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
const addContact = createAction('items/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('items/delete');

export default { addContact, deleteContact };
