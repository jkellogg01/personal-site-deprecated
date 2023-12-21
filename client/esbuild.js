esbuild = require("@netlify/esbuild");

console.log("Bundling...");
esbuild
  .build({
    entryPoints: ["src/main.tsx"],
    bundle: true,
    minify: true,
    outfile: "../dist/app.js",
  })
  .then((result) => {
    console.log("Finished bundling!");
    console.log(result);
  })
  .catch((err) => {
    console.error("Bundling failed");
    console.error(err);
  });
