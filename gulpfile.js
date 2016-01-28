var gulp = require("gulp");
var exec = require("child_process").exec;

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
	exec("npm test", consoleOut);
}

function buildTask () {
	exec("npm start", consoleOut);
}

function consoleOut (err, stdout, stderr) {
	console.log(stdout);
}
