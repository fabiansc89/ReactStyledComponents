import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

const themes = {
  1: {
    colors: {
      bg: "#ceceff",
      color: "#335",
      shadow: "rgba(5, 5, 100, 0.5)"
    }
  },
  2: {
    colors: {
      bg: "#ccffcc",
      color: "#010",
      shadow: "rgba(50, 100, 50, 0.5)"
    }
  },
  3: {
    colors: {
      bg: "#EACCFC",
      color: "#335",
      shadow: "rgba(5, 5, 100, 0.5)"
    }
  }
};

function Theme(props) {
  return (
    <ThemeProvider theme={themes[props.theme]}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
}

Theme.defaultProps = {
  theme: "1"
};

export { Theme };
