export enum Stages {
  initial = "initial",
  loading = "loading",
  success = "success",
  error = "error",
}

export type State = {
  currentIndex: number;
  nodes: SlideDTO[];
  currentStage: Stages;
};

export type SlideRootState = {
  slides: State;
};
