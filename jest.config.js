export default {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
    collectCoverageFrom: [
      "src/toString.js",
      "src/ceil.js",
      "src/filter.js",
      "src/eq.js",
      "src/add.js",
      "src/upperFirst.js",
      "src/drop.js",
      "src/capitalize.js",
      "src/get.js",
      "src/isEmpty.js"
    ]
  };
  