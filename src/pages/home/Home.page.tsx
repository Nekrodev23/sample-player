import { FC } from "react";
import DefaultLayout from "../../shared/layouts/ui/Default.layout";
import { Box, Typography } from "@mui/material";
import { MediaPlayerWidget } from "../../widgets";

export const HomePage: FC = () => {
  return (
    <DefaultLayout
      header={
        <Box
          sx={{ bgcolor: "primary.main", height: "100%", textAlign: "center" }}
        >
          <Typography variant="h3">Header</Typography>
        </Box>
      }
      main={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingX: 8,
          }}
        >
          <MediaPlayerWidget />
        </Box>
      }
      footer={
        <Box
          sx={{
            bgcolor: "primary.secondary",
            height: "100px",
            textAlign: "center",
          }}
        >
          <Typography variant="h3">Footer</Typography>
        </Box>
      }
    />
  );
};
