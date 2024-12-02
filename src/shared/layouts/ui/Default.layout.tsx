import { FC } from "react";
import { Box, CssBaseline } from "@mui/material";

type DefaultLayoutProps = {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ header, main, footer }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
        }}
        
      >
        <Box
          sx={{
            height: "64px",
            flexShrink: 0,
          }}
          component="header"
        >
          {header}
        </Box>
        <Box
          component="main"
          sx={{
            flex: 1,
            padding: 2,
            bgcolor: "background.default",
          }}
        >
          {main}
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            bgcolor: "grey.800",
            color: "white",
          }}
          component="footer"
        >
          {footer}
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;
