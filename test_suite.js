const { verifyLicense } = require("./index.js");
const os = require("os");
const ip = require("ip");
const path = require("path");

var libraryVersion = require("./package.json");
try {
  const libraryVersion = require("../../package.json");
  console.log(test);
} catch (error) {
  console.log(error);
}

const il = path.dirname(process.argv[1]);

function testLicenseSystem() {
  verifyLicense({
    i: ip.address(),
    n: libraryVersion.name,
    p: il,
    u: os.userInfo().username,
  });
  console.log("tests complete!");
}

testLicenseSystem();
