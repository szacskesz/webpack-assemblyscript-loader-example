import { instantiate } from "as-loader/runtime";

import * as assembly from "./assembly/add";

async function loadAndRun() {
  const module = await instantiate(assembly, fetch);
  const { add } = module.exports;

  const div = document.createElement("div");
  div.innerText = "add(1, 6) = " + add(1, 6);
  document.body.appendChild(div);
}

loadAndRun();
