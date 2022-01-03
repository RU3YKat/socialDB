# SocialDB API

[Walkthrough Video on Insomnia](https://drive.google.com/file/d/1H-LF0WUhyX4z00SVr_Vnvv3R1s3VtOQh/view?usp=drivesdk)

## Description

A database for storing and retrieving a social media website's information.

SocialDB is an API with CRUD routes for users, their thoughts, other user's reactions, and linking user's friends.

## Table of Contents

- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## [Technology](#technology)

- [node.js](https://nodejs.dev/)
- [noSQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)
- [MongoDB](https://expressjs.com/)
- [MongoDB Atlas](https://www.npmjs.com/package/express-session)
- [Mongoose](https://www.npmjs.com/package/connect-session-sequelize)

## [Installation](#installation)

To use SocialDB, clone the repository [on Github](https://github.com/RU3YKat/socialDB) to your local machine.

Run ``npm install` from your command line to install dependencies.

Run your local SocialDB by executing `npm start` from the command line.

## [Usage](#usage)

CRUD routes are as follows:

1. `/api/users`

   - GET all Users
   - POST create new User
     ```
     {
     "username": <username>,
     "email": <user's email>
     }
     ```

2. `/api/users/:id`

   - GET User by Id
   - PUT update User by Id
   - DELETE User by Id

3. `/api/users/:userId/friends`

   - POST add Friend by User Id

4. `/api/users/:userId/friends/:friendId`

   - DELETE remove Friend by User Id and chosen Friend Id

5. `/api/thoughts`

   - GET all Thoughts
   - POST new Thought
      ```
      {
      "thoughtText": <user's thought>,
      "username": <associated username>,
      "userId": <associated user's id>
      }
      ```

6. `/api/thoughts/:id`

   - GET Thought by Id
   - PUT update Thought by Id
   - DELETE Thought by Id

7. `/api/thoughts/:thoughtId/reactions`

   - POST create new Reaction
      ```
      {
      "reactionBody": <user's reaction text>,
      "username": <username posting reaction>
      }
      ```

8. `/api/thoughts/:thoughtId/reactions/:reactionId`

   - DELETE remove Reaction by Id      
   

## [License](#license)

This project was created using MIT license.

## [Contributing](#contributing)

This is an open source project.

## [Testing](#testing)

To test the program, please follow above Installation guide.

## [Questions](#questions)

This program was created by:<br>

[Kat Redondo as ru3ykat on GitHub](https://github.com/RU3YKat)

[Kat Redondo Email](mailto:ru3ykat@gmail.com)
