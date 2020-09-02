const { SERVER_ENV } = process.env;
const devConfig = require("./env/dev.env");
const prodConfig = require("./env/prod.env");
module.exports = {
  imgUrl:
    SERVER_ENV === "production"
      ? prodConfig.ASSET_PREFIX
      : devConfig.ASSET_PREFIX,
};
