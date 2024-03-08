import FormHandle from "./components/Form";
import { MainHeading } from "./components/MainHeading";
import { Navbar } from "./components/Navbar";
// import Test from "./components/Test";
import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState("dark");
  const [current, setCurrent] = useState("Switch Theme");

  function themeHandler() {
    setIsDark(isDark == "light" ? "dark" : "light");
    setCurrent(isDark == "dark" ? "light" : "dark");
  }

  // themeHandler();

  return (
    <div
      className={`${isDark} h-[2000px] dark:bg-black dark:bg-grid-white/[0.2]`}
    >
      <Navbar name={current} modeHandler={themeHandler} />
      <MainHeading />
      <FormHandle />
      {/* <Test /> */}
    </div>
  );
}
