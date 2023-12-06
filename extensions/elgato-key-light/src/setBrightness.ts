import { closeMainWindow  } from "@raycast/api";
import { KeyLight } from "./elgato";
import { run } from "./utils";

export default async (args: { brightness: string}) => {
  await closeMainWindow({ clearRootSearch: true });
  
  const brightnessValue = parseInt(args.brightness, 10);
  
  if (brightnessValue <= 0 || brightnessValue > 100) {
    return "Brightness must be between 0 and 100";
  }

  const keyLight = await KeyLight.discover(); 
  const result = await keyLight.setBrightness(brightnessValue);

  return result
    ? `Set brightness to ${brightnessValue.toLocaleString("en", { maximumFractionDigits: 0 })}%`
    : "Error setting brightness";
};

