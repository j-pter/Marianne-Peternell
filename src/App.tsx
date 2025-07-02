import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "../shared-theme/AppTheme";
import MainContent from "./components/MainContent.tsx";
// import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown.tsx";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: 20,
  right: 15,
  zIndex: 1000,
  height: 40,
  width: 40,
  outline: "0.1px solid",
  outlineColor: theme.palette.primary[900],
  outlineOffset: "2px",
  borderRadius: theme.shape.borderRadius,
  backdropFilter: "blur(24px)",
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  color: theme.palette.info[900],
  "&:hover": {
    backgroundColor: theme.vars
      ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.6)`
      : alpha(theme.palette.background.default, 0.6),
  },
}));

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppTheme {...props}>
              <CssBaseline enableColorScheme />
              <Container
                component="main"
                sx={{
                  width: "100%",
                  maxWidth: "800px",
                  display: "flex",
                  justifyContent: "center", // centers MainContent horizontally
                  position: "relative", // needed for absolute positioning inside
                }}
              >
                <MainContent />
              </Container>
              <ScrollToTopButton
                aria-label="Zurück nach oben scrollen"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <ArrowUpwardIcon />
              </ScrollToTopButton>
            </AppTheme>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
