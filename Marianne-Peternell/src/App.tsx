import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "../shared-theme/AppTheme";
import MainContent from "../public/MainContent.tsx";
import ColorModeIconDropdown from "../shared-theme/ColorModeIconDropdown.tsx";

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Container
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center", // centers MainContent horizontally
          position: "relative", // needed for absolute positioning inside
        }}
      >
        <MainContent />
        <ColorModeIconDropdown
          sx={{
            position: "absolute",
            top: 30,
            right: -80,
          }}
        />
      </Container>
    </AppTheme>
  );
}
