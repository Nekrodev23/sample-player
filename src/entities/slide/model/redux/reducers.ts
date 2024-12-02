import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, Stages } from "./types";

const INITIAL_STATE: State = {
  currentIndex: 0,
  nodes: [],
  currentStage: Stages.initial,
};

const counterSlice = createSlice({
  name: "slides",
  initialState: INITIAL_STATE,
  reducers: {
    fetchSlides: (state: State) => {
      state.currentStage = Stages.loading;
    },
    slidesLoaded: (state: State, action: PayloadAction<SlideDTO[]>) => {
      state.currentStage = Stages.success;
      state.nodes = action.payload;
    },
    slidesLoadError: (state: State) => {
      state.currentStage = Stages.error;
    },
    nextSlide: (state: State) => {
      const lastSlide = state.currentIndex === state.nodes.length - 1;
      state.currentIndex = lastSlide ? 0 : state.currentIndex + 1;
    },
    slideLoaded: () => {},
  },
});

export const actions = counterSlice.actions;
export const reducer = counterSlice.reducer;
