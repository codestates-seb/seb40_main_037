import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  postedReview: null,
  reviews: [],
};

const reviewStore = createSlice({
  name: 'isReview',
  initialState,
  reducers: {
    posting(state) {
      const states = state;
      states.isReview = true;
    },
  },
});

const store = configureStore({
  reducer: reviewStore.reducer,
});

export const postingActions = reviewStore.actions;

export default store;
