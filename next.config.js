const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
  env: {
    LOCAL_STORAGE_MYBEST: "MATCHCARD_MYBEST"
  }
});
