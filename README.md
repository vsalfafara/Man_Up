# Man Up

This repository is used for [hANGAThon 2019 (The Philippines: Debugged)](https://angat.io/hangathons/the-philippines-debugged/?fbclid=IwAR0cuQtkk6yKLEZ0VpqJX3Cyyq3-HOnxKDELq12CNnxHrZbqWC-mb5qfIOQ) hosted by [AngatTech](https://angat.io/)

## CasualDoc

CasualDoc is a Heatlhcare-themed mobile application developed from the idea of booking a casual or official checkup with a selected medical specialist (e.g. Therapist, Pulmonologist) in a more affordable fee.

## Getting Started

Before running both server and mobile endpoints, you need the following setup in your machine:

* [NodeJS](https://nodejs.org/en/)
* [MongoDB Server](https://www.mongodb.com/what-is-mongodb)

After installing NodJS and MongoDB Server, clone this repository. Create a folder called data in the root directory of the disk you cloned this repository in. Inside the folder, create another one called db. This is a requirement for MongoDB server to start.

Once done, open a terminal and execute the following command (make sure this command is available in the Environment Variables):
```
mongod
```

Create a database called ```casualdoc```.

If you would like to have a GUI for MongoDB  for managing MongoDB databases, consider downloading [MongoDB Compass](https://www.mongodb.com/products/compass).

### Server

Inside the server folder, create a file called ```.env``` and save the file with the following content:
```
DB_HOST = mongodb://localhost:27017/casualdoc
```

Next, on the terminal in the same directory, run the following command to install server dependencies:
```
npm install
```
To run the server, run the following command:
```
nest start -w
```

### Mobile

Inside the mobile folder, run the following command to install mobile dependencies:
```
npm install
```
To run the mobile application on the browser with mobile functionality, run the following command:
```
ionic cordova run browser
```

## Built With

* [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
* [MongoDB](https://www.mongodb.com/) - A general purpose, document-based, distributed database built for modern application developers and for the cloud era.
* [Ionic](https://ionicframework.com/) - A free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.

## Authors

* **Von Alfafara** - *Fullstack Developer* - [vsalfafara](https://github.com/vsalfafara)
* **Allen Baldovino** - *DevOps* - [spacejam101](https://github.com/spacejam101)
* **Miguel Mayor** - *AWS Engineer* - [msmayor](https://github.com/msmayor)

## Acknowledgments

* Allen and Miguel for sharing most of the idea used for this app
* Von for materializing the idea into an app
* Huge ammount of free time
* etc

