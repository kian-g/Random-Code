// Function that minifies code and saves it to a new file called *-min.js without the original .js.
// npm i uglify-js
 function minify(file, callback) {
     var fs = require("fs");
     var uglify = require("uglify-js");
     var code = fs.readFileSync(file, "utf8");
     var minified = uglify.minify(code);
     fs.writeFileSync(file.replace(".js", "-min.js"), minified.code);
     callback();
 }

minify("index.js", function() {
    console.log("Minified index.js");
})
