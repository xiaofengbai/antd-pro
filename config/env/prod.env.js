module.exports = Object.assign(process.env, {
  NODE_ENV: JSON.stringify("production"),
  ASSET_PREFIX: JSON.stringify("http://47.105.138.95:3002/static"),
});
