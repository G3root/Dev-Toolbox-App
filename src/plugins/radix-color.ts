import plugin from "windicss/plugin";
import {
  slate,
  slateDark,
  blackA,
  whiteA,
  violet,
  violetDark,
} from "@radix-ui/colors";

export const lightColors = {
  ...slate,
  ...violet,
  ...blackA,
  ...whiteA,
};
const darkColors = {
  ...slateDark,
  ...violetDark,
};

const lightColorsValues: Record<string, string> = {};
const darkColorsValues: Record<string, string> = {};

for (let [key, value] of Object.entries(lightColors)) {
  lightColorsValues[`--${key}`] = value;
}

for (let [key, value] of Object.entries(darkColors)) {
  darkColorsValues[`--${key}`] = value;
}

export const radixColorPlugin = plugin(({ addBase, addUtilities }) => {
  addBase({
    [":root"]: {
      ...lightColorsValues,
      "--hiContrast": "var(--slate12) ;",
      "--loContrast": "white;",
    },
    [".dark"]: {
      ...darkColorsValues,
      "--hiContrast": "var(--slate12) ;",
      "--loContrast": "var(--slate1) ;",
    },
    ["*"]: {
      color: "var(--hi-contrast)",
      "background-color": "var(--lo-contrast)",
    },
  });
});
