import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  "@font-face": [
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: " 100 900",
      src: "url(/fonts/Inter.var.woff2) format('woff2')",
    },
  ],
  html: {
    minWidth: "360px",
    scrollBehavior: "smooth",
  },
  body: {
    height: "100vh",
    display: "block",
    margin: "0 auto",
    fontFamily: "$sans",
    fontStyle: "normal",
    fontWeight: 400,
  },
});
