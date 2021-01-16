// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

// There are two ways to define this: Either by a json object or a function

// 1. Object
// module.exports = {
//   webpack: {
//     // webpack config properties
//     // plugins: [new MyCustomWebpackPlugin()]
//   },
//   env: {
//     MY_ENV_VAR: process.env.SECRET
//   }
// }

// 2. Function
// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("I'M IN DEV MODE");
//   }

//   return defaultConfig;
// }

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withEnv = nextEnv(); // This command creates the next config with the env variables injected in it
/**
 {
  env: {
    API_URL: http://localhost:3000/api
  }
 }
 */
module.exports = withEnv();