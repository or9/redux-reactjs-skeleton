var gulp = require("gulp");
var spawn = require("child_process").spawn;

var srcFiles = ["src/**/*", "css/**/*", "api/**/*", "test/**/*"];

gulp.task("copyHtml", copyHtmlTask);
gulp.task("copy", copyTask);
gulp.task("build", ["copy", "copyHtml"], buildTask);
gulp.task("watch", watchTestTask);
gulp.task("watchBuild", watchBuildTask);
gulp.task("default", ["build"]);

function copyHtmlTask () {
	return gulp.src("src/index.html")
		.pipe(gulp.dest("dist/"));
}

function copyTask () {
	return gulp.src(["css/**", "api/**/*.json"], { base: "./" })
		.pipe(gulp.dest("dist/"));
}

function watchBuildTask () {
	gulp.watch(srcFiles, buildTask);
}

function watchTestTask () {
	gulp.watch(srcFiles, testTask);
}

function testTask () {
	var process = spawn("npm", ["test"], { stdio: "inherit" });
}

function buildTask () {
	var process = spawn("gulp", ["copyHtml"], { stdio: "inherit" });
	var process = spawn("gulp", ["copy"], { stdio: "inherit" });
}

