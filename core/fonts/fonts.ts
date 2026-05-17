import fs from "fs";
import path from "path";

export function loadFont(file: string) {
  return fs.readFileSync(
    path.join(process.cwd(), "public/fonts", file)
  );
}