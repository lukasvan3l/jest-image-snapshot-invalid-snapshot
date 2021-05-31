const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  runInProcess: true,
  dumpDiffToConsole: true,
  dumpInlineDiffToConsole: true,
});
expect.extend({ toMatchImageSnapshot });
