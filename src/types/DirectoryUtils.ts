import { FileUtils } from './FileUtils';
import { JSONFileUtils } from './JSONFileUtils';
import { TXTFileUtils } from './TXTFileUtils';

export class DirectoryUtils {
  #name: string;
  #workingDirectory: string;
  #directoryPath: string;

  constructor(name: string, workingDirectory: string) {
    this.#name = name;
    this.#workingDirectory = workingDirectory;
    this.#directoryPath = `${this.#workingDirectory}/${this.#name}`;
    // this.createDirectory();
  }

  createDirectory(): void {
    const fs = require('fs');
    const path = require('path');

    const directory = path.join(this.#workingDirectory, this.#name);

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
    }
  }

  // ! CRUD files

  createJSONFile(nameFile: string): JSONFileUtils {
    const file = new JSONFileUtils(nameFile, 'json', this);
    file.createFile();
    return file;
  }

  createTXTFile(nameFile: string): TXTFileUtils {
    const file = new TXTFileUtils(nameFile, 'txt', this);
    file.createFile();
    return file;
  }

  removeFileByInstance(file: FileUtils): void {
    file.deleteFile();
  }

  removeFileByName(fileName: string): void {
    const finalFile = this.getFiles().find((file: FileUtils) => `${file.name}.${file.extension}` === fileName);
    if (finalFile) {
      finalFile.deleteFile();
    }
  }

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
    fs.readdirSync(this.#directoryPath).forEach((file: string) => {
      const fileName = file.split('.')[0];
      if (file.includes('.json')) {
        files.push(new JSONFileUtils(fileName, 'json', this));
      } else if (file.includes('.txt')) {
        files.push(new TXTFileUtils(fileName, 'txt', this));
      } else {
        // console.error("Extension file not supported");
      }
    });
    return files;
  }

  // ! Getters & Setters

  get name(): string {
    return this.#name;
  }

  get workingDirectory(): string {
    return this.#workingDirectory;
  }

  get directoryPath(): string {
    return this.#directoryPath;
  }
}
