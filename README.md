# svelte-navigator-append-styles-error

Reproduction of the following error:

```
TypeError: append_styles is not a function

  at Object.init (node_modules/svelte/internal/index.js:1791:22)
  at new Router (node_modules/svelte-navigator/dist/svelte-navigator.umd.js:1243:16)
  at create_fragment (src/testHelp/WrapRouter.svelte:335:11)
  at init (node_modules/svelte/internal/index.js:1809:37)
  at new WrapRouter (src/testHelp/WrapRouter.svelte:452:3)
  at render (node_modules/@testing-library/svelte/dist/pure.js:81:21)
  at renderWithRouter (src/testHelp/renderWithRouter.ts:22:9)
  at Object.<anonymous> (src/components/Layout.test.ts:5:19)
  at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:333:13)
  at runJest (node_modules/@jest/core/build/runJest.js:387:19)
  at _run10000 (node_modules/@jest/core/build/cli/index.js:408:7)
  at runCLI (node_modules/@jest/core/build/cli/index.js:261:3)
```

## What?

When running jest and using <a href="https://github.com/mefechoel/svelte-navigator#testing" target="_blank">svelte-navigator's renderWithRouter</a> this error occurs.
