import { FileUtils } from './FileUtils';
import { JSONFileUtils } from './JSONFileUtils';
import { TXTFileUtils } from './TXTFileUtils';

export class DirectoryUtils {
  #name: string;
  #workingDirectory: string;
  #directoryPath: string;
  #content: FileUtils[];

  // todo: Agregar metodos para actualizar los atributos en funcion de la realidad de los archivos, ubicar los metodos CRUD.
  constructor(name: string, workingDirectory: string) {
    const fs = require('fs');
    const path = require('path');

    this.#name = name;
    this.#workingDirectory = workingDirectory;
    this.#directoryPath = path.join(this.#workingDirectory, this.#name);
    if (fs.existsSync(this.#directoryPath)) {
      this.#content = this.getFiles();
    } else {
      this.#content = [];
    }
  }

  // ! CRUD directory

  createDirectory(): void {
    const fs = require('fs');

    if (!fs.existsSync(this.#directoryPath)) {
      fs.mkdirSync(this.#directoryPath);
    }
  }

  renameDirectory(newName: string): void {
    const path = require('path');
    // renameSync() no resulto, mejor eliminar y volver a crear
    // ! RESOLVER PROBLEMA DE LA DESINCRONIZACION DE LOS ARCHIVOS
    // No se crean los archivos en el nuevo directorio
    const previousFiles: FileUtils[] = this.getFiles();
    const previousName: string = `${this.#directoryPath}`;

    this.deleteDirectory();

    this.#name = newName;
    this.#directoryPath = path.join(this.#workingDirectory, this.#name);

    this.createDirectory();
    //this.setFiles(this.#content);
    this.getFiles().forEach((file: FileUtils) => {
      console.log(file.name);
      file.createFile();
    });
  }

  deleteDirectory(): void {
    const fs = require('fs');
    fs.rm(this.#directoryPath, { recursive: true });
  }

  // ! CRUD files

  createJSONFile(nameFile: string): JSONFileUtils {
    const file = new JSONFileUtils(nameFile, 'json', this);
    file.createFile();
    this.#content.push(file);
    return file;
  }

  createTXTFile(nameFile: string): TXTFileUtils {
    const file = new TXTFileUtils(nameFile, 'txt', this);
    file.createFile();
    this.#content.push(file);
    return file;
  }

  removeFileByInstance(file: FileUtils): void {
    file.deleteFile();
    this.#content = this.#content.filter((fileUtils: FileUtils) => fileUtils !== file);
  }

  removeFileByName(fileName: string): void {
    const finalFile = this.getFiles().find((file: FileUtils) => `${file.name}.${file.extension}` === fileName);
    if (finalFile) {
      finalFile.deleteFile();
      this.#content = this.#content.filter((fileUtils: FileUtils) => fileUtils !== finalFile);
    }
  }

  // ! Debbuging
  // No hay que preocuparse por la desincronizacion si cada vez que se manipulan los archivos se llama al metodo getFiles()
  /* 
  // ! WIP NOW
  sincronizeDirectory(): void {
    const fs = require('fs');
    const path = require('path');

    const files: string[] = fs.readdirSync(this.#directoryPath).map((file: string) => file.split('.')[0]);
    const actualFiles: FileUtils[] = this.getFiles();
    const unsynchronizedFiles: string[] = files.filter((file: string) => !actualFiles.find((fileUtils: FileUtils) => fileUtils.name === file)
    console.log(files);
    console.log(JSON.stringify(actualFiles));
    console.log(JSON.stringify(unsynchronizedFiles));
  }
  */

  // ! Getters files
  getFilesName(): string[] {
    const fs = require('fs');
    const files: string[] = [];
    fs.readdirSync(this.#directoryPath).forEach((file: string) => {
      files.push(file);
    });
    return files;
  }

  getFiles(): FileUtils[] {
    const fs = require('fs');
    const files: FileUtils[] = [];
    if (!fs.existsSync(this.#directoryPath)) return files;
    fs
      .readdirSync(this.#directoryPath)
        .forEach((file: string) => {
          const fileName = file.split('.')[0];
          if (file.includes('.json')) {
            files.push(new JSONFileUtils(fileName, 'json', this));
          } else if (file.includes('.txt')) {
            files.push(new TXTFileUtils(fileName, 'txt', this));
          } else {
            console.error('Extension file not supported', fileName);
          }
        });
    return files;
  }

  setFiles(files: FileUtils[]): void {
    this.#content = files;
  }

  deleteFiles(): void {
    // todo: Remover todos los archivos de la carpeta sin importar la extension
    const fs = require('fs');
    const path = require('path');
    const directory = path.join(this.#workingDirectory, this.#name);
    fs.readdirSync(directory).forEach((file: string) => {
      const fileName = file.split('.')[0];
      if (file.includes('.json')) {
        const jsonFile = new JSONFileUtils(fileName, 'json', this);
        jsonFile.deleteFile();
      } else if (file.includes('.txt')) {
        const txtFile = new TXTFileUtils(fileName, 'txt', this);
        txtFile.deleteFile();
      } else {
        // console.error("Extension file not supported");
      }
    });
    this.#content = [];
  }

  // ! Getters & Setters

  get content(): FileUtils[] {
    return this.#content;
  }

  set content(newContent: FileUtils[]) {
    this.#content = newContent;
  }

  get name(): string {
    return this.#name;
  }

  set name(newName: string) {
    this.#name = newName;
  }

  get workingDirectory(): string {
    return this.#workingDirectory;
  }

  get directoryPath(): string {
    return this.#directoryPath;
  }
}
