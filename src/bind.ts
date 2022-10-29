import { instantiate } from "as-loader/runtime/bind";

import * as assembly from "./assembly/bind";

async function loadAndRun() {
  const module = await instantiate(assembly, fetch);
  const { hello } = module.exports;

  const div = document.createElement("div");
  div.innerText = "hello('world') = " + hello('world');
  document.body.appendChild(div);
}

loadAndRun();
