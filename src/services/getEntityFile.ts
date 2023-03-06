import path from "path";
import fs from "fs";

export default function getEntityFile(entitie: string, directory: string): string {
  const entitieFile = path.join(process.cwd(), directory, `${entitie}.json`);
  if (!fs.existsSync(entitieFile)) {
    console.log(`The ${entitie} file does not exist at ${entitieFile}`);
  }
  return entitieFile;
}