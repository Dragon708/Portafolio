import React, { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import Image from "next/image";
import LenguajeContext from "../Providers/LenguajeProvider";

export default function SwitchLanguaje() {
  const { toggleLenguaje, text } = useContext(LenguajeContext);
  console.log(text);
  return (
    <Switch
      defaultSelected
      size="lg"
      color="default"
      onValueChange={() => toggleLenguaje()}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Image
            src="/images/united-kingdom.png"
            width={50}
            height={50}
            alt="en"
            className={className}
          />
        ) : (
          <Image
            src="/images/flag.png"
            width={50}
            height={50}
            alt="es"
            className={className}
          />
        )
      }></Switch>
  );
}
