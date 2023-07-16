import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { Dispatch, SetStateAction, useEffect } from "react";

export enum EColorMode {
  LIGHT = "light",
  DARK = "dark",
}

export default function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage<EColorMode>(
    "color-mode",
    EColorMode.LIGHT
  );

  function switchToDarkMode() {
    setColorMode(EColorMode.DARK);
    document.body.classList.add("dark");
  }

  function switchToLightMode() {
    setColorMode(EColorMode.LIGHT);
    document.body.classList.remove("dark");
  }

  return { colorMode, switchToDarkMode, switchToLightMode };
}
