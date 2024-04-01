import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      className=""
      onValueChange={(isSelected) => {
        console.log(isSelected);
        setTheme(isSelected ? "dark" : "light");
      }}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }></Switch>
  );
}
