import { FC } from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../../entities/slide";
import { MediaPlayerSkeleton } from "./MediaPlayerSkeleton/MediaPlayerSkeleton.component";
import { MediaPlayer } from "./MediaPlayer";

export const MediaPlayerWidget: FC = () => {
  const slidesLoading = useSelector(selectors.getIsLoading);

  if (slidesLoading) return <MediaPlayerSkeleton />;

  return <MediaPlayer />;
};
