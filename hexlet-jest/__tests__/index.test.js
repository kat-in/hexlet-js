import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";
import reverse from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), "utf-8");

const text = readFile("text.html");
const result = readFile("result.html");

test("reverse", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
  expect(reverse(text.trim())).toEqual(result.trim());
});
