import { FC } from "react";
import { Skeleton, CircularProgress, Box } from "@mui/material";

export const MediaPlayerSkeleton: FC = () => {
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
        width={280}
        height={280}
        sx={{
          position: "relative",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={280}
          height={280}
          animation="wave"
          sx={{ borderRadius: 1 }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress size={50} thickness={5} />
        </Box>
      </Box>

      <Box sx={{ mt: 2, width: "90%" }}>
        <Skeleton variant="text" width="80%" height={30} animation="wave" />
        <Skeleton variant="text" width="60%" height={25} animation="wave" />
      </Box>
    </Box>
  );
};
