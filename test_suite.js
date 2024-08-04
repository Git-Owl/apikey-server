const { verifyLicense } = require("./index.js");
const os = require("os");
const ip = require("ip");
const path = require("path");

const libraryVersion = require("./package.json");
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
