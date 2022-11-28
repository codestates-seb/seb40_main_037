import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  // loggedInUser: null,
  reviews: [],
};

const reviewStore = createSlice({
  name: 'isReview',
  initialState,
  reducers: {
    upload(state) {
      const states = state;
      states.isReview = true;
    },
  },
});

const store = configureStore({
  reducer: reviewStore.reducer,
});

export const uploadActions = reviewStore.actions;

export default store;
