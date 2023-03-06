# JSON  POO

 ## 📦  Install
 ```
 npm install --save-dev json-poo
 ```

## 🪄  Usage
```ts
import { DirectoryUtils, JSONFileUtils, TXTFileUtils, FileUtils } from 'json-poo';

const recordsDir: DirectoryUtils = new DirectoryUtils("records", __dirname);
const usersFile: JSONFileUtils = registerDir.createJSONFile("users");
const registerCounter: TXTFileUtils = registerDir.createTXTFIle("register-counts");

recordsDir.createDirectory();
usersFile.createFile();
registerCounter.createFile();

const recordsFiles: FileUtils[] = recordsDir.getFiles();
recordsFiles.forEach((fileDir: FileUtils) => console.log(fileDir.name, fileDir.filePath));

registerCounter.deleteFile();
recordsDir.removeFileByInstance(usersFile);
```

## 📝 To-do
- CRUD operations for directory files.
- CRUD operations for content files.
- Solve desynchronization error (when you delete a "physical" file, but this is still an instance)
- Error handlers.

