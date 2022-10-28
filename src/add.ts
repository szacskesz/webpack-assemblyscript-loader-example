import * as fs from 'fs';
import { instantiate } from "as-loader/runtime";

import * as assembly from "./assembly/add";

async function loadAndRun() {
  const module = await instantiate(
    assembly,
    fs.promises.readFile
  );

  console.log(module.exports.add(1, 6));
}

loadAndRun();
