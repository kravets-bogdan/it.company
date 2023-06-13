const browserSync = require("browser-sync").create(),
  sass = require("gulp-sass")(require("sass")),
  { src, dest, watch } = require("gulp"),
  pug = require("gulp-pug");

const html = (selectedSrc, dist) => {
  return src(`${selectedSrc}`)
    .pipe(pug({ pretty: false }))
    .pipe(dest(`${dist}`));
};

const css = () => {
  return src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./css"));
};

const watcher = () => {
  // server();
  watch("src/**/*.pug", () => html("./src/*.pug", "./"));
  watch("scss/**/*.scss", css);
};

exports.default = watcher;
