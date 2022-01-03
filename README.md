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
- [noSQL](https://www.oracle.com/database/technologies/nosql-database-server-downloads.html)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=1217adtest_pmcopy_control&utm_source=google&utm_campaign=gs_americas_united_states_search_core_brand_atlas_desktop&utm_term=download%20mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624338&adgroup=115749704063&gclid=Cj0KCQiA2sqOBhCGARIsAPuPK0jp-B9G6F9l2PwAga0RErKx_Q-YNdSlK_TWZU5LziBrn-KmrFXjPncaAvXIEALw_wcB)
- [Mongoose](https://www.npmjs.com/package/mongoose)

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
