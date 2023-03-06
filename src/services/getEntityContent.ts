import fs from 'fs';
import path from 'path';
import getEntityFile from './getEntityFile';

export default function getEntityContent(entitie: string, directory: string): object {
  const entitieFile = getEntityFile(entitie, directory);
  const entitieContent = fs.readFileSync(entitieFile, 'utf-8');
  const parseObject = JSON.parse(entitieContent);
  return parseObject;
}
