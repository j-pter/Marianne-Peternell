import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "../shared-theme/AppTheme";
import AppBarComponent from "./components/AppBar.tsx";
import MainContent from "./components/MainContent.tsx";
import Footer from "./components/Footer.tsx";

export default function Blog(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppBarComponent />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <MainContent />
      </Container>
      <Footer />
    </AppTheme>
  );
}
