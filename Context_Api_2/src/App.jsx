import "./App.css";
import Card from "./Components/Card";
import ThemeButton from "./Components/ThemeButton";
import { ThemeProvider } from "./Contexts/Theme";
import React, { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = React.useState("light");
  
  const LightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  //change theme mode
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, LightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <ThemeButton />
          <div className="w-full max-w-sm mx-auto">
            <Card />
            </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
