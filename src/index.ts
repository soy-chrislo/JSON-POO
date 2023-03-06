import path from 'path';

import createDataDirectory from './services/createDataDirectory';
import createEntityFile from './services/createEntitieFile';
import saveEntryEntity from './services/saveEntryEntity';
import getEntityFile from './services/getEntityFile';
import getEntityContent from './services/getEntityContent';
import saveEntryEntitie from './services/saveEntryEntity';
import { DirectoryUtils } from './types/DirectoryUtils';
import { JSONFileUtils } from './types/JSONFileUtils';
import { fileTypes } from './types/Utils';
import { TXTFileUtils } from './types/TXTFileUtils';
import { FileUtils } from './types/FileUtils';

const dataDirectory = 'data';
const entitieFile = 'users';
const entity = {
  name: 'John Doe',
  email: 'fas',
};

/*
Entra la duda de como estructurar las entidades:
- Cada registro de entidad en un archivo json, dentro de una carpeta de la entidad en especifico.
- Todas los registros de una entidad en un mismo fichero json.
! Llego la hora de implementar POO.
*/
// const directory: DirectoryUtils = new DirectoryUtils("test", __dirname);
// const file: JSONFileUtils = directory.createJSONFile("test");
// const file1: TXTFileUtils = directory.createTXTFile('test1');
// file.deleteFile();
// directory.removeFileByName('test1.txt');

// file.addObject({name: "John Doe", age: 20});
// console.log(file.filePath);
// file.removeContent();
// file.deleteFile();
// console.log(directory.getFilesName());

// createDataDirectory(dataDirectory)
// createEntityFile(entitieFile, dataDirectory)
// saveEntryEntity(dataDirectory, entitieFile, entity)
// console.log(getEntityFile(entitieFile, dataDirectory))
// console.log(getEntityContent(entitieFile, dataDirectory));
// saveEntryEntitie(dataDirectory, entitieFile, {age: 20, address: {street: 'Rua 1', number: 10}})
// console.log(getEntityContent(entitieFile, dataDirectory));

export { DirectoryUtils, JSONFileUtils, TXTFileUtils };
