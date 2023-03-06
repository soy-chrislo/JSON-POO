import { DirectoryUtils, JSONFileUtils, TXTFileUtils } from "../index";

test("create directory", () => {
  const directory = new DirectoryUtils("my-dir", __dirname);
  directory.createDirectory();
  expect(directory).toBeInstanceOf(DirectoryUtils);
});

test("create json file", () => {
  const directory = new DirectoryUtils("my-dir", __dirname);
  const file = directory.createJSONFile("my-file");
  expect(file).toBeInstanceOf(JSONFileUtils);
});

test("create txt file", () => {
  const directory = new DirectoryUtils("my-dir", __dirname);
  const file = directory.createTXTFile("my-file");
  expect(file).toBeInstanceOf(TXTFileUtils);
});