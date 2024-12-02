import { SlideRootState, Stages } from "./types";

export const getCurrentSlide = ({
  slides: { nodes, currentIndex },
}: SlideRootState): SlideDTO | undefined => nodes[currentIndex];

export const getIsLoading = ({ slides: { currentStage } }: SlideRootState) =>
  currentStage === Stages.initial || currentStage === Stages.loading;
