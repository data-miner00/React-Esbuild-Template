var esbuild = require("esbuild");
var inlineImage = require("esbuild-plugin-inline-image");
var dotenv = require("dotenv");
var chalk = require("chalk");

dotenv.config();

var variables = {};

Object.keys(process.env)
  .filter((k) => k.startsWith("REACT_APP_"))
  .forEach((k) => (variables[k] = process.env[k]));

var define = {
  process: JSON.stringify({
    env: variables,
  }),
};

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    bundle: true,
    minify: true,
    format: "cjs",
    sourcemap: false,
    outfile: "public/dist/bundle.js",
    plugins: [inlineImage()],
    publicPath: "/dist",
    loader: {
      ".png": "file",
      ".svg": "file",
      ".jpg": "file",
    },
    define,
    jsx: "automatic",
  })
  .then(() => {
    var now = new Date();
    console.log(
      "%s: %s %s",
      chalk.gray(now.toTimeString()),
      chalk.greenBright("SUCCESS"),
      "Build completed successfully"
    );
  })
  .catch((error) => {
    var now = new Date();

    console.log(
      "%s: %s %s",
      chalk.gray(now.toTimeString()),
      chalk.redBright("FAILURE"),
      error.message
    );
  });
