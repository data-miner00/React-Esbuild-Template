require("esbuild")
  .build({
    entryPoints: ["src/App.tsx"],
    bundle: true,
    minify: false,
    format: "cjs",
    sourcemap: false,
    outfile: "public/dist/bundle.js",
    watch: {
      onRebuild(error, result) {
        var now = new Date();
        if (error) {
          console.log(
            "🙈\x1b[2m %s: \x1b[0m\x1b[37m\x1b[41m%s\x1b[0m %s",
            now.toTimeString(),
            "FAILURE",
            error.message
          );
        } else {
          console.log(
            "🐻‍❄️\x1b[2m %s: \x1b[0m\x1b[30m\x1b[42m%s\x1b[0m %s",
            now.toTimeString(),
            "COMPLETE",
            "Build successful"
          );
        }
      },
    },
  })
  .then(() => console.log("Initialize successful. Watching for changes..."))
  .catch(() => process.exit(1));
