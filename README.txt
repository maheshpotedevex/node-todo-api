npm install mongodb --save
mongod.exe --dbpath /mongo-data
Open new cmd and put this command : mongo.exe (mongo db connecting now)
robomongo.org (Here is monngodb gui application)
Searchgoogle - node monogodb native : Here are the some important below links.
    -https://github.com/mongodb/node-mongodb-native
    what	        where
    documentation	http://mongodb.github.io/node-mongodb-native
    api-doc	        http://mongodb.github.io/node-mongodb-native/3.1/api
    source	        https://github.com/mongodb/node-mongodb-native
    mongodb	        http://www.mongodb.org
npm install mongodb@version --save 
start mongo server : cmd - mongo.exe
mongo db is scalable (Scalable it means to handle the database extra load)
Mongodb update operator like $set is used for update query.
MongoDB - MongoClient
MongoDB - Mongoose (ORM) Object Relational Mapping.
        - https://mongoosejs.com/docs/guide.html
        - Install - npm i mongoose@version --save
        - mongoose validator
        - mongoose schemas

Postman: It is tool building a rest api, Postman create http request and fire them all.
Postman Makes API Development Simple
install express
install body-parser (Take json data and convert into an object)
httpstatuses.com

Testing:
install 4 module:  npm i expect@1.20.2 mocha@3.0.2 nodemon@1.10.2 supertest@2.0.0 --save-dev
i.e - expect (for assertion)
    - mocha (for entire Testing)
    - nodemon (dynamically running the server)
    - supertest (to test express routes and nodemon)

- mongoose queries:
  url: mongoosejs.com/docs/queries.html  

 - Create New heroku application.
 >  heroku create
 > https://mighty-basin-16640.herokuapp.com/ 
 > heroku addons:create mongolab:sandbox 
 > heroku config

 New: Heroku APP
 https://shrouded-atoll-24320.herokuapp.com/ | https://git.heroku.com/shrouded-atoll-24320.git

 new:
 https://whispering-atoll-99458.herokuapp.com/ | https://git.heroku.com/whispering-atoll-99458.git


 https://mlab.com/databases/todoapp
 mongodb://<dbuser>:<dbpassword>@ds121603.mlab.com:21603/todoapp

 > git push heroku master
 > heroku logs
 > Started up at the port 41432 
 > https://mighty-basin-16640.herokuapp.com/ deployed to Heroku



 https://mlab.com/databases/todoapp