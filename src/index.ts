import * as assemblyModule from './assembly/add.asc';
import { instantiateModule } from 'as-loader/dist/runtime';

instantiateModule(assemblyModule).then(({ add, addMyObjs }) => {
  document.getElementById('result').innerHTML = `
  <pre>
    add(1, 7) = ${add(1, 7)}
    addMyObjs(...) = ${JSON.stringify(
      addMyObjs({ value: '1' } as any, { value: '7' } as any)
    )}
  </pre>
  `;
});
