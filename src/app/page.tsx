"use client";
import React from "react";
import Image from "next/image";
import bgDark from "@/app/images/bg-desktop-dark.jpg";
import bgLight from "@/app/images/bg-desktop-light.jpg";
import Todos from "@/app/components/Todos";
import useColorMode, { EColorMode } from "@/app/hooks/useColorMode";
import sunIcon from ".//images/icon-sun.svg";
import moonIcon from ".//images/icon-moon.svg";

export default function Home() {
  const { colorMode, switchToDarkMode, switchToLightMode } = useColorMode();

  return (
    <main className="flex justify-center h-screen bg-white dark:bg-very-dark-blue">
      <div className="relative h-72 w-screen">
        <Image
          alt="bg"
          src={colorMode === EColorMode.LIGHT ? bgLight : bgDark}
          className="absolute bg-cocktail-background bg-cover bg-center bg-no-repeat h-full"
        />
      </div>
      <div className="flex absolute w-[480px]">
        <div className="flex justify-between items-center absolute z-10 text-bright-blue font-bold text-5xl tracking-widest mt-28 w-full">
          <div>TODO</div>
          <button
            onClick={() => {
              if (colorMode === EColorMode.LIGHT) {
                switchToDarkMode();
              } else {
                switchToLightMode();
              }
            }}
          >
            <Image
              alt="colorMode"
              src={colorMode === EColorMode.LIGHT ? moonIcon : sunIcon}
              className="w-6 h-6"
            />
          </button>
        </div>
        <Todos />
      </div>
    </main>
  );
}
