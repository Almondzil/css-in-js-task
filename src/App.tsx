import React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/buttons";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  );
};

export default App;
