import fs from 'fs';
import getEntityFile from './getEntityFile';
import getEntityContent from './getEntityContent';

export default function saveEntryEntitie(directory: string, entity: string, data: object) {
  const entityFile: string = getEntityFile(entity, directory);
  const entityContent: object = getEntityContent(entity, directory);

  const newEntity = { ...entityContent, ...data };

  const parseNewEntity = JSON.stringify(newEntity);

  fs.writeFileSync(entityFile, parseNewEntity, 'utf-8');
}
