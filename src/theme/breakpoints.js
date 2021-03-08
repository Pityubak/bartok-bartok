import { createMuiTheme } from "@material-ui/core"

export const breakpoints = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "ml", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      ml: 1460,
      xl: 1920,
    },
  },
})
