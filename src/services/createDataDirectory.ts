import path from 'path';
import fs from 'fs';

export default function createDataDirectory(directoryName: string) {
  const dataDirectory = path.join(process.cwd(), directoryName);
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory);
  }
}
