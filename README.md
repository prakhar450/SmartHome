# Readme.md

The web console allows a user to register themselves, add new devices, control actions on them and delete devices. 

## Installation

To use the project one has to install npm and MongoDB.
```bash
brew update
brew install node
```
To install Mongodb, please visit https://www.mongodb.com

## Usage

Clone the repository in your local folder. Start an instance of mongod in a separate terminal:
```
mongod
```
To start the app run the following commands in a terminal:
```
npm install
node app.js
```
Now the user has to register themselves and login to the console. The user can add devices, list all devices, remove devices and perform action on devices.
## Testing
To run tests, run the following command on a terminal:
```
npm run test
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.