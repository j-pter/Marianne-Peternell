import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import { surfacesCustomizations } from "./customizations/surfaces.ts";
import { colorSchemes, typography, shadows, shape } from "./themePrimitives.ts";

interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const baseTheme = createTheme(); // Step 1: create base theme
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
          cssVariables: {
            // colorSchemeSelector: "data-mui-color-scheme",
            cssVarPrefix: "template",
          },
          colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          typography,
          shadows,
          shape,
          components: {
            ...surfacesCustomizations,
            MuiListItemIcon: {
              styleOverrides: {
                root: {
                  minWidth: 40,
                },
              },
            },
            MuiSvgIcon: {
              styleOverrides: {
                root: {
                  "&.custom-circle-icon": {
                    height: 12,
                    width: 12,
                  },
                },
              },
            },
            MuiCardMedia: {
              styleOverrides: {
                root: {
                  borderBottom: `1px solid ${baseTheme.palette.divider}`,
                  marginBottom: baseTheme.spacing(1),
                },
              },
            },
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
