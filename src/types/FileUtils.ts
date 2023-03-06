import { DirectoryUtils } from "./DirectoryUtils";
import { fileTypes } from "./Utils";

export abstract class FileUtils {
  #name: string;
  #extension: fileTypes;
  #filePath: string;
  #workingDirectory: DirectoryUtils;
  

  constructor(name: string, extension: fileTypes, workingDirectory: DirectoryUtils) {
    this.#name = name;
    this.#extension = extension;
    this.#workingDirectory = workingDirectory;
    this.#filePath = `${this.#workingDirectory.directoryPath}/${this.#name}.${this.#extension}`
  }

  createFile(): void {
    const fs = require('fs')

    const file = this.#filePath;

    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, '', 'utf-8')
    }
  }

  deleteFile(): void {
    const fs = require('fs');
    fs.unlink(this.#filePath, (err: any) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`File ${this.#filePath} has been deleted`);
    })
  }

  // ! CRUD Content
  abstract createContent(): void;

  abstract readContent(): void;
  
  abstract updateContent(): void;
  
  abstract deleteContent(): void;

  // ! Getters & Setters

  get name(): string{
    return this.#name;
  }

  get extension(): string{
    return this.#extension;
  }
  
  get filePath(): string{
    return this.#filePath;
  }

  get workingDirectory(): DirectoryUtils{
    return this.#workingDirectory;
  }

}