import { createStitches } from "@stitches/react";
import {
  violetDark,
  indigoDark,
  grayDark,
  slateDark,
  tomatoDark,
  grassDark,
  sageDark,
} from "@radix-ui/colors";

export const { styled, getCssText, createTheme } = createStitches({
  media: {
    phone: `(width < 720px)`,
    tablet: `(720px <= width < 1024px)`,
    desktop: `(1024px <= width < 1536px)`,
    wide: `(1920 <= width)`,
  },
  theme: {
    fonts: {
      sans: "Inter",
    },
    colors: {
      ...grayDark,
      ...violetDark,
      ...slateDark,
      ...tomatoDark,
      ...indigoDark,
      ...grassDark,
      ...sageDark,
      bg: grayDark.gray1,
    },
    shadows: {
      indigo: `${indigoDark.indigo6} 0 4px 16px`,
      grass: `${grassDark.grass6} 0 4px 16px`,
    },
  },
});
