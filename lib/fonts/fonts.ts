import fs from "fs";
import path from "path";

export function loadFont() {
  return fs.readFileSync(
    path.join(process.cwd(), "public/fonts/Inter.ttf")
  );
}