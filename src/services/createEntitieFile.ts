import path from 'path';
import fs from 'fs';
import createDataDirectory from './createDataDirectory';

export default function createEntitieFile(entitie: string, directory: string) {
  createDataDirectory(directory);
  const entitieFile = path.join(process.cwd(), directory, `${entitie}.json`);
  if (!fs.existsSync(entitieFile)) {
    fs.writeFileSync(entitieFile, '[]');
    console.log(`Created ${entitie} file at ${entitieFile}`);
  }
}