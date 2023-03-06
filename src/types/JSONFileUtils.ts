import { FileUtils } from "./FileUtils";
import { DirectoryUtils } from "./DirectoryUtils";
import { fileTypes } from "./Utils";

export class JSONFileUtils extends FileUtils {
  constructor(name: string, extension: fileTypes = "json", workingDirectory: DirectoryUtils){
    super(name, extension, workingDirectory);
  }
  
  createContent(): void {
    throw new Error("Method not implemented.");
  }
  readContent(): void {
    throw new Error("Method not implemented.");
  }
  updateContent(): void {
    throw new Error("Method not implemented.");
  }
  deleteContent(): void {
    throw new Error("Method not implemented.");
  }

  
}