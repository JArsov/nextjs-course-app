# Next.js Notes app

Notes app built with Next.js. You can check the deployed version of the app on the following [link](https://nextjs-course-app-theta.vercel.app/ "Next.js Notes app").

## Local development
To run the app locally, follow the steps below:
1. Clone this repository
2. Run 'yarn' in the root directory in order to install the packages required
3. Create a '.env' file in the root directory with the following content:
```
// .env
API_URL=http://localhost:PORT/api
```
  + PORT should be replaced with the value for the PORT on which the app is running
  (3000 by default, so the above will be API_URL=http://localhost:3000/api)
4. Run 'yarn dev' to start both the api and the application

The api uses in-memory database, so notes are automatically created on each run.
