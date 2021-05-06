import { createAction, createSlice } from '@reduxjs/toolkit';

const name = 'consents';
export const consentsSlice = createSlice({
  name,
  initialState: {
    data: [],
    meta: {
      totalCount: null,
      totalPages: null,
      currentPage: null,
    },
    error: null,
  },
  reducers: {
    getConsentsSuccess: (state, payload) => {
      state.data = payload.data;
      state.meta = payload.meta;
    },
    postConsentsSuccess: (state, consent) => {
      state.data.push(consent);
    },
    setConsentsError: (state, error) => {
      state.error = error;
    },
  },
});

export const {
  getConsentsSuccess,
  setConsentsError,
  postConsentsSuccess,
} = consentsSlice.actions;
export const getConsents = createAction(`${name}/getConsents`);
export const postConsent = createAction(`${name}/postConsent`);

export default consentsSlice.reducer;
