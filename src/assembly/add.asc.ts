/// <reference path="../../node_modules/assemblyscript/std/types/portable/index.d.ts"/>

export function add(a: i32, b: i32): i32 {
  return a + b;
}

class MyObj {
  value!: string;
}

export function addMyObjs(a: MyObj, b: MyObj): MyObj {
  return {
    value: a.value + b.value,
  };
}
