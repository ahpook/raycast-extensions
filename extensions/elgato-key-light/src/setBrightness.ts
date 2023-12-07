import { closeMainWindow } from "@raycast/api";
import { KeyLight } from "./elgato";
import { run } from "./utils";

const command = async () => {
  await closeMainWindow({ clearRootSearch: true });
  
  const args = { brightness: 10 };
  const brightnessValue = args.brightness;
  
  if (brightnessValue <= 0 || brightnessValue >= 100) {
    return "Brightness must be between 0 and 100";
  }

  const keyLight = await KeyLight.discover(); 
  const result = await keyLight.setBrightness(brightnessValue);

  return result
    ? `Set brightness to ${brightnessValue}%`
    : "Error setting brightness";
};

export default run(command);
