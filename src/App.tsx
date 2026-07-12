import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainContent />
              {/* <ScrollToTopButton
                aria-label="Zurück nach oben scrollen"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <ArrowUpwardIcon />
              </ScrollToTopButton> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// const ScrollToTopButton = styled(IconButton)(({ theme }) => ({
//   position: "fixed",
//   bottom: 20,
//   right: 15,
//   zIndex: 1000,
//   height: 40,
//   width: 40,
//   outline: "0.1px solid",
//   outlineColor: theme.palette.primary[900],
//   outlineOffset: "2px",
//   borderRadius: theme.shape.borderRadius,
//   backdropFilter: "blur(24px)",
//   backgroundColor: theme.vars
//     ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
//     : alpha(theme.palette.background.default, 0.4),
//   boxShadow: (theme.vars || theme).shadows[1],
//   color: theme.palette.info[900],
//   "&:hover": {
//     backgroundColor: theme.vars
//       ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.6)`
//       : alpha(theme.palette.background.default, 0.6),
//   },
// }));
