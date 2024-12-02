import { FC } from "react";
import { Skeleton, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../../../entities/slide";
import { Slide, actions } from "../../../../entities/slide";
import { SLIDE_SIZE, SLIDE_SIZE_PX } from "../../lib";

export const MediaPlayer: FC = () => {
  const currentSlide = useSelector(selectors.getCurrentSlide);
  const dispatch = useDispatch();
  const onLoadedData = () => {
    dispatch(actions.slideLoaded(undefined));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 400,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f5f5f5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        width={SLIDE_SIZE}
        height={SLIDE_SIZE}
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: SLIDE_SIZE,
            height: SLIDE_SIZE,
          }}
        >
          {currentSlide ? (
            <Slide
              slide={currentSlide}
              height={SLIDE_SIZE_PX}
              width={SLIDE_SIZE_PX}
              onLoadedData={onLoadedData}
            />
          ) : (
            <div>Something went wrong</div>
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 2, width: "90%" }}>
        <Skeleton variant="text" width="80%" height={30} animation="wave" />
        <Skeleton variant="text" width="60%" height={25} animation="wave" />
      </Box>
    </Box>
  );
};
