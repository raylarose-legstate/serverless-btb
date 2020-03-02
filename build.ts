const recursive = require("recursive-readdir");
const yaml = require("js-yaml");
const fs = require("fs");
const merge = require("merge-deep");

const BUILD_FOLDER = "./src/compiled-config";

const highOrderSegments = [
  "config"
];

fs.mkdirSync(BUILD_FOLDER);

Promise.all(
  highOrderSegments.map(s => recursive(s).then(results => {
    return {
      segment: s,
      results: results.filter(r => !r.match(/\.gitkeep/))
    };
  }))
).then(segments => {

  segments.forEach(({ segment, results }) => {
    let segmentData: any = {};

    results.forEach(result => {
      const [, ...pathSegments] = result.split("/");
      const file = pathSegments.pop();

      console.log(`Parsing ${file}`);

      try {
        const doc = yaml.safeLoad(fs.readFileSync(result, 'utf8'));

        pathSegments.push(file.split(".")[0]);

        let tmpObj = recurse(pathSegments.join("."), {
          path: pathSegments.join("/"),
          file: file,
          parsed: doc
        });
        
        // deep merge the new object with the existing
        segmentData = merge(segmentData, tmpObj);

      } catch (e) {
        console.log(e);
      }
    });

    console.log(segmentData);

    fs.writeFileSync(`${BUILD_FOLDER}/${segment}.json`, JSON.stringify(segmentData, null, 2));
  });
});

function recurse(str, obj) {
  const tmp = str.split(".");
  return {
    [tmp[0]]: tmp.length > 1 ? recurse(tmp.slice(1).join("."), obj) : obj
  }
}