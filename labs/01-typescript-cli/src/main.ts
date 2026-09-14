import { pathToFileURL } from "node:url";

export function environmentMessage(): string {
  return "Lab 01 environment ready";
}

const entryPoint = process.argv[1];

if (entryPoint && import.meta.url === pathToFileURL(entryPoint).href) {
  console.log(environmentMessage());
}
