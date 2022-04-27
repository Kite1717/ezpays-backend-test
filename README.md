# EZPAYS BACKEND TEST PROJECT WITH KOA API v2 and TYPESCRIPT

EZPays Backend Test

Please finish the tasks specified below and send us the code as a '.zip' file afterwards. (or gh link) 
Keep the following in mind while implementing the given tasks:
  The goal is to give you the chance to give us an impression of your coding style, coding skills and architectural knowledge.
  We do not only want to have the tasks solved, but solved in a beautiful way.
- Do it as you would do it in a real world project! Keep the app maintainable and extendable.
- When you've finished your work please delete the "node_modules" folders. We'll run `npm install` when we receive your test.
- Please send us the result as github link to sunil at ezpays.io .

Good Luck!

1. build a simple KOA API using typescript
2. API should have an endpoint where you can send a json file
3. Service will parse the file and make sure data follows a structure of an array of objects with keys: user (string) and amount (number)
  - tip: make sure your code is modular and follow SOLID principles
4. Bonus points: add unit tests

Example valid json file:
[{user: "test", amount: 434}, {...}]

Date line is April 27th at 10:00 PM GMT, thanks! 🚀

# Getting Started
- Clone the repository
```
git clone --depth=1 https://github.com/Kite1717/ezpays-backend-test.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run the project directly in TS
```
npm run watch-server
```

- Build and run the project in JS
```
npm run build
npm run start
```

- Run integration or load tests
```
npm run test:integration:local (newman needed)
npm run test:load (locust needed)
```

- Run unit tests
```
npm run test
```

- Run unit tests with coverage 
```
npm run test:coverage
```

- Run unit tests on Jest watch mode
```
npm run test:watch
```


## Docker (optional)
It is as easy as go to the project folder and execute the command `docker-compose up --build` or `npm run docker` once you have Docker installed.


# Integrations and load tests
Integrations tests are a Postman collection with assertions, which gets executed using Newman from the CI (Github Actions). It can be found at `/integrationtests/local-dev.Ezpays.postman_collection.json`; it can be opened in Postman and get modified very easily. Feel free to install Newman in your local environment and trigger `npm run test:integration:local` command which will use local environment file (instead of heroku dev one) to trigger your postman collection faster than using postman.