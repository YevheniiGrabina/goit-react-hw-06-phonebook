import { createSlice, combineReducers } from '@reduxjs/toolkit';

export const items = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      // state.push(payload);//можна мутировать стейт, под капотом код делается иммутабельным
      return [...state, payload];
    },

    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, { payload }) {
      return payload;
    },
  },
});

export const { addContact, deleteContact } = items.actions;
export const { changeFilter } = filter.actions;

export default combineReducers({
  items: items.reducer,
  filter: filter.reducer,
});