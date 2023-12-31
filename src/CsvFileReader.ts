import fs from "fs";
import { dateStringToDate } from "./utils";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", //return as a string.
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
