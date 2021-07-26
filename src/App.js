import React, {useState} from "react";
import {ThemeProvider} from "styled-components";

import Header from "./Components/Header";
import Container from "./Components/Container";
import {GlobalStyle} from "./Components/GlobalStyle";
import {Themes} from "./Components/UI/Themes";
import {Theme} from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher"

function App() {
  const [theme, setTheme] = useState(true);
  
  const toggleTheme = () => {
    setTheme((theme) => (!theme));
  };
  
  return (
    <ThemeProvider theme={theme ? Themes.lightTheme : Themes.darkTheme}>
      <GlobalStyle/>
      <Theme onClick={toggleTheme}>
        <ThemeSwitcher theme={theme}/>
      </Theme>
      <Header/>
      <Container/>
    </ThemeProvider>
  );
}

export default App;
