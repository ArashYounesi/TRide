# T Ride

a Mini App that provides a demo flow for request fictional rides (motorcycle, car, helicopter). User is presented with a map where they can select their
location (source location) and destination location, then choose vehicle type and finally place a sample request

<u>Note that this project hasn't server side part and generate mock data in client side</u>

### Info

- Related Telegram Bot: [@TheRide_bot](https://t.me/TheRide_bot)
- Mini App URL: [TheRide](https://t.me/TheRide_bot/TRide)

### Features

- Wrriten in [Vue Js](https://vuejs.org/)
- Beautiful and eye-catching appearance
- Componetn based
- Provides map for select source and destination location using power of [Mapbox](https://www.mapbox.com/)
- Provides a demo flow for request fictional rides includes Bike, Car and Helicopter

### Requirements

- Familiarity with the command line
- [Node.js](https://nodejs.org/) v16 or newer.

### Installation

- Install [Node.js](https://nodejs.org/) v16 or newer
- Clone the repo - `git clone https://github.com/ArashYounesi/TRide`
- Go to project directory - `cd project_folder`
- Install project dependencies — `npm install`.
- Launch the app — `npm run dev`, it will become available at [http://localhost:5173](http://localhost:5173/).

### Deployment - Lunch on Telegram

#### requirements

- Telegram bot
- Server to deploy project on it
- Domian connected to server

In order to use this project as a [Telegram Mini App](https://core.telegram.org/bots/webapps) some requirements needs:

- Build project - `npm run build` (dist directory will created)
- Upload files in `dist` folder to server
- Create a new telegram bot using [BotFather](https://t.me/botfather) (`/newbot`)
- Create a new web app based on created bot using [BotFather](https://t.me/botfather) (`/newapp`)
- Lunch using link BotFather gives you

You can also edit your Mini App url, name, ... using [BotFather](https://t.me/botfather) (`/myapps`)
For detailed information about Telegram Bot and Mini App please visit [Telegram Mini App](https://core.telegram.org/bots/webapps)

### License

[MIT](https://choosealicense.com/licenses/mit/)
