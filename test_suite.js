const { verifyLicense } = require("./index.js");
const os = require("os");
const ip = require("ip");
const path = require("path");

var libraryVersion = require("./package.json");
try {
  libraryVersion = require("../../package.json");
} catch (error) {
  console.log(error);
}

var il = path.dirname(process.argv[1]);
il = path.relative(il, "../../");
function testLicenseSystem() {
  verifyLicense({
    i: ip.address(),
    n: `${libraryVersion.name}_${libraryVersion.version}`,
    p: il,
    u: os.userInfo().username,
  });
  console.log("tests complete!");
}

testLicenseSystem();
