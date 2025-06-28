import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "../shared-theme/AppTheme";
import MainContent from "../public/MainContent.tsx";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown.tsx";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: 30,
  right: 5,
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
        <ColorModeIconDropdown
          sx={{
            position: "absolute",
            top: { xs: 20, sm: 35, md: 40 },
            right: { xs: -15, sm: 0, md: 0 },
          }}
        />
      </Container>
      <ScrollToTopButton>
        <ArrowUpwardIcon
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </ScrollToTopButton>
    </AppTheme>
  );
}
