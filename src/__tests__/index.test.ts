import { DirectoryUtils, FileUtils, JSONFileUtils, TXTFileUtils } from '../index';

/*
* Hacer debugging de cada una de las propiedades, getters y setters de los directorios y archivos.
* Si es necesario crear atributos solo informativos para acelerar el proceso, se hace... como:
* - [Fichero-Directorio] crud BASICO.
* - [Fichero-Directorio] Si esta creado o solo existe su instancia.
* - [Fichero-Directorio] Peso del archivo, y peso general de un directorio.
* - [Fichero] La extension del archivo.
* - [Fichero-Directory] fileDirectory: Directorio del archivo. 
    `/home/chris/root/directory` - para fichero.
    `/home/chris/root/directory` - para directorio.
* - [Fichero-Directorio] filePath: La ruta completa del archivo, que incluye el directorio Y EL archivo, tambien contempla directorio.
    `/home/chris/root/directory/file.json` - para fichero
    `/home/chris/root/directory/otherDirectory/` - para directory (se distingue por el slash al final, ya que un archivo puede no tener extension)
* - [Directorio] Cantidad de archivos de un directorio.
* - [Directorio] Arreglo de archivos que hay en un directorio.
*/

/*
! Caracteristicas avanzadas
- Acciones con los ficheros desde la instancia del directorio, acciones CRUD individuales y grupales (entre uno a muchos archivos de DirectoryUtils).
- getFiles()
- renameDirectory()
- deleteFiles()
*/

test('create directory', () => {
  const directory = new DirectoryUtils('my-dir', __dirname);
  directory.createDirectory();
  expect(directory).toBeInstanceOf(DirectoryUtils);
});

test('create json file', () => {
  const directory = new DirectoryUtils('my-dir', __dirname);
  const file = directory.createJSONFile('my-file');
  expect(file).toBeInstanceOf(JSONFileUtils);
});

test('create txt file', () => {
  const directory = new DirectoryUtils('my-dir', __dirname);
  const file = directory.createTXTFile('my-file');
  expect(file).toBeInstanceOf(TXTFileUtils);
});

// todo: 1. No se crean los archivos, arreglar.  2. Tomar el contenido de los archivos, hasta el momento solo se crea el archivo.

test('delete directory', () => {});

test('rename directory', () => {
  const directory = new DirectoryUtils('my-dir-1', __dirname);
  directory.createDirectory();
  directory.createJSONFile('my-file');
  directory.createTXTFile('my-file');
  directory.renameDirectory('my-dir-1-new');
  expect(directory.name).toBe('my-dir-1-new');
});

test('sincronize directory', () => {
  const directory = new DirectoryUtils('sincronization-dir', __dirname);
  directory.createDirectory();
  directory.createJSONFile('my-file-sincronization');
  const files: FileUtils[] = directory.getFiles();
  files.forEach((file: FileUtils) => {
    console.log(file.name);
  });
  expect(Array.isArray(files)).toBe(true);
  expect(files).toHaveLength(2);
  expect(files[0]).toBeInstanceOf(FileUtils);
  expect(files[1]).toBeInstanceOf(FileUtils);
});
